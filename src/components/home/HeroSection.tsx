import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
                India's Trusted Business Partner
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight animate-fade-up delay-100">
              We Don't Just Build{" "}
              <span className="text-gradient">Businesses.</span>
              <br />
              We Build{" "}
              <span className="text-gradient">Futures.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl animate-fade-up delay-200">
              Raulji Group is a diversified holding company delivering excellence across 
              IT, consulting, insurance, finance, and legal services with a focus on 
              long-term value creation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="xl">
                  Explore Our Story
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-up delay-400">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-secondary">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-secondary">6</div>
                <div className="text-sm text-muted-foreground">Business Verticals</div>
              </div>
            </div>
          </div>

          {/* Visual Cards */}
          <div className="relative lg:pl-8 animate-fade-up delay-200">
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card rounded-3xl p-8 shadow-elevated">
                <div className="grid gap-6">
                  <div className="flex items-center gap-4 p-4 bg-accent/50 rounded-2xl hover-lift">
                    <div className="w-14 h-14 brand-gradient rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">Business Growth</h3>
                      <p className="text-sm text-muted-foreground">Strategic consulting & IT solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-accent/50 rounded-2xl hover-lift">
                    <div className="w-14 h-14 brand-gradient rounded-xl flex items-center justify-center">
                      <Shield className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">Risk Protection</h3>
                      <p className="text-sm text-muted-foreground">Complete insurance coverage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-accent/50 rounded-2xl hover-lift">
                    <div className="w-14 h-14 brand-gradient rounded-xl flex items-center justify-center">
                      <Users className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">Expert Team</h3>
                      <p className="text-sm text-muted-foreground">Experienced professionals</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-6 py-3 shadow-elevated animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium text-secondary">Trusted Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
