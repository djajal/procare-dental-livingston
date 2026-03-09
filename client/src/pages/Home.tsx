import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Smile, Sparkles, Shield, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * ProCare Dental - Modern Professional Healthcare Design
 * Color Scheme: Navy Blue (#003D7A) + Teal (#00B4A6) + Soft Gray (#F5F5F5)
 * Typography: Poppins (headers) + Inter (body)
 */

export default function Home() {
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_4d8e05bf.png"
              alt="ProCare Dental"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline">ProCare Dental</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#services" className="text-foreground hover:text-primary transition">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition">
                Contact
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Book Appointment</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-secondary to-white py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Your Smile, Our Priority
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Welcome to ProCare Dental, where we combine advanced technology with compassionate care to deliver exceptional dental experiences.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule Visit
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <Smile className="w-32 h-32 text-primary mx-auto mb-4 opacity-20" />
                <p className="text-foreground/40 font-medium">Healthy Smiles Start Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive dental care tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Teeth Whitening",
                description: "Professional whitening treatments for a brighter, more confident smile",
              },
              {
                icon: Shield,
                title: "Preventative Care",
                description: "Regular checkups and cleanings to maintain optimal oral health",
              },
              {
                icon: Smile,
                title: "Cosmetic Dentistry",
                description: "Enhance your smile with veneers, bonding, and other cosmetic solutions",
              },
              {
                icon: Users,
                title: "Family Dentistry",
                description: "Comprehensive care for patients of all ages in a welcoming environment",
              },
            ].map((service, idx) => (
              <Card key={idx} className="border border-border hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <CardHeader className="pb-4">
                  <service.icon className="w-12 h-12 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <Shield className="w-32 h-32 text-primary mx-auto mb-4 opacity-20" />
                <p className="text-foreground/40 font-medium">Advanced Technology</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Why Choose ProCare?</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                At ProCare Dental, we're committed to providing the highest quality dental care using the latest technology and techniques. Our experienced team is dedicated to making your dental experience comfortable and stress-free.
              </p>
              <ul className="space-y-4">
                {[
                  "State-of-the-art dental technology",
                  "Experienced and compassionate team",
                  "Personalized treatment plans",
                  "Comfortable, welcoming environment",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Livingston, NJ",
                },
                {
                  icon: Clock,
                  title: "Hours",
                  content: "Mon-Fri: 8am-6pm",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.content}</p>
                </div>
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
                Professional dental care with a personal touch.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition">Preventative Care</a></li>
                <li><a href="#" className="hover:text-white transition">Cosmetic Dentistry</a></li>
                <li><a href="#" className="hover:text-white transition">Family Dentistry</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Book Appointment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-white/80 mb-2">(973) 533-1777</p>
              <p className="text-sm text-white/80">Livingston, NJ</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2026 ProCare Dental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
