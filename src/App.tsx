import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import BusinessConsulting from "./pages/services/BusinessConsulting";
import ITServices from "./pages/services/ITServices";
import InsuranceServices from "./pages/services/InsuranceServices";
import FinanceAdvisory from "./pages/services/FinanceAdvisory";
import LegalAdvisory from "./pages/services/LegalAdvisory";
import DigitalSolutions from "./pages/services/DigitalSolutions";
import LandInvestment from "./pages/services/LandInvestment";
import Industries from "./pages/Industries";
import Blog from "./pages/Blog";
import Rentals from "./pages/Rentals";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Team from "./pages/Team";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/consulting" element={<BusinessConsulting />} />
          <Route path="/services/it" element={<ITServices />} />
          <Route path="/services/insurance" element={<InsuranceServices />} />
          <Route path="/services/finance" element={<FinanceAdvisory />} />
          <Route path="/services/legal" element={<LegalAdvisory />} />
          <Route path="/services/digital" element={<DigitalSolutions />} />
          <Route path="/services/land-investment" element={<LandInvestment />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
