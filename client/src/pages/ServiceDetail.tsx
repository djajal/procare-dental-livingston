import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Star, Camera, MessageSquare, HelpCircle } from "lucide-react";
import { useRoute } from "wouter";
import { useState } from "react";
import { SERVICES_DATA } from "@/data/serviceData";

export default function ServiceDetail() {
  const [serviceMatch, serviceParams] = useRoute("/service/:id");
  const [techMatch] = useRoute("/our-technology");
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const match = serviceMatch || techMatch;
  if (!match) {
    return <div>Service not found</div>;
  }

  const serviceId = techMatch ? "advanced-technology" : serviceParams?.id;
  const service = SERVICES_DATA[serviceId as string];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: service.category, href: `/#services` },
            { label: service.title }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="relative w-full h-96 overflow-hidden">
          <img
            src={service.image}
            alt={`${service.title} at ProCare Dental Livingston NJ`}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl max-w-2xl mx-auto">{service.shortDescription}</p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">About {service.title}</h2>
            <div className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
              {service.details}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-accent/10 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-primary text-center">Benefits of {service.title}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {service.benefits.map((benefit: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                  <p className="text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Smile Gallery Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Camera className="w-8 h-8 text-primary" aria-hidden="true" />
              <h2 className="text-3xl font-bold text-primary">Smile Gallery</h2>
            </div>
            <p className="text-foreground/70 mb-8">See the results our patients have achieved with {service.title.toLowerCase()} at ProCare Dental.</p>
            
            {/* Gallery Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {service.gallery.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${activeGalleryIndex === idx ? 'border-primary shadow-lg scale-[1.02]' : 'border-border hover:border-primary/50'}`}
                  onClick={() => setActiveGalleryIndex(idx)}
                >
                  <div className="relative">
                    <img 
                      src={item.after} 
                      alt={item.caption}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-white text-sm font-medium">{item.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-foreground/50 mt-4 text-center italic">
              * Results may vary. Photos represent typical outcomes achieved at our practice.
            </p>
          </div>
        </section>

        {/* Patient Reviews Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-8 h-8 text-primary" aria-hidden="true" />
                <h2 className="text-3xl font-bold text-primary">Patient Reviews</h2>
              </div>
              <p className="text-foreground/70 mb-8">Hear from patients who have experienced {service.title.toLowerCase()} at ProCare Dental.</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {service.reviews.map((review, idx) => (
                  <Card key={idx} className="bg-background">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                        ))}
                      </div>
                      <CardTitle className="text-base font-semibold">{review.name}</CardTitle>
                      <p className="text-sm text-primary font-medium">{review.treatment}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/70 text-sm leading-relaxed">"{review.text}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-primary" aria-hidden="true" />
              <h2 className="text-3xl font-bold text-primary">Frequently Asked Questions</h2>
            </div>
            <p className="text-foreground/70 mb-8">Common questions about {service.title.toLowerCase()} answered by our dental team.</p>
            
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <details key={idx} className="group border rounded-lg">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-accent/5 transition-colors">
                    <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                    <span className="text-primary transition-transform group-open:rotate-180 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-white/90">Schedule your appointment today and take the first step toward a healthier smile.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9735331777" className="inline-block">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6">
                  Call (973) 533-1777
                </Button>
              </a>
              <a href="https://www.zocdoc.com/practice/procare-dental-82242" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8 py-6">
                  Book Online
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": `ProCare Dental - ${service.title}`,
        "description": service.shortDescription,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "22 Old Short Hills Rd Ste 207",
          "addressLocality": "Livingston",
          "addressRegion": "NJ",
          "postalCode": "07039"
        },
        "telephone": "(973) 533-1777",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "120",
          "bestRating": "5"
        },
        "mainEntity": {
          "@type": "FAQPage",
          "mainEntity": service.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      })}} />
    </div>
  );
}
