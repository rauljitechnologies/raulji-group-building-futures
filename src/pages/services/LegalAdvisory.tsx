import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOMeta } from "@/components/layout/SEOMeta";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ServiceLeadForm } from "@/components/services/ServiceLeadForm";
import {
  Scale, FileText, Shield, Gavel, Search, Landmark, ArrowRight, CheckCircle2
} from "lucide-react";

const features = [
  { icon: Landmark, title: "Corporate Law", desc: "Company formation, shareholder agreements, board resolutions, and corporate governance." },
  { icon: FileText, title: "Contract Drafting & Review", desc: "Employment contracts, vendor agreements, NDAs, MOUs, and all business contracts." },
  { icon: Shield, title: "Intellectual Property", desc: "Trademark, copyright, patent registration and IP protection services." },
  { icon: Gavel, title: "Dispute Resolution", desc: "Mediation, arbitration, and legal representation for business disputes." },
  { icon: Scale, title: "Regulatory Compliance", desc: "Labour law, environmental compliance, FEMA, and industry-specific regulations." },
  { icon: Search, title: "Due Diligence", desc: "Legal due diligence for M&A, investments, and real estate transactions." },
];

const legalServices = [
  "Company Law & Corporate Governance", "Contract Drafting & Negotiation", "Trademark Registration",
  "Copyright & Patent Filing", "Labour Law Compliance", "FEMA & Foreign Investment",
  "Property Legal Services", "Partnership & JV Agreements", "Legal Notices & Litigation",
  "Consumer Protection", "Real Estate Due Diligence", "Startup Legal Advisory",
];

const LegalAdvisory = () => {
  return (
    <div className="min-h-screen">
      <SEOMeta
        title="Legal Advisory Services Vadodara | Corporate Law, Trademark, Compliance — Raulji Group"
        description="Expert legal advisory in Vadodara, Gujarat. Corporate law, contract drafting, trademark & IP registration, dispute resolution, labour law compliance & due diligence. Call +91 8511187689."
        canonical="https://www.raulji.com/services/legal"
        keywords="legal advisory Vadodara, corporate law Gujarat, trademark registration Vadodara, contract drafting Gujarat, legal compliance India"
      />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          "name": "Legal Advisory Services - Raulji Group",
          "description": "Corporate law, contract drafting, IP registration, dispute resolution, and regulatory compliance services in Vadodara.",
          "url": "https://www.raulji.com/services/legal",
          "provider": { "@type": "Organization", "name": "Raulji Group", "url": "https://www.raulji.com" },
          "areaServed": { "@type": "State", "name": "Gujarat" },
          "serviceType": "Legal Advisory",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.raulji.com/"},
              {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.raulji.com/services"},
              {"@type": "ListItem", "position": 3, "name": "Legal Advisory", "item": "https://www.raulji.com/services/legal"}
            ]
          }
        })
      }} />
      <main>
        <section className="pt-40 pb-20 bg-hero-gradient">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-semibold text-accent-foreground mb-6 animate-fade-up">
                ⚖️ Legal & Compliance Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                Expert Legal Solutions for{" "}
                <span className="text-gradient">Your Business</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200">
                Corporate law, contract drafting, IP protection & regulatory compliance.
                Professional legal advisory by Raulji Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
                <Link to="/contact"><Button variant="hero" size="xl">Get Legal Advice <ArrowRight className="w-5 h-5" /></Button></Link>
                <a href="https://wa.me/918511187689?text=Hi%2C%20I%20need%20legal%20services" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="xl">WhatsApp Us</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Our Legal Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive legal support for businesses and individuals.</p>
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
                <h2 className="text-3xl font-bold text-secondary mb-6">Complete Legal Support</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From startup legal setup to complex corporate governance — we cover it all.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {legalServices.map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-secondary">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ServiceLeadForm serviceName="Legal Advisory" />
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="brand-gradient rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">Need Legal Help?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get expert legal consultation. First consultation is free.
              </p>
              <Link to="/contact"><Button variant="heroOutline" size="xl">Book Consultation <ArrowRight className="w-5 h-5" /></Button></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalAdvisory;
