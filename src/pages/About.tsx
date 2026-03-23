import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import rauljiLogo from "@/assets/raulji-logo.webp";
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Lightbulb, 
  Users,
  ArrowRight,
  Quote 
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our business dealings.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace change and continuously seek better solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of working together to achieve great results.",
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Our clients' success is the measure of our own success.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-hero-gradient">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6 animate-fade-up">
                About Raulji Group
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                Building Businesses,{" "}
                <span className="text-gradient">Shaping Futures</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up delay-200">
                A legacy of trust, innovation, and excellence spanning over 15 years 
                in business consulting, technology, and financial services.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-up">
                <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
                  A Legacy of Excellence
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Raulji Group was founded by the visionary Raulji Brothers and Sons with a 
                    simple yet powerful mission: to help businesses thrive through ethical 
                    practices, innovative solutions, and unwavering commitment to excellence.
                  </p>
                  <p>
                    What started as a small consulting practice in Gujarat has grown into a 
                    diversified holding company with operations spanning IT services, business 
                    consulting, insurance advisory, financial services, and legal support.
                  </p>
                  <p>
                    Today, under the leadership of Chairman Dharmendrasinh Raulji, the group 
                    continues to expand its footprint while staying true to its founding 
                    principles of integrity, innovation, and client-centric service.
                  </p>
                </div>
              </div>
              
              <div className="relative animate-fade-up delay-200">
                <div className="glass-card rounded-3xl p-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-accent/50 rounded-2xl">
                      <div className="text-4xl font-bold text-secondary">15+</div>
                      <div className="text-sm text-muted-foreground">Years</div>
                    </div>
                    <div className="text-center p-6 bg-accent/50 rounded-2xl">
                      <div className="text-4xl font-bold text-secondary">500+</div>
                      <div className="text-sm text-muted-foreground">Clients</div>
                    </div>
                    <div className="text-center p-6 bg-accent/50 rounded-2xl">
                      <div className="text-4xl font-bold text-secondary">6</div>
                      <div className="text-sm text-muted-foreground">Verticals</div>
                    </div>
                    <div className="text-center p-6 bg-accent/50 rounded-2xl">
                      <div className="text-4xl font-bold text-secondary">100+</div>
                      <div className="text-sm text-muted-foreground">Team</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chairman's Message */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-3xl p-10 lg:p-16 text-center animate-fade-up">
                <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
                <blockquote className="text-xl lg:text-2xl text-secondary leading-relaxed mb-8">
                  "At Raulji Group, we don't just build businesses—we build futures. Our 
                  commitment to ethical leadership, innovation, and long-term value creation 
                  has been the cornerstone of our success. We believe that when our clients 
                  succeed, we succeed."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 brand-gradient rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-2xl">DR</span>
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold text-secondary">Dharmendrasinh Raulji</div>
                    <div className="text-muted-foreground">Chairman, Raulji Group</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="glass-card rounded-3xl p-10 hover-lift animate-fade-up">
                <div className="w-16 h-16 brand-gradient rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To be India's most trusted and innovative business solutions partner, 
                  empowering enterprises of all sizes to achieve sustainable growth and 
                  create lasting value for all stakeholders.
                </p>
              </div>
              
              <div className="glass-card rounded-3xl p-10 hover-lift animate-fade-up delay-100">
                <div className="w-16 h-16 brand-gradient rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To deliver comprehensive business solutions with integrity, innovation, 
                  and excellence, while fostering long-term partnerships that drive 
                  mutual success and positive community impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
                The Principles That{" "}
                <span className="text-gradient">Guide Us</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-8 glass-card rounded-2xl hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="brand-gradient rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Partner with Excellence
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that trust Raulji Group for their growth journey.
              </p>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Start the Conversation
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

export default About;
