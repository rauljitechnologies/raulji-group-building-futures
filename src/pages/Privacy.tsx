import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOMeta } from "@/components/layout/SEOMeta";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <SEOMeta
        title="Privacy Policy | Raulji Group — Vadodara, Gujarat"
        description="Raulji Group's privacy policy explaining how we collect, use, and protect your personal information when you use our website and services."
        canonical="https://www.raulji.com/privacy"
      />
      <Header />
      <main className="pt-40 pb-20">
        <div className="container-wide max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-secondary mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: April 2026</p>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">1. Information We Collect</h2>
              <p>
                Raulji Group ("we", "us", or "our") collects information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us. This includes your name, email address, phone number, company name, and the nature of your inquiry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and provide the services you request</li>
                <li>To send you information about our services, updates, and promotions (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to trusted partners who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">5. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information that we hold. To exercise these rights, please contact us at <a href="mailto:admin@raulji.com" className="text-primary hover:underline">admin@raulji.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Raulji Group</strong></li>
                <li>Vadodara, Gujarat, India</li>
                <li>Email: <a href="mailto:admin@raulji.com" className="text-primary hover:underline">admin@raulji.com</a></li>
                <li>Phone: <a href="tel:+918511187689" className="text-primary hover:underline">+91 8511187689</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
