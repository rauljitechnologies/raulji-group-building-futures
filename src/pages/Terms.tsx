import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOMeta } from "@/components/layout/SEOMeta";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <SEOMeta
        title="Terms of Service | Raulji Group — Vadodara, Gujarat"
        description="Terms of Service for Raulji Group. Read our terms and conditions for using our website and engaging with our business consulting, IT, insurance, and legal services."
        canonical="https://www.raulji.com/terms"
      />
      <Header />
      <main className="pt-40 pb-20">
        <div className="container-wide max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-secondary mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: April 2026</p>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Raulji Group website (www.raulji.com), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">2. Services</h2>
              <p>
                Raulji Group provides business consulting, IT services, insurance advisory, finance advisory, legal advisory, digital marketing, and land investment services. All services are subject to separate service agreements and applicable fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">3. Website Use</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may use our website for lawful purposes only</li>
                <li>You must not attempt to gain unauthorized access to any part of the website</li>
                <li>You must not use the website in any way that causes damage or impairment</li>
                <li>All content on this website is the intellectual property of Raulji Group</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">4. Disclaimer</h2>
              <p>
                The information on this website is provided for general informational purposes only. It does not constitute professional advice. For specific business, legal, financial, or insurance advice, please contact us directly for a formal engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">5. Limitation of Liability</h2>
              <p>
                Raulji Group shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the website or any services obtained through the website, to the maximum extent permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">6. Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Vadodara, Gujarat, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary mb-4">7. Contact Us</h2>
              <p>
                For questions about these Terms of Service, please contact us:
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

export default Terms;
