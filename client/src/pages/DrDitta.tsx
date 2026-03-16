import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Award, Users, Heart, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function DrDitta() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-primary hidden sm:inline">ProCare Dental</span>
            </a>
          </Link>
          <div className="flex items-center gap-4">
            <a href="tel:(973) 533-1777" className="text-primary hover:text-primary/80 font-semibold">
              (973) 533-1777
            </a>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full">
              Book Appointment
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-primary mb-2">Dr. Charles Ditta</h1>
                <p className="text-2xl text-accent font-semibold">DMD</p>
              </div>
              <p className="text-xl text-foreground/80 leading-relaxed">
                A highly respected general dentist with more than <strong>25 years of clinical experience</strong>, proudly serving the Livingston and Essex County communities.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Known for his integrity, precision, and patient-first philosophy, Dr. Ditta has earned the trust of generations of families through his commitment to exceptional dental care.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="tel:(973) 533-1777">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Call Now
                  </Button>
                </a>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                  Book Appointment
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-96 w-80 flex items-center justify-center overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dr_charles_ditta_18cd048e.webp"
                  alt="Dr. Charles Ditta, DMD"
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Dr. Ditta</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Throughout his career, Dr. Ditta has focused on providing comprehensive, conservative, and evidence-based dentistry. He believes in educating patients, clearly explaining treatment options, and empowering individuals to make informed decisions about their oral health.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                His calm demeanor, attention to detail, and commitment to excellence have made him a trusted provider in the community for over two decades.
              </p>
            </div>

            {/* Clinical Focus */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Clinical Focus</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                With decades of hands-on experience, Dr. Ditta offers a wide range of general and restorative dental services with an emphasis on prevention, function, comfort, and long-term oral health. He is especially known for his thoughtful approach to complex cases and his ability to put anxious patients at ease.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Comprehensive dental exams and preventive care",
                  "Restorative dentistry including fillings, crowns, and bridges",
                  "Cosmetic dentistry to improve smile aesthetics",
                  "Emergency dental care and same-day evaluations",
                  "Personalized, conservative treatment planning",
                  "Complex case management with precision",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach to Patient Care */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Approach to Patient Care</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Dr. Ditta is dedicated to delivering dentistry that is honest, ethical, and never rushed. He takes pride in listening carefully to patient concerns and tailoring treatment plans to each individual's needs, comfort level, and long-term goals. His philosophy centers on building lasting relationships with patients based on trust and transparency.
              </p>
            </div>

            {/* Why Choose Dr. Ditta */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Dr. Ditta</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Award className="w-12 h-12 text-accent mb-3" />
                    <CardTitle>25+ Years Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">Decades of hands-on clinical experience serving the Livingston and Essex County communities</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Heart className="w-12 h-12 text-accent mb-3" />
                    <CardTitle>Patient-First Philosophy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">Personalized care plans tailored to your unique needs, comfort level, and long-term goals</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Users className="w-12 h-12 text-accent mb-3" />
                    <CardTitle>Community Trust</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">Earned the trust of generations of families through commitment to exceptional dental care</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
              <p className="text-xl text-foreground/70">
                Schedule an appointment with Dr. Ditta today
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Call Us</h3>
                <a href="tel:(973) 533-1777" className="text-lg text-primary hover:text-primary/80 font-semibold">
                  (973) 533-1777
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Location</h3>
                <p className="text-foreground/70">
                  22 Old Short Hills Rd Ste 207<br />
                  Livingston, NJ 07039
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Hours</h3>
                <p className="text-foreground/70 text-sm">
                  Mon, Tue, Thu: 8am - 6pm<br />
                  Wed, Fri: Closed<br />
                  Sat: 8am - 1pm
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-6 text-lg">
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ProCare Dental</h3>
              <p className="text-white/70">Professional dental care in Livingston, NJ</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/"><a className="hover:text-white transition">Home</a></Link></li>
                <li><Link href="/dr-kristina-ceravolo"><a className="hover:text-white transition">Dr. Kristina</a></Link></li>
                <li><Link href="/"><a className="hover:text-white transition">Services</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-white/70">(973) 533-1777</p>
              <p className="text-white/70 text-sm mt-2">22 Old Short Hills Rd Ste 207<br />Livingston, NJ 07039</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-white/70 text-sm">
                Mon, Tue, Thu: 8am - 6pm<br />
                Wed, Fri: Closed<br />
                Sat: 8am - 1pm
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2026 ProCare Dental Livingston. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
