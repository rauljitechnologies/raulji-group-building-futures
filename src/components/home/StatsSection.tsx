import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "15+",
    label: "Years of Excellence",
    description: "Serving businesses since 2009",
  },
  {
    icon: Users,
    value: "500+",
    label: "Clients Served",
    description: "Across multiple industries",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Client Retention",
    description: "Long-term partnerships",
  },
  {
    icon: Award,
    value: "50+",
    label: "Industry Awards",
    description: "Recognition of excellence",
  },
];

export function StatsSection() {
  return (
    <section className="section-padding brand-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-primary-foreground/90 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-primary-foreground/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
