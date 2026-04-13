import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="relative brand-gradient rounded-3xl p-12 lg:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Build Your Future?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                Let's discuss how Raulji Group can help transform your business with our 
                comprehensive solutions and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="glass-card bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-primary-foreground mb-6">
                Get in Touch Today
              </h3>
              <div className="space-y-4">
                <a href="tel:+918511187689"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Call Us</div>
                    <div className="text-lg font-semibold text-primary-foreground">+91 8511187689</div>
                  </div>
                </a>
                <a href="mailto:rauljigroup@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Email Us</div>
                    <div className="text-lg font-semibold text-primary-foreground">rauljigroup@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
