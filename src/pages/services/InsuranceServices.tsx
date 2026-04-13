import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOMeta } from "@/components/layout/SEOMeta";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ServiceLeadForm } from "@/components/services/ServiceLeadForm";
import {
  Shield, Heart, Car, Building, Factory, FileCheck, ArrowRight, CheckCircle2, Stethoscope, Home
} from "lucide-react";

const features = [
  { icon: Shield, title: "General Insurance", desc: "Comprehensive general insurance covering fire, burglary, marine, liability, and all-risk policies for individuals and businesses." },
  { icon: Stethoscope, title: "Medical & Health Insurance", desc: "Mediclaim, health insurance, critical illness cover, family floater plans, and senior citizen health policies." },
  { icon: Heart, title: "Life Insurance", desc: "Term life, endowment plans, ULIPs, pension plans, and child education insurance from top insurers." },
  { icon: Car, title: "Motor & Vehicle Insurance", desc: "Comprehensive and third-party insurance for cars, bikes, commercial vehicles, and fleet management." },
  { icon: Building, title: "Commercial & Business Insurance", desc: "Business interruption, professional liability, directors & officers, and commercial property insurance." },
  { icon: Home, title: "Property Insurance", desc: "Home, office, shop, and warehouse insurance with earthquake, flood, and natural disaster coverage." },
  { icon: Factory, title: "Industrial & Factory Coverage", desc: "Specialized insurance for factories, manufacturing units, machinery breakdown, and industrial equipment in Gujarat." },
  { icon: FileCheck, title: "Claims Assistance", desc: "End-to-end claims support — documentation, filing, follow-up, settlement, and dispute resolution." },
];

const insuranceTypes = [
  "Term Life Insurance", "Health / Mediclaim Insurance", "General Insurance",
  "Medical Insurance (Individual & Family)", "Motor Insurance (Car & Bike)", "Commercial Vehicle Insurance",
  "Fire & Burglary Insurance", "Marine Cargo Insurance", "Professional Liability Insurance",
  "Workers Compensation", "Property All Risk", "Keyman Insurance",
  "Group Health Insurance", "Personal Accident Insurance", "Travel Insurance",
  "Crop & Agricultural Insurance", "Cyber Risk Insurance", "Directors & Officers Liability",
];

const InsuranceServices = () => {
  return (
    <div className="min-h-screen">
      <SEOMeta
        title="Insurance Services Vadodara | General, Health, Life, Motor Insurance — Raulji Group"
        description="Complete insurance advisory in Vadodara, Gujarat. General insurance, medical & health insurance, life insurance, motor, commercial, property & industrial insurance with claims assistance. Call +91 8511187689."
        canonical="https://www.raulji.com/services/insurance"
        keywords="insurance Vadodara, health insurance Gujarat, motor insurance Vadodara, life insurance Gujarat, general insurance Vadodara, property insurance Gujarat"
      />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          "name": "Insurance Services - General, Medical, Life, Motor | Raulji Group Vadodara",
          "description": "Complete insurance services including general insurance, medical/health insurance, life insurance, motor, commercial, property, and industrial insurance with claims assistance in Vadodara, Gujarat.",
          "url": "https://www.raulji.com/services/insurance",
          "provider": { "@type": "Organization", "name": "Raulji Group", "url": "https://www.raulji.com", "telephone": "+918511187689", "email": "rauljigroup@gmail.com" },
          "areaServed": { "@type": "State", "name": "Gujarat" },
          "serviceType": ["General Insurance", "Medical Insurance", "Health Insurance", "Life Insurance", "Motor Insurance"],
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.raulji.com/"},
              {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.raulji.com/services"},
              {"@type": "ListItem", "position": 3, "name": "Insurance Services", "item": "https://www.raulji.com/services/insurance"}
            ]
          }
        })
      }} />
      <main>
        <section className="pt-40 pb-20 bg-hero-gradient">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-semibold text-accent-foreground mb-6 animate-fade-up">
                🛡️ Complete Insurance Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                Protect What Matters with{" "}
                <span className="text-gradient">Comprehensive Insurance</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200">
                General insurance, medical & health insurance, life, motor, commercial & property insurance
                with expert claims assistance. Trusted insurance advisory by Raulji Group in Vadodara and Gujarat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
                <Link to="/contact"><Button variant="hero" size="xl">Get Insurance Quote <ArrowRight className="w-5 h-5" /></Button></Link>
                <a href="https://wa.me/918511187689?text=Hi%2C%20I%20need%20insurance%20services" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="xl">WhatsApp Us</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Our Insurance Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Complete insurance solutions for individuals, families, and businesses across Gujarat.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="w-12 h-12 brand-gradient rounded-xl flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-base font-bold text-secondary mb-2">{f.title}</h3>
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
                <h2 className="text-3xl font-bold text-secondary mb-6">Insurance Plans We Offer</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We work with top insurance companies to offer the best coverage at competitive premiums.
                  Contact us at <a href="tel:+918511187689" className="text-primary font-semibold">+91 8511187689</a> for a free quote.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {insuranceTypes.map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-secondary">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ServiceLeadForm serviceName="Insurance Services" />
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="brand-gradient rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">Need Insurance Advice?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get a free insurance comparison and expert advice from our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"><Button variant="heroOutline" size="xl">Get Free Quote <ArrowRight className="w-5 h-5" /></Button></Link>
                <a href="tel:+918511187689"><Button variant="heroOutline" size="xl">Call +91 8511187689</Button></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InsuranceServices;
