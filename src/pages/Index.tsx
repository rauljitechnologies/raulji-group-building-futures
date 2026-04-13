import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOMeta } from "@/components/layout/SEOMeta";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { GroupCompaniesSection } from "@/components/home/GroupCompaniesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOMeta
        title="Raulji Group | Business Consulting, IT Services & Insurance Solutions in India"
        description="Raulji Group - India's trusted holding company in Vadodara, Gujarat. Business consulting, IT services, insurance, finance & legal support. 15+ years, 500+ clients. Call +91 8511187689."
        canonical="https://www.raulji.com/"
        keywords="business consulting India, IT services Gujarat, insurance advisory Vadodara, company registration Gujarat, Raulji Group"
      />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <GroupCompaniesSection />
        <StatsSection />
        <IndustriesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
