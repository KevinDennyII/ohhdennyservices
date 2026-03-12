import { PageTransition } from "@/components/layout/PageTransition";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import websiteIcon from "@assets/website_1773274389676.png";
import troubleshootingIcon from "@assets/troubleshooting_1773274389677.png";
import networkIcon from "@assets/network_1773274389678.png";
import diagnosticIcon from "@assets/diagnostic_1773274389676.png";

export default function Pricing() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-slate-50 border-b">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8
            text-center max-w-3xl"
        >
          <h1
            className="text-4xl md:text-5xl font-extrabold
              text-foreground mb-6"
            data-testid="text-pricing-title"
          >
            Pricing
          </h1>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            We don't bill by the hour. Our delivery credit system means you
            pay for completed work, not time spent.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

          <div className="mb-20 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" data-testid="text-how-it-works">
              How It Works
            </h2>
            <p className="text-muted-foreground mb-8 text-balance">
              Whether a task takes 2 hours or 20, the price is the same. This
              aligns our incentives: we're motivated to work efficiently, and
              you get predictable pricing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {[
                { step: "1", text: "Browse our credit tiers and select what fits your needs" },
                { step: "2", text: "We estimate credits required before starting" },
                { step: "3", text: "Work begins once credits are purchased" },
                { step: "4", text: "You're charged only for completed deliverables" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-border/50"
                  data-testid={`card-step-${item.step}`}
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                    {item.step}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center" data-testid="text-credit-tiers">
              Credit Tiers
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Credits are based on complexity, not time. Each tier covers a
              defined scope of work.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  credits: "1 Credit",
                  complexity: "Low",
                  scope: "Quick fixes, minor adjustments",
                  price: "$150",
                  color: "bg-green-50 border-green-200",
                  badge: "text-green-700 bg-green-100",
                },
                {
                  credits: "2 Credits",
                  complexity: "Medium",
                  scope: "Standard tasks, moderate scope",
                  price: "$350",
                  color: "bg-blue-50 border-blue-200",
                  badge: "text-blue-700 bg-blue-100",
                },
                {
                  credits: "4 Credits",
                  complexity: "High",
                  scope: "Complex work, multi-component",
                  price: "$750",
                  color: "bg-orange-50 border-orange-200",
                  badge: "text-orange-700 bg-orange-100",
                },
                {
                  credits: "8 Credits",
                  complexity: "Critical",
                  scope: "Major projects, full implementations",
                  price: "$1,500",
                  color: "bg-purple-50 border-purple-200",
                  badge: "text-purple-700 bg-purple-100",
                },
              ].map((tier, i) => (
                <Card
                  key={i}
                  className={`border ${tier.color} shadow-sm`}
                  data-testid={`card-tier-${i}`}
                >
                  <CardContent className="p-6 text-center">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${tier.badge}`}>
                      {tier.complexity}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {tier.credits}
                    </h3>
                    <p className="text-3xl font-extrabold text-foreground mb-3">
                      {tier.price}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {tier.scope}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 border-b pb-4">
              <img src={websiteIcon} alt="Web Development" className="h-8 w-8 object-contain" />
              <h2 className="text-2xl font-bold text-foreground">
                Web Development
              </h2>
            </div>

            <div className="space-y-6">
              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
                data-testid="card-pricing-custom-website"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Custom Website
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Full website build including discovery, design, development,
                    and modifications. Non-refundable deposit of 50% before
                    start of implementation.
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  24 Credits
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
                data-testid="card-pricing-maintenance"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Website Maintenance/Support
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Ongoing maintenance and support. New development NOT included.
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  1 Credit/mo
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
                data-testid="card-pricing-training"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Website Administration Training
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    I will teach you how to maintain your website. Each
                    session covers up to 4 hours.
                  </p>
                  <p className="text-muted-foreground text-sm mt-2 italic">
                    ...and don't worry you can always contact me for any
                    questions or concerns. I am always happy to help and
                    spread the wealth of knowledge!
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  2 Credits
                </span>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 border-b pb-4">
              <img src={diagnosticIcon} alt="General Consulting" className="h-8 w-8 object-contain" />
              <h2 className="text-2xl font-bold text-foreground">
                General Consulting
              </h2>
            </div>

            <div className="space-y-6">
              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
                data-testid="card-pricing-consulting"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Consulting Sessions
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Per 2-hour block. Covers web hosting, domain services,
                    cyber security awareness, and website development
                    assistance.
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  2 Credits
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
                data-testid="card-pricing-strategic"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Strategic Planning
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Half-day session for in-depth strategic IT planning.
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  4 Credits
                </span>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 border-b pb-4">
              <img src={troubleshootingIcon} alt="Helpful Tech" className="h-8 w-8 object-contain" />
              <h2 className="text-2xl font-bold text-foreground">
                Helpful Tech
              </h2>
            </div>

            <div className="space-y-6">
              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
                data-testid="card-pricing-assessments"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Assessments
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Waived if work proceeds after the assessment.
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-primary shrink-0">
                  1 Credit
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
                data-testid="card-pricing-speed-boost"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Performance Upgrade/Speed Boost
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Per optimization package.
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  2 Credits
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
                data-testid="card-pricing-sw-hw-issues"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Software/Hardware Issues
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Depending on complexity.
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  1–2 Credits
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
                data-testid="card-pricing-sw-hw-install"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Software/Hardware Installation
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Per device or system.
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  2 Credits
                </span>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 border-b pb-4">
              <img src={networkIcon} alt="Networking" className="h-8 w-8 object-contain" />
              <h2 className="text-2xl font-bold text-foreground">
                Networking
              </h2>
            </div>

            <div className="space-y-6">
              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
                data-testid="card-pricing-net-architecting"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Network Architecting
                  </h3>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  1 Credit
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
                data-testid="card-pricing-net-config"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Network Configuration
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Based on scope.
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  1–4 Credits
                </span>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center" data-testid="text-credit-packages">
              Credit Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Starter",
                  credits: "5 Credits",
                  price: "$750",
                  features: [
                    "Great for small fixes and support",
                    "12-month validity",
                    "Quarterly rollover",
                  ],
                },
                {
                  name: "Professional",
                  credits: "10 Credits",
                  price: "$1,400",
                  popular: true,
                  features: [
                    "Ideal for ongoing projects",
                    "12-month validity",
                    "Quarterly rollover",
                    "Priority scheduling",
                  ],
                },
                {
                  name: "Enterprise",
                  credits: "25 Credits",
                  price: "$3,250",
                  features: [
                    "Best value for large projects",
                    "12-month validity",
                    "Quarterly rollover",
                    "Priority scheduling",
                    "Dedicated support",
                  ],
                },
              ].map((pkg, i) => (
                <Card
                  key={i}
                  className={`border shadow-sm relative ${
                    pkg.popular
                      ? "border-primary shadow-md ring-2 ring-primary/20"
                      : "border-border/50"
                  }`}
                  data-testid={`card-package-${i}`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <CardContent className="p-8 text-center">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {pkg.credits}
                    </p>
                    <p className="text-4xl font-extrabold text-foreground mb-6">
                      {pkg.price}
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-3 text-left">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div
            className="text-center bg-slate-50 rounded-3xl p-10
              border border-border"
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to get started?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to discuss your project and we'll estimate the
              credits needed before any work begins.
            </p>
            <Link
              href="/contact"
              data-testid="link-contact-pricing"
              className="inline-flex h-11 items-center justify-center
                rounded-md bg-primary px-8 text-sm font-medium
                text-primary-foreground shadow hover:bg-primary/90
                transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
