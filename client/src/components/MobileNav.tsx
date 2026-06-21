import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [, navigate] = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus the first focusable element in the menu
      const firstFocusable = menuRef.current?.querySelector<HTMLElement>('button, a, [tabindex]');
      firstFocusable?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key and focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!mobileMenuOpen) return;
      
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        triggerRef.current?.focus();
        return;
      }

      // Focus trap: keep Tab/Shift+Tab within the menu
      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'button, a, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        
        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="lg:hidden flex items-center gap-2">
      {/* Book Button */}
      <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-4 py-2 text-sm font-semibold" aria-label="Book an appointment at ProCare Dental">
        Book An Appointment
      </Button>

      {/* Hamburger Menu Button */}
      <button
        ref={triggerRef}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 hover:bg-slate-200 rounded-lg transition"
        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-nav-menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="fixed top-24 left-0 right-0 bottom-0 bg-white border-b border-border shadow-lg z-40 overflow-y-auto"
        >
          <nav aria-label="Mobile navigation" className="container px-4 py-4 space-y-2 pb-32">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => { setMobileMenuOpen(false); triggerRef.current?.focus(); }}
                className="p-2 hover:bg-slate-200 rounded-lg transition"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* About Section - Expandable */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleSection('about')}
                className="w-full flex items-center justify-between py-3 font-semibold text-primary hover:text-primary/80 transition"
                aria-expanded={expandedSections.includes('about')}
                aria-controls="mobile-about-section"
              >
                <span>About</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expandedSections.includes('about') ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {expandedSections.includes('about') && (
                <div id="mobile-about-section" role="region" aria-label="About submenu" className="space-y-2 pl-4 pb-3 text-sm">
                  <button onClick={() => handleNavigation('/dr-kristina-ceravolo')} className="block hover:text-primary transition text-left w-full py-1">Meet the Doctors</button>
                  <button onClick={() => handleNavigation('/')} className="block hover:text-primary transition text-left w-full py-1">Meet the Staff</button>
                  <button onClick={() => handleNavigation('/')} className="block hover:text-primary transition text-left w-full py-1">Office Tour</button>
                </div>
              )}
            </div>

            {/* Our Services Section - Expandable */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleSection('services')}
                className="w-full flex items-center justify-between py-3 font-semibold text-primary hover:text-primary/80 transition"
                aria-expanded={expandedSections.includes('services')}
                aria-controls="mobile-services-section"
              >
                <span>Our Services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expandedSections.includes('services') ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {expandedSections.includes('services') && (
                <div id="mobile-services-section" role="region" aria-label="Services submenu" className="space-y-2 pl-4 pb-3 text-sm">
                  <button onClick={() => handleNavigation('/service/preventative-care')} className="block hover:text-primary transition text-left w-full py-1">Preventative Care</button>
                  <button onClick={() => handleNavigation('/service/cosmetic-dentistry')} className="block hover:text-primary transition text-left w-full py-1">Cosmetic Dentistry</button>
                  <button onClick={() => handleNavigation('/service/dental-implants')} className="block hover:text-primary transition text-left w-full py-1">Dental Implants</button>
                  <button onClick={() => handleNavigation('/service/root-canal')} className="block hover:text-primary transition text-left w-full py-1">Root Canal Treatment</button>
                  <button onClick={() => handleNavigation('/service/invisalign')} className="block hover:text-primary transition text-left w-full py-1">Invisalign</button>
                  <button onClick={() => handleNavigation('/service/emergency-dentistry')} className="block hover:text-primary transition text-left w-full py-1">Emergency Dentistry</button>
                </div>
              )}
            </div>

            {/* Patient Information Section - Expandable */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleSection('patient')}
                className="w-full flex items-center justify-between py-3 font-semibold text-primary hover:text-primary/80 transition"
                aria-expanded={expandedSections.includes('patient')}
                aria-controls="mobile-patient-section"
              >
                <span>Patient Information</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expandedSections.includes('patient') ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {expandedSections.includes('patient') && (
                <div id="mobile-patient-section" role="region" aria-label="Patient Information submenu" className="space-y-2 pl-4 pb-3 text-sm">
                  <button onClick={() => handleNavigation('/new-patients')} className="block hover:text-primary transition text-left w-full py-1">New Patients</button>
                  <button onClick={() => handleNavigation('/financial-information')} className="block hover:text-primary transition text-left w-full py-1">Financial Information</button>
                  <button onClick={() => handleNavigation('/insurance')} className="block hover:text-primary transition text-left w-full py-1">Insurance</button>
                  <button onClick={() => handleNavigation('/forms')} className="block hover:text-primary transition text-left w-full py-1">Forms</button>
                </div>
              )}
            </div>

            {/* Blog */}
            <div className="py-3 border-b border-border">
              <button onClick={() => handleNavigation('/blog')} className="font-semibold text-primary hover:text-primary/80 transition text-left w-full">
                Blog
              </button>
            </div>

            {/* Contact */}
            <div className="py-3">
              <button onClick={() => handleNavigation('/')} className="font-semibold text-primary hover:text-primary/80 transition text-left w-full">
                Contact
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
