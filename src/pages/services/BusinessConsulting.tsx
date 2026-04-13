import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOMeta } from "@/components/layout/SEOMeta";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ServiceLeadForm } from "@/components/services/ServiceLeadForm";
import {
  Briefcase, CheckCircle2, ArrowRight, Building2, Users, TrendingUp, FileText, ShieldCheck, Lightbulb
} from "lucide-react";

const features = [
  { icon: Building2, title: "Company Registration", desc: "Pvt Ltd, LLP, OPC, Partnership, Startup India registration with full compliance setup." },
  { icon: FileText, title: "Business Strategy", desc: "Market analysis, competitor research, and growth strategy tailored for your business." },
  { icon: Users, title: "HR & Team Building", desc: "Recruitment strategy, HR policies, and organizational structure design." },
  { icon: TrendingUp, title: "Process Optimization", desc: "Streamline operations to reduce costs and improve productivity." },
  { icon: ShieldCheck, title: "Compliance Management", desc: "GST, ROC, FSSAI, Trade License, and all regulatory compliance handled." },
  { icon: Lightbulb, title: "Growth Advisory", desc: "Funding guidance, investor pitch decks, and scaling strategies." },
];

const benefits = [
  "Pvt Ltd / LLP / OPC Registration",
  "Startup India Registration",
  "MSME / Udyam Registration",
  "GST Registration & Filing",
  "Import-Export Code (IEC)",
  "Trade License & Shop Act",
  "FSSAI License",
  "Trademark Registration",
  "ISO Certification",
  "Business Plan Preparation",
  "Pitch Deck & Investor Support",
  "Annual Compliance & ROC Filing",
];

const BusinessConsulting = () => {
  return (
    <div className="min-h-screen">
      <SEOMeta
        title="Business Consulting Services Vadodara | Company Registration, GST, Compliance — Raulji Group"
        description="Expert business consulting in Vadodara, Gujarat. Company registration (Pvt Ltd, LLP, OPC), GST filing, startup India registration, compliance management & growth advisory. Call +91 8511187689."
        canonical="https://www.raulji.com/services/consulting"
        keywords="business consulting Vadodara, company registration Gujarat, GST registration Vadodara, startup India registration, business strategy Gujarat"
      />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Business Consulting Services - Raulji Group",
          "description": "Company registration, business strategy, compliance management, and growth advisory services in Vadodara, Gujarat.",
          "url": "https://www.raulji.com/services/consulting",
          "provider": { "@type": "Organization", "name": "Raulji Group", "url": "https://www.raulji.com" },
          "areaServed": { "@type": "State", "name": "Gujarat" },
          "serviceType": "Business Consulting",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.raulji.com/"},
              {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.raulji.com/services"},
              {"@type": "ListItem", "position": 3, "name": "Business Consulting", "item": "https://www.raulji.com/services/consulting"}
            ]
          }
        })
      }} />
      <main>
        <section className="pt-40 pb-20 bg-hero-gradient">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-semibold text-accent-foreground mb-6 animate-fade-up">
                📋 Business Consulting Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                Start, Scale & Succeed with{" "}
                <span className="text-gradient">Expert Business Consulting</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200">
                From company registration to growth advisory — Raulji Group provides end-to-end
                business consulting services in Vadodara and across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
                <Link to="/contact">
                  <Button variant="hero" size="xl">Get Free Consultation <ArrowRight className="w-5 h-5" /></Button>
                </Link>
                <a href="https://wa.me/918511187689?text=Hi%2C%20I%20need%20business%20consulting%20services" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="xl">WhatsApp Us</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Our Business Consulting Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions to start, manage, and grow your business.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f) => (
                <div key={f.title} className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="w-14 h-14 brand-gradient rounded-2xl flex items-center justify-center mb-4">
                    <f.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Complete Business Registration & Compliance</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We handle all aspects of company formation, licensing, and regulatory compliance
                  so you can focus on building your business.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-secondary">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ServiceLeadForm serviceName="Business Consulting" />
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="brand-gradient rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Start Your Business?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get expert guidance from Dharmendrasinh Raulji and team. Free consultation available.
              </p>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Book Free Consultation <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessConsulting;
