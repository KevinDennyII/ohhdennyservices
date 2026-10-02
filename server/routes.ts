import type { Express, Request, Response, NextFunction } from "express";
import type { Server } from "http";
import { api } from "@shared/routes";
import { SITE_URL } from "@shared/site";
import { applySecurityHeaders } from "./security";
import { processContactSubmission } from "@shared/process-contact";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

function pruneExpiredRateLimits(now: number) {
  rateLimitMap.forEach((entry, ip) => {
    if (now > entry.resetAt) {
      rateLimitMap.delete(ip);
    }
  });
}

function rateLimit(req: Request, res: Response, next: NextFunction) {
  const now = Date.now();
  pruneExpiredRateLimits(now);

  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return next();
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return res
      .status(429)
      .json({ message: "Too many requests. Please try again later." });
  }

  return next();
}

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.use(applySecurityHeaders);

  app.get("/robots.txt", (_req, res) => {
    res
      .type("text/plain")
      .send(`User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  });

  app.get("/sitemap.xml", (_req, res) => {
    const pages = [
      { loc: "/", priority: "1.0", changefreq: "weekly" },
      { loc: "/about", priority: "0.8", changefreq: "monthly" },
      { loc: "/services", priority: "0.9", changefreq: "monthly" },
      { loc: "/portfolio", priority: "0.9", changefreq: "monthly" },
      { loc: "/pricing", priority: "0.9", changefreq: "monthly" },
      { loc: "/contact", priority: "0.7", changefreq: "monthly" },
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

    res.type("application/xml").send(xml);
  });

  app.post(api.contact.create.path, rateLimit, async (req, res) => {
    const result = await processContactSubmission(req.body, {
      ip: req.ip || req.socket.remoteAddress,
    });
    res.status(result.status).json(result.body);
  });

  return httpServer;
}
