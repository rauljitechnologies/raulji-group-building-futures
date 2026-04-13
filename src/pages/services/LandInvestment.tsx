import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ServiceLeadForm } from "@/components/services/ServiceLeadForm";
import {
  MapPin, Building2, TrendingUp, FileCheck, Search, Shield, ArrowRight, CheckCircle2, IndianRupee
} from "lucide-react";

const features = [
  { icon: MapPin, title: "Land Investment Advisory", desc: "Expert guidance on agricultural, NA, residential & commercial land investment in Vadodara & Anand districts." },
  { icon: Building2, title: "Property Development", desc: "Land development, plotting, and project advisory for real estate investors." },
  { icon: TrendingUp, title: "Investment Analysis", desc: "ROI analysis, market trends, price forecasting for land parcels in Gujarat." },
  { icon: FileCheck, title: "Legal Due Diligence", desc: "Title verification, 7/12 extract check, encumbrance certificate, and legal clearance." },
  { icon: Search, title: "Site Selection", desc: "Location analysis, infrastructure mapping, and growth corridor identification." },
  { icon: Shield, title: "Documentation Support", desc: "Sale deed, agreement drafting, registration, mutation, and all paperwork handled." },
];

const locations = [
  { area: "Vadodara District", spots: ["Waghodia", "Padra", "Savli", "Dabhoi", "Karjan", "Sinor", "Sankheda"] },
  { area: "Anand District", spots: ["Anand City", "Vidyanagar", "Karamsad", "Borsad", "Petlad", "Sojitra", "Umreth"] },
];

const investmentTypes = [
  "Agricultural Land Investment", "NA (Non-Agricultural) Plots", "Residential Plot Investment",
  "Commercial Land Purchase", "Industrial Land Advisory", "Farm House Land",
  "Land Near Highway / Expressway", "Land Near DMIC Corridor", "Plotting & Development Projects",
  "Joint Venture Land Deals", "Government Scheme Land", "Revenue Land Advisory",
];

const whyInvest = [
  { title: "High Growth Corridor", desc: "Vadodara-Anand belt is part of the Delhi-Mumbai Industrial Corridor (DMIC)." },
  { title: "Excellent Connectivity", desc: "Expressway, NH8, railway connectivity, and upcoming Bullet Train route." },
  { title: "Industrial Development", desc: "Major industrial estates and SEZs attracting large investments." },
  { title: "Affordable Prices", desc: "Land prices still affordable compared to Ahmedabad and Surat markets." },
  { title: "Educational Hub", desc: "M.S. University, numerous engineering & medical colleges drive demand." },
  { title: "Smart City Project", desc: "Vadodara Smart City project boosting infrastructure and land values." },
];

const LandInvestment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          "name": "Land Investment Services in Vadodara & Anand - Raulji Group",
          "description": "Expert land investment advisory, property due diligence, and documentation support for agricultural, NA, and commercial land in Vadodara and Anand districts, Gujarat.",
          "provider": { "@type": "Organization", "name": "Raulji Group", "telephone": "+918511187689" },
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "Vadodara District" },
            { "@type": "AdministrativeArea", "name": "Anand District" }
          ],
          "serviceType": "Land Investment Advisory"
        })
      }} />
      <main>
        <section className="pt-40 pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container-wide relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-semibold text-accent-foreground mb-6 animate-fade-up">
                🏗️ Land Investment in Vadodara & Anand
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                Invest in Land in{" "}
                <span className="text-gradient">Vadodara & Anand</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up delay-200">
                Expert land investment advisory for agricultural, residential & commercial plots
                in Vadodara and Anand districts. Legal due diligence, documentation support,
                and end-to-end property services by Raulji Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    <IndianRupee className="w-5 h-5" />
                    Get Investment Advisory
                  </Button>
                </Link>
                <a href="https://wa.me/918511187689?text=Hi%2C%20I%20am%20interested%20in%20land%20investment%20in%20Vadodara" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="xl">WhatsApp Us</Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4 animate-fade-up delay-300">
                ✅ Legal Verified Plots &nbsp;|&nbsp; ✅ Complete Documentation &nbsp;|&nbsp; ✅ Expert Advisory
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Our Land Investment Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete property advisory from site selection to registration in Vadodara & Anand.
              </p>
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

        {/* Why Invest Here */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
                Why Invest in Vadodara & Anand?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                One of Gujarat's fastest-growing regions with massive infrastructure development.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyInvest.map((w) => (
                <div key={w.title} className="glass-card rounded-2xl p-6 hover-lift">
                  <h3 className="text-lg font-bold text-secondary mb-2">{w.title}</h3>
                  <p className="text-muted-foreground text-sm">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Investment Locations</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Prime land investment areas across Vadodara and Anand districts.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((loc) => (
                <div key={loc.area} className="glass-card rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {loc.area}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {loc.spots.map((spot) => (
                      <span key={spot} className="px-3 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                        {spot}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Types + Lead Form */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Types of Land Investment</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We assist with all types of land transactions in Vadodara and Anand districts.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {investmentTypes.map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-secondary">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ServiceLeadForm serviceName="Land Investment - Vadodara & Anand" />
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="brand-gradient rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Interested in Land Investment?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Talk to Dharmendrasinh Raulji for expert land advisory in Vadodara & Anand.
                Free consultation available.
              </p>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Get Free Advisory <ArrowRight className="w-5 h-5" />
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

export default LandInvestment;
