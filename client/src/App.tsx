import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// ─── Eager: home page loads instantly with no spinner ───────────────────────
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// ─── Helper: lazily import a named export from a module ─────────────────────
const lazyNamed = <T extends object>(
  loader: () => Promise<T>,
  name: keyof T
) =>
  lazy(() =>
    loader().then((m) => ({ default: m[name] as React.ComponentType<any> }))
  );

// ─── Lazy page chunks (one dynamic import per source file) ─────────────────
const DrKristina         = lazy(() => import("./pages/DrKristina"));
const PrivacyPolicy      = lazy(() => import("./pages/PrivacyPolicy"));
const DentistWestOrange  = lazy(() => import("./pages/DentistWestOrange"));
const Reviews            = lazy(() => import("./pages/Reviews"));
const TestimonialsPage   = lazy(() => import("./pages/Testimonials"));
const BlogPage           = lazy(() => import("./pages/Blog"));
const InsuranceMainPage  = lazy(() => import("./pages/InsuranceMainPage"));

// Town pages — all from same file → shared chunk
const DentistVerona      = lazyNamed(() => import("./pages/TownPages"), "DentistVerona");
const DentistMontclair   = lazyNamed(() => import("./pages/TownPages"), "DentistMontclair");
const DentistBloomfield  = lazyNamed(() => import("./pages/TownPages"), "DentistBloomfield");
const DentistEssexFells  = lazyNamed(() => import("./pages/TownPages"), "DentistEssexFells");

const DentistShortHills  = lazyNamed(() => import("./pages/AdditionalTownPages"), "DentistShortHills");
const DentistMillburn    = lazyNamed(() => import("./pages/AdditionalTownPages"), "DentistMillburn");
const DentistMadison     = lazyNamed(() => import("./pages/AdditionalTownPages"), "DentistMadison");
const DentistChatham     = lazyNamed(() => import("./pages/AdditionalTownPages"), "DentistChatham");
const DentistSummit      = lazyNamed(() => import("./pages/AdditionalTownPages"), "DentistSummit");
const DentistFlorhamPark = lazyNamed(() => import("./pages/AdditionalTownPages"), "DentistFlorhamPark");
const DentistSouthOrange = lazyNamed(() => import("./pages/AdditionalTownPages"), "DentistSouthOrange");
const DentistMaplewood   = lazyNamed(() => import("./pages/AdditionalTownPages"), "DentistMaplewood");

// Service pages — two source files, each becomes one chunk
const TeethWhiteningService     = lazyNamed(() => import("./pages/ServicePages"), "TeethWhiteningService");
const PreventativeCareService   = lazyNamed(() => import("./pages/ServicePages"), "PreventativeCareService");
const CosmeticDentistryService  = lazyNamed(() => import("./pages/ServicePages"), "CosmeticDentistryService");
const FamilyDentistryService    = lazyNamed(() => import("./pages/ServicePages"), "FamilyDentistryService");
const DentalImplantsService     = lazyNamed(() => import("./pages/ServicePages"), "DentalImplantsService");
const RootCanalService          = lazyNamed(() => import("./pages/ServicePages"), "RootCanalService");
const InvisalignService         = lazyNamed(() => import("./pages/ServicePages"), "InvisalignService");
const EmergencyDentistryService = lazyNamed(() => import("./pages/ServicePages"), "EmergencyDentistryService");

const DentalHygieneService      = lazyNamed(() => import("./pages/ComprehensiveServices"), "DentalHygieneService");
const DentalImplantFAQService   = lazyNamed(() => import("./pages/ComprehensiveServices"), "DentalImplantFAQService");
const LumineersService          = lazyNamed(() => import("./pages/ComprehensiveServices"), "LumineersService");
const VeneersService            = lazyNamed(() => import("./pages/ComprehensiveServices"), "VeneersService");
const ZoomWhiteningService      = lazyNamed(() => import("./pages/ComprehensiveServices"), "ZoomWhiteningService");
const SnapOnSmileService        = lazyNamed(() => import("./pages/ComprehensiveServices"), "SnapOnSmileService");
const BondingService            = lazyNamed(() => import("./pages/ComprehensiveServices"), "BondingService");
const InlaysOnlaysService       = lazyNamed(() => import("./pages/ComprehensiveServices"), "InlaysOnlaysService");
const RootCanalFAQService       = lazyNamed(() => import("./pages/ComprehensiveServices"), "RootCanalFAQService");
const RetreatmentService        = lazyNamed(() => import("./pages/ComprehensiveServices"), "RetreatmentService");
const BridgesService            = lazyNamed(() => import("./pages/ComprehensiveServices"), "BridgesService");
const CrownsService             = lazyNamed(() => import("./pages/ComprehensiveServices"), "CrownsService");
const DenturesService           = lazyNamed(() => import("./pages/ComprehensiveServices"), "DenturesService");
const SealsService              = lazyNamed(() => import("./pages/ComprehensiveServices"), "SealsService");
const MouthGuardsService        = lazyNamed(() => import("./pages/ComprehensiveServices"), "MouthGuardsService");
const OcclusalAdjustmentService = lazyNamed(() => import("./pages/ComprehensiveServices"), "OcclusalAdjustmentService");
const PeriodontalDiseaseService = lazyNamed(() => import("./pages/ComprehensiveServices"), "PeriodontalDiseaseService");
const ScalingRootPlaningService = lazyNamed(() => import("./pages/ComprehensiveServices"), "ScalingRootPlaningService");
const WisdomTeethService        = lazyNamed(() => import("./pages/ComprehensiveServices"), "WisdomTeethService");
const ExtractionsService        = lazyNamed(() => import("./pages/ComprehensiveServices"), "ExtractionsService");
const SleepApneaService         = lazyNamed(() => import("./pages/ComprehensiveServices"), "SleepApneaService");
const NightGuardsService        = lazyNamed(() => import("./pages/ComprehensiveServices"), "NightGuardsService");
const TMJService                = lazyNamed(() => import("./pages/ComprehensiveServices"), "TMJService");

const OralCancerScreeningsService = lazyNamed(() => import("./pages/AdditionalServices"), "OralCancerScreeningsService");
const DigitalXrayService          = lazyNamed(() => import("./pages/AdditionalServices"), "DigitalXrayService");
const OurTechnologyPage           = lazyNamed(() => import("./pages/AdditionalServices"), "OurTechnologyPage");

// Technology pages
const IntraoralCameraPage      = lazyNamed(() => import("./pages/TechnologyPages"), "IntraoralCameraPage");
const RotaryEndodonticsPage    = lazyNamed(() => import("./pages/TechnologyPages"), "RotaryEndodonticsPage");
const DexisDigitalXrayPage     = lazyNamed(() => import("./pages/TechnologyPages"), "DexisDigitalXrayPage");
const NomadProXrayPage         = lazyNamed(() => import("./pages/TechnologyPages"), "NomadProXrayPage");
const AIDigitalDiagnosticsPage = lazyNamed(() => import("./pages/TechnologyPages"), "AIDigitalDiagnosticsPage");

// Cosmetic gallery pages
const VeneersPage        = lazyNamed(() => import("./pages/CosmeticServices"), "VeneersPage");
const LumineersPage      = lazyNamed(() => import("./pages/CosmeticServices"), "LumineersPage");
const TeethWhiteningPage = lazyNamed(() => import("./pages/CosmeticServices"), "TeethWhiteningPage");
const BondingPage        = lazyNamed(() => import("./pages/CosmeticServices"), "BondingPage");

// Patient info
const NewPatientsPage          = lazyNamed(() => import("./pages/PatientInformation"), "NewPatientsPage");
const FinancialInformationPage = lazyNamed(() => import("./pages/PatientInformation"), "FinancialInformationPage");
const FormsPage                = lazyNamed(() => import("./pages/PatientInformation"), "FormsPage");

// Insurance carrier pages — all from one file → single lazy chunk
const DeltaDentalPage      = lazyNamed(() => import("./pages/InsurancePages"), "DeltaDentalPage");
const AetnaPage            = lazyNamed(() => import("./pages/InsurancePages"), "AetnaPage");
const CignaPage            = lazyNamed(() => import("./pages/InsurancePages"), "CignaPage");
const UnitedHealthcarePage = lazyNamed(() => import("./pages/InsurancePages"), "UnitedHealthcarePage");
const MetLifePage          = lazyNamed(() => import("./pages/InsurancePages"), "MetLifePage");
const GuardianPage         = lazyNamed(() => import("./pages/InsurancePages"), "GuardianPage");
const HorizonNJPage        = lazyNamed(() => import("./pages/InsurancePages"), "HorizonNJPage");
const HumanaPage           = lazyNamed(() => import("./pages/InsurancePages"), "HumanaPage");
const AmeriHealthPage      = lazyNamed(() => import("./pages/InsurancePages"), "AmeriHealthPage");
const AmeritasPage         = lazyNamed(() => import("./pages/InsurancePages"), "AmeritasPage");
const AnthemPage           = lazyNamed(() => import("./pages/InsurancePages"), "AnthemPage");
const AFLACPage            = lazyNamed(() => import("./pages/InsurancePages"), "AFLACPage");
const AssurantPage         = lazyNamed(() => import("./pages/InsurancePages"), "AssurantPage");
const BeamDentalPage       = lazyNamed(() => import("./pages/InsurancePages"), "BeamDentalPage");
const BCBSPage             = lazyNamed(() => import("./pages/InsurancePages"), "BCBSPage");
const CloverMedicarePage   = lazyNamed(() => import("./pages/InsurancePages"), "CloverMedicarePage");
const CareingtonPage       = lazyNamed(() => import("./pages/InsurancePages"), "CareingtonPage");
const DominionNationalPage = lazyNamed(() => import("./pages/InsurancePages"), "DominionNationalPage");
const FidelioPage          = lazyNamed(() => import("./pages/InsurancePages"), "FidelioPage");
const GEHAPage             = lazyNamed(() => import("./pages/InsurancePages"), "GEHAPage");
const HealthplexPage       = lazyNamed(() => import("./pages/InsurancePages"), "HealthplexPage");
const LincolnFinancialPage = lazyNamed(() => import("./pages/InsurancePages"), "LincolnFinancialPage");
const ManhattanLifePage    = lazyNamed(() => import("./pages/InsurancePages"), "ManhattanLifePage");
const MutualOfOmahaPage    = lazyNamed(() => import("./pages/InsurancePages"), "MutualOfOmahaPage");
const PrincipalPage        = lazyNamed(() => import("./pages/InsurancePages"), "PrincipalPage");
const SunlifePage          = lazyNamed(() => import("./pages/InsurancePages"), "SunlifePage");
const SolsticePage         = lazyNamed(() => import("./pages/InsurancePages"), "SolsticePage");
const TruAssurePage        = lazyNamed(() => import("./pages/InsurancePages"), "TruAssurePage");
const UnitedConcordiaPage  = lazyNamed(() => import("./pages/InsurancePages"), "UnitedConcordiaPage");
const UnumPage             = lazyNamed(() => import("./pages/InsurancePages"), "UnumPage");

// React is needed for JSX in this file
import React from "react";

// Minimal page-level fallback: keeps the nav-bar skeleton visible
// (the critical CSS in index.html already painted it) so no flash occurs.
function PageFallback() {
  return (
    <div
      style={{ minHeight: "60vh", background: "#fff" }}
      aria-busy="true"
      aria-label="Loading page…"
    />
  );
}

/**
 * ProCare Dental - Professional Dental Website
 * Design: Modern Professional Healthcare with Navy Blue, Teal, and Soft Gray
 */
function Router() {
  return (
    <Suspense fallback={<PageFallback />}>
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
      <Route path={"/forms"} component={FormsPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
    </Suspense>
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
