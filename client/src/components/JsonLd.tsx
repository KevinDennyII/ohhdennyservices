import { useEffect } from "react";
import {
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@shared/site";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description:
    "IT consulting, web development, networking, and cyber security services for small businesses and nonprofits.",
  url: SITE_URL,
  email: CONTACT_EMAIL,
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
  sameAs: [SOCIAL_LINKS.twitter, SOCIAL_LINKS.linkedin],
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
