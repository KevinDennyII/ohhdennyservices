import { PageTransition } from "@/components/layout/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Server, Smartphone, Wrench, Database, LineChart } from "lucide-react";
import { Link } from "wouter";

const servicesList = [
  {
    title: "Web Design & Development",
    description: "Custom, responsive websites built with modern frameworks to ensure speed, SEO optimization, and a perfect user experience across all devices.",
    icon: Code2,
  },
  {
    title: "Tech Troubleshooting",
    description: "Hardware and software diagnostics. From sluggish laptops to misbehaving applications, we find the root cause and fix it.",
    icon: Wrench,
  },
  {
    title: "Network Setup",
    description: "Secure and reliable home or small office network configurations. Wi-Fi optimization, router setup, and network security basics.",
    icon: Server,
  },
  {
    title: "Mobile Setup & Sync",
    description: "Seamlessly integrate your email, calendars, and essential apps across your phone, tablet, and desktop.",
    icon: Smartphone,
  },
  {
    title: "Data Backup Solutions",
    description: "Don't lose your critical files. We set up automated, secure backup routines (local and cloud) so your data is always safe.",
    icon: Database,
  },
  {
    title: "Tech Consulting",
    description: "Unsure which software to buy or how to streamline your workflow? We provide unbiased advice tailored to your specific needs and budget.",
    icon: LineChart,
  }
];

export default function Services() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Comprehensive tech solutions designed specifically for small businesses and individuals.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, i) => (
              <Card key={i} className="border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center bg-slate-50 rounded-3xl p-10 border border-border">
            <h3 className="text-2xl font-bold mb-4">Don't see what you need?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Technology is vast, and every problem is unique. Reach out to us with your specific issue, and if we can't fix it, we'll point you in the right direction.
            </p>
            <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
