import { 
  Building2, 
  Factory, 
  Rocket, 
  Store, 
  Home, 
  Warehouse 
} from "lucide-react";

const industries = [
  {
    icon: Rocket,
    name: "Startups",
    description: "Accelerating innovation with strategic guidance and technology solutions",
  },
  {
    icon: Building2,
    name: "SMEs",
    description: "Empowering small and medium enterprises with scalable solutions",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Optimizing operations with digital transformation and compliance",
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Complete property insurance and legal advisory services",
  },
  {
    icon: Store,
    name: "Retail & E-commerce",
    description: "Driving growth with digital solutions and business consulting",
  },
  {
    icon: Warehouse,
    name: "Enterprise",
    description: "Enterprise-grade solutions for large-scale organizations",
  },
];

export function IndustriesSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Expertise Across{" "}
            <span className="text-gradient">Diverse Sectors</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our deep industry knowledge enables us to deliver tailored solutions 
            that address the unique challenges of each sector.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group text-center p-6 rounded-2xl bg-card hover:bg-accent transition-all duration-300 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-accent group-hover:bg-primary/10 rounded-2xl flex items-center justify-center transition-colors">
                <industry.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-secondary mb-2">{industry.name}</h3>
              <p className="text-sm text-muted-foreground hidden lg:block">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
