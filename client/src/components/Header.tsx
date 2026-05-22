import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MobileNav } from "@/components/MobileNav";
import { Phone, MapPin, ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * Redesigned Header Component - Swish Dental Style
 * Clean, modern navigation with forest green and gold theme
 */

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white">
      {/* Main Navigation */}
      <nav className="border-b border-gray-200">
        <div className="container flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/manus-storage/procare-dental-logo_105a5a08.png"
              alt="ProCare Dental"
              className="h-14 w-auto"
              width={56}
              height={56}
              loading="eager"
              decoding="sync"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem><Link href="/service/preventative-care">Preventative Care</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/service/cosmetic-dentistry">Cosmetic Dentistry</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/service/dental-implants">Dental Implants</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/service/emergency-dentistry">Emergency Dentistry</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Locations Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition">
                Locations <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem><Link href="/location/livingston">Livingston, NJ</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Insurance & Financing */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition">
                Insurance & Financing <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem><Link href="/insurance">Insurance Plans</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/financing">Financing Options</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition">
                About <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem><Link href="/dr-kristina-ceravolo">Meet the Doctors</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/blog">Blog</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact */}
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* Right Side - Phone & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:(973) 533-1777" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition">
              <Phone className="w-4 h-4" />
              <span>(512) 647-6045</span>
            </a>
            <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6">
              Book an Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="container px-4 py-4 space-y-4">
              <Link href="/services" className="block text-sm font-medium text-gray-700 hover:text-primary">
                Services
              </Link>
              <Link href="/locations" className="block text-sm font-medium text-gray-700 hover:text-primary">
                Locations
              </Link>
              <Link href="/insurance" className="block text-sm font-medium text-gray-700 hover:text-primary">
                Insurance & Financing
              </Link>
              <Link href="/about" className="block text-sm font-medium text-gray-700 hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="block text-sm font-medium text-gray-700 hover:text-primary">
                Contact
              </Link>
              <a href="tel:(973) 533-1777" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary">
                <Phone className="w-4 h-4" />
                <span>(512) 647-6045</span>
              </a>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full">
                Book an Appointment
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
