import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [, navigate] = useLocation();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="lg:hidden flex items-center gap-2">
      {/* Book Button */}
      <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-4 py-2 text-sm font-semibold" aria-label="Book an appointment at ProCare Dental">
        Book An Appointment
      </Button>

      {/* Hamburger Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 hover:bg-slate-200 rounded-lg transition"
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-24 left-0 right-0 bottom-0 bg-white border-b border-border shadow-lg z-40 overflow-y-auto">
          <div className="container px-4 py-4 space-y-2 pb-32">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-slate-200 rounded-lg transition"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* About Section - Expandable */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleSection('about')}
                className="w-full flex items-center justify-between py-3 font-semibold text-primary hover:text-primary/80 transition"
              >
                <span>About</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expandedSections.includes('about') ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSections.includes('about') && (
                <div className="space-y-2 pl-4 pb-3 text-sm">
                  <button onClick={() => { navigate('/dr-kristina-ceravolo'); setMobileMenuOpen(false); }} className="block hover:text-primary transition text-left">Meet the Doctors</button>
                  <button onClick={() => { navigate('/'); setMobileMenuOpen(false); }} className="block hover:text-primary transition text-left">Meet the Staff</button>
                  <button onClick={() => { navigate('/'); setMobileMenuOpen(false); }} className="block hover:text-primary transition text-left">Office Tour</button>
                </div>
              )}
            </div>

            {/* Our Services Section - Expandable */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleSection('services')}
                className="w-full flex items-center justify-between py-3 font-semibold text-primary hover:text-primary/80 transition"
              >
                <span>Our Services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expandedSections.includes('services') ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSections.includes('services') && (
                <div className="space-y-2 pl-4 pb-3 text-sm">
                  <button onClick={() => { navigate('/service/preventative-care'); setMobileMenuOpen(false); }} className="block hover:text-primary transition text-left">Preventative Care</button>
                  <button onClick={() => { navigate('/service/cosmetic-dentistry'); setMobileMenuOpen(false); }} className="block hover:text-primary transition text-left">Cosmetic Dentistry</button>
                  <button onClick={() => { navigate('/service/dental-implants'); setMobileMenuOpen(false); }} className="block hover:text-primary transition text-left">Dental Implants</button>
                  <button onClick={() => { navigate('/service/root-canal'); setMobileMenuOpen(false); }} className="block hover:text-primary transition text-left">Root Canal Treatment</button>
                  <button onClick={() => { navigate('/service/invisalign'); setMobileMenuOpen(false); }} className="block hover:text-primary transition text-left">Invisalign</button>
                  <button onClick={() => { navigate('/service/emergency-dentistry'); setMobileMenuOpen(false); }} className="block hover:text-primary transition text-left">Emergency Dentistry</button>
                </div>
              )}
            </div>

            {/* Patient Information Section - Expandable */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleSection('patient')}
                className="w-full flex items-center justify-between py-3 font-semibold text-primary hover:text-primary/80 transition"
              >
                <span>Patient Information</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expandedSections.includes('patient') ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSections.includes('patient') && (
                <div className="space-y-2 pl-4 pb-3 text-sm">
                  <button onClick={() => { navigate('/new-patients'); setMobileMenuOpen(false); }} className="block hover:text-primary transition text-left">New Patients</button>
                  <button onClick={() => { navigate('/financial-information'); setMobileMenuOpen(false); }} className="block hover:text-primary transition text-left">Financial Information</button>
                  <button onClick={() => { navigate('/insurance'); setMobileMenuOpen(false); }} className="block hover:text-primary transition text-left">Insurance</button>
                  <button onClick={() => { navigate('/forms'); setMobileMenuOpen(false); }} className="block hover:text-primary transition text-left">Forms</button>
                </div>
              )}
            </div>

            {/* Contact */}
            <div className="py-3">
              <button onClick={() => { navigate('/'); setMobileMenuOpen(false); }} className="font-semibold text-primary hover:text-primary/80 transition text-left">
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
