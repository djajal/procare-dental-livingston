import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Smile, Sparkles, Shield, Users, Star, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Link } from "wouter";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * ProCare Dental - SEO Optimized Professional Healthcare Design
 * H1: "Dentist in Livingston NJ"
 * H2: All services offered
 * Color Scheme: Navy Blue (#003D7A) + Teal (#00B4A6) + Soft Gray (#F5F5F5)
 * Typography: Poppins (headers) + Inter (body)
 */

const SERVICES = [
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more confident smile.",
  },
  {
    id: "preventative-care",
    title: "Preventative Care",
    description: "Regular checkups and cleanings to maintain optimal oral health.",
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with veneers, bonding, and other cosmetic solutions.",
  },
  {
    id: "family-dentistry",
    title: "Family Dentistry",
    description: "Comprehensive care for patients of all ages in a welcoming environment.",
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Restore your smile with permanent dental implants.",
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Expert endodontic care to save your natural teeth.",
  },
  {
    id: "invisalign",
    title: "Invisalign",
    description: "Clear aligner therapy for straighter teeth without traditional braces.",
  },
  {
    id: "emergency-dentistry",
    title: "Emergency Dentistry",
    description: "Fast, compassionate emergency dental care when you need it most.",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Add JSON-LD schema markup
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "ProCare Dental",
        "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_new-itoU26Uu5fW47iKpWCMPA7.webp",
      "description": "Professional dental care in Livingston, NJ offering family dentistry, cosmetic dentistry, dental implants, and emergency services.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "22 Old Short Hills Rd Suite 207",
        "addressLocality": "Livingston",
        "addressRegion": "NJ",
        "postalCode": "07039",
        "addressCountry": "US"
      },
      "telephone": "(973) 533-1777",
      "url": "https://procardentallivingston.com",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Thursday",
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "13:00"
        }
      ],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "119"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-white py-3 px-4">
        <div className="container flex items-center justify-end gap-8 text-sm md:text-base">
          <a href="tel:(973) 533-1777" className="flex items-center gap-2 hover:text-accent transition">
            <Phone className="w-4 h-4" />
            <span>(973) 533-1777</span>
          </a>
          <span className="hidden md:inline text-white/50">|</span>
          <a href="https://maps.google.com/?q=22+Old+Short+Hills+Rd+Suite+207+Livingston+NJ+07039" className="flex items-center gap-2 hover:text-accent transition">
            <MapPin className="w-4 h-4" />
            <span>22 Old Short Hills Rd Suite 207, Livingston, NJ 07039</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-100 border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-24 px-4">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_new-itoU26Uu5fW47iKpWCMPA7.webp"
              alt="ProCare Dental"
              className="h-20 w-auto"
              width={80}
              height={80}
            />
          </div>
          <div className="flex items-center gap-8">
            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-lg font-semibold text-foreground hover:text-primary transition">
                About <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Meet the Doctors</DropdownMenuItem>
                <DropdownMenuItem>Meet the Staff</DropdownMenuItem>
                <DropdownMenuItem>Office Tour</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Our Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-lg font-semibold text-foreground hover:text-primary transition">
                Our Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <div className="px-2 py-1 text-sm font-semibold text-primary">Preventative & General</div>
                <DropdownMenuItem><a href="/service/dental-hygiene">Dental Hygiene</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/oral-cancer-screenings">Oral Cancer Screenings</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/digital-xray">Digital X-Ray</a></DropdownMenuItem>
                
                <div className="px-2 py-1 text-sm font-semibold text-primary mt-2">Cosmetic Services</div>
                <DropdownMenuItem><a href="/service/lumineers">Lumineers</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/veneers">Veneers</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/zoom-whitening">Zoom Whitening</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/snap-on-smile">Snap On Smile</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/bonding">Bonding & White Fillings</a></DropdownMenuItem>
                
                <div className="px-2 py-1 text-sm font-semibold text-primary mt-2">Restorative</div>
                <DropdownMenuItem><a href="/service/dental-implants">Dental Implants</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/bridges">Bridges</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/crowns">Crowns</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/dentures">Dentures</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/inlays-onlays">Inlays & Onlays</a></DropdownMenuItem>
                
                <div className="px-2 py-1 text-sm font-semibold text-primary mt-2">Endodontics</div>
                <DropdownMenuItem><a href="/service/root-canal">Root Canal Treatment</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/root-canal-retreatment">Retreatment</a></DropdownMenuItem>
                
                <div className="px-2 py-1 text-sm font-semibold text-primary mt-2">Periodontic</div>
                <DropdownMenuItem><a href="/service/periodontal-disease">Gum Disease Treatment</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/scaling-root-planing">Scaling & Root Planing</a></DropdownMenuItem>
                
                <div className="px-2 py-1 text-sm font-semibold text-primary mt-2">Oral Surgery</div>
                <DropdownMenuItem><a href="/service/wisdom-teeth">Wisdom Teeth Extraction</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/extractions">Extractions</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/sleep-apnea">Sleep Apnea Treatment</a></DropdownMenuItem>
                
                <div className="px-2 py-1 text-sm font-semibold text-primary mt-2">Pediatric & Specialty</div>
                <DropdownMenuItem><a href="/service/sealants">Sealants</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/mouth-guards">Mouth Guards</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/night-guards">Night Guards</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/tmj">TMJ Treatment</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/service/occlusal-adjustment">Occlusal Adjustment</a></DropdownMenuItem>
                
                <div className="px-2 py-1 text-sm font-semibold text-primary mt-2">Technology</div>
                <DropdownMenuItem><a href="/our-technology">Our Advanced Technology</a></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Patient Information Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-lg font-semibold text-foreground hover:text-primary transition">
                Patient Information <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Link href="/new-patients">New Patients</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/financial-information">Financial Information</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/insurance">Insurance</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/forms">Forms</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Link */}
            <a href="#contact" className="text-lg font-semibold text-foreground hover:text-primary transition">
              Contact
            </a>

            {/* Book Appointment Button */}
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-6 text-lg font-semibold">
              Book an Appointment
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with H1 */}
      <section className="bg-gradient-to-br from-white via-secondary to-white py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Dentist in Livingston NJ
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Professional dental care combining advanced technology with compassionate service. Family dentistry, cosmetic dentistry, and emergency dental services for Livingston, NJ residents.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="tel:(973) 533-1777">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Call Now
                  </Button>
                </a>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Book Appointment
                </Button>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-foreground/70">119 Google Reviews - 4.9/5 Stars</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-96 w-full flex items-center justify-center overflow-hidden">
                <a href="/dr-kristina-ceravolo" className="hover:opacity-80 transition w-full h-full flex items-center justify-center">
                  <img
                    src="https://lh3.googleusercontent.com/p/AF1QipN0dB0NAiD-y4J6zzLcXcf4nVCDeL7wLqvlHduw=s1024-v1"
                    alt="Dr. Kristina Ceravolo, DMD - Dentist in Livingston NJ"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <div className="text-center">
                <a href="/dr-kristina-ceravolo" className="hover:text-primary/80 transition">
                  <h3 className="text-2xl font-bold text-primary">Dr. Kristina Ceravolo</h3>
                  <p className="text-lg text-accent font-semibold">DMD</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with H2 Tags */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Dental Services in Livingston, NJ
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive dental care tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <a href={`/service/${service.id}`} key={service.id}>
                <Card className="border border-border hover:shadow-lg transition-shadow duration-300 group cursor-pointer h-full">
                  <CardHeader className="pb-4">
                    <Sparkles className="w-12 h-12 text-accent mb-3 group-hover:scale-110 transition-transform" />
                    <h2 className="text-lg font-semibold text-primary">{service.title}</h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_technology_c78a18c7.png"
                alt="Advanced Dental Technology - ProCare Dental Livingston"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Why Choose ProCare Dental?</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                At ProCare Dental in Livingston, NJ, we're committed to providing the highest quality dental care using the latest technology and techniques. Our experienced team of dentists is dedicated to making your dental experience comfortable and stress-free.
              </p>
              <ul className="space-y-4">
                {[
                  "State-of-the-art dental technology",
                  "Experienced and compassionate dentists",
                  "Personalized treatment plans",
                  "Comfortable, welcoming environment",
                  "Over 25 years of trusted experience",
                  "Emergency dental services available",
                  "NJ Top Dentist Award 2026",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-center md:justify-start">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/nj_top_dentist_2026_a1720d57.png"
                  alt="NJ Top Dentist 2026 Award - ProCare Dental Livingston"
                  className="w-48 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Visit Us in Livingston</h2>
            <p className="text-xl text-foreground/70">Find us on the map and get directions</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: '600px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.6596816282286!2d-74.3029631227733!3d40.76950923409121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3abf98bd285d9%3A0x2d9473985b08046!2sProCare%20Dental%20Livingston!5e0!3m2!1sen!2sus!4v1773093153871!5m2!1sen!2sus"
              width="600"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
              <p className="text-xl text-foreground/70">
                Have questions? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  content: "(973) 533-1777",
                  link: "tel:(973) 533-1777",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "22 Old Short Hills Rd Suite 207, Livingston, NJ 07039",
                  link: "https://maps.google.com/?q=22+Old+Short+Hills+Rd+Suite+207+Livingston+NJ+07039",
                },
                {
                  icon: Clock,
                  title: "Hours",
                  content: "Mon-Tue, Thu: 8am-6pm | Sat: 8am-1pm",
                  link: "#",
                },
              ].map((item, idx) => (
                <a key={idx} href={item.link} className="text-center hover:opacity-80 transition">
                  <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.content}</p>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="text-primary">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="border-border"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(XXX) XXX-XXXX"
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help..."
                      className="border-border min-h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ProCare Dental</h3>
              <p className="text-white/80 text-sm">
                Professional dental care with a personal touch in Livingston, NJ.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#services" className="hover:text-white transition">Preventative Care</a></li>
                <li><a href="#services" className="hover:text-white transition">Cosmetic Dentistry</a></li>
                <li><a href="#services" className="hover:text-white transition">Family Dentistry</a></li>
                <li><a href="#services" className="hover:text-white transition">Dental Implants</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/reviews" className="hover:text-white transition">Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/sitemap" className="hover:text-white transition">Sitemap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Nearby Towns</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/dentist-west-orange" className="hover:text-white transition">West Orange</a></li>
                <li><a href="/dentist-verona" className="hover:text-white transition">Verona</a></li>
                <li><a href="/dentist-montclair" className="hover:text-white transition">Montclair</a></li>
                <li><a href="/dentist-bloomfield" className="hover:text-white transition">Bloomfield</a></li>
                <li><a href="/dentist-essex-fells" className="hover:text-white transition">Essex Fells</a></li>
                <li><a href="/dentist-short-hills" className="hover:text-white transition">Short Hills</a></li>
                <li><a href="/dentist-millburn" className="hover:text-white transition">Millburn</a></li>
                <li><a href="/dentist-madison" className="hover:text-white transition">Madison</a></li>
                <li><a href="/dentist-chatham" className="hover:text-white transition">Chatham</a></li>
                <li><a href="/dentist-summit" className="hover:text-white transition">Summit</a></li>
                <li><a href="/dentist-florham-park" className="hover:text-white transition">Florham Park</a></li>
                <li><a href="/dentist-south-orange" className="hover:text-white transition">South Orange</a></li>
                <li><a href="/dentist-maplewood" className="hover:text-white transition">Maplewood</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-white/80 mb-2"><a href="tel:(973) 533-1777" className="hover:text-white transition">(973) 533-1777</a></p>
              <p className="text-sm text-white/80">Livingston, NJ 07039</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 mb-8">
            <div className="flex justify-center mb-6">
              <div>
                <a style={{display: 'block'}} href='https://www.zocdoc.com/practice/procare-dental-livingston-168071?lock=true&isNewPatient=false&referrerType=widget' className='zd-plugin' data-type='book-button' data-practice-id='168071' title='ProCare Dental Livingston'>
                  <img src='https://offsiteSchedule.zocdoc.com/images/remote/zd_bookonline_162x48.png?type=bobjs&monolith_provider_id=168071&practice_id=pt_v_yyrdwF5k2edNrvM8lGNw' alt='ProCare Dental Livingston' title='ProCare Dental Livingston' style={{border: '0'}}/>
                </a>
              </div>
            </div>
            <p className="text-center text-sm text-white/70">&copy; 2026 ProCare Dental. All rights reserved. | Dentist in Livingston, NJ</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
