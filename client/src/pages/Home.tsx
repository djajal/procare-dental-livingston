import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Plus, Star } from "lucide-react";

/**
 * ProCare Dental - Redesigned Homepage
 * Swish Dental Style with Forest Green & Gold Theme
 */

const SERVICES = [
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
    id: "dental-implants",
    title: "Dental Implants",
    description: "Restore your smile with permanent dental implants.",
  },
  {
    id: "emergency-dentistry",
    title: "Emergency Dentistry",
    description: "Fast, compassionate emergency dental care when you need it most.",
  },
];

export default function Home() {
  const { user } = useAuth();
  const { data: zocdocReviews } = trpc.reviews.zocdoc.useQuery();

  useEffect(() => {
    document.title = "Dentist in Livingston NJ - ProCare Dental Care";

    const schema = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "ProCare Dental",
      "description": "Professional dental care in Livingston, NJ",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "22 Old Short Hills Rd Ste 207",
        "addressLocality": "Livingston",
        "addressRegion": "NJ",
        "postalCode": "07039",
      },
      "telephone": "(973) 533-1777",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "120"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Decorative Plus Signs */}
              <div className="flex gap-2 text-accent">
                <Plus className="w-5 h-5" />
                <Plus className="w-5 h-5" />
                <Plus className="w-5 h-5" />
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                  Seeing the dentist just got cooler
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Welcome to ProCare Dental, where seeing the dentist is something you actually look forward to. We are dedicated to helping you achieve your healthiest smile, delivering compassionate dental care and an extraordinary dental experience.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-base font-semibold">
                  Book an Appointment
                </Button>
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-base font-semibold">
                  Find a Studio Near You
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-accent/20 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/nj_top_dentist_2026_a1720d57.png"
                  alt="Modern dental office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-accent/20 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_technology_c78a18c7.png"
                  alt="Patient smiling"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Dental Care You'll Love</p>
                <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                  Helping you achieve<br />
                  <span className="text-accent">your dream smile</span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our goal as family dentists is to establish lifelong connections with our patients. We strive to create healthy smiles and change the way you think about seeing the dentist.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                At our dental practice, we are dedicated to preventing, diagnosing, and treating oral health issues. We prioritize your comfort, utilize the newest dental technology, and provide comprehensive dental care for the whole family.
              </p>

              <Link href="/about" className="inline-block">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-base font-semibold">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Google Reviews */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-3xl font-bold text-primary mb-1">5.0</p>
              <p className="text-gray-600">120 Reviews</p>
            </div>

            {/* Placeholder Reviews */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center font-bold text-gray-800">Z</div>
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-3xl font-bold text-primary mb-1">4.98</p>
              <p className="text-gray-600">45 Reviews</p>
            </div>

            {/* CTA Card */}
            <div className="bg-accent rounded-2xl p-8 text-center text-white">
              <p className="text-lg font-semibold mb-4">Ready to get started?</p>
              <Button className="bg-white text-accent hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold w-full">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive dental care for the whole family</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link key={service.id} href={`/service/${service.id}`}>
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition cursor-pointer group">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg mb-4 group-hover:bg-accent/30 transition" />
                  <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for your best smile?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience the ProCare Dental difference.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-base font-semibold">
            Book an Appointment
          </Button>
        </div>
      </section>
    </div>
  );
}
