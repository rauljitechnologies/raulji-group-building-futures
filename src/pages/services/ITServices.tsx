import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOMeta } from "@/components/layout/SEOMeta";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ServiceLeadForm } from "@/components/services/ServiceLeadForm";
import {
  Monitor, Code, Cloud, Cpu, Smartphone, Globe, ArrowRight, CheckCircle2, Bot, Layers, Database, Rocket
} from "lucide-react";

const features = [
  { icon: Code, title: "Website Development", desc: "Custom websites using React, Next.js, WordPress — responsive, SEO-optimized, and conversion-focused." },
  { icon: Smartphone, title: "Mobile App Development", desc: "iOS & Android apps with React Native, Flutter — from MVP to enterprise-grade solutions." },
  { icon: Layers, title: "SaaS Development", desc: "Build scalable SaaS products with modern architecture, multi-tenancy, billing, and analytics." },
  { icon: Globe, title: "E-Commerce Solutions", desc: "Shopify, WooCommerce, and custom e-commerce platforms with payment gateway integration." },
  { icon: Cloud, title: "Cloud Solutions & DevOps", desc: "AWS, Azure, Google Cloud setup, migration, CI/CD pipelines, and infrastructure management." },
  { icon: Bot, title: "AI & Automation", desc: "AI chatbots, workflow automation, RPA, machine learning models, and intelligent business solutions." },
  { icon: Cpu, title: "System Integration & ERP", desc: "ERP, CRM, API integrations — connect all your business systems for seamless operations." },
  { icon: Database, title: "IT Infrastructure", desc: "Network setup, server management, cybersecurity, cloud hosting, and 24/7 IT support." },
  { icon: Rocket, title: "Digital Marketing & SEO", desc: "Google Ads, SEO, social media marketing, content strategy, and performance analytics." },
];

const techStack = [
  "React & Next.js", "Node.js & Express", "Python & Django", "Flutter & React Native",
  "AWS & Azure", "Docker & Kubernetes", "MongoDB & PostgreSQL", "WordPress & Shopify",
  "Firebase & Supabase", "GraphQL & REST APIs", "TypeScript", "CI/CD Pipelines",
  "TensorFlow & OpenAI", "Stripe & Razorpay", "Figma to Code", "SEO & Analytics Tools",
];

const ITServices = () => {
  return (
    <div className="min-h-screen">
      <SEOMeta
        title="IT Services & Web Development Vadodara | Mobile Apps, SaaS, AI Solutions — Raulji Group"
        description="Custom website development, mobile apps, SaaS, AI & automation, cloud solutions by Raulji Group in Vadodara, Gujarat. Full-stack React, Node.js, Flutter development. Call +91 8511187689."
        canonical="https://www.raulji.com/services/it"
        keywords="IT services Vadodara, web development Gujarat, mobile app development India, SaaS development Vadodara, AI automation Gujarat"
      />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          "name": "IT Services, Web & App Development - Raulji Group",
          "description": "Custom website development, mobile app development, SaaS development, AI & automation, cloud solutions in Vadodara, Gujarat, India.",
          "url": "https://www.raulji.com/services/it",
          "provider": { "@type": "Organization", "name": "Raulji Group", "url": "https://www.raulji.com", "telephone": "+918511187689", "email": "rauljigroup@gmail.com" },
          "areaServed": { "@type": "Country", "name": "India" },
          "serviceType": ["Website Development", "Mobile App Development", "SaaS Development", "AI & Automation", "Cloud Solutions"],
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.raulji.com/"},
              {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.raulji.com/services"},
              {"@type": "ListItem", "position": 3, "name": "IT Services", "item": "https://www.raulji.com/services/it"}
            ]
          }
        })
      }} />
      <main>
        <section className="pt-40 pb-20 bg-hero-gradient">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-semibold text-accent-foreground mb-6 animate-fade-up">
                💻 IT & Digital Solutions by Raulji Technologies
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                Transform Your Business with{" "}
                <span className="text-gradient">Cutting-Edge Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200">
                Website development, mobile apps, SaaS products, AI & automation, cloud solutions — powered by Raulji Technologies.
                From startup MVP to enterprise-scale digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
                <Link to="/contact"><Button variant="hero" size="xl">Start Your Project <ArrowRight className="w-5 h-5" /></Button></Link>
                <a href="https://wa.me/918511187689?text=Hi%2C%20I%20need%20IT%20services" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="xl">WhatsApp Us</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Our IT & Development Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">End-to-end technology solutions — from concept to deployment and beyond.</p>
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
                <h2 className="text-3xl font-bold text-secondary mb-6">Technologies We Work With</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our expert Raulji Technologies team uses the latest technologies to build scalable, secure, and high-performance solutions.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {techStack.map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-secondary">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ServiceLeadForm serviceName="IT Services" />
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="brand-gradient rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">Have a Project Idea?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's turn your vision into reality. Get a free project estimate today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"><Button variant="heroOutline" size="xl">Get Free Estimate <ArrowRight className="w-5 h-5" /></Button></Link>
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

export default ITServices;
