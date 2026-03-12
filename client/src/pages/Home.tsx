import { Link } from "wouter";
import { PageTransition } from "@/components/layout/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import heroImg from "@assets/PNG-copy_1773274389677.png";
import websiteIcon from "@assets/website_1773274389676.png";
import networkIcon from "@assets/network_1773274389678.png";
import troubleshootingIcon from "@assets/troubleshooting_1773274389677.png";
import securityPlusLogo from "@assets/SecurityPlus-Logo-Certified-5-e1543775013910_1773274389676.jpg";

export default function Home() {
  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold
                  text-foreground tracking-tight mb-8 leading-tight"
              >
                Helping People Help Themselves{" "}
                <span className="text-primary">With Tech...</span>
              </h1>
              <p
                className="text-lg md:text-xl text-muted-foreground
                  mb-10 max-w-2xl mx-auto lg:mx-0 text-balance"
              >
                Need a website or just have a tech-related question? Hit us up!
              </p>
              <Link
                href="/contact"
                data-testid="link-contact-hero"
                className="inline-flex h-12 items-center justify-center
                  rounded-md bg-primary text-primary-foreground px-8
                  text-base font-medium shadow transition-colors
                  hover:bg-primary/90"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={heroImg}
                alt="Person working with technology"
                className="w-full max-w-lg"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg text-balance">
              We focus on Web Development and Computer Services with
              nonprofits and small businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border border-border/50 shadow-sm hover-elevate bg-white">
              <CardContent className="p-8 text-center">
                <img
                  src={websiteIcon}
                  alt="Web Development"
                  className="h-16 w-16 mx-auto mb-6"
                />
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Over 20 years of website design and development experience
                  building sites that work for your business.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 shadow-sm hover-elevate bg-white">
              <CardContent className="p-8 text-center">
                <img
                  src={networkIcon}
                  alt="Networking"
                  className="h-16 w-16 mx-auto mb-6"
                />
                <h3 className="text-xl font-bold mb-3">Networking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cisco Certified Network Academy (CCNA) trained with
                  hands-on experience consulting and implementing
                  networking solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 shadow-sm hover-elevate bg-white">
              <CardContent className="p-8 text-center">
                <img
                  src={troubleshootingIcon}
                  alt="Helpful Tech"
                  className="h-16 w-16 mx-auto mb-6"
                />
                <h3 className="text-xl font-bold mb-3">Helpful Tech</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Classically-trained computer scientist with a knack for
                  all things tech!
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 shadow-sm hover-elevate bg-white">
              <CardContent className="p-8 text-center">
                <img
                  src={securityPlusLogo}
                  alt="Basic Cyber Security"
                  className="h-16 w-16 mx-auto mb-6 rounded-lg"
                />
                <h3 className="text-xl font-bold mb-3">
                  Basic Cyber Security
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  CompTIA Security+ certified professionals with a wealth
                  of knowledge on Cyber Security.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              data-testid="link-services-cta"
              className="inline-flex items-center gap-2 text-primary
                font-medium hover:underline"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We want to be your friendly neighborhood tech crew!
            </h2>
            <p className="text-primary-foreground/80 text-xl mb-10 max-w-2xl mx-auto">
              Even if our listed services don't fit your exact need, we can
              point you in the right direction with anything involving IT.
            </p>
            <Link
              href="/contact"
              data-testid="link-contact-cta"
              className="inline-flex h-12 items-center justify-center
                rounded-md bg-white text-primary px-8 text-base
                font-medium shadow transition-colors hover:bg-slate-100"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
