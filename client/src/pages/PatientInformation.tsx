import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Phone, MapPin, Download, FileText } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function NewPatientsPage() {
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
            <span>22 Old Short Hills Rd Ste 207, Livingston, NJ 07039</span>
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
        <div className="container max-w-4xl">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Welcome to ProCare Dental</h1>
          <p className="text-xl text-foreground/70 mb-12">Information for New Patients</p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Getting Started</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">Welcome to ProCare Dental! We're excited to meet you and help you achieve optimal oral health. Here's what to expect on your first visit.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">What to Bring</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Photo ID and insurance card</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>List of current medications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>Records from previous dentist (if available)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">New Patient Forms</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">Download and complete these forms before your appointment to save time:</p>
                <div className="flex gap-4 flex-wrap">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Patient Form
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Medical History
                  </Button>
                </div>
              </CardContent>
            </Card>
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
              <p className="text-sm">22 Old Short Hills Rd Ste 207</p>
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

export function FinancialInformationPage() {
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
            <span>22 Old Short Hills Rd Ste 207, Livingston, NJ 07039</span>
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
        <div className="container max-w-4xl">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Financial Information</h1>
          <p className="text-xl text-foreground/70 mb-12">Payment Options & Financing</p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Payment Methods</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">We accept the following payment methods:</p>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Cash</li>
                  <li>• Check</li>
                  <li>• Credit Cards (Visa, Mastercard, American Express)</li>
                  <li>• Debit Cards</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Financing Options</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">We offer flexible financing options to make dental care affordable:</p>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Flexible payment plans</li>
                  <li>• CareCredit financing</li>
                  <li>• Discount plans for uninsured patients</li>
                </ul>
              </CardContent>
            </Card>
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
              <p className="text-sm">22 Old Short Hills Rd Ste 207</p>
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

export function FormsPage() {
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
            <span>22 Old Short Hills Rd Ste 207, Livingston, NJ 07039</span>
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
        <div className="container max-w-4xl">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Patient Forms</h1>
          <p className="text-xl text-foreground/70 mb-12">Download & Complete Before Your Visit</p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Required Forms</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Patient Information Form</p>
                      <p className="text-sm text-foreground/70">Basic patient information and contact details</p>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Medical History</p>
                      <p className="text-sm text-foreground/70">Your medical and dental history</p>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Insurance Verification</p>
                      <p className="text-sm text-foreground/70">Insurance information and authorization</p>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              <p className="text-sm">22 Old Short Hills Rd Ste 207</p>
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
