import { Link } from "wouter";
import { Mail, MapPin } from "lucide-react";
import { SiX, SiLinkedin } from "react-icons/si";
import logoBadge from "@assets/cropped-OSD_site_badge_1773274389676.jpg";
import sslSeal from "@assets/positivessl_trust_seal_lg_222x54_1773274389677.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src={logoBadge}
                alt="OhhDenny Services"
                className="h-10 w-10 rounded-md"
              />
              <span className="font-bold text-lg text-foreground">
                OhhDenny Services
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Helping People Help Themselves With Tech...
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground
                    hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground
                    hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground
                    hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground
                    hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Networking</li>
              <li>Helpful Tech</li>
              <li>Basic Cyber Security</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>ohhdennyservicesllc@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Selma, Texas</span>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground
                    hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <SiX className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground
                    hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col md:flex-row
            items-center justify-between gap-4 text-sm
            text-muted-foreground"
        >
          <p>&copy; {currentYear} OhhDenny Services, LLC.</p>
          <img
            src={sslSeal}
            alt="Secured by PositiveSSL"
            className="h-8 opacity-70"
          />
        </div>
      </div>
    </footer>
  );
}
