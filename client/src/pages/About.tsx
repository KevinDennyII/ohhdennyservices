import { PageTransition } from "@/components/layout/PageTransition";

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
          <div className="max-w-3xl mx-auto space-y-6">
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

            <p className="text-lg text-muted-foreground leading-relaxed">
              He assisted them recommending and performing upgrades to
              all of their computers, educating the staff on how to
              protect themselves from cyber attacks, and upgrading their
              network to use two Wireless Access Points (WAPs) instead
              of having all of their machines connected through ethernet
              cables.
            </p>

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
        </div>
      </section>
    </PageTransition>
  );
}
