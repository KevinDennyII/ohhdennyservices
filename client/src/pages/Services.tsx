import { PageTransition } from "@/components/layout/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Wifi, Monitor, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const servicesList = [
  {
    title: "Web Development",
    description:
      "We have over 20 years of website design and development experience.",
    icon: Code2,
  },
  {
    title: "Networking",
    description:
      "Cisco Certified Network Academy (CCNA) trained with hands-on experience in consulting and implementing networking system solutions for small businesses.",
    icon: Wifi,
  },
  {
    title: "Helpful Tech",
    description:
      "Classically-trained computer scientist with a knack for all things tech!",
    icon: Monitor,
  },
  {
    title: "Basic Cyber Security",
    description:
      "We have CompTIA Security+ certified professionals with a wealth of knowledge on Cyber Security. We are also avid followers of the TWIT.tv webcast, Security Now.",
    icon: ShieldCheck,
  },
];

export default function Services() {
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
            Our Services
          </h1>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, i) => (
              <Card
                key={i}
                data-testid={`card-service-${i}`}
                className="border border-border/50 shadow-sm
                  hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div
                    className="w-12 h-12 bg-primary/10 rounded-xl
                      flex items-center justify-center mb-4"
                  >
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className="mt-20 text-center bg-slate-50 rounded-3xl
              p-10 border border-border"
          >
            <h3 className="text-2xl font-bold mb-4">
              Don't see what you need?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Even if these are not the services that fit your need,
              we can point you in the right direction with anything
              involving IT.
            </p>
            <Link
              href="/contact"
              data-testid="link-contact-services"
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
