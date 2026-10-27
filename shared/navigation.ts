export function isNavLinkActive(location: string, href: string) {
  if (location === href) return true;
  return href === "/101s" && location === "/ai-101";
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/101s", label: "101s" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_SERVICE_LABELS = [
  "Web Development",
  "Networking",
  "Helpful Tech",
  "Basic Cyber Security",
] as const;
