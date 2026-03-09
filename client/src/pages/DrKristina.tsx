import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Award, Users, Heart } from "lucide-react";
import { useLocation } from "wouter";

export default function DrKristina() {
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
            22 Old Short Hills Rd Suite 207, Livingston, NJ 07039
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-secondary py-4 sticky top-0 z-50 shadow-sm">
        <div className="container flex justify-between items-center">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_4d8e05bf.png" alt="ProCare Dental" className="h-10" />
          </button>
          <div className="flex gap-8 items-center">
            <a href="/" className="text-foreground hover:text-primary transition">Home</a>
            <a href="/#services" className="text-foreground hover:text-primary transition">Services</a>
            <a href="/#contact" className="text-foreground hover:text-primary transition">Contact</a>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 py-2">
              Book an Appointment
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-secondary to-white">
        <div className="container">
          <button onClick={() => navigate("/")} className="text-primary hover:text-primary/80 mb-6 flex items-center gap-2">
            ← Back to Home
          </button>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
                Dr. Kristina Ceravolo
              </h1>
              <p className="text-2xl text-accent font-semibold mb-6">DMD</p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Dr. Kristina Ceravolo is a dedicated dental professional committed to providing exceptional patient care with the latest dental technology and techniques. With years of experience in general and cosmetic dentistry, Dr. Ceravolo is passionate about helping patients achieve their healthiest, most beautiful smiles.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Education & Credentials</h3>
                    <p className="text-foreground/80">Doctor of Dental Medicine (DMD) with extensive training in cosmetic and restorative dentistry</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Patient-Centered Care</h3>
                    <p className="text-foreground/80">Dedicated to creating a comfortable, welcoming environment for all patients</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Specialties</h3>
                    <p className="text-foreground/80">Family dentistry, cosmetic dentistry, dental implants, and emergency dental care</p>
                  </div>
                </div>
              </div>

              <a href="tel:(973) 533-1777">
                <Button size="lg" className="bg-primary hover:bg-primary/90 mr-4">
                  Call Now
                </Button>
              </a>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                Book an Appointment
              </Button>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6 w-full max-w-md">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipN0dB0NAiD-y4J6zzLcXcf4nVCDeL7wLqvlHduw=s1024-v1"
                  alt="Dr. Kristina Ceravolo, DMD - Dentist in Livingston NJ"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-primary text-center">Dr. Kristina Ceravolo</h2>
              <p className="text-lg text-accent font-semibold text-center">DMD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Services Provided by Dr. Ceravolo</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-secondary rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Family Dentistry</h3>
              <p className="text-foreground/80">Comprehensive dental care for patients of all ages, from children to seniors.</p>
            </div>
            
            <div className="p-8 bg-secondary rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Cosmetic Dentistry</h3>
              <p className="text-foreground/80">Enhance your smile with teeth whitening, veneers, bonding, and other cosmetic solutions.</p>
            </div>
            
            <div className="p-8 bg-secondary rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Dental Implants</h3>
              <p className="text-foreground/80">Permanent tooth replacement solutions that look and feel natural.</p>
            </div>
            
            <div className="p-8 bg-secondary rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Emergency Dentistry</h3>
              <p className="text-foreground/80">Fast, compassionate care when you need it most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Schedule Your Appointment</h2>
          <p className="text-lg text-foreground/80 mb-8">Contact ProCare Dental today to schedule your consultation with Dr. Kristina Ceravolo</p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <a href="tel:(973) 533-1777" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">(973) 533-1777</span>
            </a>
            <span className="text-foreground/40">|</span>
            <a href="#" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <MapPin className="w-5 h-5" />
              <span className="text-lg font-semibold">22 Old Short Hills Rd Suite 207, Livingston, NJ 07039</span>
            </a>
          </div>

          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-6 text-lg">
            Book an Appointment
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container text-center text-sm text-white/70">
          <p>&copy; 2026 ProCare Dental. All rights reserved. | Dentist in Livingston, NJ</p>
        </div>
      </footer>
    </div>
  );
}
