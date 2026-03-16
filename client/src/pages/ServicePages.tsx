import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

interface ServicePageProps {
  serviceId: string;
  title: string;
  description: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

function ServicePageTemplate({ serviceId, title, description, benefits, faqs }: ServicePageProps) {
  const [, navigate] = useLocation();

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
            <span>22 Old Short Hills Rd Ste 207, Livingston, NJ 07039</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-100 border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-24 px-4">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/")} className="hover:opacity-80 transition">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_new-itoU26Uu5fW47iKpWCMPA7.webp"
                alt="ProCare Dental"
                className="h-20 w-auto"
                width={80}
                height={80}
              />
            </button>
          </div>
          <div className="flex items-center gap-8">
            <a href="/#services" className="text-foreground hover:text-primary transition">Services</a>
            <a href="/reviews" className="text-foreground hover:text-primary transition">Reviews</a>
            <a href="/#contact" className="text-foreground hover:text-primary transition">Contact</a>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 py-2">
              Book an Appointment
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container max-w-4xl">
          <button onClick={() => navigate("/")} className="text-primary hover:text-primary/80 mb-6 flex items-center gap-2">
            ← Back to Home
          </button>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">{title}</h1>
          <p className="text-xl text-foreground/80 leading-relaxed mb-8">{description}</p>
          <div className="flex gap-4">
            <a href="tel:(973) 533-1777" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold">
              Call Now
            </a>
            <a href="/#contact" className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition font-semibold">
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-12">Benefits of {title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <ChevronRight className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-primary mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4">{faq.question}</h3>
                <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule your appointment with ProCare Dental today and experience the difference professional care can make.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="tel:(973) 533-1777" className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition font-semibold">
              Call Now
            </a>
            <a href="/#contact" className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition font-semibold">
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container text-center text-sm text-white/70">
          <p>&copy; 2026 ProCare Dental. All rights reserved. | Dentist in Livingston, NJ</p>
        </div>
      </footer>
    </div>
  );
}

// Teeth Whitening Service Page
export function TeethWhiteningService() {
  return (
    <ServicePageTemplate
      serviceId="teeth-whitening"
      title="Professional Teeth Whitening"
      description="Achieve a brighter, more confident smile with our professional teeth whitening treatments. Our advanced whitening system can lighten your teeth several shades in just one visit."
      benefits={[
        "Professional-grade whitening results",
        "Safe and effective treatment",
        "Long-lasting results",
        "Customized treatment plans",
        "Minimal sensitivity",
        "Quick, convenient appointments",
      ]}
      faqs={[
        {
          question: "How long does professional teeth whitening take?",
          answer: "Most professional whitening treatments take about 30-60 minutes. You'll see results immediately, with optimal results appearing within 24 hours.",
        },
        {
          question: "How long do the results last?",
          answer: "Results typically last 6-12 months, depending on your lifestyle and dietary habits. We recommend touch-up treatments to maintain your bright smile.",
        },
        {
          question: "Is professional whitening safe?",
          answer: "Yes, professional whitening is safe when performed by a dentist. We use professional-grade materials and take precautions to protect your gums and enamel.",
        },
        {
          question: "Can I whiten my teeth if I have sensitive teeth?",
          answer: "Yes, we can still whiten sensitive teeth. We'll use a gentler approach and may recommend desensitizing treatments to minimize discomfort.",
        },
      ]}
    />
  );
}

// Preventative Care Service Page
export function PreventativeCareService() {
  return (
    <ServicePageTemplate
      serviceId="preventative-care"
      title="Preventative Dental Care"
      description="Regular preventative care is the foundation of good oral health. Our comprehensive preventative services help you maintain healthy teeth and gums for life."
      benefits={[
        "Early detection of dental problems",
        "Prevention of tooth decay and gum disease",
        "Professional cleaning and plaque removal",
        "Personalized oral hygiene guidance",
        "Cost savings through early intervention",
        "Improved overall health",
      ]}
      faqs={[
        {
          question: "How often should I have preventative checkups?",
          answer: "We recommend dental checkups every 6 months for most patients. However, some patients may need more frequent visits based on their individual risk factors.",
        },
        {
          question: "What does a preventative care visit include?",
          answer: "A preventative visit includes a comprehensive examination, professional cleaning, X-rays if needed, and personalized recommendations for maintaining your oral health.",
        },
        {
          question: "Why is preventative care important?",
          answer: "Preventative care helps catch dental problems early when they're easier and less expensive to treat. It also helps prevent serious conditions like gum disease and tooth loss.",
        },
        {
          question: "Does insurance cover preventative care?",
          answer: "Most dental insurance plans cover preventative care, including cleanings and exams. We'll help you understand your coverage.",
        },
      ]}
    />
  );
}

// Cosmetic Dentistry Service Page
export function CosmeticDentistryService() {
  return (
    <ServicePageTemplate
      serviceId="cosmetic-dentistry"
      title="Cosmetic Dentistry"
      description="Transform your smile with our comprehensive cosmetic dentistry services. From veneers to bonding, we can enhance the appearance of your teeth and boost your confidence."
      benefits={[
        "Enhanced smile aesthetics",
        "Improved self-confidence",
        "Natural-looking results",
        "Durable, long-lasting treatments",
        "Customized treatment plans",
        "Combination treatments for optimal results",
      ]}
      faqs={[
        {
          question: "What cosmetic treatments do you offer?",
          answer: "We offer a wide range of cosmetic treatments including teeth whitening, veneers, bonding, crowns, and smile makeovers. We'll recommend the best option for your needs.",
        },
        {
          question: "How long do cosmetic results last?",
          answer: "Results vary depending on the treatment. Whitening lasts 6-12 months, veneers last 10-15 years, and bonding lasts 5-10 years with proper care.",
        },
        {
          question: "Are cosmetic treatments covered by insurance?",
          answer: "Most cosmetic treatments are not covered by insurance as they're considered elective. However, we offer flexible payment plans to make treatments affordable.",
        },
        {
          question: "Can I see what my smile will look like before treatment?",
          answer: "Yes, we use digital smile design technology to show you a preview of your results before we begin treatment.",
        },
      ]}
    />
  );
}

// Family Dentistry Service Page
export function FamilyDentistryService() {
  return (
    <ServicePageTemplate
      serviceId="family-dentistry"
      title="Family Dentistry"
      description="Comprehensive dental care for the entire family. From children to seniors, we provide personalized treatment in a welcoming, comfortable environment."
      benefits={[
        "Care for all ages",
        "Gentle, compassionate approach",
        "Child-friendly environment",
        "Preventative focus",
        "Emergency services available",
        "Convenient family scheduling",
      ]}
      faqs={[
        {
          question: "At what age should children start visiting the dentist?",
          answer: "Children should have their first dental visit by age 1 or when their first tooth appears. Early visits help establish good oral hygiene habits.",
        },
        {
          question: "How can I help my child feel comfortable at the dentist?",
          answer: "We create a welcoming environment for children. Bring them to regular checkups, avoid using scary words, and stay positive about dental visits.",
        },
        {
          question: "Do you offer special services for seniors?",
          answer: "Yes, we provide specialized care for seniors, including denture care, root canal treatment, and management of age-related dental conditions.",
        },
        {
          question: "Can the whole family see the same dentist?",
          answer: "Yes, our dentists are trained to care for patients of all ages. We can schedule family appointments for convenience.",
        },
      ]}
    />
  );
}

// Dental Implants Service Page
export function DentalImplantsService() {
  return (
    <ServicePageTemplate
      serviceId="dental-implants"
      title="Dental Implants"
      description="Restore your smile with permanent dental implants. Our implant solutions provide a natural-looking, durable replacement for missing teeth."
      benefits={[
        "Permanent tooth replacement",
        "Natural appearance and feel",
        "Improved chewing function",
        "Prevents bone loss",
        "Long-lasting solution",
        "Improved speech and confidence",
      ]}
      faqs={[
        {
          question: "How long do dental implants last?",
          answer: "With proper care, dental implants can last a lifetime. The implant itself is very durable, though the crown may need replacement after 10-15 years.",
        },
        {
          question: "Am I a candidate for dental implants?",
          answer: "Most people with good oral health and adequate jawbone are candidates. We'll evaluate your specific situation during a consultation.",
        },
        {
          question: "How long does the implant process take?",
          answer: "The complete process typically takes 3-6 months. This includes the implant placement, osseointegration (bone healing), and crown placement.",
        },
        {
          question: "Are dental implants painful?",
          answer: "The procedure is performed under anesthesia, so you won't feel pain during placement. Some mild discomfort is normal during healing.",
        },
      ]}
    />
  );
}

// Root Canal Treatment Service Page
export function RootCanalService() {
  return (
    <ServicePageTemplate
      serviceId="root-canal"
      title="Root Canal Treatment"
      description="Save your natural tooth with expert root canal treatment. Our gentle approach relieves pain and eliminates infection while preserving your tooth."
      benefits={[
        "Saves your natural tooth",
        "Relieves tooth pain",
        "Eliminates infection",
        "Prevents tooth loss",
        "Preserves jawbone structure",
        "High success rate",
      ]}
      faqs={[
        {
          question: "Why would I need a root canal?",
          answer: "Root canals are needed when the tooth's nerve becomes infected or inflamed due to deep decay, trauma, or repeated procedures.",
        },
        {
          question: "Is root canal treatment painful?",
          answer: "Modern root canal treatment is no more painful than a filling. We use anesthesia and advanced techniques to ensure your comfort.",
        },
        {
          question: "How long does a root canal take?",
          answer: "Most root canals can be completed in one or two appointments, depending on the complexity. Each appointment typically takes 60-90 minutes.",
        },
        {
          question: "What happens after root canal treatment?",
          answer: "After treatment, the tooth will need a crown to protect it and restore full function. We'll discuss restoration options with you.",
        },
      ]}
    />
  );
}

// Invisalign Service Page
export function InvisalignService() {
  return (
    <ServicePageTemplate
      serviceId="invisalign"
      title="Invisalign Clear Aligners"
      description="Straighten your teeth discreetly with Invisalign. Our clear aligner therapy offers a comfortable, nearly invisible alternative to traditional braces."
      benefits={[
        "Nearly invisible aligners",
        "Comfortable to wear",
        "Removable for eating and cleaning",
        "Faster results than traditional braces",
        "No dietary restrictions",
        "Improved oral hygiene during treatment",
      ]}
      faqs={[
        {
          question: "How long does Invisalign treatment take?",
          answer: "Treatment typically takes 12-18 months, though some cases can be completed faster. We'll give you a personalized timeline during your consultation.",
        },
        {
          question: "How often do I need to change aligners?",
          answer: "You'll change to a new set of aligners every 1-2 weeks. Each set gradually moves your teeth closer to the desired position.",
        },
        {
          question: "Can I eat and drink with Invisalign?",
          answer: "You should remove your aligners before eating and drinking anything except water. This prevents staining and damage to the aligners.",
        },
        {
          question: "How much do Invisalign treatments cost?",
          answer: "Cost varies depending on the complexity of your case. We offer flexible payment plans and work with most insurance providers.",
        },
      ]}
    />
  );
}

// Emergency Dentistry Service Page
export function EmergencyDentistryService() {
  return (
    <ServicePageTemplate
      serviceId="emergency-dentistry"
      title="Emergency Dental Care"
      description="Fast, compassionate emergency dental care when you need it most. We handle urgent dental problems with same-day appointments and effective treatment."
      benefits={[
        "Same-day emergency appointments",
        "Fast pain relief",
        "Expert diagnosis and treatment",
        "Compassionate care",
        "Available for urgent situations",
        "Preventative follow-up care",
      ]}
      faqs={[
        {
          question: "What qualifies as a dental emergency?",
          answer: "Dental emergencies include severe tooth pain, knocked-out teeth, broken teeth, lost fillings, and injuries to the mouth or jaw.",
        },
        {
          question: "Can I get an emergency appointment?",
          answer: "Yes, we reserve time for emergency patients. Call us immediately at (973) 533-1777 to schedule an urgent appointment.",
        },
        {
          question: "What should I do if I knock out a tooth?",
          answer: "Pick up the tooth by the crown (not the root), rinse it gently, and try to place it back in the socket. If that's not possible, keep it in milk and call us immediately.",
        },
        {
          question: "How can I prevent dental emergencies?",
          answer: "Regular preventative care, wearing a mouthguard during sports, and avoiding chewing on hard objects can help prevent most dental emergencies.",
        },
      ]}
    />
  );
}
