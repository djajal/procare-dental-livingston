import { Phone, MapPin } from "lucide-react";
import { useLocation } from "wouter";

interface TownPageProps {
  townName: string;
}

const TownPage = ({ townName }: TownPageProps) => {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-3 text-sm">
        <div className="container flex justify-between items-center">
          <a href="tel:(973) 533-1777" className="flex items-center gap-2 hover:text-secondary transition">
            <Phone className="w-4 h-4" />
            (973) 533-1777
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-secondary transition">
            <MapPin className="w-4 h-4" />
            22 Old Short Hills Rd Ste 207, Livingston, NJ 07039
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-secondary py-4 sticky top-0 z-50 shadow-sm">
        <div className="container flex justify-between items-center">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_transparent_3d817dc4.png" alt="ProCare Dental" className="h-14" />
          </button>
          <div className="flex gap-8 items-center">
            <a href="/" className="text-foreground hover:text-primary transition">Home</a>
            <a href="/#services" className="text-foreground hover:text-primary transition">Services</a>
            <a href="/#contact" className="text-foreground hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container max-w-4xl">
          <button onClick={() => navigate("/")} className="text-primary hover:text-primary/80 mb-6 flex items-center gap-2">
            ← Back to Home
          </button>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Dentist in {townName}, NJ</h1>
          <p className="text-xl text-foreground/80 leading-relaxed mb-8">
            ProCare Dental is your trusted dental provider serving {townName} and surrounding communities. We offer comprehensive dental care with state-of-the-art technology and compassionate service.
          </p>
          <div className="flex gap-4">
            <a href="tel:(973) 533-1777" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold">
              Call Now
            </a>
            <a href="/#contact" className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition font-semibold">
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-12">Dental Services for {townName} Residents</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Family Dentistry", desc: `Comprehensive dental care for the entire family in ${townName}` },
              { title: "Cosmetic Dentistry", desc: "Enhance your smile with professional cosmetic treatments" },
              { title: "Dental Implants", desc: `Permanent tooth replacement solutions for ${townName} patients` },
              { title: "Preventative Care", desc: "Regular checkups and cleanings to maintain oral health" },
              { title: "Invisalign", desc: "Clear aligner therapy for straighter teeth" },
              { title: "Emergency Dentistry", desc: "Fast, compassionate emergency dental care when you need it" },
            ].map((service, idx) => (
              <div key={idx} className="p-6 bg-secondary rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-foreground/80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-8">Why Choose ProCare Dental for {townName}?</h2>
          <ul className="space-y-4">
            {[
              `Conveniently located near ${townName} with easy access`,
              "State-of-the-art dental technology",
              "Experienced and compassionate dentists",
              "Personalized treatment plans",
              "Comfortable, welcoming environment",
              "Over 25 years of trusted experience",
              "NJ Top Dentist Award 2026",
              "Emergency dental services available",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-foreground/80 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-12">Contact ProCare Dental</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Location</h3>
              <p className="text-foreground/80 mb-2">22 Old Short Hills Rd Ste 207</p>
              <p className="text-foreground/80 mb-4">Livingston, NJ 07039</p>
              <p className="text-foreground/80 mb-2"><strong>Phone:</strong> <a href="tel:(973) 533-1777" className="text-primary hover:underline">(973) 533-1777</a></p>
              <p className="text-foreground/80"><strong>Hours:</strong> Mon-Tue, Thu: 8am-6pm | Sat: 8am-1pm</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Serving {townName}</h3>
              <p className="text-foreground/80 mb-4">
                ProCare Dental proudly serves patients from {townName}, Livingston, and surrounding communities. We're committed to providing the highest quality dental care to all our patients.
              </p>
              <a href="tel:(973) 533-1777" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition font-semibold">
                Call to Schedule
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container text-center text-sm text-white/70">
          <p>&copy; 2026 ProCare Dental. All rights reserved. | Dentist in {townName}, NJ</p>
        </div>
      </footer>
    </div>
  );
};

export const DentistShortHills = () => <TownPage townName="Short Hills" />;
export const DentistMillburn = () => <TownPage townName="Millburn" />;
export const DentistMadison = () => <TownPage townName="Madison" />;
export const DentistChatham = () => <TownPage townName="Chatham" />;
export const DentistSummit = () => <TownPage townName="Summit" />;
export const DentistFlorhamPark = () => <TownPage townName="Florham Park" />;
export const DentistSouthOrange = () => <TownPage townName="South Orange" />;
export const DentistMaplewood = () => <TownPage townName="Maplewood" />;
