import { PageTransition } from "@/components/layout/PageTransition";
import aboutHeroImg from "@assets/JPEG-scaled_1773274389677.jpg";
import networkTopology from "@assets/ins_networktopology_proposed3Official-2-e1726727591572_1773274389676.jpg";
import securityPlusLogo from "@assets/SecurityPlus-Logo-Certified-5-e1543775013910_1773274389676.jpg";
import awsDeveloper from "@assets/AWSCertifiedDeveloper-e1550367513205_1773274389676.png";
import awsCertified from "@assets/AWS_Certified_Logo_294x230_Color_1773274389677.jpg";

export default function About() {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            About OhhDenny Services, LLC
          </h1>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
              <div className="flex-1 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  OhhDenny Services, LLC focuses solely on small and local
                  businesses in the commercial space. Originally started in
                  2010 in Greenbelt, Maryland by a Software Developer who
                  wanted to educate small businesses on building and properly
                  maintaining their Information Technology (IT)
                  infrastructure.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  The first small business he worked with was Ideal Nursing
                  Services, LLC in 2013. Ideal Nursing Services is a small
                  business providing nursing services to hundreds of Medicare
                  and Medicaid recipients. He became their "IT guy" to assist
                  them with their technology needs with specific focuses on
                  Web Development, Computer Services, and Networking.
                </p>
              </div>
              <div className="flex-shrink-0 lg:w-80">
                <img
                  src={aboutHeroImg}
                  alt="IT professional working on laptop"
                  className="w-full rounded-2xl shadow-lg"
                  data-testid="img-about-hero"
                />
              </div>
            </div>

            <div className="space-y-6 mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed">
                He assisted them recommending and performing upgrades to
                all of their computers, educating the staff on how to
                protect themselves from cyber attacks, and upgrading their
                network to use two Wireless Access Points (WAPs) instead
                of having all of their machines connected through ethernet
                cables.
              </p>

              <div className="my-10 bg-slate-50 rounded-2xl p-6 border border-border/50">
                <p className="text-sm text-muted-foreground mb-4 font-medium text-center">
                  Network Topology designed for Ideal Nursing Services, Inc
                </p>
                <img
                  src={networkTopology}
                  alt="Network topology diagram for Ideal Nursing Services showing server room, wireless access points, and multi-floor computer layout"
                  className="w-full rounded-lg"
                  data-testid="img-network-topology"
                />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The CEO, Kevin Denny II, brings over 20 years of IT
                experience working with all sectors of the industry. Our
                focus here is Web Development and Computer Services with
                nonprofits and small businesses but even if those are not
                the services that fit your need, we can point you in the
                right direction with anything involving IT.
              </p>

              <p className="text-xl font-semibold text-foreground mt-8">
                We want to be your friendly neighborhood tech crew!
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Certifications
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <img
                  src={securityPlusLogo}
                  alt="CompTIA Security+ Certified"
                  className="h-20 object-contain"
                  data-testid="img-cert-securityplus"
                />
                <img
                  src={awsDeveloper}
                  alt="AWS Certified Developer Associate"
                  className="h-20 object-contain"
                  data-testid="img-cert-aws-developer"
                />
                <img
                  src={awsCertified}
                  alt="AWS Certified"
                  className="h-12 object-contain"
                  data-testid="img-cert-aws"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
