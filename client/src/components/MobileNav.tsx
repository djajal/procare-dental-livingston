import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="fixed top-24 left-0 right-0 bottom-0 bg-white border-b border-border shadow-lg z-50 overflow-y-auto">
          <div className="container px-4 py-4 space-y-4">
            {/* Close Button */}
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-slate-200 rounded-lg transition"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* About */}
            <div>
              <div className="font-semibold text-primary mb-2">About</div>
              <div className="space-y-2 pl-4 text-sm">
                <a href="#" className="block hover:text-primary transition">Meet the Doctors</a>
                <a href="#" className="block hover:text-primary transition">Meet the Staff</a>
                <a href="#" className="block hover:text-primary transition">Office Tour</a>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <div className="font-semibold text-primary mb-2">Our Services</div>
              <div className="space-y-2 pl-4 text-sm">
                <a href="#" className="block hover:text-primary transition">Preventative Care</a>
                <a href="#" className="block hover:text-primary transition">Cosmetic Dentistry</a>
                <a href="#" className="block hover:text-primary transition">Dental Implants</a>
                <a href="#" className="block hover:text-primary transition">Root Canal Treatment</a>
                <a href="#" className="block hover:text-primary transition">Invisalign</a>
                <a href="#" className="block hover:text-primary transition">Emergency Dentistry</a>
              </div>
            </div>

            {/* Patient Information */}
            <div>
              <div className="font-semibold text-primary mb-2">Patient Information</div>
              <div className="space-y-2 pl-4 text-sm">
                <a href="#" className="block hover:text-primary transition">New Patients</a>
                <a href="#" className="block hover:text-primary transition">Financial Information</a>
                <a href="#" className="block hover:text-primary transition">Insurance</a>
                <a href="#" className="block hover:text-primary transition">Forms</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <a href="#contact" className="font-semibold text-primary hover:text-primary/80 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
