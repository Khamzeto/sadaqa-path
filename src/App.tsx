import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Donate from "./pages/Donate";
import DonateAmount from "./pages/DonateAmount";
import DonateSuccess from "./pages/DonateSuccess";
import Campaigns from "./pages/Campaigns";
import History from "./pages/History";
import More from "./pages/More";
import Support from "./pages/Support";
import Subscription from "./pages/Subscription";
import Zakat from "./pages/Zakat";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Donate />} />
          <Route path="/donate/:fundId" element={<DonateAmount />} />
          <Route path="/donate/success" element={<DonateSuccess />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/history" element={<History />} />
          <Route path="/more" element={<More />} />
          <Route path="/support" element={<Support />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/zakat" element={<Zakat />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
