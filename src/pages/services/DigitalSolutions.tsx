import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ServiceLeadForm } from "@/components/services/ServiceLeadForm";
import {
  Globe, Megaphone, Search, Palette, ShoppingCart, Share2, ArrowRight, CheckCircle2
} from "lucide-react";

const features = [
  { icon: Globe, title: "Website Development", desc: "Responsive, SEO-optimized websites that convert visitors into customers." },
  { icon: ShoppingCart, title: "eCommerce Solutions", desc: "Online stores with Shopify, WooCommerce, or custom eCommerce platforms." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Google Ads, Facebook Ads, LinkedIn campaigns for lead generation." },
  { icon: Search, title: "SEO & Content Strategy", desc: "On-page, off-page SEO, content marketing, and keyword optimization." },
  { icon: Share2, title: "Social Media Management", desc: "Content creation, scheduling, community management across all platforms." },
  { icon: Palette, title: "Branding & UI/UX Design", desc: "Logo design, brand identity, UI/UX design for web and mobile apps." },
];

const digitalServices = [
  "WordPress & Custom Websites", "Shopify & WooCommerce Stores", "Google Ads (PPC)",
  "Facebook & Instagram Ads", "SEO Optimization", "Content Marketing",
  "Social Media Management", "Email Marketing", "Logo & Brand Design",
  "UI/UX Design", "Video Marketing", "Analytics & Reporting",
];

const DigitalSolutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          "name": "Digital Marketing & Web Solutions - Raulji Group",
          "description": "Website development, eCommerce, SEO, digital marketing, and branding services in Vadodara, Gujarat.",
          "provider": { "@type": "Organization", "name": "Raulji Group" },
          "areaServed": { "@type": "Country", "name": "India" },
          "serviceType": "Digital Solutions"
        })
      }} />
      <main>
        <section className="pt-40 pb-20 bg-hero-gradient">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-semibold text-accent-foreground mb-6 animate-fade-up">
                🌐 Digital Marketing & Branding
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                Grow Your Brand with{" "}
                <span className="text-gradient">Digital Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200">
                Website development, SEO, digital marketing & branding — everything you need
                to dominate the digital space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
                <Link to="/contact"><Button variant="hero" size="xl">Start Digital Growth <ArrowRight className="w-5 h-5" /></Button></Link>
                <a href="https://wa.me/918511187689?text=Hi%2C%20I%20need%20digital%20marketing%20services" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="xl">WhatsApp Us</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Our Digital Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Complete digital presence solutions for modern businesses.</p>
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
                <h2 className="text-3xl font-bold text-secondary mb-6">Full Digital Marketing Suite</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From SEO to paid ads, content to social media — we handle your complete digital strategy.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {digitalServices.map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-secondary">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ServiceLeadForm serviceName="Digital Solutions" />
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="brand-gradient rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">Ready to Go Digital?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get a free digital audit and marketing strategy for your business.
              </p>
              <Link to="/contact"><Button variant="heroOutline" size="xl">Get Free Audit <ArrowRight className="w-5 h-5" /></Button></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalSolutions;
