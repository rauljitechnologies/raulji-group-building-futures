import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  Building2, 
  Factory, 
  Home, 
  Store, 
  Warehouse,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const industries = [
  {
    id: "startups",
    icon: Rocket,
    title: "Startups",
    description: "Accelerating innovation with strategic guidance, technology solutions, and funding support.",
    solutions: [
      "Business Model Validation",
      "MVP Development",
      "Funding & Investment Advisory",
      "Technology Stack Selection",
      "Growth Hacking Strategies",
      "Compliance & Legal Setup",
    ],
  },
  {
    id: "sme",
    icon: Building2,
    title: "Small & Medium Enterprises",
    description: "Empowering SMEs with scalable solutions for sustainable growth and market expansion.",
    solutions: [
      "Business Process Optimization",
      "Digital Transformation",
      "Financial Planning",
      "Insurance Solutions",
      "HR & Compliance",
      "Technology Adoption",
    ],
  },
  {
    id: "enterprise",
    icon: Warehouse,
    title: "Large Enterprises",
    description: "Enterprise-grade solutions for complex organizational challenges and strategic initiatives.",
    solutions: [
      "Enterprise Architecture",
      "System Integration",
      "Risk Management",
      "Corporate Insurance",
      "Strategic Consulting",
      "Digital Innovation",
    ],
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    description: "Optimizing operations with digital transformation, compliance, and industrial solutions.",
    solutions: [
      "Industrial Insurance",
      "Factory Compliance",
      "Process Automation",
      "Supply Chain Optimization",
      "Quality Management",
      "Safety & Risk Assessment",
    ],
  },
  {
    id: "realestate",
    icon: Home,
    title: "Real Estate",
    description: "Complete property insurance and legal advisory services for the real estate sector.",
    solutions: [
      "Property Insurance",
      "Land Insurance (Gujarat)",
      "Legal Due Diligence",
      "Title Verification",
      "Transaction Advisory",
      "Development Consulting",
    ],
  },
  {
    id: "retail",
    icon: Store,
    title: "Retail & E-commerce",
    description: "Driving growth with digital solutions, business consulting, and omnichannel strategies.",
    solutions: [
      "E-commerce Development",
      "Inventory Management",
      "Payment Integration",
      "Digital Marketing",
      "Customer Analytics",
      "Business Insurance",
    ],
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-hero-gradient">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6 animate-fade-up">
                Industries We Serve
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                Deep Expertise Across{" "}
                <span className="text-gradient">Diverse Sectors</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up delay-200">
                Our industry-specific knowledge enables us to deliver tailored solutions 
                that address the unique challenges of each sector.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={industry.id}
                  id={industry.id}
                  className="glass-card rounded-3xl p-8 hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 brand-gradient rounded-2xl flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-secondary mb-3">
                    {industry.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {industry.description}
                  </p>
                  
                  <h4 className="text-sm font-semibold text-secondary mb-4">
                    Our Solutions
                  </h4>
                  
                  <ul className="space-y-2 mb-6">
                    {industry.solutions.slice(0, 4).map((solution) => (
                      <li key={solution} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Get Industry Solutions
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
                Industry-Specific Expertise
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let our industry experts craft customized solutions for your unique challenges.
              </p>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Discuss Your Industry Needs
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

export default Industries;
