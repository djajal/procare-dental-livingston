import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";

// Dental Hygiene Services
export function DentalHygieneService() {
  return <ServicePage title="Dental Hygiene" description="Professional cleaning and preventative care to maintain optimal oral health." />;
}

// Implants
export function DentalImplantFAQService() {
  return <ServicePage title="Dental Implant FAQs" description="Answers to common questions about dental implants and the implant process." />;
}

// Cosmetic Services
export function LumineersService() {
  return <ServicePage title="Lumineers" description="Ultra-thin porcelain veneers for a natural-looking smile transformation." />;
}

export function VeneersService() {
  return <ServicePage title="Veneers" description="Custom-crafted porcelain veneers to enhance your smile." />;
}

export function ZoomWhiteningService() {
  return <ServicePage title="Zoom Whitening" description="Advanced professional whitening system for dramatic results." />;
}

export function SnapOnSmileService() {
  return <ServicePage title="Snap On Smile" description="Removable cosmetic teeth for an instant smile makeover." />;
}

export function BondingService() {
  return <ServicePage title="Bonding and White Fillings" description="Tooth-colored restorations for a natural appearance." />;
}

export function InlaysOnlaysService() {
  return <ServicePage title="Inlays and Onlays" description="Conservative restorations for damaged or decayed teeth." />;
}

// Endodontics
export function RootCanalFAQService() {
  return <ServicePage title="Root Canal Treatment" description="Expert endodontic care to save your natural teeth." />;
}

export function RetreatmentService() {
  return <ServicePage title="Root Canal Retreatment" description="Specialized treatment for previously treated teeth." />;
}

// Restorative Services
export function BridgesService() {
  return <ServicePage title="Bridges" description="Fixed prosthetic devices to replace missing teeth." />;
}

export function CrownsService() {
  return <ServicePage title="Crowns" description="Durable restorations to protect and strengthen damaged teeth." />;
}

export function DenturesService() {
  return <ServicePage title="Dentures" description="Complete or partial dentures for tooth replacement." />;
}

// Pediatric Services
export function SealsService() {
  return <ServicePage title="Sealants" description="Protective coating for children's teeth to prevent decay." />;
}

export function MouthGuardsService() {
  return <ServicePage title="Mouth Guards" description="Custom-fitted protective guards for sports and grinding." />;
}

// Periodontic Services
export function OcclusalAdjustmentService() {
  return <ServicePage title="Occlusal Adjustment" description="Bite correction to improve comfort and function." />;
}

export function PeriodontalDiseaseService() {
  return <ServicePage title="Periodontal (Gum) Disease" description="Treatment for gum disease and periodontal conditions." />;
}

export function ScalingRootPlaningService() {
  return <ServicePage title="Scaling & Root Planing" description="Deep cleaning to treat and prevent gum disease." />;
}

// Oral Surgery Services
export function WisdomTeethService() {
  return <ServicePage title="Wisdom Teeth Extraction" description="Safe removal of problematic wisdom teeth." />;
}

export function ExtractionsService() {
  return <ServicePage title="Extractions" description="Gentle tooth extraction when necessary." />;
}

export function SleepApneaService() {
  return <ServicePage title="Sleep Apnea Treatment" description="Dental solutions for sleep apnea management." />;
}

export function NightGuardsService() {
  return <ServicePage title="Night Guards" description="Custom guards to protect teeth from grinding." />;
}

export function TMJService() {
  return <ServicePage title="TMJ Treatment" description="Solutions for temporomandibular joint disorders." />;
}

// Generic Service Page Component
function ServicePage({ title, description }: { title: string; description: string }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-3">
        <div className="container flex justify-end items-center gap-8">
          <a href="tel:(973)533-1777" className="flex items-center gap-2 hover:opacity-80 transition">
            <Phone className="w-4 h-4" />
            <span>(973) 533-1777</span>
          </a>
          <a href="https://maps.google.com/?q=22+Old+Short+Hills+Rd+Suite+207,+Livingston,+NJ+07039" className="flex items-center gap-2 hover:opacity-80 transition">
            <MapPin className="w-4 h-4" />
            <span>22 Old Short Hills Rd Suite 207, Livingston, NJ 07039</span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-secondary border-b border-border sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <img src="https://cdn.manus.ai/webdev-static-assets/procare_dental_logo_new.png" alt="ProCare Dental" className="h-14" />
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">Services</Link>
            <Link href="/reviews" className="text-foreground hover:text-primary transition">Reviews</Link>
            <Link href="/" className="text-foreground hover:text-primary transition">Contact</Link>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8">Book an Appointment</Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-20 md:py-32">
        <div className="container">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{title}</h1>
            <p className="text-xl text-foreground/70 mb-12">{description}</p>

            <Card className="mb-12">
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">About This Service</h2>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  At ProCare Dental in Livingston, NJ, we provide comprehensive {title.toLowerCase()} services tailored to your unique needs. Our experienced dental team is committed to delivering the highest quality care using advanced techniques and technology.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Whether you're seeking preventative care, cosmetic enhancement, or restorative treatment, we're here to help you achieve and maintain a healthy, beautiful smile.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-12">
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Why Choose ProCare Dental?</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/70">Experienced and compassionate dental professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/70">State-of-the-art dental technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/70">Personalized treatment plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/70">Comfortable, welcoming environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground/70">NJ Top Dentist Award 2026</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-6 text-lg">
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/reviews">Reviews</Link></li>
                <li><Link href="/">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-sm">(973) 533-1777</p>
              <p className="text-sm">22 Old Short Hills Rd Suite 207</p>
              <p className="text-sm">Livingston, NJ 07039</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Hours</h3>
              <p className="text-sm">Mon-Tue, Thu: 8am-6pm</p>
              <p className="text-sm">Sat: 8am-1pm</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/sitemap">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
