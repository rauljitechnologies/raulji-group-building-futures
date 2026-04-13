import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOMeta } from "@/components/layout/SEOMeta";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, Eye, Heart, Shield, Lightbulb, Users, ArrowRight, Quote, Briefcase, Monitor, TrendingUp, Scale, HandHeart, GraduationCap
} from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Leadership", description: "Visionary thinking that guides growth and inspires teams to achieve excellence." },
  { icon: Shield, title: "Trust", description: "Transparent and ethical partnerships built on integrity and accountability." },
  { icon: Heart, title: "Innovation", description: "Future-focused solutions that create measurable results and lasting impact." },
  { icon: Users, title: "Client Focus", description: "Our clients' success is the measure of our own success — always." },
];

const groupServices = [
  { icon: Briefcase, title: "Business Consulting", desc: "Strategic direction to overcome challenges and scale sustainably." },
  { icon: Monitor, title: "Information Technology", desc: "Modern digital solutions that streamline operations and drive innovation." },
  { icon: TrendingUp, title: "Finance & Investment Consulting", desc: "Expert insights for financial planning and investment growth." },
  { icon: Scale, title: "Legal Advisory", desc: "Comprehensive legal support to ensure compliance and mitigate risk." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <SEOMeta
        title="About Raulji Group | Founded by Raulji Brothers & Sons — Vadodara, Gujarat"
        description="Learn about Raulji Group — a dynamic holding company founded by Dharmendrasinh Raulji in Vadodara, Gujarat. 15+ years, 500+ clients, 7+ business verticals across India."
        canonical="https://www.raulji.com/about"
        keywords="about Raulji Group, Dharmendrasinh Raulji, Raulji Brothers and Sons, holding company Vadodara"
      />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "AboutPage",
          "name": "About Raulji Group - Founded by Raulji Brothers and Sons",
          "description": "Raulji Group is a dynamic parent holding company driving growth across multiple sectors through innovation, strategy, and trust. Founded by Raulji Brothers and Sons, led by Dharmendrasinh Raulji.",
          "url": "https://www.raulji.com/about"
        })
      }} />
      <main>
        <section className="pt-40 pb-20 bg-hero-gradient">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6 animate-fade-up">
                About Raulji Group
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                We Don't Just Build Businesses.{" "}
                <span className="text-gradient">We Build Futures.</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up delay-200">
                Founded by Raulji Brothers and Sons — a dynamic parent holding company driving growth 
                across multiple sectors through innovation, strategy, and trust.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-up">
                <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
                  A Legacy of Excellence
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Raulji Group is a dynamic parent holding company, driving growth across multiple 
                    sectors through innovation, strategy, and trust. With a foundation built on 
                    relationships, leadership, and integrity, we empower our group companies to lead, 
                    evolve, and thrive in today's competitive landscape.
                  </p>
                  <p>
                    As a holding group, we oversee and support a diversified portfolio of businesses 
                    offering expertise in business consulting, information technology, financial services, 
                    and legal advisory. Our focus is on building long-term value, accelerating 
                    transformation, and delivering impact across industries.
                  </p>
                  <p>
                    Today, under the leadership of Chairman <strong>Dharmendrasinh Raulji</strong>, the 
                    group continues to expand its footprint while staying true to its founding principles 
                    of integrity, innovation, and client-centric service.
                  </p>
                </div>
              </div>
              
              <div className="relative animate-fade-up delay-200">
                <div className="glass-card rounded-3xl p-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-accent/50 rounded-2xl">
                      <div className="text-4xl font-bold text-secondary">15+</div>
                      <div className="text-sm text-muted-foreground">Years of Trust</div>
                    </div>
                    <div className="text-center p-6 bg-accent/50 rounded-2xl">
                      <div className="text-4xl font-bold text-secondary">500+</div>
                      <div className="text-sm text-muted-foreground">Clients Served</div>
                    </div>
                    <div className="text-center p-6 bg-accent/50 rounded-2xl">
                      <div className="text-4xl font-bold text-secondary">7+</div>
                      <div className="text-sm text-muted-foreground">Business Verticals</div>
                    </div>
                    <div className="text-center p-6 bg-accent/50 rounded-2xl">
                      <div className="text-4xl font-bold text-secondary">100+</div>
                      <div className="text-sm text-muted-foreground">Team Members</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Group Services */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
                Our Group Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
                Diversified <span className="text-gradient">Business Portfolio</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {groupServices.map((s, i) => (
                <div key={s.title} className="glass-card rounded-2xl p-6 hover-lift animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-14 h-14 brand-gradient rounded-2xl flex items-center justify-center mb-4">
                    <s.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chairman's Message */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-3xl p-10 lg:p-16 text-center animate-fade-up">
                <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
                <blockquote className="text-xl lg:text-2xl text-secondary leading-relaxed mb-8">
                  "At Raulji Group, we don't just build businesses — we build futures. Our 
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
                    <div className="text-muted-foreground">Chairman & Founder, Raulji Group</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="glass-card rounded-3xl p-10 hover-lift animate-fade-up">
                <div className="w-16 h-16 brand-gradient rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To be a global leader among holding companies, enabling businesses to flourish 
                  through innovation and strategic guidance.
                </p>
              </div>
              
              <div className="glass-card rounded-3xl p-10 hover-lift animate-fade-up delay-100">
                <div className="w-16 h-16 brand-gradient rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To deliver sustainable success by fostering trust, promoting innovation, and 
                  providing expert leadership across all business verticals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
                Our Core Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
                The Principles That{" "}
                <span className="text-gradient">Guide Us</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={value.title} className="text-center p-8 glass-card rounded-2xl hover-lift animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
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

        {/* Social Impact */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6">
                Social Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-8">
                Giving Back to the <span className="text-gradient">Community</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card rounded-2xl p-8 hover-lift">
                  <HandHeart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Food Donation Drives</h3>
                  <p className="text-muted-foreground">
                    Regular food distribution programs to support underprivileged communities and ensure no one goes hungry.
                  </p>
                </div>
                <div className="glass-card rounded-2xl p-8 hover-lift">
                  <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-3">Educational Support Programs</h3>
                  <p className="text-muted-foreground">
                    Scholarships, learning resources, and mentorship programs to uplift underprivileged lives through education.
                  </p>
                </div>
              </div>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"><Button variant="heroOutline" size="xl">Start the Conversation <ArrowRight className="w-5 h-5" /></Button></Link>
                <Link to="/team"><Button variant="heroOutline" size="xl">Meet Our Team</Button></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
