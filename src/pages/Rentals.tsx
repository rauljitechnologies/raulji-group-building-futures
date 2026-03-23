import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Monitor,
  Laptop,
  Server,
  Printer,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Shield,
  Truck,
  Clock,
  IndianRupee,
  Star,
  Send,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";

const rentalProducts = [
  {
    icon: Monitor,
    title: "Monitor Rental",
    description: "HD, Full HD & 4K monitors for offices, events, and temporary setups in Vadodara.",
    sizes: ["22 inch", "24 inch", "27 inch", "32 inch", "Curved"],
    startingPrice: "₹500/month",
    popular: false,
  },
  {
    icon: Laptop,
    title: "Laptop Rental",
    description: "Business laptops, gaming laptops & workstations available for rent across Vadodara.",
    sizes: ["i3 Basic", "i5 Business", "i7 Performance", "Workstation", "MacBook"],
    startingPrice: "₹2,000/month",
    popular: true,
  },
  {
    icon: Server,
    title: "Desktop / Computer Rental",
    description: "Complete desktop setups with keyboard, mouse & monitor for offices and labs in Vadodara.",
    sizes: ["Basic Office PC", "Business PC", "High-Performance", "All-in-One", "Custom Config"],
    startingPrice: "₹1,500/month",
    popular: false,
  },
  {
    icon: Printer,
    title: "Printer & Peripheral Rental",
    description: "Printers, scanners, projectors & networking equipment on rent in Vadodara.",
    sizes: ["Inkjet Printer", "Laser Printer", "Projector", "Scanner", "Networking"],
    startingPrice: "₹800/month",
    popular: false,
  },
];

const whyChooseUs = [
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Lowest rental rates in Vadodara with flexible daily, weekly & monthly plans.",
  },
  {
    icon: Truck,
    title: "Free Delivery in Vadodara",
    description: "Free doorstep delivery & pickup across Vadodara city. Pan-India shipping also available.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "All devices are tested, sanitized & quality-checked before delivery.",
  },
  {
    icon: Clock,
    title: "Quick Setup",
    description: "Same-day delivery available. Get your rental devices within hours in Vadodara.",
  },
  {
    icon: Headphones,
    title: "24/7 Technical Support",
    description: "Dedicated support team for troubleshooting and device replacement.",
  },
  {
    icon: Star,
    title: "Trusted by 500+ Clients",
    description: "Corporates, startups, students & event organizers trust Raulji Group for rentals.",
  },
];

const useCases = [
  "Corporate Offices & Co-working Spaces",
  "IT Training Centers & Computer Labs",
  "Exhibitions, Events & Conferences",
  "Work From Home Setup",
  "Student Projects & Exams",
  "Short-term Project Teams",
  "Startup & New Business Setup",
  "Government & Institutional Use",
];

const faqs = [
  {
    q: "What is the minimum rental period for computers in Vadodara?",
    a: "We offer flexible rental plans starting from 1 day. Daily, weekly, and monthly rental options are available for all devices.",
  },
  {
    q: "Do you provide delivery across Vadodara?",
    a: "Yes! We provide free doorstep delivery and pickup across all areas of Vadodara including Alkapuri, Fatehgunj, Manjalpur, Gotri, Waghodia Road, Harni, and more.",
  },
  {
    q: "Is Pan-India delivery available?",
    a: "Yes, we offer Pan-India delivery for bulk orders. Shipping charges may apply for locations outside Vadodara.",
  },
  {
    q: "What if a rented device stops working?",
    a: "We provide immediate replacement and 24/7 technical support. Just call or WhatsApp us and we'll resolve it within hours.",
  },
  {
    q: "Can I rent computers for events or exams?",
    a: "Absolutely! We specialize in bulk computer rentals for events, conferences, exams, and training programs in Vadodara and across Gujarat.",
  },
  {
    q: "Do you offer online ordering?",
    a: "Yes, you can order online through our website or simply WhatsApp us your requirements. We'll arrange everything for you.",
  },
];

const Rentals = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    device: "",
    quantity: "",
    duration: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Rental Inquiry Sent!",
      description: "Our team will contact you within 1 hour with the best rental quote.",
    });
    setFormData({ name: "", email: "", phone: "", device: "", quantity: "", duration: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Raulji Group - Computer Rental Services Vadodara",
          "description": "Best computer, laptop & monitor rental services in Vadodara. Affordable daily, weekly & monthly rentals with free delivery. Pan-India delivery available.",
          "url": "https://raulji.lovable.app/rentals",
          "telephone": "+919876543210",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vadodara",
            "addressRegion": "Gujarat",
            "addressCountry": "IN"
          },
          "areaServed": [
            { "@type": "City", "name": "Vadodara" },
            { "@type": "Country", "name": "India" }
          ],
          "priceRange": "₹500 - ₹10,000/month",
          "openingHours": "Mo-Sa 09:00-19:00",
          "sameAs": ["https://wa.me/919876543210"]
        })
      }} />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container-wide relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-semibold text-accent-foreground mb-6 animate-fade-up">
                🖥️ #1 Computer Rental Service in Vadodara
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-up delay-100">
                Rent Laptops, Monitors & Computers in{" "}
                <span className="text-gradient">Vadodara</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up delay-200">
                Affordable computer rental services in Vadodara starting at just ₹500/month. 
                Free delivery across Vadodara. <strong>Pan-India delivery available.</strong> 
                Perfect for offices, events, training, exams & more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
                <a href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20computer%20rental%20in%20Vadodara" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us Now
                  </Button>
                </a>
                <a href="#rental-inquiry">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4 animate-fade-up delay-300">
                ✅ Same-day delivery &nbsp;|&nbsp; ✅ No deposit required &nbsp;|&nbsp; ✅ Pan-India shipping
              </p>
            </div>
          </div>
        </section>

        {/* Rental Products */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
                Our Rental Catalog
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
                Computer & IT Equipment for Rent in Vadodara
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our wide range of laptops, desktops, monitors and peripherals. 
                All devices are quality-tested and ready for immediate delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {rentalProducts.map((product) => (
                <div key={product.title} className="glass-card rounded-3xl p-8 hover-lift relative overflow-hidden">
                  {product.popular && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 brand-gradient rounded-2xl flex items-center justify-center shrink-0">
                      <product.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary">{product.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{product.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.sizes.map((size) => (
                      <span key={size} className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        {size}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">Starting at</span>
                      <p className="text-2xl font-bold text-primary">{product.startingPrice}</p>
                    </div>
                    <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20rent%20a%20" target="_blank" rel="noopener noreferrer">
                      <Button variant="hero" size="default">
                        Rent Now <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
                Why Rent from Raulji Group in Vadodara?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by 500+ businesses and individuals across Vadodara and Gujarat.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="glass-card rounded-2xl p-6 hover-lift text-center">
                  <div className="w-14 h-14 brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
                  Who Rents Computers in Vadodara?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From startups to large enterprises, our computer rental service in Vadodara 
                  serves everyone. We deliver across all areas of Vadodara and offer Pan-India shipping.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-secondary font-medium text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-3xl p-8 bg-muted/30">
                <h3 className="text-xl font-bold text-secondary mb-4">📍 We Deliver Across Vadodara</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Free delivery to all major areas including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Alkapuri", "Fatehgunj", "Manjalpur", "Gotri", "Waghodia Road", "Harni", "Sayajigunj", "Karelibaug", "Akota", "Subhanpura", "Makarpura", "Tandalja", "Vasna", "Old Padra Road", "Sama"].map((area) => (
                    <span key={area} className="px-3 py-1.5 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                  <p className="text-sm font-semibold text-secondary">
                    🚚 Pan-India Delivery Available
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Bulk orders shipped across India. Contact us for shipping rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form + Contact */}
        <section id="rental-inquiry" className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
                Get Your Rental Quote – Vadodara
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill the form or WhatsApp us directly for instant pricing.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="glass-card rounded-3xl p-8 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="r-name" className="block text-sm font-medium text-secondary mb-2">Full Name *</label>
                        <input type="text" id="r-name" name="name" value={formData.name} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Your Name" />
                      </div>
                      <div>
                        <label htmlFor="r-phone" className="block text-sm font-medium text-secondary mb-2">Phone / WhatsApp *</label>
                        <input type="tel" id="r-phone" name="phone" value={formData.phone} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="r-email" className="block text-sm font-medium text-secondary mb-2">Email</label>
                        <input type="email" id="r-email" name="email" value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="email@example.com" />
                      </div>
                      <div>
                        <label htmlFor="r-device" className="block text-sm font-medium text-secondary mb-2">Device Type *</label>
                        <select id="r-device" name="device" value={formData.device} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                          <option value="">Select Device</option>
                          <option value="Laptop">Laptop</option>
                          <option value="Desktop">Desktop / Computer</option>
                          <option value="Monitor">Monitor</option>
                          <option value="Printer">Printer</option>
                          <option value="Projector">Projector</option>
                          <option value="Multiple">Multiple Devices</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="r-quantity" className="block text-sm font-medium text-secondary mb-2">Quantity</label>
                        <input type="number" id="r-quantity" name="quantity" value={formData.quantity} onChange={handleChange} min="1"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="How many?" />
                      </div>
                      <div>
                        <label htmlFor="r-duration" className="block text-sm font-medium text-secondary mb-2">Rental Duration</label>
                        <select id="r-duration" name="duration" value={formData.duration} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                          <option value="">Select Duration</option>
                          <option value="1 Day">1 Day</option>
                          <option value="1 Week">1 Week</option>
                          <option value="1 Month">1 Month</option>
                          <option value="3 Months">3 Months</option>
                          <option value="6 Months">6 Months</option>
                          <option value="1 Year">1 Year</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="r-message" className="block text-sm font-medium text-secondary mb-2">Additional Details</label>
                      <textarea id="r-message" name="message" value={formData.message} onChange={handleChange} rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                        placeholder="Any specific requirements, configuration, delivery location..." />
                    </div>
                    <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Get Rental Quote"}
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <a href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20computer%20rental%20in%20Vadodara"
                  target="_blank" rel="noopener noreferrer"
                  className="block glass-card rounded-2xl p-6 bg-green-50 border-green-200 hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary">WhatsApp Us</h3>
                      <p className="text-sm text-muted-foreground">Instant reply guaranteed</p>
                      <p className="text-primary font-semibold text-sm">+91 98765 43210</p>
                    </div>
                  </div>
                </a>

                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 brand-gradient rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Call Us</h3>
                      <a href="tel:+919876543210" className="text-muted-foreground text-sm hover:text-primary transition-colors block">+91 98765 43210</a>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 brand-gradient rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Email Us</h3>
                      <a href="mailto:rentals@rauljigroup.com" className="text-muted-foreground text-sm hover:text-primary transition-colors block">rentals@rauljigroup.com</a>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 brand-gradient rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Location</h3>
                      <p className="text-muted-foreground text-sm">Vadodara, Gujarat, India</p>
                      <p className="text-xs text-primary font-medium mt-1">+ Pan-India Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-wide max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about computer rental services in Vadodara
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between"
                  >
                    <h3 className="font-semibold text-secondary pr-4">{faq.q}</h3>
                    <span className={`text-primary text-xl font-bold shrink-0 transition-transform ${openFaq === index ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="brand-gradient rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                  Need Computer Rentals in Vadodara?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  Get the best rental deals on laptops, monitors & desktops. 
                  Free delivery in Vadodara. Pan-India shipping available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20computer%20rental%20in%20Vadodara" target="_blank" rel="noopener noreferrer">
                    <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+919876543210">
                    <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                      <Phone className="w-5 h-5" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20computer%20rental%20in%20Vadodara"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-transform animate-fade-up"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>

      <Footer />
    </div>
  );
};

export default Rentals;
