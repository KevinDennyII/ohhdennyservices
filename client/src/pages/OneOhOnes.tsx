import { Link } from "wouter";
import { ArrowRight, ExternalLink, Monitor, Sparkles, type LucideIcon } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { useSEO } from "@/hooks/use-seo";

const FIRST_STEPS_URL = "https://firststepscomputerskills.online";

const GUIDES: {
  title: string;
  kicker: string;
  description: string;
  facts: string;
  href: string;
  external: boolean;
  cta: string;
  Icon: LucideIcon;
  testId: string;
}[] = [
  {
    title: "First Steps",
    kicker: "Basic computer skills",
    description:
      "A hands-on course for anyone who was never shown how. Pick Windows or Mac, practice without changing a real setting, and finish with a certificate you can print.",
    facts: "About 95 minutes · Windows and Mac · Free",
    href: FIRST_STEPS_URL,
    external: true,
    cta: "Start the course",
    Icon: Monitor,
    testId: "card-first-steps",
  },
  {
    title: "AI 101",
    kicker: "Artificial intelligence",
    description:
      "A plain-English tour of what AI is, how people use it, and the words — LLM, agent, hallucination — that make it sound harder than it is.",
    facts: "Glossary and FAQ · No account · Free",
    href: "/ai-101",
    external: false,
    cta: "Read AI 101",
    Icon: Sparkles,
    testId: "card-ai-101",
  },
];

function GuideCard({
  title,
  kicker,
  description,
  facts,
  href,
  external,
  cta,
  Icon,
  testId,
}: (typeof GUIDES)[number]) {
  const className =
    "group flex h-full flex-col rounded-2xl border border-border/60 bg-white p-8 text-left shadow-sm transition-colors hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  const body = (
    <>
      <span
        className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
        aria-hidden
      >
        <Icon className="h-6 w-6" />
      </span>
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
        {kicker}
      </p>
      <h2 className="text-2xl font-bold text-foreground mb-3">{title}</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      <p className="text-sm text-muted-foreground mb-8">{facts}</p>
      <span className="mt-auto inline-flex items-center gap-2 font-medium text-primary">
        {cta}
        {external ? (
          <ExternalLink className="h-4 w-4" aria-hidden />
        ) : (
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        )}
        {external ? <span className="sr-only">(opens in a new tab)</span> : null}
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={testId}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={className} data-testid={testId}>
      {body}
    </Link>
  );
}

export default function OneOhOnes() {
  useSEO({
    title: "101s",
    description:
      "Plain-English 101s from OhhDenny Services: a hands-on computer skills course and a friendly AI explainer.",
    path: "/101s",
  });

  return (
    <PageTransition>
      <div className="pt-32 pb-16 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Learn the basics
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            101s
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Short lessons for people who want the basics in plain English.
            Start with the computer in front of you, or with what AI actually
            is.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GUIDES.map((guide) => (
              <GuideCard key={guide.href} {...guide} />
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted-foreground">
            More 101s will land here as we write them.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
