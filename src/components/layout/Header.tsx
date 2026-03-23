import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import rauljiLogo from "@/assets/raulji-logo.webp";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Business Consulting", href: "/services/consulting" },
      { name: "IT Services", href: "/services/it" },
      { name: "Insurance & Property", href: "/services/insurance" },
      { name: "Finance Advisory", href: "/services/finance" },
      { name: "Legal Advisory", href: "/services/legal" },
    ],
  },
  { name: "Industries", href: "/industries" },
  { name: "Rentals", href: "/rentals" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <nav className="container-wide flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 brand-gradient rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-secondary">Raulji Group</span>
            <span className="text-xs text-muted-foreground hidden sm:block">Building Futures</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-secondary hover:bg-muted"
                  }`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {item.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-secondary hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && (
                <div
                  className={`absolute top-full left-0 mt-1 w-56 glass-card rounded-xl p-2 shadow-elevated transition-all duration-200 ${
                    servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-secondary hover:bg-muted rounded-lg transition-colors"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact">
            <Button variant="hero" size="default">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-t border-border/50 animate-fade-in">
          <div className="container-wide py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-secondary hover:bg-muted"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-secondary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="hero" size="lg" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
