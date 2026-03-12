import { useEffect } from "react";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OhhDenny Services, LLC",
  description:
    "IT consulting, web development, networking, and cyber security services for small businesses and nonprofits.",
  url: "https://ohhdennyservices.com",
  email: "ohhdennyservicesllc@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Selma",
    addressRegion: "TX",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Kevin Denny II",
    jobTitle: "CEO",
  },
  foundingDate: "2010",
  areaServed: "United States",
  serviceType: [
    "Web Development",
    "Networking",
    "IT Consulting",
    "Cyber Security",
    "Computer Repair",
    "Tech Training",
  ],
  sameAs: ["https://twitter.com", "https://linkedin.com"],
};

export function JsonLd() {
  useEffect(() => {
    const id = "jsonld-business";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(businessSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, []);

  return null;
}
