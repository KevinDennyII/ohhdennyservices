import { Link } from "wouter";
import { PageTransition } from "@/components/layout/PageTransition";
import { useSEO } from "@/hooks/use-seo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Brain,
  Sparkles,
  Lightbulb,
  MessageCircle,
  Wrench,
  Rocket,
  Users,
  Network,
} from "lucide-react";
import networkTopology from "@assets/ins_networktopology_proposed3Official-2-e1726727591572_1773274389676.jpg";
import websiteIcon from "@assets/website_1773274389676.png";
import screenshotOperationSolace from "@assets/portfolio/operationsolace.png";
import screenshotAeternaExecutive from "@assets/portfolio/aeternaexecutive.png";
import screenshotWeGotTheLeads from "@assets/portfolio/wegottheleads.png";
import screenshotFireplaceRecords from "@assets/portfolio/fireplacerecordsdc.png";
import screenshotRayvilleEnterprises from "@assets/portfolio/rayvilleenterprises.png";
import screenshotRayvilleProperty from "@assets/portfolio/rayvillepropertymanagement.png";
import screenshotRealHomeLead from "@assets/portfolio/realhomeandlead.png";
import screenshotAbundanceBlueprint from "@assets/portfolio/abundance-blueprint.png";

type WebsiteProject = {
  title: string;
  url: string;
  description: string;
  tags: string[];
  screenshot: string;
};

const liveWebsites: WebsiteProject[] = [
  {
    title: "Operation Solace",
    url: "https://operationsolace.org",
    description:
      "A community-focused nonprofit site built to connect people with support, resources, and a welcoming online presence.",
    tags: ["Nonprofit", "Community"],
    screenshot: screenshotOperationSolace,
  },
  {
    title: "Aeterna Executive",
    url: "https://aeternaexecutive.com",
    description:
      "A polished executive services brand site with a professional look that reflects credibility and trust.",
    tags: ["Business", "Executive"],
    screenshot: screenshotAeternaExecutive,
  },
  {
    title: "We Got The Leads",
    url: "https://www.wegottheleads.com",
    description:
      "A lead-generation focused site designed to capture attention and convert visitors into qualified prospects.",
    tags: ["Marketing", "Lead Gen"],
    screenshot: screenshotWeGotTheLeads,
  },
  {
    title: "Fireplace Records DC",
    url: "https://fireplacerecordsdc.com",
    description:
      "A music label site with personality — built to showcase artists, releases, and the DC music scene.",
    tags: ["Music", "Entertainment"],
    screenshot: screenshotFireplaceRecords,
  },
  {
    title: "Ray-ville Enterprises",
    url: "https://www.rayvilleenterprises.com/",
    description:
      "A central portal connecting property management and inspection services under one trusted brand umbrella.",
    tags: ["Portal", "Real Estate"],
    screenshot: screenshotRayvilleEnterprises,
  },
  {
    title: "Ray-ville Property Management",
    url: "https://www.rayvillepropertymanagement.com/",
    description:
      "Property management services with rental search and a clean, approachable experience for tenants and owners.",
    tags: ["Property", "Rental"],
    screenshot: screenshotRayvilleProperty,
  },
  {
    title: "Real Home & Lead Inspections",
    url: "https://realhomeandlead.com/",
    description:
      "Home and lead inspection services for Baltimore — with online scheduling, clear service info, and licensing details.",
    tags: ["Inspections", "Scheduling"],
    screenshot: screenshotRealHomeLead,
  },
];

const upcomingProject = {
  title: "Abundance Blueprint",
  url: "https://abundance-blueprint-book.replit.app/",
  description:
    "An upcoming book site for La'Toya Ray, CPA — designed to introduce her financial framework and connect readers with her work.",
  tags: ["Upcoming", "Finance", "Author"],
  screenshot: screenshotAbundanceBlueprint,
};

const aiTeachingSteps = [
  {
    icon: Brain,
    emoji: "🧠",
    title: "Think First",
    description:
      "Before typing a single prompt, we learn to ask: What am I actually trying to build? Who is it for?",
    color: "bg-violet-100 text-violet-700 border-violet-200",
  },
  {
    icon: MessageCircle,
    emoji: "💬",
    title: "Ask Better Questions",
    description:
      "AI tools respond to how you think. We practice breaking big ideas into clear, specific requests.",
    color: "bg-sky-100 text-sky-700 border-sky-200",
  },
  {
    icon: Lightbulb,
    emoji: "💡",
    title: "Evaluate the Output",
    description:
      "Does this look right? Does it make sense? Critical thinking means you stay in the driver's seat.",
    color: "bg-amber-100 text-amber-700 border-amber-200",
  },
  {
    icon: Rocket,
    emoji: "🚀",
    title: "Ship Something Real",
    description:
      "From zero experience to a live website or working app — built with Replit, Claude, and confidence.",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
];

function ProjectCard({
  project,
  upcoming = false,
}: {
  project: WebsiteProject | typeof upcomingProject;
  upcoming?: boolean;
}) {
  return (
    <Card
      className="group border border-border/50 shadow-sm overflow-hidden
        hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="relative h-36 overflow-hidden bg-slate-200/60">
        <img
          src={project.screenshot}
          alt={`${project.title} website preview`}
          className="w-full h-full object-contain object-top bg-white
            group-hover:opacity-95 transition-opacity duration-300"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/30
            via-transparent to-transparent pointer-events-none"
        />
        {upcoming && (
          <Badge
            className="absolute top-3 right-3 bg-white/90 text-foreground
              border-0 shadow-sm z-10"
          >
            Coming Soon
          </Badge>
        )}
        <Globe
          className="absolute bottom-3 right-3 h-5 w-5 text-white/80
            drop-shadow-sm group-hover:text-white transition-colors z-10"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          {project.description}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium
            text-primary hover:underline"
          data-testid={`link-project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {upcoming ? "Preview Site" : "Visit Live Site"}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </CardContent>
    </Card>
  );
}

export default function Portfolio() {
  useSEO({
    title: "Our Work",
    description:
      "Explore websites, IT projects, and AI coaching built by OhhDenny Services — from live client sites to empowering non-techies to build with AI.",
    path: "/portfolio",
  });

  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-slate-50 border-b">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center
            max-w-3xl"
        >
          <Badge variant="secondary" className="mb-4">
            Portfolio
          </Badge>
          <h1
            className="text-4xl md:text-5xl font-extrabold text-foreground
              mb-6"
          >
            Work We're Proud Of
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Real websites, real IT solutions, and real people learning to build
            with AI — here's a sample of what we've done for clients and
            communities.
          </p>
        </div>
      </div>

      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "7+", label: "Live Websites" },
              { value: "20+", label: "Years Experience" },
              { value: "100%", label: "Small Business Focus" },
              { value: "∞", label: "Curiosity Encouraged" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={websiteIcon}
                  alt=""
                  className="h-10 w-10"
                  aria-hidden="true"
                />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Website Builds
                </h2>
              </div>
              <p className="text-muted-foreground max-w-xl">
                Clean, functional sites that help businesses show up online and
                get things done. Click through to see them live.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveWebsites.map((site) => (
              <ProjectCard key={site.url} project={site} />
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              On the Horizon
            </h3>
            <div className="max-w-md">
              <ProjectCard project={upcomingProject} upcoming />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <Badge
                className="mb-4 bg-gradient-to-r from-violet-500 to-fuchsia-500
                  text-white border-0"
              >
                AI Coaching
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Teaching Non-Techies to Build with AI
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Not everyone grew up coding — and that's perfectly fine. We teach
                everyday people how to think critically and use AI tools like{" "}
                <span className="font-semibold text-foreground">Replit</span> and{" "}
                <span className="font-semibold text-foreground">Claude</span> to
                bring their ideas to life.
              </p>
            </div>

            <div
              className="relative rounded-3xl bg-white border border-border/50
                p-8 md:p-12 shadow-sm overflow-hidden mb-12"
            >
              <div
                className="absolute -top-20 -right-20 h-64 w-64 rounded-full
                  bg-gradient-to-br from-violet-200/60 to-fuchsia-200/40
                  blur-3xl pointer-events-none"
              />
              <div
                className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full
                  bg-gradient-to-tr from-sky-200/50 to-emerald-200/40 blur-3xl
                  pointer-events-none"
              />

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center
                        rounded-2xl bg-gradient-to-br from-violet-500
                        to-fuchsia-600 text-2xl shadow-lg"
                    >
                      👋
                    </div>
                    <div>
                      <p className="font-bold text-lg">Zero experience?</p>
                      <p className="text-muted-foreground text-sm">
                        Perfect. That's who we love working with.
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    The secret isn't memorizing commands — it's learning how to
                    think about problems, ask the right questions, and evaluate
                    what the AI gives you. We walk alongside folks who'd never
                    consider themselves "tech people" and help them ship real
                    projects.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {["Replit", "Claude", "Critical Thinking", "No Jargon"].map(
                      (tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center gap-1.5
                            rounded-full bg-slate-100 px-4 py-1.5 text-sm
                            font-medium text-foreground border
                            border-border/50"
                        >
                          <Sparkles className="h-3.5 w-3.5 text-violet-500" />
                          {tool}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="relative">
                  <div
                    className="rounded-2xl bg-slate-900 text-slate-100 p-6
                      shadow-xl font-mono text-sm leading-relaxed"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-amber-400" />
                      <div className="h-3 w-3 rounded-full bg-emerald-400" />
                      <span className="ml-2 text-slate-400 text-xs">
                        your first prompt
                      </span>
                    </div>
                    <p className="text-emerald-300 mb-3">
                      <span className="text-slate-500">{">"}</span> "I want a
                      simple page for my bakery with hours, a menu, and a way to
                      call us."
                    </p>
                    <p className="text-slate-400 text-xs mb-4">
                      ✓ Clear goal &nbsp; ✓ Specific sections &nbsp; ✓ Real
                      business need
                    </p>
                    <div
                      className="border-t border-slate-700 pt-4
                        text-slate-300 text-xs"
                    >
                      <span className="text-violet-400">AI responds</span> →
                      You review → You refine →{" "}
                      <span className="text-emerald-400">You ship 🎉</span>
                    </div>
                  </div>

                  <div
                    className="absolute -bottom-4 -right-4 hidden sm:flex
                      h-16 w-16 items-center justify-center rounded-2xl
                      bg-gradient-to-br from-amber-400 to-orange-500 text-3xl
                      shadow-lg rotate-6"
                  >
                    🤖
                  </div>
                  <div
                    className="absolute -top-4 -left-4 hidden sm:flex h-14 w-14
                      items-center justify-center rounded-2xl bg-gradient-to-br
                      from-sky-400 to-blue-500 text-2xl shadow-lg -rotate-6"
                  >
                    ✨
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiTeachingSteps.map((step, i) => (
                <div
                  key={step.title}
                  className={`relative rounded-2xl border p-6 ${step.color}
                    hover:shadow-md transition-shadow`}
                  data-testid={`card-ai-step-${i}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" aria-hidden="true">
                      {step.emoji}
                    </span>
                    <step.icon className="h-5 w-5 opacity-60" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-1">
                    Step {i + 1}
                  </p>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-10 flex flex-col sm:flex-row items-center
                justify-center gap-4 text-center"
            >
              <Users className="h-5 w-5 text-primary hidden sm:block" />
              <p className="text-muted-foreground">
                Interested in learning to build with AI?{" "}
                <Link
                  href="/contact"
                  className="text-primary font-medium hover:underline"
                  data-testid="link-ai-coaching-contact"
                >
                  Let's talk about it
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Wrench className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                IT & Infrastructure
              </h2>
            </div>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Beyond websites, we've been the trusted tech crew for small
              businesses — upgrading networks, securing systems, and keeping
              operations running smoothly.
            </p>

            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center
                bg-slate-50 rounded-3xl border border-border/50 p-8
                md:p-10"
            >
              <div className="space-y-5">
                <Badge variant="secondary">Case Study</Badge>
                <h3 className="text-2xl font-bold">
                  Ideal Nursing Services
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Since 2013, we've served as the IT partner for a nursing
                  services company supporting hundreds of Medicare and Medicaid
                  recipients. From computer upgrades and cyber security training
                  to a full network redesign with wireless access points across
                  multiple floors.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Network Design",
                    "Cyber Security",
                    "Staff Training",
                    "Web Development",
                  ].map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary
                    font-medium hover:underline"
                  data-testid="link-case-study-about"
                >
                  Read the full story <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <Network className="h-4 w-4 text-primary" />
                  Network topology designed for Ideal Nursing Services
                </div>
                <img
                  src={networkTopology}
                  alt="Network topology diagram showing server room, wireless access points, and multi-floor computer layout"
                  className="w-full rounded-xl border border-border/50 shadow-sm"
                  data-testid="img-portfolio-network"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Got a project in mind?
            </h2>
            <p className="text-primary-foreground/80 text-xl mb-10 max-w-2xl mx-auto">
              Whether you need a website, IT support, or want to learn how to
              build with AI — we'd love to hear from you.
            </p>
            <Link
              href="/contact"
              data-testid="link-portfolio-contact"
              className="inline-flex h-12 items-center justify-center
                rounded-md bg-white text-primary px-8 text-base font-medium
                shadow transition-colors hover:bg-slate-100"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
