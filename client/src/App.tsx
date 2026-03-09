import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import DrKristina from "./pages/DrKristina";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DentistWestOrange from "./pages/DentistWestOrange";
import { DentistVerona, DentistMontclair, DentistBloomfield, DentistEssexFells } from "./pages/TownPages";

/**
 * ProCare Dental - Professional Dental Website
 * Design: Modern Professional Healthcare with Navy Blue, Teal, and Soft Gray
 */

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/dr-kristina-ceravolo"} component={DrKristina} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/dentist-west-orange"} component={DentistWestOrange} />
      <Route path={"/dentist-verona"} component={DentistVerona} />
      <Route path={"/dentist-montclair"} component={DentistMontclair} />
      <Route path={"/dentist-bloomfield"} component={DentistBloomfield} />
      <Route path={"/dentist-essex-fells"} component={DentistEssexFells} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
