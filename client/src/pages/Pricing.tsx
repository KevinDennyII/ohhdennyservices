import { PageTransition } from "@/components/layout/PageTransition";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";

const tiers = [
  {
    name: "Consultation",
    price: "Free",
    description: "Let's figure out what you need.",
    features: [
      "Initial 30-minute call",
      "Problem assessment",
      "High-level strategy overview",
      "Cost estimation for fixes"
    ],
    buttonText: "Book Now",
    popular: false,
  },
  {
    name: "Hourly Support",
    price: "$85",
    period: "/ hour",
    description: "Perfect for quick fixes and troubleshooting.",
    features: [
      "Software installation & setup",
      "Virus/malware removal",
      "Network troubleshooting",
      "Device optimization",
      "1 hour minimum"
    ],
    buttonText: "Get Support",
    popular: true,
  },
  {
    name: "Project Based",
    price: "Custom",
    description: "For websites and larger implementations.",
    features: [
      "Custom Web Design",
      "E-commerce setup",
      "Complete network overhaul",
      "Data migration projects",
      "Detailed proposal provided"
    ],
    buttonText: "Request Quote",
    popular: false,
  }
];

export default function Pricing() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground text-balance">
            No hidden fees or confusing technical jargon. Just honest, straightforward pricing for the tech help you need.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, i) => (
              <Card 
                key={i} 
                className={`relative flex flex-col border-border/50 bg-white ${
                  tier.popular ? 'border-primary/50 shadow-lg scale-105 z-10' : 'shadow-sm'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-xl font-bold mb-2">{tier.name}</CardTitle>
                  <CardDescription className="h-10 text-balance">{tier.description}</CardDescription>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-foreground">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground font-medium">{tier.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6 pb-8">
                  <Link 
                    href="/contact" 
                    className={`w-full inline-flex h-11 items-center justify-center rounded-md font-medium transition-colors ${
                      tier.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow' 
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {tier.buttonText}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
