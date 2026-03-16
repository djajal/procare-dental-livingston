import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Shield, Smile } from "lucide-react";
import { useRoute } from "wouter";

const SERVICES_DATA: Record<string, any> = {
  "teeth-whitening": {
    title: "Professional Teeth Whitening",
    description: "Brighten your smile with our professional whitening treatments",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp",
    shortDescription: "Get a noticeably brighter smile in just one visit with our professional-grade whitening treatments.",
    benefits: [
      "Results visible in a single visit",
      "Professional-grade whitening agents",
      "Safe and effective for all tooth types",
      "Long-lasting results (6-12 months)",
      "Customized treatment plans",
      "No sensitivity with our advanced formula"
    ],
    details: "Professional teeth whitening is one of the most popular cosmetic dental procedures. Our advanced whitening system uses professional-grade bleaching agents that are significantly more effective than over-the-counter products. During your appointment, we apply a protective barrier to your gums and use a specialized whitening gel combined with a safe light activation system to brighten your teeth by multiple shades in just one hour.",
    faqs: [
      {
        question: "How long do whitening results last?",
        answer: "Professional whitening results typically last 6-12 months, depending on your lifestyle and dietary habits. We recommend touch-up treatments annually to maintain your bright smile."
      },
      {
        question: "Is professional whitening safe?",
        answer: "Yes, professional whitening is completely safe when performed by a dentist. We use proven techniques and protective measures to ensure your gums and tooth enamel are protected."
      },
      {
        question: "Will whitening cause sensitivity?",
        answer: "Our advanced whitening formula is designed to minimize sensitivity. We also apply a desensitizing treatment before and after the procedure if needed."
      },
      {
        question: "Can I whiten my teeth if I have crowns or fillings?",
        answer: "Whitening only affects natural tooth structure. If you have visible crowns or fillings, we can discuss cosmetic options to match your newly whitened teeth."
      },
      {
        question: "How often can I get professional whitening?",
        answer: "We recommend professional whitening no more than once every 6 months to protect your tooth enamel. Touch-up treatments can be done annually."
      },
      {
        question: "What should I avoid after whitening?",
        answer: "Avoid dark-colored foods and beverages (coffee, red wine, berries) for 24-48 hours after treatment. Also avoid smoking and acidic drinks during this period."
      }
    ]
  },
  "preventative-care": {
    title: "Preventative Dental Care",
    description: "Maintain optimal oral health with regular checkups and cleanings",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp",
    shortDescription: "Regular preventative care is the foundation of a healthy smile. Our comprehensive cleanings and exams catch problems early.",
    benefits: [
      "Early detection of dental problems",
      "Professional cleaning removes tartar buildup",
      "Prevents cavities and gum disease",
      "Saves money on future treatments",
      "Improves overall health",
      "Keeps your smile bright and healthy"
    ],
    details: "Preventative dental care is the best investment in your oral health. Regular checkups and professional cleanings help detect problems early, before they become expensive to treat. During your preventative visit, we perform a thorough examination, take X-rays if needed, and perform a professional cleaning to remove plaque and tartar that regular brushing cannot eliminate.",
    faqs: [
      {
        question: "How often should I visit the dentist?",
        answer: "We recommend visiting the dentist every 6 months for a checkup and cleaning. Some patients with gum disease or other conditions may need more frequent visits."
      },
      {
        question: "What happens during a preventative visit?",
        answer: "Your visit includes a thorough examination of your teeth and gums, professional cleaning, and X-rays if needed. We also discuss your oral hygiene routine and provide personalized recommendations."
      },
      {
        question: "Is professional cleaning painful?",
        answer: "Professional cleaning is generally painless. If you have sensitive teeth, let us know and we can use a gentler approach or apply desensitizing gel."
      },
      {
        question: "Can preventative care stop cavities?",
        answer: "Regular preventative care significantly reduces cavity risk by removing plaque and tartar. Combined with good home hygiene, it's very effective at preventing cavities."
      },
      {
        question: "What if I haven't been to the dentist in years?",
        answer: "Don't worry! We'll perform a thorough examination and may recommend additional cleanings to remove buildup. We're here to help you get back on track."
      },
      {
        question: "Does insurance cover preventative care?",
        answer: "Most dental insurance plans cover preventative care at 100%. We accept all major insurance plans and can verify your coverage."
      }
    ]
  },
  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with veneers, bonding, and cosmetic solutions",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/porcelain_crowns_service_459e4140.webp",
    shortDescription: "Transform your smile with our cosmetic dentistry options. From veneers to bonding, we have solutions for every smile.",
    benefits: [
      "Improve tooth color and shape",
      "Close gaps between teeth",
      "Repair chipped or cracked teeth",
      "Natural-looking results",
      "Durable and long-lasting",
      "Boost your confidence"
    ],
    details: "Cosmetic dentistry focuses on improving the appearance of your smile. Whether you want to whiten your teeth, close gaps, repair damage, or completely transform your smile, we have the expertise and technology to achieve beautiful results. Our cosmetic treatments are designed to look natural while giving you the confidence to smile freely.",
    faqs: [
      {
        question: "What is the difference between veneers and bonding?",
        answer: "Veneers are thin porcelain shells that cover the front of teeth and are more durable. Bonding uses tooth-colored resin and is less expensive but may not last as long."
      },
      {
        question: "How long do cosmetic treatments last?",
        answer: "Veneers typically last 10-15 years. Bonding lasts 5-7 years. Whitening results last 6-12 months. Longevity depends on your habits and maintenance."
      },
      {
        question: "Is cosmetic dentistry covered by insurance?",
        answer: "Most cosmetic procedures are not covered by insurance as they're considered elective. However, if the procedure is necessary for function, some coverage may apply."
      },
      {
        question: "Will cosmetic work look natural?",
        answer: "Yes! We use advanced materials and techniques to create results that match your natural teeth in color, shape, and translucency."
      },
      {
        question: "Can I get cosmetic work on multiple teeth?",
        answer: "Absolutely. We can create a complete smile makeover by treating multiple teeth to achieve a cohesive, beautiful result."
      },
      {
        question: "How do I maintain cosmetic work?",
        answer: "Maintain cosmetic work with regular brushing, flossing, and dental visits. Avoid hard foods and habits like teeth grinding."
      }
    ]
  },
  "family-dentistry": {
    title: "Family Dentistry",
    description: "Comprehensive dental care for patients of all ages",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp",
    shortDescription: "We provide gentle, comprehensive dental care for the entire family, from children to seniors.",
    benefits: [
      "Care for all ages from children to seniors",
      "Gentle and compassionate approach",
      "Preventative focus for young patients",
      "Comfortable environment for anxious patients",
      "Experienced with pediatric dentistry",
      "One-stop solution for your family's dental needs"
    ],
    details: "Family dentistry is our specialty. We believe that establishing good oral health habits early sets the foundation for a lifetime of healthy smiles. Our practice is designed to be welcoming and comfortable for patients of all ages, from young children to seniors. We use a gentle approach and take time to explain procedures so patients understand what's happening.",
    faqs: [
      {
        question: "When should children first visit the dentist?",
        answer: "Children should visit the dentist by age 1 or when their first tooth appears. Early visits help establish good habits and detect problems early."
      },
      {
        question: "How do you handle anxious or fearful patients?",
        answer: "We use a gentle approach, explain procedures clearly, and take time to build trust. We also offer sedation options for very anxious patients."
      },
      {
        question: "Do you treat seniors differently?",
        answer: "Yes, seniors often have different needs. We address issues like dry mouth, gum disease, and maintain existing dental work while being mindful of medications."
      },
      {
        question: "Can the whole family see the same dentist?",
        answer: "Yes! Dr. Ceravolo treats patients of all ages and loves building long-term relationships with families."
      },
      {
        question: "What's the best way to teach children about oral hygiene?",
        answer: "We demonstrate proper brushing and flossing techniques and provide positive reinforcement. Parents should supervise and model good habits."
      },
      {
        question: "How often should family members visit?",
        answer: "We recommend every 6 months for checkups and cleanings. Some patients may need more frequent visits based on their individual needs."
      }
    ]
  },
  "dental-implants": {
    title: "Dental Implants",
    description: "Restore your smile with permanent dental implants",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_bridge_service_af7a4c06.webp",
    shortDescription: "Dental implants are the gold standard for replacing missing teeth. Restore your smile with a permanent solution.",
    benefits: [
      "Permanent tooth replacement",
      "Looks and feels like natural teeth",
      "Preserves jawbone structure",
      "No damage to adjacent teeth",
      "Improved chewing and speaking",
      "Increased confidence and comfort"
    ],
    details: "Dental implants are the most advanced solution for replacing missing teeth. An implant consists of a titanium post that's surgically placed in your jawbone, topped with a custom crown that looks and feels like your natural tooth. Implants are durable, long-lasting, and provide superior function compared to other replacement options.",
    faqs: [
      {
        question: "How long do dental implants last?",
        answer: "With proper care, dental implants can last 20+ years or even a lifetime. The crown may need replacement after 10-15 years."
      },
      {
        question: "Am I a candidate for dental implants?",
        answer: "Most people with missing teeth are candidates. We'll evaluate your bone structure and overall health. Bone grafting may be needed if bone loss has occurred."
      },
      {
        question: "How long does the implant process take?",
        answer: "The complete process typically takes 3-6 months. This includes the surgical placement, osseointegration (bone healing), and crown placement."
      },
      {
        question: "Is implant surgery painful?",
        answer: "The surgery is performed under anesthesia, so you won't feel pain during the procedure. Some discomfort is normal during healing."
      },
      {
        question: "How much do dental implants cost?",
        answer: "Implant costs vary based on complexity. We offer financing options and can discuss costs during your consultation."
      },
      {
        question: "How do I care for dental implants?",
        answer: "Care for implants like natural teeth: brush, floss, and visit the dentist regularly. Avoid smoking and hard foods."
      }
    ]
  },
  "root-canal": {
    title: "Root Canal Treatment",
    description: "Expert endodontic care to save your natural teeth",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/composite_fillings_service_11796174.webp",
    shortDescription: "Root canal therapy is a safe, effective way to save a tooth that's been damaged by decay or injury.",
    benefits: [
      "Saves your natural tooth",
      "Eliminates pain and infection",
      "Prevents tooth extraction",
      "Restores tooth function",
      "Modern techniques minimize discomfort",
      "High success rate (95%+)"
    ],
    details: "A root canal is a treatment to remove infected or damaged tissue from inside a tooth. Despite its reputation, modern root canal therapy is no more uncomfortable than having a filling placed. The procedure involves removing the infected pulp, cleaning and shaping the root canal, and filling it with a biocompatible material.",
    faqs: [
      {
        question: "Why do I need a root canal?",
        answer: "Root canals are needed when the pulp (nerve) inside a tooth becomes infected or inflamed due to decay, trauma, or repeated procedures."
      },
      {
        question: "Is root canal treatment painful?",
        answer: "Modern root canal therapy is relatively painless. We use advanced techniques and anesthesia to ensure your comfort. The procedure actually relieves pain."
      },
      {
        question: "How long does a root canal take?",
        answer: "Most root canals take 1-2 hours depending on the tooth and complexity. Some cases may require multiple appointments."
      },
      {
        question: "What happens after root canal treatment?",
        answer: "After treatment, the tooth is typically restored with a crown to protect it and restore full function."
      },
      {
        question: "How successful are root canals?",
        answer: "Root canal therapy has a success rate of 95%+ and is one of the most successful dental procedures available."
      },
      {
        question: "Can I eat after a root canal?",
        answer: "Avoid chewing on the treated tooth until it's fully restored with a crown. You can eat soft foods on the other side."
      }
    ]
  },
  "invisalign": {
    title: "Invisalign Clear Aligners",
    description: "Straighten your teeth with nearly invisible clear aligners",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp",
    shortDescription: "Achieve a straighter smile without traditional braces. Invisalign aligners are virtually invisible and removable.",
    benefits: [
      "Nearly invisible appearance",
      "Removable for eating and cleaning",
      "Comfortable and smooth",
      "Shorter treatment time than braces",
      "Fewer office visits required",
      "Predictable results with digital planning"
    ],
    details: "Invisalign uses a series of custom-made, clear plastic aligners to gradually straighten your teeth. Each aligner is worn for about two weeks before moving to the next one. The aligners are virtually invisible, removable, and comfortable, making them an excellent choice for adults and teens who want to straighten their teeth discreetly.",
    faqs: [
      {
        question: "How long does Invisalign treatment take?",
        answer: "Treatment typically takes 6-18 months depending on the complexity of your case. Most cases are completed in 12 months."
      },
      {
        question: "How often do I need to wear my aligners?",
        answer: "Aligners should be worn 20-22 hours per day for best results. Remove them only for eating, drinking, brushing, and flossing."
      },
      {
        question: "Is Invisalign painful?",
        answer: "Invisalign is generally more comfortable than braces. You may feel slight pressure when starting a new aligner, but it's not painful."
      },
      {
        question: "Can I eat and drink with Invisalign?",
        answer: "Remove your aligners before eating or drinking anything except water. This prevents staining and damage to the aligners."
      },
      {
        question: "How much does Invisalign cost?",
        answer: "Invisalign costs are comparable to traditional braces. We offer payment plans and can discuss costs during your consultation."
      },
      {
        question: "Will my teeth shift back after Invisalign?",
        answer: "We provide a retainer to maintain your results. Wearing your retainer as directed prevents teeth from shifting back."
      }
    ]
  },
  "emergency-dentistry": {
    title: "Emergency Dentistry",
    description: "Fast, compassionate emergency dental care when you need it most",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp",
    shortDescription: "Dental emergencies can happen anytime. We're here to help with prompt, professional emergency care.",
    benefits: [
      "Same-day emergency appointments",
      "Available for urgent situations",
      "Experienced in emergency procedures",
      "Pain relief and stabilization",
      "Follow-up care planning",
      "Compassionate approach during stressful situations"
    ],
    details: "Dental emergencies require immediate attention. Whether you have a severe toothache, broken tooth, knocked-out tooth, or other urgent dental problem, we're here to help. We offer same-day emergency appointments and have the expertise to handle a wide range of urgent situations.",
    faqs: [
      {
        question: "What qualifies as a dental emergency?",
        answer: "Emergencies include severe pain, broken/chipped teeth, knocked-out teeth, abscesses, and injuries to the mouth."
      },
      {
        question: "Can I get an emergency appointment?",
        answer: "Yes! We reserve time for emergency patients. Call us immediately if you have a dental emergency."
      },
      {
        question: "What should I do if my tooth is knocked out?",
        answer: "Pick up the tooth by the crown (not the root), rinse it gently, and try to reinsert it. If that's not possible, place it in milk and call us immediately."
      },
      {
        question: "How do you treat severe tooth pain?",
        answer: "We'll perform an examination to identify the cause, provide pain relief, and recommend treatment options."
      },
      {
        question: "What if I have a broken tooth?",
        answer: "Rinse with warm water, apply cold compress to reduce swelling, and call us. We can often repair the tooth same-day."
      },
      {
        question: "Do you treat dental emergencies after hours?",
        answer: "We offer emergency appointments during business hours. For after-hours emergencies, we provide guidance and referrals."
      }
    ]
  }
};

export default function ServiceDetail() {
  const [match, params] = useRoute("/service/:id");

  if (!match) {
    return <div>Service not found</div>;
  }

  const serviceId = params?.id;
  const service = SERVICES_DATA[serviceId];

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
            { label: service.title }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="relative w-full h-96 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl">{service.shortDescription}</p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary">About This Service</h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">{service.details}</p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-accent/10 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-primary text-center">Benefits of {service.title}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {service.benefits.map((benefit: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {service.faqs.map((faq: any, idx: number) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-white/90">Schedule your appointment today and take the first step toward a healthier smile.</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold">
              Book an Appointment
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": `ProCare Dental - ${service.title}`,
          "url": `https://procardent-vwptw3vc.manus.space/service/${serviceId}`,
          "description": service.shortDescription,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "22 Old Short Hills Rd Suite 207",
            "addressLocality": "Livingston",
            "addressRegion": "NJ",
            "postalCode": "07039"
          },
          "telephone": "(973) 533-1777",
          "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": service.faqs.map((faq: any) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }
        })}
      </script>
    </div>
  );
}
