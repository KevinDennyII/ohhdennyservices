import { PageTransition } from "@/components/layout/PageTransition";
import { Link } from "wouter";
import websiteIcon from "@assets/website_1773274389676.png";
import troubleshootingIcon from "@assets/troubleshooting_1773274389677.png";
import networkIcon from "@assets/network_1773274389678.png";

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
          >
            Pricing
          </h1>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 border-b pb-4">
              <img src={websiteIcon} alt="Web Development" className="h-8 w-8 object-contain" />
              <h2 className="text-2xl font-bold text-foreground">
                Web Development
              </h2>
            </div>

            <div className="space-y-8">
              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
              >
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-foreground
                      mb-2"
                  >
                    Custom Website
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    W/non-refundable deposit of 50% before start of
                    implementation. Pricing is based on the average time
                    to create a website of 14 weeks/5 hours per week at
                    $50/hr:
                  </p>
                  <ul className="mt-3 text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>3 weeks discovery</li>
                    <li>6 weeks design</li>
                    <li>3 weeks initial development</li>
                    <li>2 weeks of modifications</li>
                  </ul>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  $3,500
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
              >
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-foreground
                      mb-2"
                  >
                    Website Maintenance/Support
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    New development NOT included.
                  </p>
                  <ul className="mt-3 text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>$100/month for 12 months</li>
                    <li>$125/month for 6 months</li>
                  </ul>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  See Below
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
              >
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-foreground
                      mb-2"
                  >
                    Website Administration Training
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    I will teach you how to maintain your website.
                  </p>
                  <p className="text-muted-foreground text-sm mt-2 italic">
                    ...and don't worry you can always contact me for any
                    questions or concerns. I am always happy to help and
                    spread the wealth of knowledge!
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  $65/hr
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

            <div className="space-y-8">
              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
              >
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-foreground
                      mb-2"
                  >
                    Any other types of consulting and service
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    This can include things such as:
                  </p>
                  <ul className="mt-3 text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Web hosting & domain services</li>
                    <li>Cyber security awareness</li>
                    <li>Website development assistance</li>
                  </ul>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  $60/hr
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
              >
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-foreground
                      mb-2"
                  >
                    Assessments
                  </h3>
                </div>
                <span className="text-2xl font-extrabold text-primary shrink-0">
                  FREE
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
              >
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-foreground
                      mb-2"
                  >
                    Performance Upgrade/Speed Boost
                  </h3>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  $50/hr
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
              >
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-foreground
                      mb-2"
                  >
                    Software/Hardware Issues
                  </h3>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  $60/hr
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
              >
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-foreground
                      mb-2"
                  >
                    Software/Hardware Installation
                  </h3>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  $75/hr
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
              >
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-foreground
                      mb-2"
                  >
                    Hardware Consulting
                  </h3>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  $60/hr
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

            <div className="space-y-8">
              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
              >
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-foreground
                      mb-2"
                  >
                    Network Architecting
                  </h3>
                </div>
                <span className="text-2xl font-extrabold text-foreground shrink-0">
                  $150
                </span>
              </div>

              <div
                className="flex flex-col sm:flex-row sm:items-start
                  justify-between gap-4 p-6 rounded-xl bg-slate-50
                  border border-border/50"
              >
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold text-foreground
                      mb-2"
                  >
                    Network Configuration
                  </h3>
                </div>
                <span className="text-lg font-semibold text-muted-foreground shrink-0">
                  Based on task(s)
                </span>
              </div>
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
              Contact us to discuss your project or schedule a free
              assessment.
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
