import { Phone, MapPin, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MobileNav } from "@/components/MobileNav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * Header Component - Swish Style with Original Menu Items
 * Clean navigation with forest green and gold theme
 */

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-primary text-white py-2.5 px-4">
        <div className="container flex items-center justify-end gap-8 text-sm">
          <a href="tel:(973) 533-1777" className="flex items-center gap-2 hover:text-accent transition">
            <Phone className="w-4 h-4" />
            <span>(973) 533-1777</span>
          </a>
          <span className="text-white/40">|</span>
          <a href="https://maps.google.com/?q=22+Old+Short+Hills+Rd+Ste+207+Livingston+NJ+07039" className="flex items-center gap-2 hover:text-accent transition">
            <MapPin className="w-4 h-4" />
            <span>22 Old Short Hills Rd Ste 207, Livingston, NJ 07039</span>
          </a>
        </div>
      </div>

      {/* Mobile Contact Bar */}
      <div className="md:hidden bg-primary text-white py-2 px-4">
        <div className="container flex items-center justify-between gap-3">
          <a href="tel:(973) 533-1777" className="flex items-center gap-2 hover:text-accent transition">
            <Phone className="w-5 h-5" />
            <span className="text-sm font-semibold">(973) 533-1777</span>
          </a>
          <a href="https://maps.google.com/?q=22+Old+Short+Hills+Rd+Ste+207+Livingston+NJ+07039" className="p-2 hover:bg-white/20 rounded-lg transition">
            <MapPin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-gray-200">
        <div className="container flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/manus-storage/procare-dental-logo_105a5a08.png"
              alt="ProCare Dental logo"
              className="h-16 w-auto cursor-pointer"
              width={64}
              height={64}
              loading="eager"
              decoding="sync"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition">
                About <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Link href="/dr-kristina-ceravolo">Meet the Doctors</Link></DropdownMenuItem>
                <DropdownMenuItem>Meet the Staff</DropdownMenuItem>
                <DropdownMenuItem>Office Tour</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Our Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-auto p-4">
                <div className="grid grid-cols-3 gap-6 min-w-max">
                  {/* Column 1 */}
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">Preventative & General</div>
                    <div className="space-y-1 text-sm">
                      <Link href="/service/dental-hygiene" className="block hover:text-primary transition">Dental Hygiene</Link>
                      <Link href="/service/preventative-care" className="block hover:text-primary transition">Preventative Care</Link>
                      <Link href="/service/family-dentistry" className="block hover:text-primary transition">Family Dentistry</Link>
                      <Link href="/service/teeth-whitening" className="block hover:text-primary transition">Teeth Whitening</Link>
                    </div>
                    <div className="text-sm font-semibold text-primary mt-4 mb-2">Cosmetic Services</div>
                    <div className="space-y-1 text-sm">
                      <Link href="/service/lumineers" className="block hover:text-primary transition">Lumineers</Link>
                      <Link href="/service/veneers" className="block hover:text-primary transition">Veneers</Link>
                      <Link href="/service/zoom-whitening" className="block hover:text-primary transition">Zoom Whitening</Link>
                      <Link href="/service/snap-on-smile" className="block hover:text-primary transition">Snap On Smile</Link>
                      <Link href="/service/bonding" className="block hover:text-primary transition">Bonding & White Fillings</Link>
                    </div>
                  </div>
                  {/* Column 2 */}
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">Restorative</div>
                    <div className="space-y-1 text-sm">
                      <Link href="/service/dental-implants" className="block hover:text-primary transition">Dental Implants</Link>
                      <Link href="/service/bridges" className="block hover:text-primary transition">Bridges</Link>
                      <Link href="/service/crowns" className="block hover:text-primary transition">Crowns</Link>
                      <Link href="/service/dentures" className="block hover:text-primary transition">Dentures</Link>
                      <Link href="/service/inlays-onlays" className="block hover:text-primary transition">Inlays & Onlays</Link>
                    </div>
                    <div className="text-sm font-semibold text-primary mt-4 mb-2">Endodontics</div>
                    <div className="space-y-1 text-sm">
                      <Link href="/service/root-canal" className="block hover:text-primary transition">Root Canal Treatment</Link>
                      <Link href="/service/root-canal-retreatment" className="block hover:text-primary transition">Retreatment</Link>
                    </div>
                  </div>
                  {/* Column 3 */}
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">Periodontic</div>
                    <div className="space-y-1 text-sm">
                      <Link href="/service/periodontal-disease" className="block hover:text-primary transition">Gum Disease Treatment</Link>
                      <Link href="/service/scaling-root-planing" className="block hover:text-primary transition">Scaling & Root Planing</Link>
                    </div>
                    <div className="text-sm font-semibold text-primary mt-4 mb-2">Oral Surgery</div>
                    <div className="space-y-1 text-sm">
                      <Link href="/service/wisdom-teeth" className="block hover:text-primary transition">Wisdom Teeth Extraction</Link>
                      <Link href="/service/extractions" className="block hover:text-primary transition">Extractions</Link>
                      <Link href="/service/sleep-apnea" className="block hover:text-primary transition">Sleep Apnea Treatment</Link>
                    </div>
                    <div className="text-sm font-semibold text-primary mt-4 mb-2">Pediatric & Specialty</div>
                    <div className="space-y-1 text-sm">
                      <Link href="/service/sealants" className="block hover:text-primary transition">Sealants</Link>
                      <Link href="/service/mouth-guards" className="block hover:text-primary transition">Mouth Guards</Link>
                      <Link href="/service/night-guards" className="block hover:text-primary transition">Night Guards</Link>
                      <Link href="/service/tmj" className="block hover:text-primary transition">TMJ Treatment</Link>
                      <Link href="/service/occlusal-adjustment" className="block hover:text-primary transition">Occlusal Adjustment</Link>
                    </div>
                    <div className="text-sm font-semibold text-primary mt-4 mb-2">Technology</div>
                    <div className="space-y-1 text-sm">
                      <Link href="/our-technology" className="block hover:text-primary transition">Our Advanced Technology</Link>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Patient Information Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition">
                Patient Info <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Link href="/new-patients">New Patients</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/financial-information">Financial Information</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/insurance">Insurance</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/insurance/delta-dental">Delta Dental</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/insurance/aetna">Aetna</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/insurance/cigna">Cigna</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/forms">Forms</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Blog */}
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-primary transition">
              Blog
            </Link>

            {/* Contact */}
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* Right Side - CTA */}
          <div className="hidden lg:flex items-center">
            <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-2 h-auto text-sm font-semibold">
              Book An Appointment
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-3">
            <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-4 py-2 h-auto text-sm font-semibold">
              Book Now
            </Button>
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
}
