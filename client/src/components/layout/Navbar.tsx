import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MonitorSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass-nav shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="bg-primary p-2 rounded-lg
                group-hover:bg-primary/90 transition-colors"
            >
              <MonitorSmartphone className="h-6 w-6 text-white" />
            </div>
            <span
              className="font-bold text-xl tracking-tight
                text-foreground hidden sm:block"
            >
              OhhDenny Services
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`nav-${link.label.toLowerCase()}`}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2",
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {link.label}
                {location === link.href && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5
                      bg-primary rounded-full animate-fade-in"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              data-testid="nav-contact-cta"
              className="inline-flex items-center justify-center
                whitespace-nowrap rounded-md text-sm font-medium
                transition-colors focus-visible:outline-none
                focus-visible:ring-1 focus-visible:ring-ring bg-primary
                text-primary-foreground shadow hover:bg-primary/90
                h-10 px-6 py-2 hover-elevate"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full
            bg-background border-b shadow-lg animate-fade-in"
        >
          <nav className="flex flex-col p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-md transition-colors",
                  location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-4 pb-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center
                  justify-center whitespace-nowrap rounded-md text-sm
                  font-medium transition-colors focus-visible:outline-none
                  focus-visible:ring-1 focus-visible:ring-ring bg-primary
                  text-primary-foreground shadow hover:bg-primary/90
                  h-10 px-4 py-2"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
