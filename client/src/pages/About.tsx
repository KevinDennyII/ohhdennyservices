import { PageTransition } from "@/components/layout/PageTransition";
import { MonitorSmartphone, Heart, Zap, Shield } from "lucide-react";

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground text-balance">
            OhhDenny Services, LLC was founded on a simple premise: technology should make your life easier, not more complicated.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* professional modern workspace */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern workspace" 
                className="rounded-2xl shadow-xl border border-border/50"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that small businesses and individuals shouldn't have to struggle with technology. Whether it's building a professional online presence from scratch or figuring out why a network keeps dropping, our goal is to empower you.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Helping People Help Themselves With Tech" isn't just a tagline; it's our operating philosophy. We don't just fix problems—we explain them in plain English so you feel confident and in control.
              </p>
              
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Heart className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Client-First</h4>
                    <p className="text-sm text-muted-foreground mt-1">Your success and understanding is our priority.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Reliable</h4>
                    <p className="text-sm text-muted-foreground mt-1">Solutions built to last, not just quick patches.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
