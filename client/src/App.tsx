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
import { TeethWhiteningService, PreventativeCareService, CosmeticDentistryService, FamilyDentistryService, DentalImplantsService, RootCanalService, InvisalignService, EmergencyDentistryService } from "./pages/ServicePages";
import { DentalHygieneService, DentalImplantFAQService, LumineersService, VeneersService, ZoomWhiteningService, SnapOnSmileService, BondingService, InlaysOnlaysService, RootCanalFAQService, RetreatmentService, BridgesService, CrownsService, DenturesService, SealsService, MouthGuardsService, OcclusalAdjustmentService, PeriodontalDiseaseService, ScalingRootPlaningService, WisdomTeethService, ExtractionsService, SleepApneaService, NightGuardsService, TMJService } from "./pages/ComprehensiveServices";
import { OralCancerScreeningsService, DigitalXrayService, OurTechnologyPage } from "./pages/AdditionalServices";
import { VeneersPage, LumineersPage, TeethWhiteningPage, BondingPage } from "./pages/CosmeticServices";
import TestimonialsPage from "./pages/Testimonials";
import BlogPage from "./pages/Blog";

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
      <Route path={"/service/teeth-whitening"} component={TeethWhiteningService} />
      <Route path={"/service/preventative-care"} component={PreventativeCareService} />
      <Route path={"/service/cosmetic-dentistry"} component={CosmeticDentistryService} />
      <Route path={"/service/family-dentistry"} component={FamilyDentistryService} />
      <Route path={"/service/dental-implants"} component={DentalImplantsService} />
      <Route path={"/service/root-canal"} component={RootCanalService} />
      <Route path={"/service/invisalign"} component={InvisalignService} />
      <Route path={"/service/emergency-dentistry"} component={EmergencyDentistryService} />
      <Route path={"/service/dental-hygiene"} component={DentalHygieneService} />
      <Route path={"/service/dental-implant-faq"} component={DentalImplantFAQService} />
      <Route path={"/service/lumineers"} component={LumineersService} />
      <Route path={"/service/veneers"} component={VeneersService} />
      <Route path={"/service/zoom-whitening"} component={ZoomWhiteningService} />
      <Route path={"/service/snap-on-smile"} component={SnapOnSmileService} />
      <Route path={"/service/bonding"} component={BondingService} />
      <Route path={"/service/inlays-onlays"} component={InlaysOnlaysService} />
      <Route path={"/service/root-canal-faq"} component={RootCanalFAQService} />
      <Route path={"/service/root-canal-retreatment"} component={RetreatmentService} />
      <Route path={"/service/bridges"} component={BridgesService} />
      <Route path={"/service/crowns"} component={CrownsService} />
      <Route path={"/service/dentures"} component={DenturesService} />
      <Route path={"/service/sealants"} component={SealsService} />
      <Route path={"/service/mouth-guards"} component={MouthGuardsService} />
      <Route path={"/service/occlusal-adjustment"} component={OcclusalAdjustmentService} />
      <Route path={"/service/periodontal-disease"} component={PeriodontalDiseaseService} />
      <Route path={"/service/scaling-root-planing"} component={ScalingRootPlaningService} />
      <Route path={"/service/wisdom-teeth"} component={WisdomTeethService} />
      <Route path={"/service/extractions"} component={ExtractionsService} />
      <Route path={"/service/sleep-apnea"} component={SleepApneaService} />
      <Route path={"/service/night-guards"} component={NightGuardsService} />
      <Route path={"/service/tmj"} component={TMJService} />
      <Route path={"/service/oral-cancer-screenings"} component={OralCancerScreeningsService} />
      <Route path={"/service/digital-xray"} component={DigitalXrayService} />
      <Route path={"/our-technology"} component={OurTechnologyPage} />
      <Route path={"/service/veneers-gallery"} component={VeneersPage} />
      <Route path={"/service/lumineers-gallery"} component={LumineersPage} />
      <Route path={"/service/teeth-whitening-gallery"} component={TeethWhiteningPage} />
      <Route path={"/service/bonding-gallery"} component={BondingPage} />
      <Route path={"/testimonials"} component={TestimonialsPage} />
      <Route path={"/blog"} component={BlogPage} />
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
