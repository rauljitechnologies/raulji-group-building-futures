import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ServiceLeadForm } from "@/components/services/ServiceLeadForm";
import {
  TrendingUp, Calculator, PiggyBank, BarChart3, FileSpreadsheet, Search, ArrowRight, CheckCircle2
} from "lucide-react";

const features = [
  { icon: Calculator, title: "Tax Planning & Filing", desc: "Income tax, GST, TDS filing and tax optimization for individuals and businesses." },
  { icon: TrendingUp, title: "Investment Advisory", desc: "Mutual funds, stocks, bonds, and SIP advisory for wealth creation." },
  { icon: PiggyBank, title: "Wealth Management", desc: "Portfolio management, retirement planning, and estate planning services." },
  { icon: BarChart3, title: "Financial Planning", desc: "Cash flow management, budgeting, and financial goal setting." },
  { icon: FileSpreadsheet, title: "Audit & Assurance", desc: "Statutory audit, internal audit, and compliance assurance." },
  { icon: Search, title: "Business Valuation", desc: "Company valuation, due diligence, and financial analysis for M&A." },
];

const services = [
  "Income Tax Return Filing", "GST Registration & Filing", "TDS Return Filing",
  "Financial Year Closing", "Bookkeeping & Accounting", "Payroll Management",
  "Mutual Fund Advisory", "SIP Planning", "Retirement Planning",
  "Balance Sheet Preparation", "Profit & Loss Statements", "Cash Flow Analysis",
];

const FinanceAdvisory = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          "name": "Finance Advisory & Tax Services - Raulji Group",
          "description": "Tax planning, GST filing, investment advisory, wealth management, and audit services in Vadodara, Gujarat.",
          "provider": { "@type": "Organization", "name": "Raulji Group" },
          "areaServed": { "@type": "State", "name": "Gujarat" },
          "serviceType": "Finance Advisory"
        })
      }} />
      <main>
        <section className="pt-40 pb-20 bg-hero-gradient">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-semibold text-accent-foreground mb-6 animate-fade-up">
                📊 Finance Advisory Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                Smart Financial Solutions for{" "}
                <span className="text-gradient">Business Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-up delay-200">
                Tax planning, accounting, investment advisory & wealth management.
                Expert financial guidance by Raulji Group, Vadodara.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
                <Link to="/contact"><Button variant="hero" size="xl">Get Financial Advice <ArrowRight className="w-5 h-5" /></Button></Link>
                <a href="https://wa.me/918511187689?text=Hi%2C%20I%20need%20finance%20advisory" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="xl">WhatsApp Us</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Our Finance Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Complete financial solutions from tax filing to wealth management.</p>
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
                <h2 className="text-3xl font-bold text-secondary mb-6">Accounting & Tax Services</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  End-to-end accounting, tax filing, and financial reporting for businesses of all sizes.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services.map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-secondary">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ServiceLeadForm serviceName="Finance Advisory" />
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="brand-gradient rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">Need Tax or Financial Help?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Get expert financial guidance. Free initial consultation available.
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

export default FinanceAdvisory;
