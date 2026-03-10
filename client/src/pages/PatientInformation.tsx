import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Phone, MapPin, Download, FileText } from "lucide-react";
import { Link } from "wouter";

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
                <p className="text-foreground/70">Welcome to ProCare Dental! We're excited to meet you and help you achieve optimal oral health. Here's what to expect when you visit our office:</p>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span><strong>Initial Consultation</strong> - Dr. Ceravolo will discuss your dental history and goals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span><strong>Comprehensive Exam</strong> - We'll perform a thorough examination of your teeth and gums</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span><strong>Digital X-Rays</strong> - Advanced imaging to detect any issues</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">4.</span>
                    <span><strong>Treatment Plan</strong> - We'll discuss any findings and create a personalized treatment plan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">What to Bring</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Valid photo ID</li>
                  <li>• Insurance card (if applicable)</li>
                  <li>• List of current medications</li>
                  <li>• Any previous dental records</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Office Hours</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-foreground/70">
                  <p><strong>Monday & Tuesday:</strong> 8:00 AM - 6:00 PM</p>
                  <p><strong>Wednesday:</strong> Closed</p>
                  <p><strong>Thursday:</strong> 8:00 AM - 6:00 PM</p>
                  <p><strong>Friday:</strong> Closed</p>
                  <p><strong>Saturday:</strong> 8:00 AM - 1:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-secondary p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Ready to Schedule Your First Visit?</h2>
              <p className="text-foreground/70 mb-6">Call us today or book an appointment online</p>
              <div className="flex gap-4 justify-center">
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
                  <li>• Credit Cards (Visa, MasterCard, American Express, Discover)</li>
                  <li>• Debit Cards</li>
                  <li>• Insurance (see Insurance page for details)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Financing Options</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">We understand that dental care is an investment. We offer flexible financing options to make treatment more affordable:</p>
                <ul className="space-y-3 text-foreground/70">
                  <li><strong>Payment Plans</strong> - Flexible payment arrangements for larger treatments</li>
                  <li><strong>CareCredit</strong> - Financing options with approved credit</li>
                  <li><strong>Discount Plans</strong> - Special pricing for uninsured patients</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Insurance</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">We work with most major dental insurance plans. Please bring your insurance card to your appointment so we can verify your coverage and discuss any out-of-pocket costs.</p>
              </CardContent>
            </Card>

            <div className="bg-secondary p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Questions About Costs?</h2>
              <p className="text-foreground/70 mb-6">Our team is happy to discuss payment options and financing with you</p>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
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

export function InsurancePage() {
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
        <div className="container max-w-4xl">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Insurance Information</h1>
          <p className="text-xl text-foreground/70 mb-12">We Work With Your Insurance</p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Accepted Insurance Plans</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">ProCare Dental is in-network with most major dental insurance plans. We work directly with your insurance company to maximize your benefits and minimize your out-of-pocket costs.</p>
                <p className="text-foreground/70">Common plans we accept include:</p>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Delta Dental</li>
                  <li>• Aetna</li>
                  <li>• Cigna</li>
                  <li>• MetLife</li>
                  <li>• United Healthcare</li>
                  <li>• And many others</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">How to Verify Your Coverage</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="space-y-3 text-foreground/70">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span>Bring your insurance card to your appointment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span>Call us before your visit and we'll verify your coverage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span>We'll provide an estimate of your out-of-pocket costs</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Annual Maximums & Deductibles</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">Most dental insurance plans include:</p>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Annual deductible (typically $50-$100)</li>
                  <li>• Annual maximum benefit (typically $1,000-$2,000)</li>
                  <li>• Preventive coverage at 100% (cleanings, exams, X-rays)</li>
                  <li>• Basic coverage at 80% (fillings, extractions)</li>
                  <li>• Major coverage at 50% (crowns, implants, root canals)</li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-secondary p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Don't Have Insurance?</h2>
              <p className="text-foreground/70 mb-6">We offer discount plans and financing options for uninsured patients</p>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
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
        <div className="container max-w-4xl">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Patient Forms</h1>
          <p className="text-xl text-foreground/70 mb-12">Download and Complete Your Forms</p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">New Patient Forms</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70 mb-4">Please complete these forms before your first appointment:</p>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-secondary transition">
                    <FileText className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-primary">Patient Information Form</p>
                      <p className="text-sm text-foreground/60">Personal and contact information</p>
                    </div>
                    <Download className="w-5 h-5 text-primary ml-auto" />
                  </a>
                  <a href="#" className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-secondary transition">
                    <FileText className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-primary">Medical History Form</p>
                      <p className="text-sm text-foreground/60">Your medical and dental history</p>
                    </div>
                    <Download className="w-5 h-5 text-primary ml-auto" />
                  </a>
                  <a href="#" className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-secondary transition">
                    <FileText className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-primary">Consent & Privacy Forms</p>
                      <p className="text-sm text-foreground/60">Treatment consent and HIPAA authorization</p>
                    </div>
                    <Download className="w-5 h-5 text-primary ml-auto" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">How to Submit Forms</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/70">You can submit your completed forms in the following ways:</p>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span>Bring them to your appointment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span>Email them to us at info@procaredntal.com</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span>Fax them to (973) 533-1778</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-secondary p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Need Help?</h2>
              <p className="text-foreground/70 mb-6">Our team is happy to help you complete your forms</p>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
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
