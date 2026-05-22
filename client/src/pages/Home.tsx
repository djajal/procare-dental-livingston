import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Plus, Star, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

/**
 * ProCare Dental - Swish Style with Original Content
 * Forest Green (#1B5E3F) + Gold (#B8956A)
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
  const { user } = useAuth();
  const { data: zocdocReviews } = trpc.reviews.zocdoc.useQuery();

  useEffect(() => {
    document.title = "Dentist in Livingston NJ - ProCare Dental Care";

    const schema = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "ProCare Dental",
      "description": "Professional dental care in Livingston, NJ offering family dentistry, cosmetic dentistry, dental implants, and emergency services.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "22 Old Short Hills Rd Ste 207",
        "addressLocality": "Livingston",
        "addressRegion": "NJ",
        "postalCode": "07039",
        "addressCountry": "US"
      },
      "telephone": "(973) 533-1777",
      "url": "https://procardentallivingston.com",
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
                  Dentist in<br />
                  Livingston NJ
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Professional dental care combining advanced technology with compassionate service. Family dentistry, cosmetic dentistry, and emergency dental services for Livingston, NJ residents.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:(973) 533-1777">
                  <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-base font-semibold">
                    Call Now
                  </Button>
                </a>
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-base font-semibold">
                  Book Appointment
                </Button>
              </div>

              {/* Reviews */}
              <div className="flex flex-wrap gap-8 pt-4">
                <a href="https://www.google.com/search?q=ProCare+Dental+Livingston" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/icons8-google-48_9e208c44.png" alt="Google" className="w-12 h-12" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-foreground">5.0</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-foreground/60">120 Reviews</span>
                  </div>
                </a>
                {zocdocReviews ? (
                  <a href={zocdocReviews.profileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/Zocdoc_b07a021e.png" alt="ZocDoc" className="w-12 h-12 flex-shrink-0" />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-foreground">{zocdocReviews.overallRating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-foreground/60">{zocdocReviews.reviewCount} Reviews</span>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/Zocdoc_b07a021e.png" alt="ZocDoc" className="w-12 h-12 flex-shrink-0" />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-foreground">4.98</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-foreground/60">45 Reviews</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Doctors */}
            <div className="flex flex-col gap-8">
              {/* Dr. Kristina */}
              <div className="flex flex-col items-center gap-3">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl h-64 w-64 flex items-center justify-center overflow-hidden">
                  <a href="/dr-kristina-ceravolo" className="hover:opacity-80 transition w-full h-full flex items-center justify-center">
                    <img
                      src="https://lh3.googleusercontent.com/p/AF1QipN0dB0NAiD-y4J6zzLcXcf4nVCDeL7wLqvlHduw=s1024-v1"
                      alt="Dr. Kristina Ceravolo, DMD"
                      className="w-full h-full object-contain"
                      fetchPriority="high"
                      loading="eager"
                    />
                  </a>
                </div>
                <div className="text-center">
                  <a href="/dr-kristina-ceravolo" className="hover:text-primary/80 transition">
                    <h3 className="text-xl font-bold text-primary">Dr. Kristina Ceravolo</h3>
                    <p className="text-base text-accent font-semibold">DMD</p>
                  </a>
                </div>
              </div>

              {/* Dr. Ditta */}
              <div className="flex flex-col items-center gap-3">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl h-64 w-64 flex items-center justify-center overflow-hidden">
                  <a href="/dr-charles-ditta" className="hover:opacity-80 transition w-full h-full flex items-center justify-center">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dr_charles_ditta_18cd048e.webp"
                      alt="Dr. Charles Ditta, DMD"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </div>
                <div className="text-center">
                  <a href="/dr-charles-ditta" className="hover:text-primary/80 transition">
                    <h3 className="text-xl font-bold text-primary">Dr. Charles Ditta</h3>
                    <p className="text-base text-accent font-semibold">DMD</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-primary/20 via-accent to-primary/20" />

      {/* Dream Smile Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-accent/10 flex items-center justify-center max-w-md mx-auto">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_technology_c78a18c7.png"
                  alt="Advanced dental technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Dental Care You'll Love</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Helping you achieve<br />
                <span className="text-accent">your dream smile</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our goal as family dentists is to establish lifelong connections with our patients. We strive to create healthy smiles and change the way you think about seeing the dentist.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At our dental practice, we are dedicated to preventing, diagnosing, and treating oral health issues. We prioritize your comfort, utilize the newest dental technology, and provide comprehensive dental care for the whole family.
              </p>
              <Link href="/dr-kristina-ceravolo">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-base font-semibold mt-4">
                  Meet Our Doctors
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Dental Services in Livingston, NJ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link key={service.id} href={`/service/${service.id}`}>
                <Card className="border border-border hover:shadow-lg transition-shadow duration-300 group cursor-pointer h-full bg-white">
                  <CardHeader className="pb-4">
                    <Sparkles className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
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
