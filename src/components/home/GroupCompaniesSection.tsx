import { Monitor, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const companies = [
  {
    name: "Raulji Technologies",
    description: "Cutting-edge IT solutions powering digital transformation across industries.",
    icon: Monitor,
    services: [
      "IT Services & Consulting",
      "Website & Web App Development",
      "Mobile App Development",
      "Cloud, DevOps & AI Solutions",
      "Digital Transformation",
    ],
    href: "/services/it",
    color: "from-primary to-blue-600",
  },
  {
    name: "Raulji Consulting Services",
    description: "Comprehensive business advisory driving growth and operational excellence.",
    icon: Briefcase,
    services: [
      "Business Consulting & Strategy",
      "Business Registration & Structuring",
      "Insurance Consulting (All Types)",
      "Accounting, Tax & Compliance",
      "Website Development for Businesses",
    ],
    href: "/services/consulting",
    color: "from-secondary to-slate-700",
  },
];

export function GroupCompaniesSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
            Our Companies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            The Raulji Group{" "}
            <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Two specialized companies working together to deliver comprehensive 
            business solutions under the Raulji Group umbrella.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="glass-card rounded-3xl p-8 lg:p-10 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${company.color} flex items-center justify-center mb-6`}>
                <company.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-secondary mb-3">
                {company.name}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {company.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {company.services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to={company.href}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
