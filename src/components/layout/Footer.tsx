import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logoImg from "@/assets/Raulji_Group_Logo.png";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Business Consulting", href: "/services/consulting" },
    { name: "IT & Digital Solutions", href: "/services/it" },
    { name: "Insurance Services", href: "/services/insurance" },
    { name: "Finance Advisory", href: "/services/finance" },
    { name: "Computer Rentals", href: "/rentals" },
  ],
  industries: [
    { name: "SMEs", href: "/industries#sme" },
    { name: "Enterprises", href: "/industries#enterprise" },
    { name: "Startups", href: "/industries#startups" },
    { name: "Real Estate", href: "/industries#realestate" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logoImg} alt="Raulji Group" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-secondary-foreground/70 mb-4 max-w-sm">
              One Stop Solution For Business — Company Registration, IT Services, Insurance, 
              Finance Advisory, Legal & Compliance across India.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/raulji-group" target="_blank" rel="noopener noreferrer" aria-label="Raulji Group on LinkedIn" className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/RauljiGroup" target="_blank" rel="noopener noreferrer" aria-label="Raulji Group on Twitter" className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/rauljigroup" target="_blank" rel="noopener noreferrer" aria-label="Raulji Group on Facebook" className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-foreground">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-foreground">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/70">Vadodara, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+918511187689" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  +91 8511187689
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:rauljigroup@gmail.com" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  rauljigroup@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:admin@raulji.com" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  admin@raulji.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Raulji Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
