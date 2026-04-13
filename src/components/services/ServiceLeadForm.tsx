import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { submitLead } from "@/lib/leadApi";
import { Send } from "lucide-react";

interface ServiceLeadFormProps {
  serviceName: string;
}

export function ServiceLeadForm({ serviceName }: ServiceLeadFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = await submitLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      source: "WEBSITE_SERVICE",
      notes: `Service: ${serviceName}\n${formData.message}`,
    });
    if (result.success) {
      toast({ title: "✅ Inquiry Sent!", description: "Our team will contact you within 1 hour." });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } else {
      toast({ title: "❌ Failed", description: result.error || "Please try again or call +91 8511187689", variant: "destructive" });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="glass-card rounded-3xl p-8">
      <h3 className="text-xl font-bold text-secondary mb-2">Get Free Consultation</h3>
      <p className="text-sm text-muted-foreground mb-6">Fill the form for {serviceName} inquiry</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name *"
          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone / WhatsApp *"
          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email (optional)"
          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
        <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us your requirements..."
          className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
        <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Inquiry"} <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
