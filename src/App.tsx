
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ITServices from "./pages/ITServices";
import CustomSoftwareDevelopment from "./pages/CustomSoftwareDevelopment";
import WebDevelopment from "./pages/WebDevelopment";
import CloudServices from "./pages/CloudServices";
import BPO from "./pages/BPO";
import CustomerSupport from "./pages/CustomerSupport";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import FinanceAccountingServices from "./pages/FinanceAccountingServices";
import HumanResourceOutsourcing from "./pages/HumanResourceOutsourcing";
import DataEntryManagement from "./pages/DataEntryManagement";
import DigitalCreativeServices from "./pages/DigitalCreativeServices";
import GraphicDesignAnimation from "./pages/GraphicDesignAnimation";
import DigitalMarketingServices from "./pages/DigitalMarketingServices";
import ContentWritingCopywriting from "./pages/ContentWritingCopywriting";
import TechnicalProfessionalServices from "./pages/TechnicalProfessionalServices";
import ITHelpdeskInfrastructureSupport from "./pages/ITHelpdeskInfrastructureSupport";
import CADEngineeringDesignServices from "./pages/CADEngineeringDesignServices";
import LegalProcessOutsourcing from "./pages/LegalProcessOutsourcing";
import MarketResearchBusinessAnalytics from "./pages/MarketResearchBusinessAnalytics";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import HRStaffingServices from "./pages/HRandstaffing";
import AboutUs  from "./pages/Aboutus";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hr" element={<HRStaffingServices />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/custom-software-development" element={<CustomSoftwareDevelopment />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/cloud-services" element={<CloudServices />} />
          <Route path="/bpo" element={<BPO />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/finance-accounting-services" element={<FinanceAccountingServices />} />
          <Route path="/human-resource-outsourcing" element={<HumanResourceOutsourcing />} />
          <Route path="/data-entry-management" element={<DataEntryManagement />} />
          <Route path="/digital-creative-services" element={<DigitalCreativeServices />} />
          <Route path="/graphic-design-animation" element={<GraphicDesignAnimation />} />
          <Route path="/digital-marketing-services" element={<DigitalMarketingServices />} />
          <Route path="/content-writing-copywriting" element={<ContentWritingCopywriting />} />
          <Route path="/technical-professional-services" element={<TechnicalProfessionalServices />} />
          <Route path="/it-helpdesk-infrastructure-support" element={<ITHelpdeskInfrastructureSupport />} />
          <Route path="/cad-engineering-design-services" element={<CADEngineeringDesignServices />} />
          <Route path="/legal-process-outsourcing" element={<LegalProcessOutsourcing />} />
          <Route path="/market-research-business-analytics" element={<MarketResearchBusinessAnalytics />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
