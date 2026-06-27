import { Link } from "wouter";
import { PageTransition } from "@/components/layout/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import { coreServices } from "@/data/services";
import heroImg from "@assets/PNG-copy_1773274389677.png";

export default function Home() {
  useSEO({
    title: "Home",
    description: "IT consulting, web development, networking, and cyber security services for small businesses and nonprofits. Based in Selma, Texas with over 20 years of experience.",
    path: "/",
  });

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
            {coreServices.map((service) => (
              <Card
                key={service.title}
                className="border border-border/50 shadow-sm hover-elevate bg-white"
              >
                <CardContent className="p-8 text-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`h-16 w-16 mx-auto mb-6${
                      service.title === "Basic Cyber Security"
                        ? " rounded-lg"
                        : ""
                    }`}
                  />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.homeDescription}
                  </p>
                </CardContent>
              </Card>
            ))}
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

      <section className="py-24 bg-slate-50 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See What We've Built
            </h2>
            <p className="text-muted-foreground text-lg text-balance">
              From nonprofit sites to property management portals — explore
              live websites and IT projects we've delivered for real clients.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/portfolio"
              data-testid="link-portfolio-cta"
              className="inline-flex h-12 items-center justify-center
                rounded-md bg-primary text-primary-foreground px-8
                text-base font-medium shadow transition-colors
                hover:bg-primary/90 gap-2"
            >
              View Our Work <ArrowRight className="h-4 w-4" />
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
