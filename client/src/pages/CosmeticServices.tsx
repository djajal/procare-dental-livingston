import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { ArrowLeft, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

// Veneers Page
export function VeneersPage() {
  const beforeAfterPairs = [
    {
      id: "veneer-1",
      title: "Smile Transformation",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Veneers+1",
      afterImage: "https://via.placeholder.com/400x300?text=After+Veneers+1",
      beforeAlt: "Patient smile before veneer treatment",
      afterAlt: "Patient smile after veneer treatment"
    },
    {
      id: "veneer-2",
      title: "Color & Shape Correction",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Veneers+2",
      afterImage: "https://via.placeholder.com/400x300?text=After+Veneers+2",
      beforeAlt: "Discolored teeth before veneers",
      afterAlt: "Bright white smile after veneers"
    },
    {
      id: "veneer-3",
      title: "Gap Closure",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Veneers+3",
      afterImage: "https://via.placeholder.com/400x300?text=After+Veneers+3",
      beforeAlt: "Teeth with gaps before veneers",
      afterAlt: "Seamless smile after veneers"
    },
    {
      id: "veneer-4",
      title: "Full Smile Makeover",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Veneers+4",
      afterImage: "https://via.placeholder.com/400x300?text=After+Veneers+4",
      beforeAlt: "Imperfect smile before veneers",
      afterAlt: "Perfect smile after veneers"
    }
  ];

  return <CosmeticServicePage 
    title="Porcelain Veneers"
    description="Transform your smile with custom-crafted porcelain veneers that look and feel completely natural."
    beforeAfterPairs={beforeAfterPairs}
    serviceDetails={[
      "Thin shells of porcelain bonded to the front of your teeth",
      "Corrects discoloration, chips, gaps, and misalignment",
      "Stain-resistant and durable",
      "Results last 10-15 years with proper care",
      "Minimal tooth preparation required"
    ]}
  />;
}

// Lumineers Page
export function LumineersPage() {
  const beforeAfterPairs = [
    {
      id: "lumineers-1",
      title: "Quick Smile Enhancement",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Lumineers+1",
      afterImage: "https://via.placeholder.com/400x300?text=After+Lumineers+1",
      beforeAlt: "Dull smile before Lumineers",
      afterAlt: "Bright smile after Lumineers"
    },
    {
      id: "lumineers-2",
      title: "Minimal Prep Solution",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Lumineers+2",
      afterImage: "https://via.placeholder.com/400x300?text=After+Lumineers+2",
      beforeAlt: "Uneven teeth before Lumineers",
      afterAlt: "Even teeth after Lumineers"
    },
    {
      id: "lumineers-3",
      title: "Reversible Treatment",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Lumineers+3",
      afterImage: "https://via.placeholder.com/400x300?text=After+Lumineers+3",
      beforeAlt: "Stained teeth before Lumineers",
      afterAlt: "Whitened teeth after Lumineers"
    },
    {
      id: "lumineers-4",
      title: "Natural Looking Results",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Lumineers+4",
      afterImage: "https://via.placeholder.com/400x300?text=After+Lumineers+4",
      beforeAlt: "Imperfect smile before Lumineers",
      afterAlt: "Natural smile after Lumineers"
    }
  ];

  return <CosmeticServicePage 
    title="Lumineers"
    description="Ultra-thin veneers that require no tooth preparation for a beautiful smile transformation."
    beforeAfterPairs={beforeAfterPairs}
    serviceDetails={[
      "Ultra-thin (0.3mm) porcelain shells",
      "No tooth shaving or anesthesia required",
      "Reversible procedure",
      "Results visible in just 2 appointments",
      "Looks completely natural and feels comfortable"
    ]}
  />;
}

// Teeth Whitening Page
export function TeethWhiteningPage() {
  const beforeAfterPairs = [
    {
      id: "whitening-1",
      title: "Professional Whitening",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Whitening+1",
      afterImage: "https://via.placeholder.com/400x300?text=After+Whitening+1",
      beforeAlt: "Stained teeth before whitening",
      afterAlt: "Bright white teeth after whitening"
    },
    {
      id: "whitening-2",
      title: "Stain Removal",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Whitening+2",
      afterImage: "https://via.placeholder.com/400x300?text=After+Whitening+2",
      beforeAlt: "Coffee stained teeth before whitening",
      afterAlt: "Clean white teeth after whitening"
    },
    {
      id: "whitening-3",
      title: "Dramatic Results",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Whitening+3",
      afterImage: "https://via.placeholder.com/400x300?text=After+Whitening+3",
      beforeAlt: "Yellow teeth before whitening",
      afterAlt: "Brilliant white teeth after whitening"
    },
    {
      id: "whitening-4",
      title: "Confidence Boost",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Whitening+4",
      afterImage: "https://via.placeholder.com/400x300?text=After+Whitening+4",
      beforeAlt: "Discolored smile before whitening",
      afterAlt: "Radiant smile after whitening"
    }
  ];

  return <CosmeticServicePage 
    title="Professional Teeth Whitening"
    description="Achieve a brighter, whiter smile with our professional whitening treatments."
    beforeAfterPairs={beforeAfterPairs}
    serviceDetails={[
      "Professional-grade whitening gel",
      "Results up to 8 shades whiter",
      "Fast treatment (30-60 minutes)",
      "Long-lasting results (6-12 months)",
      "Safe and effective for all tooth types"
    ]}
  />;
}

// Bonding Page
export function BondingPage() {
  const beforeAfterPairs = [
    {
      id: "bonding-1",
      title: "Chip Repair",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Bonding+1",
      afterImage: "https://via.placeholder.com/400x300?text=After+Bonding+1",
      beforeAlt: "Chipped tooth before bonding",
      afterAlt: "Repaired tooth after bonding"
    },
    {
      id: "bonding-2",
      title: "Gap Closure",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Bonding+2",
      afterImage: "https://via.placeholder.com/400x300?text=After+Bonding+2",
      beforeAlt: "Teeth with gap before bonding",
      afterAlt: "Closed gap after bonding"
    },
    {
      id: "bonding-3",
      title: "Shape Correction",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Bonding+3",
      afterImage: "https://via.placeholder.com/400x300?text=After+Bonding+3",
      beforeAlt: "Misshapen tooth before bonding",
      afterAlt: "Perfectly shaped tooth after bonding"
    },
    {
      id: "bonding-4",
      title: "Stain Coverage",
      beforeImage: "https://via.placeholder.com/400x300?text=Before+Bonding+4",
      afterImage: "https://via.placeholder.com/400x300?text=After+Bonding+4",
      beforeAlt: "Stained tooth before bonding",
      afterAlt: "Covered stain after bonding"
    }
  ];

  return <CosmeticServicePage 
    title="Composite Bonding"
    description="Affordable cosmetic solutions for chips, gaps, and discoloration using tooth-colored composite resin."
    beforeAfterPairs={beforeAfterPairs}
    serviceDetails={[
      "Tooth-colored composite resin material",
      "Completed in a single appointment",
      "Affordable cosmetic solution",
      "Can be repaired or replaced easily",
      "Natural looking and durable results"
    ]}
  />;
}

// Generic Cosmetic Service Page Component
function CosmeticServicePage({ 
  title, 
  description, 
  beforeAfterPairs,
  serviceDetails 
}: { 
  title: string; 
  description: string; 
  beforeAfterPairs: any[];
  serviceDetails: string[];
}) {
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
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_new-itoU26Uu5fW47iKpWCMPA7.webp" alt="ProCare Dental" className="h-14" />
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

          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{title}</h1>
            <p className="text-xl text-foreground/70 mb-12">{description}</p>

            {/* Before/After Gallery */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8">Patient Results</h2>
              <BeforeAfterGallery pairs={beforeAfterPairs} />
            </div>

            {/* Service Details */}
            <Card className="mb-12">
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Why Choose {title}?</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {serviceDetails.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="mb-12">
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Frequently Asked Questions</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How long do results last?</h3>
                  <p className="text-foreground/70">Results vary depending on the treatment. During your consultation, we'll discuss the longevity and maintenance requirements.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Is the procedure painful?</h3>
                  <p className="text-foreground/70">Most cosmetic procedures are painless. We use advanced techniques to ensure your comfort throughout the treatment.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How many appointments are needed?</h3>
                  <p className="text-foreground/70">This depends on the specific treatment. Some procedures are completed in one visit, while others may require multiple appointments.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What is the cost?</h3>
                  <p className="text-foreground/70">We offer competitive pricing and flexible payment plans. Contact us for a personalized quote based on your specific needs.</p>
                </div>
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
