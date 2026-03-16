import { Link } from "wouter";
import { Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import ZocDocWidget from "./ZocDocWidget";

/**
 * Persistent Footer Component
 * Includes Visit Us (Google Maps), Get in Touch section, and footer links
 * Available across all pages for consistent branding and contact options
 */

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
    <footer className="bg-white">
      {/* Visit Us Section - Google Maps */}
      <section className="py-16 md:py-20 bg-white border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" role="heading" aria-level={2}>
              Visit Us in Livingston
            </h2>
            <p className="text-xl text-foreground/70">Find us on the map and get directions</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.6596816282286!2d-74.3029631227733!3d40.76950923409121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3abf98bd285d9%3A0x2d9473985b08046!2sProCare%20Dental%20Livingston!5e0!3m2!1sen!2sus!4v1773093153871!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ProCare Dental location on Google Maps"
              aria-label="ProCare Dental location map"
            />
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" role="heading" aria-level={2}>
                Get In Touch
              </h2>
              <p className="text-xl text-foreground/70">Have questions? We'd love to hear from you.</p>
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
                        aria-label="Your full name"
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
                        aria-label="Your email address"
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
                      aria-label="Your phone number"
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
                      aria-label="Your message"
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

      {/* Footer Links Section */}
      <section className="bg-primary text-white py-12">
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
                <li><a href="/#services" className="hover:text-white transition">Preventative Care</a></li>
                <li><a href="/#services" className="hover:text-white transition">Cosmetic Dentistry</a></li>
                <li><a href="/#services" className="hover:text-white transition">Family Dentistry</a></li>
                <li><a href="/#services" className="hover:text-white transition">Dental Implants</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/reviews" className="hover:text-white transition">Reviews</Link></li>
                <li><Link href="/insurance" className="hover:text-white transition">Insurance</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Nearby Towns</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link href="/dentist-west-orange" className="hover:text-white transition">West Orange</Link></li>
                <li><Link href="/dentist-verona" className="hover:text-white transition">Verona</Link></li>
                <li><Link href="/dentist-montclair" className="hover:text-white transition">Montclair</Link></li>
                <li><Link href="/dentist-bloomfield" className="hover:text-white transition">Bloomfield</Link></li>
                <li><Link href="/dentist-essex-fells" className="hover:text-white transition">Essex Fells</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-white/80 mb-2"><a href="tel:(973) 533-1777" className="hover:text-white transition">(973) 533-1777</a></p>
              <p className="text-sm text-white/80">Livingston, NJ 07039</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 mb-8">
            {/* ZocDoc Widget - Lazy loaded to prevent render blocking */}
            <ZocDocWidget />
            <p className="text-center text-sm text-white/70">&copy; 2026 ProCare Dental. All rights reserved. | Dentist in Livingston, NJ</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
