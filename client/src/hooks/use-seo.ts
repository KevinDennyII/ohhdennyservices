import { useEffect } from "react";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@shared/site";

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

export function useSEO({ title, description, path }: SEOProps) {
  useEffect(() => {
    const fullTitle = path === "/"
      ? `${SITE_NAME} — ${SITE_TAGLINE}`
      : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", `${SITE_URL}${path}`);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) {
      canonical.setAttribute("href", `${SITE_URL}${path}`);
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_title: fullTitle,
        page_location: `${SITE_URL}${path}`,
        page_path: path,
      });
    }
  }, [title, description, path]);
}
