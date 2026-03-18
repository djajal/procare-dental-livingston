import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { IntraoralCameraPage, RotaryEndodonticsPage, DexisDigitalXrayPage, NomadProXrayPage, AIDigitalDiagnosticsPage } from "./pages/TechnologyPages";
import DrKristina from "./pages/DrKristina";
import DrDitta from "./pages/DrDitta";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DentistWestOrange from "./pages/DentistWestOrange";
import { DentistVerona, DentistMontclair, DentistBloomfield, DentistEssexFells } from "./pages/TownPages";
import { DentistShortHills, DentistMillburn, DentistMadison, DentistChatham, DentistSummit, DentistFlorhamPark, DentistSouthOrange, DentistMaplewood } from "./pages/AdditionalTownPages";
import Reviews from "./pages/Reviews";
import { TeethWhiteningService, PreventativeCareService, CosmeticDentistryService, FamilyDentistryService, DentalImplantsService, RootCanalService, InvisalignService, EmergencyDentistryService, PeriodontalDiseaseService } from "./pages/ServicePages";
import { DentalHygieneService, DentalImplantFAQService, LumineersService, VeneersService, ZoomWhiteningService, SnapOnSmileService, BondingService, InlaysOnlaysService, RootCanalFAQService, RetreatmentService, BridgesService, CrownsService, DenturesService, SealsService, MouthGuardsService, OcclusalAdjustmentService, ScalingRootPlaningService, WisdomTeethService, ExtractionsService, SleepApneaService, NightGuardsService, TMJService } from "./pages/ComprehensiveServices";
import { OralCancerScreeningsService, DigitalXrayService, OurTechnologyPage } from "./pages/AdditionalServices";
import { VeneersPage, LumineersPage, TeethWhiteningPage, BondingPage } from "./pages/CosmeticServices";
import TestimonialsPage from "./pages/Testimonials";
import BlogPage from "./pages/Blog";
import { NewPatientsPage, FinancialInformationPage, FormsPage } from "./pages/PatientInformation";
import InsuranceMainPage from "./pages/InsuranceMainPage";
import { DeltaDentalPage, AetnaPage, CignaPage, UnitedHealthcarePage, MetLifePage, GuardianPage, HorizonNJPage, HumanaPage, AmeriHealthPage, AmeritasPage, AnthemPage, AFLACPage, AssurantPage, BeamDentalPage, BCBSPage, CloverMedicarePage, CareingtonPage, DominionNationalPage, FidelioPage, GEHAPage, HealthplexPage, LincolnFinancialPage, ManhattanLifePage, MutualOfOmahaPage, PrincipalPage, SunlifePage, SolsticePage, TruAssurePage, UnitedConcordiaPage, UnumPage } from "./pages/InsurancePages";
import { WestOrangeDeltaDental, VeronaDeltaDental, MontclairDeltaDental, WestOrangeAetna, VeronaAetna, MontclairAetna, WestOrangeCigna, VeronaCigna, MontclairCigna } from "./pages/LocationInsurancePages";
import ServiceDetail from "./pages/ServiceDetail";

/**
 * ProCare Dental - Professional Dental Website
 * Design: Modern Professional Healthcare with Navy Blue, Teal, and Soft Gray
 */
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <main>
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/dr-kristina-ceravolo"} component={DrKristina} />
      <Route path={"/dr-charles-ditta"} component={DrDitta} />
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
      <Route path={"/reviews"} component={Reviews} />      <Route path={"/service/:id"} component={ServiceDetail} />
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
      <Route path={"/technology/intraoral-camera"} component={IntraoralCameraPage} />
      <Route path={"/technology/rotary-endodontics"} component={RotaryEndodonticsPage} />
      <Route path={"/technology/dexis-digital-xray"} component={DexisDigitalXrayPage} />
      <Route path={"/technology/nomad-pro-xray"} component={NomadProXrayPage} />
      <Route path={"/technology/ai-diagnostics"} component={AIDigitalDiagnosticsPage} />
      <Route path={"/service/veneers-gallery"} component={VeneersPage} />
      <Route path={"/service/lumineers-gallery"} component={LumineersPage} />
      <Route path={"/service/teeth-whitening-gallery"} component={TeethWhiteningPage} />
      <Route path={"/service/bonding-gallery"} component={BondingPage} />
      <Route path={"/testimonials"} component={TestimonialsPage} />
      <Route path={"/blog"} component={BlogPage} />
      <Route path={"/new-patients"} component={NewPatientsPage} />
      <Route path={"/financial-information"} component={FinancialInformationPage} />
      <Route path={"/insurance"} component={InsuranceMainPage} />
      <Route path={"/insurance/delta-dental"} component={DeltaDentalPage} />
      <Route path={"/insurance/aetna"} component={AetnaPage} />
      <Route path={"/insurance/cigna"} component={CignaPage} />
      <Route path={"/insurance/united-healthcare"} component={UnitedHealthcarePage} />
      <Route path={"/insurance/metlife"} component={MetLifePage} />
      <Route path={"/insurance/guardian"} component={GuardianPage} />
      <Route path={"/insurance/horizon-nj-bcbs"} component={HorizonNJPage} />
      <Route path={"/insurance/humana"} component={HumanaPage} />
      <Route path={"/insurance/amerihealth"} component={AmeriHealthPage} />
      <Route path={"/insurance/ameritas"} component={AmeritasPage} />
      <Route path={"/insurance/anthem"} component={AnthemPage} />
      <Route path={"/insurance/aflac"} component={AFLACPage} />
      <Route path={"/insurance/assurant"} component={AssurantPage} />
      <Route path={"/insurance/beam-dental"} component={BeamDentalPage} />
      <Route path={"/insurance/blue-cross-blue-shield"} component={BCBSPage} />
      <Route path={"/insurance/clover-medicare"} component={CloverMedicarePage} />
      <Route path={"/insurance/careington"} component={CareingtonPage} />
      <Route path={"/insurance/dominion-national"} component={DominionNationalPage} />
      <Route path={"/insurance/fidelio"} component={FidelioPage} />
      <Route path={"/insurance/geha"} component={GEHAPage} />
      <Route path={"/insurance/healthplex"} component={HealthplexPage} />
      <Route path={"/insurance/lincoln-financial-group"} component={LincolnFinancialPage} />
      <Route path={"/insurance/manhattan-life"} component={ManhattanLifePage} />
      <Route path={"/insurance/mutual-of-omaha"} component={MutualOfOmahaPage} />
      <Route path={"/insurance/principal"} component={PrincipalPage} />
      <Route path={"/insurance/sunlife"} component={SunlifePage} />
      <Route path={"/insurance/solstice"} component={SolsticePage} />
      <Route path={"/insurance/truassure"} component={TruAssurePage} />
      <Route path={"/insurance/united-concordia"} component={UnitedConcordiaPage} />
      <Route path={"/insurance/unum"} component={UnumPage} />
      {/* Location-specific insurance pages */}
      <Route path={"/insurance/delta-dental/west-orange"} component={WestOrangeDeltaDental} />
      <Route path={"/insurance/delta-dental/verona"} component={VeronaDeltaDental} />
      <Route path={"/insurance/delta-dental/montclair"} component={MontclairDeltaDental} />
      <Route path={"/insurance/aetna/west-orange"} component={WestOrangeAetna} />
      <Route path={"/insurance/aetna/verona"} component={VeronaAetna} />
      <Route path={"/insurance/aetna/montclair"} component={MontclairAetna} />
      <Route path={"/insurance/cigna/west-orange"} component={WestOrangeCigna} />
      <Route path={"/insurance/cigna/verona"} component={VeronaCigna} />
      <Route path={"/insurance/cigna/montclair"} component={MontclairCigna} />
      <Route path={"/forms"} component={FormsPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
    </main>
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
