import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOMeta } from "@/components/layout/SEOMeta";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { submitLead } from "@/lib/leadApi";
import { 
  Phone, Mail, MapPin, Clock, Send, MessageCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      source: "WEBSITE_CONTACT",
      notes: formData.message,
      customFields: {
        company: formData.company,
        service: formData.service,
      },
    });

    if (result.success) {
      toast({
        title: "✅ Message Sent Successfully!",
        description: "Our team will get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    } else {
      toast({
        title: "❌ Failed to Send",
        description: result.error || "Please try again or call us at +91 8511187689",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Phone, title: "Call Us", details: ["+91 8511187689"], action: "tel:+918511187689" },
    { icon: Mail, title: "Email Us", details: ["rauljigroup@gmail.com", "admin@raulji.com"], action: "mailto:rauljigroup@gmail.com" },
    { icon: MapPin, title: "Visit Us", details: ["Vadodara, Gujarat, India"] },
    { icon: Clock, title: "Business Hours", details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"] },
  ];

  const services = [
    "Company Registration (Pvt Ltd, LLP, Startup India)",
    "Legal & Compliance Support",
    "Website & App Development",
    "eCommerce & Digital Transformation",
    "SEO & Digital Marketing",
    "Branding & UI/UX Design",
    "Accounting, GST & Tax Filing",
    "Insurance Services",
    "Computer & Laptop Rental",
    "Other",
  ];

  return (
    <div className="min-h-screen">
      <SEOMeta
        title="Contact Raulji Group | Free Business Consultation — Vadodara, Gujarat"
        description="Contact Raulji Group for a free consultation. Call +91 8511187689 or email rauljigroup@gmail.com. Located in Vadodara, Gujarat. Mon–Sat 9AM–7PM."
        canonical="https://www.raulji.com/contact"
        keywords="contact Raulji Group, business consultation Vadodara, free consultation Gujarat"
      />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Raulji Group",
        "description": "Contact Raulji Group for free business consultation in Vadodara, Gujarat.",
        "url": "https://www.raulji.com/contact",
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "Raulji Group",
          "telephone": "+918511187689",
          "email": "rauljigroup@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vadodara",
            "addressRegion": "Gujarat",
            "addressCountry": "IN"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
              "opens": "09:00",
              "closes": "19:00"
            }
          ]
        }
      })}} />
      <main>
        <section className="pt-40 pb-20 bg-hero-gradient">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6 animate-fade-up">
                Get in Touch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                Let's Build Your{" "}
                <span className="text-gradient">Future Together</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-up delay-200">
                Ready to transform your business? Contact Raulji Group team 
                for a free consultation on any business service.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="glass-card rounded-3xl p-8 lg:p-12">
                  <h2 className="text-2xl font-bold text-secondary mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">Full Name *</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="Your Name" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">Phone / WhatsApp *</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="+91 8511187689" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="email@example.com" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-secondary mb-2">Company Name</label>
                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="Your Company" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-secondary mb-2">Service Interested In</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">Your Message *</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                        placeholder="Tell us about your project or inquiry..." />
                    </div>
                    <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="glass-card rounded-2xl p-6 hover-lift">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 brand-gradient rounded-xl flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">
                            {info.action ? (
                              <a href={info.action} className="hover:text-primary transition-colors">{detail}</a>
                            ) : detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                <a href="https://wa.me/918511187689" target="_blank" rel="noopener noreferrer"
                  className="block glass-card rounded-2xl p-6 bg-green-50 border-green-200 hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">Chat on WhatsApp</h3>
                      <p className="text-sm text-muted-foreground">Quick response guaranteed</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
