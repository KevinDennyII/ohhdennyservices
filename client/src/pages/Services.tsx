import { PageTransition } from "@/components/layout/PageTransition";
import { useSEO } from "@/hooks/use-seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { coreServices, getServicePageImage } from "@/data/services";
import computerRepairImg from "@assets/c466932390fbe92284dda9c55966a5a2_1773274389677.png";
import softwareUpdateIcon from "@assets/2017993_1773274389676.png";
import maintenanceIcon from "@assets/2255768_1773274389677.png";
import serverImg from "@assets/images_1773274389678.jpg";
import trainingIcon from "@assets/png-clipart-computer-icons-education-learning-training-others-_1773274389677.png";
import diagnosticIcon from "@assets/diagnostic_1773274389676.png";
import troubleshootingIcon from "@assets/troubleshooting_1773274389677.png";
import networkIcon from "@assets/network_1773274389678.png";

const capabilities = [
  { img: computerRepairImg, label: "Computer Repair" },
  { img: softwareUpdateIcon, label: "Software Updates" },
  { img: maintenanceIcon, label: "Website Maintenance" },
  { img: serverImg, label: "Server & Hosting" },
  { img: trainingIcon, label: "Tech Training" },
  { img: diagnosticIcon, label: "Diagnostics" },
  { img: troubleshootingIcon, label: "Troubleshooting" },
  { img: networkIcon, label: "Network Setup" },
];

export default function Services() {
  useSEO({
    title: "Services",
    description: "Web development, networking, computer repair, cyber security, and IT consulting services. CCNA trained, CompTIA Security+ certified.",
    path: "/services",
  });

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
            {coreServices.map((service) => (
              <Card
                key={service.title}
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="border border-border/50 shadow-sm
                  hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-4">
                  <img
                    src={getServicePageImage(service)}
                    alt={service.title}
                    className="h-14 w-14 object-contain mb-4 rounded-lg"
                  />
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

          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What We Can Help With
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {capabilities.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center p-4
                    rounded-xl bg-slate-50 border border-border/50
                    hover:shadow-sm transition-shadow"
                  data-testid={`card-capability-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="h-12 w-12 object-contain mb-3"
                  />
                  <p className="text-sm font-medium text-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
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
