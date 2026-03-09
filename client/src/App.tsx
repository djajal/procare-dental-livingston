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
import { DentistShortHills, DentistMillburn, DentistMadison, DentistChatham, DentistSummit, DentistFlorhamPark, DentistSouthOrange, DentistMaplewood } from "./pages/AdditionalTownPages";
import Reviews from "./pages/Reviews";

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
      <Route path={"/dentist-short-hills"} component={DentistShortHills} />
      <Route path={"/dentist-millburn"} component={DentistMillburn} />
      <Route path={"/dentist-madison"} component={DentistMadison} />
      <Route path={"/dentist-chatham"} component={DentistChatham} />
      <Route path={"/dentist-summit"} component={DentistSummit} />
      <Route path={"/dentist-florham-park"} component={DentistFlorhamPark} />
      <Route path={"/dentist-south-orange"} component={DentistSouthOrange} />
      <Route path={"/dentist-maplewood"} component={DentistMaplewood} />
      <Route path={"/reviews"} component={Reviews} />
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
