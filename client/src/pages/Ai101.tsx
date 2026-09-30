import type { AnchorHTMLAttributes, ReactNode } from "react";
import {
  BookOpen,
  Bot,
  Brain,
  Building2,
  Compass,
  ExternalLink,
  EyeOff,
  Flame,
  HelpCircle,
  Lightbulb,
  MessageCircle,
  Newspaper,
  Podcast,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { useSEO } from "@/hooks/use-seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const AXIOS_ARTICLE =
  "https://www.axios.com/2026/09/26/ai-explainer-for-normal-people";
const AXIOS_NOTE =
  "https://www.axios.com/2026/01/23/ai-jim-vandehei-letter-kids";
const AXIOS_HF_HACK =
  "https://www.axios.com/2026/09/04/ai-dangers-risks-superintelligence";
const AXIOS_AM = "https://www.axios.com/signup/am-pm";
const AXIOS_MEDIA_DIET =
  "https://www.axios.com/2026/05/18/jim-vandehei-axios-media-diet-reading-list";
const THE_ALGORITHM =
  "https://forms.technologyreview.com/newsletters/ai-demystified-the-algorithm/";
const PLATFORMER = "https://www.platformer.news/";
const PLAIN_ENGLISH =
  "https://www.theringer.com/podcasts/plain-english-with-derek-thompson";

/** Soft spring — Comeau: springs shine on motion (transform), not color/opacity alone */
const softSpring = { type: "spring" as const, stiffness: 280, damping: 22 };
const snappySpring = { type: "spring" as const, stiffness: 420, damping: 28 };

/** Playful soft-pastel chips — varied hues, still readable on white */
const ICON_COLORS = {
  sky: "bg-sky-100 text-sky-600 ring-sky-200/80",
  teal: "bg-teal-100 text-teal-600 ring-teal-200/80",
  amber: "bg-amber-100 text-amber-600 ring-amber-200/80",
  rose: "bg-rose-100 text-rose-600 ring-rose-200/80",
  violet: "bg-violet-100 text-violet-600 ring-violet-200/80",
  lime: "bg-lime-100 text-lime-700 ring-lime-200/80",
  orange: "bg-orange-100 text-orange-600 ring-orange-200/80",
  cyan: "bg-cyan-100 text-cyan-600 ring-cyan-200/80",
  fuchsia: "bg-fuchsia-100 text-fuchsia-600 ring-fuchsia-200/80",
  indigo: "bg-indigo-100 text-indigo-600 ring-indigo-200/80",
  emerald: "bg-emerald-100 text-emerald-600 ring-emerald-200/80",
  blue: "bg-blue-100 text-blue-600 ring-blue-200/80",
} as const;

type IconColor = keyof typeof ICON_COLORS;

const GLOSSARY: {
  term: string;
  plain: string;
  Icon: LucideIcon;
  color: IconColor;
}[] = [
  {
    term: "LLM",
    plain:
      "Large language model — the engine that learns to read, write, reason, and create.",
    Icon: Brain,
    color: "violet",
  },
  {
    term: "Agent",
    plain:
      "AI that takes action, not just answers. It can research, compare, and book the trip — not only describe it.",
    Icon: Bot,
    color: "teal",
  },
  {
    term: "Hallucination",
    plain:
      "When AI makes stuff up. Still happens. Getting better, but verify important facts.",
    Icon: EyeOff,
    color: "rose",
  },
  {
    term: "Swarm",
    plain:
      "A team of agents with different skills working on one goal. They don't get tired.",
    Icon: Users,
    color: "orange",
  },
  {
    term: "Alignment",
    plain:
      "Whether AI actually follows human orders and intent — not just sounds helpful.",
    Icon: Target,
    color: "emerald",
  },
  {
    term: "RSI",
    plain:
      "Recursive self-improvement — AI teaching / training the next generation of AI.",
    Icon: Workflow,
    color: "cyan",
  },
  {
    term: "AGI",
    plain:
      "Artificial general intelligence — AI that can do basically any intellectual task a human can.",
    Icon: Sparkles,
    color: "fuchsia",
  },
  {
    term: "The Singularity",
    plain:
      "The hypothetical moment when AI progress moves so fast we can no longer predict or control what comes next.",
    Icon: Rocket,
    color: "amber",
  },
  {
    term: "Frontier lab",
    plain:
      "Top AI companies racing ahead: Anthropic, OpenAI, Google, Meta, and xAI.",
    Icon: Building2,
    color: "indigo",
  },
];

const FAQ_SECTIONS: {
  id: string;
  title: string;
  Icon: LucideIcon;
  color: IconColor;
  items: {
    q: string;
    a: string;
    link?: { href: string; label: string };
  }[];
}[] = [
  {
    id: "basics",
    title: "The basics",
    Icon: Lightbulb,
    color: "amber",
    items: [
      {
        q: "What is AI, in plain English?",
        a: "Computers doing things that usually need a human brain: reading, writing, reasoning, and creating.",
      },
      {
        q: "What's an LLM — and is ChatGPT one?",
        a: "An LLM is the engine. ChatGPT, Claude, and Gemini are the consumer products you talk to — each powered by its company's LLM. You don't need to sweat the distinction day to day.",
      },
      {
        q: "How does it work?",
        a: "Roughly: it trains on huge amounts of text (internet and more), then gets post-trained by humans — and increasingly by AI itself — to behave more like us. That first step teaches imitation of writing. The second step teaches conversational behavior.",
      },
      {
        q: "So… it thinks like us?",
        a: "No. It imitates how we write. Sounding human is not the same as thinking like a human.",
      },
    ],
  },
  {
    id: "mystery",
    title: "The big mystery",
    Icon: HelpCircle,
    color: "violet",
    items: [
      {
        q: "Do we fully understand these machines?",
        a: "Scientists know how to build and train them. Nobody can fully explain why a model produces a specific answer. We built something we don't fully understand — and the people building it say the same.",
      },
      {
        q: "Why race ahead if we don't fully get it?",
        a: 'ChatGPT\'s 2022 launch kicked off a sprint. U.S. leaders also worry about losing an AI race with China — so it\'s been mostly "all gas, no brakes," with serious public debate catching up late.',
      },
      {
        q: "What's a frontier lab?",
        a: "Shorthand for the top AI companies pouring billions into more advanced systems: Anthropic, OpenAI, Google, Meta, and xAI.",
      },
    ],
  },
  {
    id: "agents",
    title: "Chatbots vs agents",
    Icon: Wand2,
    color: "fuchsia",
    items: [
      {
        q: "What's the difference?",
        a: "Ask a chatbot to plan a trip and it tells you how. An agent can research flights, compare hotels, check your calendar, and book it. Chatbots talk. Agents do.",
      },
      {
        q: "Why trust agents if AI still gets things wrong?",
        a: "Fair concern. Models still hallucinate (make things up). They're improving fast — but casual users and power users live in totally different worlds. Getting wow results usually means feeding context, correcting outputs, and coaching agents over time.",
      },
      {
        q: "What are agent swarms?",
        a: "Multiple agents with different skills working together on one objective. They don't tire. That power is also why some builders get nervous: when agents collaborate, odd behavior can show up — including hiding work or gaming a task.",
      },
    ],
  },
  {
    id: "risks",
    title: "Risks, alignment & the upside",
    Icon: ShieldCheck,
    color: "emerald",
    items: [
      {
        q: 'What does "alignment" mean?',
        a: "That AI follows human orders and intent. Builders worry we're not there yet. Incidents in private testing — like the Hugging Face case Axios covered, where OpenAI agents worked together in unintended ways during a benchmark — are why the word keeps coming up.",
        link: {
          href: AXIOS_HF_HACK,
          label: "Read Axios on the Hugging Face incident",
        },
      },
      {
        q: "Should I worry about rogue AI today?",
        a: "Probably not today — but nobody knows for sure. Another concern: recursive self-improvement (RSI), or AI helping train the next AI. If that ramps up while we still don't fully understand the insides, surprises get scarier.",
      },
      {
        q: "Is there a hopeful ending?",
        a: "Absolutely possible. Optimists point to curing disease, better education and health care, and huge economic gains — especially if teams of agents stay properly aligned. Terms like AGI and The Singularity are shorthand for that leap toward broad, human-level capability (there's no official \"we've arrived\" test).",
      },
      {
        q: "What can I actually do?",
        a: "Learn it. Use it for your job and passions — don't protest by ignoring it. Then push business and government to manage it responsibly. Jim VandeHei's personal note is a deeper companion to this primer.",
        link: {
          href: AXIOS_NOTE,
          label: "Read Jim's note on navigating this moment",
        },
      },
    ],
  },
];

const LEARN_LINKS: {
  name: string;
  blurb: string;
  href: string;
  Icon: LucideIcon;
  color: IconColor;
}[] = [
  {
    name: "Axios",
    blurb:
      "Deep sourcing inside AI companies and the White House — plus real-time testing. Start with Mike Allen's Axios AM and don't skip the AI items.",
    href: AXIOS_AM,
    Icon: Newspaper,
    color: "sky",
  },
  {
    name: "MIT Technology Review — The Algorithm",
    blurb:
      'Weekly AI "demystified" — smart, big-picture pieces instead of a firehose.',
    href: THE_ALGORITHM,
    Icon: BookOpen,
    color: "indigo",
  },
  {
    name: "Platformer",
    blurb:
      "Casey Newton digs into Silicon Valley and the people shaping AI in a digestible way.",
    href: PLATFORMER,
    Icon: Compass,
    color: "teal",
  },
  {
    name: "Plain English with Derek Thompson",
    blurb:
      "Not always about AI — but sharp and balanced on the bigger trends when it is.",
    href: PLAIN_ENGLISH,
    Icon: Podcast,
    color: "orange",
  },
  {
    name: "X (for the daily flow)",
    blurb:
      "This moves fast. Jim compiled a shorter follow list so you're not drinking from a firehose — his media-diet piece is a great starting map.",
    href: AXIOS_MEDIA_DIET,
    Icon: Flame,
    color: "rose",
  },
];

function OutLink({
  href,
  children,
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}

function SectionReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={softSpring}
    >
      {children}
    </motion.div>
  );
}

function IconBubble({
  Icon,
  className,
  color = "sky",
  size = "md",
  tilt = -6,
}: {
  Icon: LucideIcon;
  className?: string;
  color?: IconColor;
  size?: "sm" | "md" | "lg";
  tilt?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const sizeClass =
    size === "lg"
      ? "h-16 w-16 rounded-2xl"
      : size === "sm"
        ? "h-9 w-9 rounded-lg"
        : "h-11 w-11 rounded-2xl";
  const iconSize =
    size === "lg" ? "h-8 w-8" : size === "sm" ? "h-[18px] w-[18px]" : "h-5 w-5";

  return (
    <motion.span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        "ring-2 shadow-sm",
        sizeClass,
        ICON_COLORS[color],
        className,
      )}
      style={{ rotate: prefersReducedMotion ? 0 : tilt }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : { scale: 1.12, rotate: tilt * -1.2, y: -2 }
      }
      whileTap={prefersReducedMotion ? undefined : { scale: 0.92, rotate: 0 }}
      transition={snappySpring}
      aria-hidden
    >
      <span
        className="pointer-events-none absolute -right-1 -top-1 h-2.5 w-2.5
          rounded-full bg-white/90 shadow-sm ring-1 ring-black/5"
      />
      <Icon className={iconSize} strokeWidth={2.4} />
    </motion.span>
  );
}

function HeroSparkle() {
  const prefersReducedMotion = useReducedMotion();
  const shell = (
    <span
      className={cn(
        "relative mx-auto mb-6 flex h-16 w-16 items-center justify-center",
        "rounded-2xl ring-2 shadow-md",
        ICON_COLORS.fuchsia,
      )}
      aria-hidden
    >
      <span
        className="pointer-events-none absolute -left-1.5 top-2 h-3 w-3
          rounded-full bg-amber-300 shadow-sm"
      />
      <span
        className="pointer-events-none absolute -right-1 bottom-2 h-2.5 w-2.5
          rounded-full bg-sky-300 shadow-sm"
      />
      <Sparkles className="h-8 w-8" strokeWidth={2.4} />
    </span>
  );

  if (prefersReducedMotion) {
    return shell;
  }

  return (
    <motion.span
      className="mx-auto mb-6 inline-flex"
      animate={{
        y: [0, -8, 0],
        rotate: [0, 5, -4, 0],
      }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {shell}
    </motion.span>
  );
}

const glossaryListVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const glossaryItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: softSpring },
};

export default function Ai101() {
  const prefersReducedMotion = useReducedMotion();

  useSEO({
    title: "AI 101",
    description:
      "A fun, plain-English AI explainer for anyone — based on Axios CEO Jim VandeHei's AI 101 guide, with credit and links back to Axios.",
    path: "/ai-101",
  });

  return (
    <PageTransition>
      <div className="relative overflow-hidden pt-32 pb-16 bg-slate-50 border-b">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(214 95% 93% / 0.9), transparent 45%), radial-gradient(circle at 85% 10%, hsl(215 89% 36% / 0.08), transparent 40%)",
          }}
        />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <HeroSparkle />
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Friendly tech explainer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            AI 101 — without the weird jargon
          </h1>
          <p className="text-lg text-muted-foreground text-balance mb-8">
            Confused about AI? You're in good company. Here's a plain-English
            tour of what it is, how people use it, and why the buzz (and the
            worries) got so loud.
          </p>

          <motion.div
            className="rounded-xl border border-border/60 bg-white p-5 text-left
              shadow-sm"
            data-testid="axios-credit"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={softSpring}
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              This page is an OhhDenny Services digest inspired by{" "}
              <OutLink
                href={AXIOS_ARTICLE}
                className="font-semibold text-primary hover:underline inline-flex
                  items-center gap-1"
              >
                AI 101: Explaining AI to anyone
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </OutLink>{" "}
              by Jim VandeHei at Axios (Sep 26, 2026). We summarize the ideas for
              easier scanning — for the full original piece and Axios reporting,
              follow their links below.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionReveal className="text-center mb-10">
            <div className="mb-4 flex justify-center">
              <IconBubble Icon={BookOpen} color="indigo" tilt={-8} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Weird words, decoded
            </h2>
            <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
              LLMs, swarms, RSI… the vocabulary is half the confusion. Tap a
              term.
            </p>
          </SectionReveal>

          <motion.div
            variants={prefersReducedMotion ? undefined : glossaryListVariants}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.15 }}
          >
            <Accordion type="multiple" className="w-full">
              {GLOSSARY.map((item, index) => (
                <motion.div
                  key={item.term}
                  variants={prefersReducedMotion ? undefined : glossaryItemVariants}
                >
                  <AccordionItem value={item.term}>
                    <AccordionTrigger
                      className="text-left text-base font-semibold gap-3"
                      data-testid={`glossary-${item.term.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <span className="flex items-center gap-3">
                        <IconBubble
                          Icon={item.Icon}
                          color={item.color}
                          size="sm"
                          tilt={index % 2 === 0 ? -8 : 8}
                        />
                        {item.term}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pl-12">
                      {item.plain}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionReveal className="text-center mb-12">
            <div className="mb-4 flex justify-center">
              <IconBubble Icon={Wand2} color="fuchsia" tilt={7} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Chatbot vs agent (in one glance)
            </h2>
            <p className="text-muted-foreground">
              Same family of tech. Very different jobs.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="rounded-2xl border border-border/50 bg-white p-8"
              data-testid="card-chatbot"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -6, transition: { duration: 0.15, ease: "easeOut" } }
              }
              // Action-driven: quick lift in, slower settle out (Comeau / Ahlin)
              transition={{ duration: 0.35, ease: "easeIn" }}
            >
              <IconBubble
                Icon={MessageCircle}
                color="sky"
                className="mb-4"
                tilt={-7}
              />
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Chatbot
              </p>
              <h3 className="text-xl font-bold mb-3">Talks it through</h3>
              <p className="text-muted-foreground leading-relaxed">
                You ask how to plan a trip. It suggests flights, hotels, and a
                packing list. Helpful — still mostly a conversation.
              </p>
            </motion.div>
            <motion.div
              className="rounded-2xl border border-primary/20 bg-primary/5 p-8"
              data-testid="card-agent"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -6, transition: { duration: 0.15, ease: "easeOut" } }
              }
              transition={{ duration: 0.35, ease: "easeIn" }}
            >
              <IconBubble
                Icon={Bot}
                color="teal"
                className="mb-4"
                tilt={8}
              />
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Agent
              </p>
              <h3 className="text-xl font-bold mb-3">Gets it done</h3>
              <p className="text-muted-foreground leading-relaxed">
                Same request — but it researches options, checks your calendar,
                and can book. Give clear instructions; it works like a
                tireless assistant.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionReveal className="text-center mb-10">
            <div className="mb-4 flex justify-center">
              <IconBubble Icon={HelpCircle} color="violet" tilt={-5} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ask the questions everyone asks
            </h2>
            <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
              A friendly FAQ path through the same ground Jim covers — open
              what you're curious about.
            </p>
          </SectionReveal>

          <div className="space-y-12">
            {FAQ_SECTIONS.map((section) => (
              <SectionReveal key={section.id}>
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-3">
                  <IconBubble
                    Icon={section.Icon}
                    color={section.color}
                    size="sm"
                    tilt={-6}
                  />
                  {section.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((item, index) => (
                    <AccordionItem
                      key={item.q}
                      value={`${section.id}-${index}`}
                    >
                      <AccordionTrigger
                        className="text-left text-base font-semibold"
                        data-testid={`faq-${section.id}-${index}`}
                      >
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed space-y-3">
                        <p>{item.a}</p>
                        {item.link ? (
                          <OutLink
                            href={item.link.href}
                            className="inline-flex items-center gap-1.5
                              text-primary font-medium hover:underline"
                          >
                            {item.link.label}
                            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                          </OutLink>
                        ) : null}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionReveal className="text-center mb-10">
            <div className="mb-4 flex justify-center">
              <IconBubble Icon={Compass} color="teal" tilt={6} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              5 ways to learn AI
            </h2>
            <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
              Axios's starter kit for staying sharp — links go to the same
              places they recommend.
            </p>
          </SectionReveal>

          <ol className="space-y-4">
            {LEARN_LINKS.map((item, index) => (
              <motion.li
                key={item.name}
                className="rounded-xl border border-border/50 bg-white p-6
                  flex gap-4"
                initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -4,
                        transition: { duration: 0.15, ease: "easeOut" },
                      }
                }
                transition={{
                  ...softSpring,
                  delay: prefersReducedMotion ? 0 : index * 0.06,
                }}
              >
                <IconBubble
                  Icon={item.Icon}
                  color={item.color}
                  tilt={index % 2 === 0 ? -7 : 7}
                />
                <div>
                  <OutLink
                    href={item.href}
                    className="font-semibold text-foreground hover:text-primary
                      inline-flex items-center gap-1.5"
                  >
                    {item.name}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </OutLink>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {item.blurb}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <SectionReveal>
            <div className="mb-4 flex justify-center">
              <IconBubble Icon={Newspaper} color="sky" tilt={-8} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want the full Axios version?
            </h2>
            <p className="text-muted-foreground mb-8 text-balance">
              We kept this short and skim-friendly. Jim's original is the
              complete conversation — and the source this page is based on.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={
                  prefersReducedMotion ? undefined : { scale: 1.03, y: -2 }
                }
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                transition={snappySpring}
              >
                <OutLink
                  href={AXIOS_ARTICLE}
                  className="inline-flex h-12 items-center justify-center gap-2
                    rounded-md bg-primary text-primary-foreground px-8 text-base
                    font-medium shadow transition-colors hover:bg-primary/90"
                  data-testid="link-axios-original"
                >
                  Read on Axios
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </OutLink>
              </motion.div>
              <motion.div
                whileHover={
                  prefersReducedMotion ? undefined : { scale: 1.03, y: -2 }
                }
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                transition={snappySpring}
              >
                <OutLink
                  href={AXIOS_NOTE}
                  className="inline-flex h-12 items-center justify-center gap-2
                    rounded-md border border-border bg-white px-8 text-base
                    font-medium text-foreground shadow-sm transition-colors
                    hover:bg-slate-50"
                  data-testid="link-axios-note"
                >
                  Jim's personal note
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </OutLink>
              </motion.div>
            </div>
            <p className="mt-8 text-xs text-muted-foreground">
              Credit: Jim VandeHei / Axios. Illustration credit in the original:
              Brendan Lynch/Axios. OhhDenny Services is not affiliated with Axios;
              this is a community-friendly summary with attribution.
            </p>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
