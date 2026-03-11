import { Link } from "wouter";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Code, Settings, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-grid-slate-200/[0.04] bg-[bottom_1px_center] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              OhhDenny Services, LLC
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight mb-8 leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Helping People Help Themselves <span className="text-primary">With Tech.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Need a modern website, dealing with frustrating tech issues, or just have a tech-related question? We provide clean, reliable solutions tailored for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>

              <Link href="/services" className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-12 px-8">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Solutions for Complex Problems</h2>
            <p className="text-muted-foreground text-lg text-balance">We break down technical barriers so you can focus on what you do best.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border border-border/50 shadow-sm hover-elevate bg-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clean, responsive, and blazing-fast websites that represent your brand perfectly across all devices.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border border-border/50 shadow-sm hover-elevate bg-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tech Troubleshooting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Device acting up? Network issues? We diagnose and resolve technical headaches quickly and efficiently.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border border-border/50 shadow-sm hover-elevate bg-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Monitor className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">IT Consulting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strategic advice on software, hardware, and processes to help your small business run smoother.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* modern abstract office background */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to solve your tech problems?</h2>
            <p className="text-primary-foreground/80 text-xl mb-10 max-w-2xl mx-auto">
              Don't let technical hurdles slow you down. Reach out today and let's discuss how we can help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-white text-primary px-8 text-base font-medium shadow transition-colors hover:bg-slate-100 hover:-translate-y-0.5">
                Contact Us Now
              </Link>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 text-sm font-medium text-primary-foreground/90">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> Free initial assistance
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> Plain English, no jargon
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
