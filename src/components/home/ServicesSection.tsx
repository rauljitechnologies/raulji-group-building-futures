import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Monitor, 
  Shield, 
  TrendingUp, 
  Scale, 
  Globe,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic planning, business registration, structuring, and comprehensive compliance support for growing enterprises.",
    href: "/services/consulting",
    features: ["Business Strategy", "Registration & Structuring", "Compliance Support"],
  },
  {
    icon: Monitor,
    title: "IT Services",
    description: "End-to-end technology solutions including web development, mobile apps, cloud infrastructure, and AI-driven digital transformation.",
    href: "/services/it",
    features: ["Web & App Development", "Cloud & DevOps", "AI Solutions"],
  },
  {
    icon: Shield,
    title: "Insurance & Property",
    description: "Comprehensive insurance coverage for life, health, motor, and property with specialized services across Gujarat.",
    href: "/services/insurance",
    features: ["Life & Health Insurance", "Property Insurance", "Claim Assistance"],
  },
  {
    icon: TrendingUp,
    title: "Finance Advisory",
    description: "Expert financial consulting covering accounting, tax planning, investment strategies, and wealth management.",
    href: "/services/finance",
    features: ["Tax Planning", "Investment Advisory", "Wealth Management"],
  },
  {
    icon: Scale,
    title: "Legal Advisory",
    description: "Professional legal services including corporate law, contract drafting, dispute resolution, and regulatory compliance.",
    href: "/services/legal",
    features: ["Corporate Law", "Contract Drafting", "Dispute Resolution"],
  },
  {
    icon: Globe,
    title: "Digital Solutions",
    description: "Complete digital presence solutions with websites, e-commerce platforms, digital marketing, and brand development.",
    href: "/services/digital",
    features: ["Website Development", "E-commerce", "Digital Marketing"],
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Comprehensive Solutions for{" "}
            <span className="text-gradient">Business Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From strategic consulting to cutting-edge technology, we provide end-to-end 
            solutions that drive sustainable business success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group glass-card rounded-2xl p-8 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 brand-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-2 text-primary font-medium">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/services">
            <Button variant="hero" size="lg">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
