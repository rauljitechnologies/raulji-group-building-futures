import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEOMeta } from "@/components/layout/SEOMeta";
import { Button } from "@/components/ui/button";
import { Home, Phone, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOMeta
        title="Page Not Found | Raulji Group"
        description="The page you are looking for doesn't exist. Return to Raulji Group homepage for business consulting, IT services, insurance, and more."
        canonical="https://www.raulji.com/404"
        noindex={true}
      />
      <div className="flex min-h-screen items-center justify-center bg-muted px-4">
        <div className="text-center max-w-lg">
          <div className="text-8xl font-extrabold text-primary mb-4">404</div>
          <h1 className="text-2xl font-bold text-secondary mb-3">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/">
              <Button variant="hero" size="lg" className="gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <a href="tel:+918511187689">
              <Button variant="outline" size="lg" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Us
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: "Business Consulting", href: "/services/consulting" },
              { label: "IT Services", href: "/services/it" },
              { label: "Insurance", href: "/services/insurance" },
              { label: "Finance Advisory", href: "/services/finance" },
              { label: "Legal Advisory", href: "/services/legal" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center justify-center gap-1 p-3 rounded-xl bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <ArrowRight className="w-3 h-3" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
