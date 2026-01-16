import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "CEO, TechVentures India",
    content: "Raulji Group transformed our digital presence completely. Their IT solutions and strategic consulting helped us scale from a startup to a market leader in just 3 years.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Director, Sharma Industries",
    content: "The insurance advisory services from Raulji Group gave us complete peace of mind. Their team understood our manufacturing needs and provided comprehensive coverage.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "Founder, DesaiTech Solutions",
    content: "Professional, reliable, and innovative. The business consulting team helped us structure our company properly and navigate complex compliance requirements.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Trusted by{" "}
            <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our clients say about their experience partnering with Raulji Group.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-2xl p-8 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 brand-gradient rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-secondary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
