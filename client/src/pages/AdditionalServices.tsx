import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

// Oral Cancer Screenings
export function OralCancerScreeningsService() {
  return <ServicePage 
    title="Oral Cancer Screenings" 
    description="Advanced oral cancer detection to protect your health."
    imageUrl="https://via.placeholder.com/600x400?text=Dental+Service"
    alt="Professional oral cancer screening examination"
  />;
}

// Digital X-Ray
export function DigitalXrayService() {
  return <ServicePage 
    title="Digital X-Ray" 
    description="Advanced digital imaging technology for precise diagnostics."
    imageUrl="https://via.placeholder.com/600x400?text=Dental+Service"
    alt="State-of-the-art digital X-ray technology"
  />;
}

// Our Technology Page
export function OurTechnologyPage() {
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
        <div className="container">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Advanced Technology</h1>
            <p className="text-xl text-foreground/70 mb-12">
              At ProCare Dental, we invest in the latest dental technology to provide superior care and diagnostics.
            </p>

            <div className="space-y-8">
              {/* Intraoral Camera */}
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-primary">Intraoral Camera</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/70">
                    Our intraoral cameras provide detailed, magnified images of your teeth and gums, allowing us to detect problems early and show you exactly what we see during your examination.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Precise visualization of dental issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Patient education and understanding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Digital records for comparison over time</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Rotary Endodontics */}
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-primary">Rotary Endodontics</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/70">
                    Advanced rotary instruments for root canal treatment provide faster, more efficient, and more comfortable endodontic procedures with superior outcomes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Faster treatment times</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Reduced patient discomfort</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Improved treatment success rates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Digital X-Ray */}
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-primary">Digital X-Ray</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/70">
                    Our digital X-ray system uses significantly less radiation than traditional X-rays while providing superior image quality for accurate diagnosis.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">80% less radiation exposure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Instant image availability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Enhanced image clarity and detail</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Advanced AI Dental Diagnostics */}
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-primary">Advanced AI Dental Diagnostics</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/70">
                    Artificial intelligence-powered diagnostic tools assist in detecting cavities, periodontal disease, and other dental conditions with exceptional accuracy.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Early detection of dental problems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Improved diagnostic accuracy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Personalized treatment planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Oral Cancer Screenings */}
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-primary">Oral Cancer Screenings</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/70">
                    Advanced screening technology to detect early signs of oral cancer, providing the best chance for successful treatment and recovery.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Early detection saves lives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Non-invasive screening process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground/70">Part of every comprehensive exam</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 mt-12">
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

// Generic Service Page Component
function ServicePage({ title, description, imageUrl, alt }: { title: string; description: string; imageUrl: string; alt: string }) {
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
        <div className="container">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{title}</h1>
            <p className="text-xl text-foreground/70 mb-12">{description}</p>

            {/* Service Image */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <img src={imageUrl} alt={alt} className="w-full h-96 object-cover" />
            </div>

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

            <Card className="mb-12">
              <CardHeader>
                <h2 className="text-2xl font-bold text-primary">Frequently Asked Questions</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How often should I have this treatment?</h3>
                  <p className="text-foreground/70">The frequency depends on your individual needs and dental health. We'll recommend a schedule during your consultation.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Is this treatment painful?</h3>
                  <p className="text-foreground/70">We use advanced techniques and anesthesia to ensure your comfort throughout the procedure.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What are the results?</h3>
                  <p className="text-foreground/70">Results vary based on individual factors. We'll discuss expected outcomes during your consultation.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How long does the treatment take?</h3>
                  <p className="text-foreground/70">Treatment duration depends on the complexity of your case. We'll provide a timeline during your appointment.</p>
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
