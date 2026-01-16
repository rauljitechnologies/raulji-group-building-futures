import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Monitor, 
  Shield, 
  TrendingUp, 
  Scale, 
  Globe,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    id: "consulting",
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic planning and operational excellence to drive sustainable business growth.",
    features: [
      "Business Strategy Development",
      "Company Registration & Structuring",
      "Process Optimization",
      "Compliance Management",
      "Growth Advisory",
      "Operational Excellence",
    ],
    href: "/services/consulting",
  },
  {
    id: "it",
    icon: Monitor,
    title: "IT Services",
    description: "Cutting-edge technology solutions for digital transformation and competitive advantage.",
    features: [
      "Custom Web Development",
      "Mobile App Development",
      "Cloud Solutions & DevOps",
      "AI & Machine Learning",
      "System Integration",
      "IT Infrastructure Management",
    ],
    href: "/services/it",
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Insurance & Property",
    description: "Comprehensive insurance solutions with specialized coverage for Gujarat region.",
    features: [
      "Life & Health Insurance",
      "Motor & Vehicle Insurance",
      "Commercial Insurance",
      "Property Insurance",
      "Industrial & Factory Coverage",
      "Claims Assistance",
    ],
    href: "/services/insurance",
  },
  {
    id: "finance",
    icon: TrendingUp,
    title: "Finance Advisory",
    description: "Expert financial guidance for wealth creation and fiscal optimization.",
    features: [
      "Tax Planning & Filing",
      "Investment Advisory",
      "Wealth Management",
      "Financial Planning",
      "Audit & Assurance",
      "Business Valuation",
    ],
    href: "/services/finance",
  },
  {
    id: "legal",
    icon: Scale,
    title: "Legal Advisory",
    description: "Professional legal services for corporate governance and regulatory compliance.",
    features: [
      "Corporate Law",
      "Contract Drafting & Review",
      "Intellectual Property",
      "Dispute Resolution",
      "Regulatory Compliance",
      "Due Diligence",
    ],
    href: "/services/legal",
  },
  {
    id: "digital",
    icon: Globe,
    title: "Digital Solutions",
    description: "Complete digital presence solutions for brand building and customer engagement.",
    features: [
      "Website Development",
      "E-commerce Solutions",
      "Digital Marketing",
      "SEO & Content Strategy",
      "Social Media Management",
      "Brand Development",
    ],
    href: "/services/digital",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-hero-gradient">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6 animate-fade-up">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                Comprehensive Solutions for{" "}
                <span className="text-gradient">Every Business Need</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up delay-200">
                From strategic consulting to cutting-edge technology, we deliver 
                end-to-end solutions that drive sustainable business success.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-up ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 brand-gradient rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold text-secondary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    <Link to={service.href}>
                      <Button variant="hero" size="lg">
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className={`glass-card rounded-3xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="text-lg font-semibold text-secondary mb-6">
                      Key Services
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="brand-gradient rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive solutions can help you achieve your goals.
              </p>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
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

export default Services;
