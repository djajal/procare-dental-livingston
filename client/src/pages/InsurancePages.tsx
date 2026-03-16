import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, HelpCircle, DollarSign, Clock } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Insurance Landing Page Template
 * SEO-optimized for "Dentist who accepts [Insurance] near Livingston NJ"
 */

interface InsurancePageProps {
  insuranceName: string;
  slug: string;
  description: string;
  coverage: string[];
  faqs: Array<{ question: string; answer: string }>;
}

function createInsurancePage(props: InsurancePageProps) {
  return function InsurancePage() {
    return (
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4" role="heading" aria-level={1}>
                {props.insuranceName} Dentist in Livingston, NJ
              </h1>
              <p className="text-xl text-foreground/80 mb-6">
                ProCare Dental is an in-network provider for {props.insuranceName}. We accept your dental insurance and help maximize your benefits for comprehensive dental care in Livingston, New Jersey.
              </p>
            </div>
          </div>
        </section>

        {/* About This Insurance */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-primary mb-8" role="heading" aria-level={2}>
              About {props.insuranceName} Coverage
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-foreground/80 mb-6">
                  {props.description}
                </p>
                <h3 className="text-2xl font-bold text-primary mb-4">Common Coverage Benefits</h3>
                <ul className="space-y-3">
                  {props.coverage.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <DollarSign className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Preventive Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">
                      100% coverage for cleanings, exams, and X-rays
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CheckCircle className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Basic Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">
                      Typically 70-80% coverage for fillings and extractions
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Clock className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Major Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">
                      Usually 50% coverage for crowns and implants
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <HelpCircle className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Annual Maximum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">
                      Most plans include $1,000-$2,000 annual limits
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose ProCare */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center" role="heading" aria-level={2}>
              Why Choose ProCare Dental for Your {props.insuranceName} Coverage?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>In-Network Provider</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    We're contracted with {props.insuranceName}, ensuring you receive in-network rates and maximum coverage benefits.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Benefits Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    We verify your {props.insuranceName} benefits before your appointment so you know your exact out-of-pocket costs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Direct Insurance Filing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    We file your {props.insuranceName} claims directly and accept assignment of benefits for hassle-free processing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center" role="heading" aria-level={2}>
              {props.insuranceName} Dental Coverage FAQ
            </h2>
            <p className="text-center text-foreground/70 mb-12">
              Common questions about {props.insuranceName} dental insurance and coverage at ProCare Dental
            </p>
            <Accordion type="single" collapsible className="w-full">
              {props.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6" role="heading" aria-level={2}>
              Ready to Schedule Your {props.insuranceName} Covered Appointment?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact ProCare Dental in Livingston, NJ today to verify your {props.insuranceName} coverage and schedule your dental visit.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="tel:(973) 533-1777">Call (973) 533-1777</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Book Online
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  };
}

// Delta Dental Page
export const DeltaDentalPage = createInsurancePage({
  insuranceName: "Delta Dental",
  slug: "delta-dental",
  description: "Delta Dental is one of the largest dental insurance providers in the United States, offering PPO, Premier, and Medicare Advantage plans. ProCare Dental is an in-network provider for Delta Dental PPO and Premier plans, ensuring you receive maximum coverage for your dental care in Livingston, NJ.",
  coverage: [
    "100% coverage for preventive care (cleanings, exams, X-rays)",
    "70-80% coverage for basic restorative services (fillings, extractions)",
    "50% coverage for major services (crowns, bridges, implants)",
    "Orthodontics coverage available on select plans",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    {
      question: "Is ProCare Dental in-network with Delta Dental?",
      answer: "Yes, ProCare Dental is an in-network provider for Delta Dental PPO and Premier plans. This means you'll receive the negotiated in-network rates and maximum coverage benefits. We recommend verifying your specific plan details by contacting us or Delta Dental directly.",
    },
    {
      question: "What does Delta Dental cover at ProCare Dental?",
      answer: "Delta Dental typically covers preventive care at 100%, basic services at 70-80%, and major services at 50%. Coverage includes cleanings, exams, X-rays, fillings, extractions, crowns, bridges, and implants. Your specific coverage depends on your plan type and benefits.",
    },
    {
      question: "What is the annual maximum for Delta Dental?",
      answer: "Most Delta Dental plans have an annual maximum benefit of $1,000-$2,000. This means Delta Dental will pay up to this amount per calendar year for covered services. Once you reach your annual maximum, you're responsible for any additional costs.",
    },
    {
      question: "Does Delta Dental cover dental implants?",
      answer: "Some Delta Dental plans cover implants at 50% after meeting your deductible, while others may have limitations or exclusions. We recommend verifying your specific plan coverage before scheduling implant treatment. Contact us and we'll help verify your benefits.",
    },
    {
      question: "How do I use my Delta Dental insurance at ProCare Dental?",
      answer: "Simply bring your Delta Dental insurance card to your appointment. We'll verify your benefits, provide an estimate of your out-of-pocket costs, and file your claim directly with Delta Dental. You'll only pay your copay or coinsurance amount.",
    },
    {
      question: "Does Delta Dental have a waiting period?",
      answer: "Most Delta Dental PPO plans have no waiting period for preventive care. Basic and major services may have 6-12 month waiting periods depending on your plan. Contact us to verify the waiting period for your specific plan.",
    },
  ],
});

// Aetna Page
export const AetnaPage = createInsurancePage({
  insuranceName: "Aetna",
  slug: "aetna",
  description: "Aetna offers comprehensive dental insurance plans including Commercial PPO and Medicare Advantage options. ProCare Dental is an in-network provider for Aetna dental plans, providing you with excellent coverage for all your dental needs in Livingston, New Jersey.",
  coverage: [
    "100% coverage for preventive services (cleanings, exams, X-rays)",
    "70-80% coverage for basic restorative services",
    "50% coverage for major restorative services",
    "Orthodontics available on select plans",
    "Annual deductible typically $50-$150",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    {
      question: "Is ProCare Dental in-network with Aetna?",
      answer: "Yes, ProCare Dental is an in-network provider for Aetna dental plans. This ensures you receive the best rates and maximum coverage benefits. We verify your Aetna coverage before your appointment.",
    },
    {
      question: "What preventive services are covered 100% by Aetna?",
      answer: "Aetna typically covers preventive services at 100%, including routine cleanings, exams, X-rays, and fluoride treatments. These services are usually covered with no deductible required.",
    },
    {
      question: "Does Aetna cover teeth whitening?",
      answer: "Aetna does not typically cover cosmetic teeth whitening as it's considered a cosmetic procedure. However, some plans may offer discounts on whitening services. Contact us to discuss your specific plan coverage.",
    },
    {
      question: "What is the Aetna annual maximum?",
      answer: "Most Aetna plans have an annual maximum of $1,000-$2,000 per year. Once you've used your annual maximum, you're responsible for any additional dental costs.",
    },
    {
      question: "How do I verify my Aetna coverage?",
      answer: "We can verify your Aetna coverage for you. Simply provide your insurance card or member ID, and we'll contact Aetna to confirm your benefits, deductible, and annual maximum.",
    },
    {
      question: "Does Aetna cover emergency dental care?",
      answer: "Yes, Aetna typically covers emergency dental care including emergency exams, pain relief, and necessary extractions. Coverage levels depend on your specific plan. Contact us for emergency dental care.",
    },
  ],
});

// Cigna Page
export const CignaPage = createInsurancePage({
  insuranceName: "Cigna",
  slug: "cigna",
  description: "Cigna dental insurance plans provide comprehensive coverage for preventive, basic, and major dental services. ProCare Dental is an in-network provider for Cigna, ensuring you receive maximum benefits for your dental care in Livingston, NJ.",
  coverage: [
    "100% coverage for preventive care (cleanings, exams, X-rays)",
    "70-80% coverage for basic services (fillings, extractions)",
    "50% coverage for major services (crowns, bridges, implants)",
    "Orthodontics available on select plans",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    {
      question: "Is ProCare Dental in-network with Cigna?",
      answer: "Yes, ProCare Dental is an in-network provider for Cigna dental plans. We accept Cigna insurance and help you maximize your benefits for comprehensive dental care.",
    },
    {
      question: "What does Cigna dental insurance cover?",
      answer: "Cigna covers preventive care at 100%, basic services at 70-80%, and major services at 50%. This includes cleanings, exams, fillings, extractions, crowns, bridges, and implants.",
    },
    {
      question: "Does Cigna cover dental implants?",
      answer: "Some Cigna plans cover dental implants at 50% after meeting your deductible. Coverage varies by plan, so we recommend verifying your specific benefits before scheduling implant treatment.",
    },
    {
      question: "What is the Cigna annual maximum?",
      answer: "Most Cigna plans have an annual maximum benefit of $1,000-$2,000 per calendar year for covered services.",
    },
    {
      question: "Does Cigna have a waiting period?",
      answer: "Most Cigna plans have no waiting period for preventive care. Basic and major services may have 6-12 month waiting periods depending on your plan.",
    },
    {
      question: "How do I file a claim with Cigna?",
      answer: "We file your Cigna claim directly for you. Simply bring your insurance card to your appointment, and we'll handle all the paperwork and billing.",
    },
  ],
});

// United Healthcare Page
export const UnitedHealthcarePage = createInsurancePage({
  insuranceName: "United Healthcare",
  slug: "united-healthcare",
  description: "United Healthcare offers PPO and Medicare Advantage dental plans with comprehensive coverage options. ProCare Dental is an in-network provider for United Healthcare, providing you with excellent dental care and maximum insurance benefits in Livingston, NJ.",
  coverage: [
    "100% coverage for preventive services",
    "70-80% coverage for basic restorative services",
    "50% coverage for major restorative services",
    "Orthodontics available on select plans",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    {
      question: "Is ProCare Dental in-network with United Healthcare?",
      answer: "Yes, ProCare Dental is an in-network provider for United Healthcare dental plans. This ensures you receive in-network rates and maximum coverage benefits.",
    },
    {
      question: "What preventive services are covered 100%?",
      answer: "United Healthcare covers routine cleanings, exams, X-rays, and fluoride treatments at 100% with no deductible.",
    },
    {
      question: "Does United Healthcare cover root canal treatment?",
      answer: "Yes, root canal treatment is typically covered at 70-80% as a basic service after meeting your deductible.",
    },
    {
      question: "What is the annual maximum for United Healthcare?",
      answer: "Most United Healthcare plans have an annual maximum of $1,000-$2,000 per calendar year.",
    },
    {
      question: "How do I verify my United Healthcare coverage?",
      answer: "Contact us with your insurance information, and we'll verify your United Healthcare coverage, deductible, and annual maximum.",
    },
    {
      question: "Does United Healthcare cover emergency dental care?",
      answer: "Yes, emergency dental care is typically covered. Contact us immediately for emergency dental treatment.",
    },
  ],
});

// MetLife Page
export const MetLifePage = createInsurancePage({
  insuranceName: "MetLife",
  slug: "metlife",
  description: "MetLife dental insurance provides comprehensive coverage for preventive, basic, and major dental services. ProCare Dental is an in-network provider for MetLife, ensuring you receive maximum benefits for your dental care in Livingston, New Jersey.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Orthodontics available on select plans",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    {
      question: "Is ProCare Dental in-network with MetLife?",
      answer: "Yes, ProCare Dental is an in-network provider for MetLife dental plans, ensuring you receive the best rates and coverage.",
    },
    {
      question: "What does MetLife dental insurance cover?",
      answer: "MetLife covers preventive care at 100%, basic services at 70-80%, and major services at 50%.",
    },
    {
      question: "Does MetLife cover cosmetic dentistry?",
      answer: "MetLife does not typically cover cosmetic procedures like teeth whitening or veneers. Contact us to discuss your specific plan.",
    },
    {
      question: "What is the MetLife annual maximum?",
      answer: "Most MetLife plans have an annual maximum of $1,000-$2,000 per year.",
    },
    {
      question: "Does MetLife have a waiting period?",
      answer: "Most MetLife plans have no waiting period for preventive care. Basic and major services may have waiting periods.",
    },
    {
      question: "How do I use my MetLife insurance at ProCare Dental?",
      answer: "Bring your MetLife insurance card to your appointment. We'll verify your benefits and file your claim directly.",
    },
  ],
});

// Guardian Page
export const GuardianPage = createInsurancePage({
  insuranceName: "Guardian",
  slug: "guardian",
  description: "Guardian dental insurance offers comprehensive coverage for preventive, basic, and major dental services. ProCare Dental is an in-network provider for Guardian, providing you with excellent dental care and maximum insurance benefits in Livingston, NJ.",
  coverage: [
    "100% coverage for preventive services",
    "70-80% coverage for basic restorative services",
    "50% coverage for major restorative services",
    "Orthodontics available on select plans",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    {
      question: "Is ProCare Dental in-network with Guardian?",
      answer: "Yes, ProCare Dental is an in-network provider for Guardian dental plans.",
    },
    {
      question: "What preventive services are covered 100%?",
      answer: "Guardian covers routine cleanings, exams, X-rays, and fluoride treatments at 100%.",
    },
    {
      question: "Does Guardian cover dental implants?",
      answer: "Some Guardian plans cover implants at 50%. Verify your specific plan coverage with us.",
    },
    {
      question: "What is the Guardian annual maximum?",
      answer: "Most Guardian plans have an annual maximum of $1,000-$2,000 per year.",
    },
    {
      question: "Does Guardian have a waiting period?",
      answer: "Most Guardian plans have no waiting period for preventive care.",
    },
    {
      question: "How do I file a claim with Guardian?",
      answer: "We file your Guardian claim directly. Just bring your insurance card to your appointment.",
    },
  ],
});

// Horizon NJ BCBS Page
export const HorizonNJPage = createInsurancePage({
  insuranceName: "Horizon NJ BCBS",
  slug: "horizon-nj-bcbs",
  description: "Horizon NJ BCBS offers dental coverage through various plan types including Traditional, Healthy Choice Plus, and Family Grins. ProCare Dental is an in-network provider for Horizon NJ BCBS, ensuring you receive maximum benefits for your dental care in Livingston, New Jersey.",
  coverage: [
    "100% coverage for preventive services",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
    "Family Grins coverage available",
  ],
  faqs: [
    {
      question: "Is ProCare Dental in-network with Horizon NJ BCBS?",
      answer: "Yes, ProCare Dental is an in-network provider for Horizon NJ BCBS plans including Traditional, Healthy Choice Plus, and Family Grins.",
    },
    {
      question: "What does Horizon NJ BCBS cover?",
      answer: "Horizon NJ BCBS covers preventive care at 100%, basic services at 70-80%, and major services at 50%.",
    },
    {
      question: "Does Horizon NJ BCBS cover children's dental care?",
      answer: "Yes, Horizon NJ BCBS Family Grins plans include comprehensive coverage for children's dental care.",
    },
    {
      question: "What is the annual maximum?",
      answer: "Most Horizon NJ BCBS plans have an annual maximum of $1,000-$2,000 per year.",
    },
    {
      question: "Does Horizon NJ BCBS have a waiting period?",
      answer: "Most Horizon NJ BCBS plans have no waiting period for preventive care.",
    },
    {
      question: "How do I verify my Horizon NJ BCBS coverage?",
      answer: "Contact us with your insurance information, and we'll verify your coverage details.",
    },
  ],
});

// Humana Page
export const HumanaPage = createInsurancePage({
  insuranceName: "Humana",
  slug: "humana",
  description: "Humana offers dental insurance plans including PPO and Medicare Advantage options. ProCare Dental is an in-network provider for Humana, providing you with comprehensive dental coverage and maximum insurance benefits in Livingston, NJ.",
  coverage: [
    "100% coverage for preventive services",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Medicare Advantage dental coverage available",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    {
      question: "Is ProCare Dental in-network with Humana?",
      answer: "Yes, ProCare Dental is an in-network provider for Humana dental plans including PPO and Medicare Advantage options.",
    },
    {
      question: "What preventive services are covered 100%?",
      answer: "Humana covers routine cleanings, exams, X-rays, and fluoride treatments at 100%.",
    },
    {
      question: "Does Humana Medicare Advantage cover dental?",
      answer: "Yes, many Humana Medicare Advantage plans include dental coverage. Verify your specific plan benefits with us.",
    },
    {
      question: "What is the Humana annual maximum?",
      answer: "Most Humana plans have an annual maximum of $1,000-$2,000 per calendar year.",
    },
    {
      question: "Does Humana have a waiting period?",
      answer: "Most Humana plans have no waiting period for preventive care.",
    },
    {
      question: "How do I use my Humana insurance at ProCare Dental?",
      answer: "Bring your Humana insurance card to your appointment. We'll verify your coverage and file your claim directly.",
    },
  ],
});


// AmeriHealth Page
export const AmeriHealthPage = createInsurancePage({
  insuranceName: "AmeriHealth",
  slug: "amerihealth",
  description: "AmeriHealth provides dental insurance plans for individuals and families. ProCare Dental is an in-network provider for AmeriHealth, offering comprehensive dental coverage in Livingston, NJ.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with AmeriHealth?", answer: "Yes, ProCare Dental is an in-network provider for AmeriHealth dental plans." },
    { question: "What does AmeriHealth cover?", answer: "AmeriHealth covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the AmeriHealth annual maximum?", answer: "Most AmeriHealth plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does AmeriHealth cover implants?", answer: "Some AmeriHealth plans cover implants at 50%. Verify your specific plan coverage with us." },
    { question: "How do I verify my AmeriHealth coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card to your appointment." },
    { question: "Does AmeriHealth have a waiting period?", answer: "Most AmeriHealth plans have no waiting period for preventive care." },
  ],
});

// Ameritas Page
export const AmeritasPage = createInsurancePage({
  insuranceName: "Ameritas",
  slug: "ameritas",
  description: "Ameritas offers dental insurance plans with comprehensive coverage options. ProCare Dental is an in-network provider for Ameritas, ensuring maximum benefits for your dental care.",
  coverage: [
    "100% coverage for preventive services",
    "70-80% coverage for basic restorative services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with Ameritas?", answer: "Yes, ProCare Dental is an in-network provider for Ameritas dental plans." },
    { question: "What does Ameritas dental insurance cover?", answer: "Ameritas covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Ameritas annual maximum?", answer: "Most Ameritas plans have an annual maximum of $1,000-$2,000 per calendar year." },
    { question: "Does Ameritas cover orthodontics?", answer: "Some Ameritas plans include orthodontics coverage. Verify your specific plan benefits." },
    { question: "How do I file a claim with Ameritas?", answer: "We file your Ameritas claim directly. Simply bring your insurance card to your appointment." },
    { question: "Does Ameritas have a waiting period?", answer: "Most Ameritas plans have no waiting period for preventive care." },
  ],
});

// Anthem Page
export const AnthemPage = createInsurancePage({
  insuranceName: "Anthem",
  slug: "anthem",
  description: "Anthem offers comprehensive dental insurance plans with excellent coverage options. ProCare Dental is an in-network provider for Anthem, providing you with maximum benefits.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Orthodontics available on select plans",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with Anthem?", answer: "Yes, ProCare Dental is an in-network provider for Anthem dental plans." },
    { question: "What does Anthem cover?", answer: "Anthem covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Anthem annual maximum?", answer: "Most Anthem plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Anthem cover dental implants?", answer: "Some Anthem plans cover implants at 50%. Verify your specific plan coverage with us." },
    { question: "How do I verify my Anthem coverage?", answer: "We can verify your Anthem coverage for you. Simply provide your insurance card." },
    { question: "Does Anthem have a waiting period?", answer: "Most Anthem plans have no waiting period for preventive care." },
  ],
});

// AFLAC Page
export const AFLACPage = createInsurancePage({
  insuranceName: "AFLAC",
  slug: "aflac",
  description: "AFLAC provides supplemental dental insurance coverage. ProCare Dental accepts AFLAC insurance and helps you maximize your benefits.",
  coverage: [
    "Coverage for preventive services",
    "Coverage for basic restorative services",
    "Coverage for major services",
    "Flexible benefit options",
    "Affordable premiums",
  ],
  faqs: [
    { question: "Does ProCare Dental accept AFLAC?", answer: "Yes, ProCare Dental accepts AFLAC supplemental dental insurance." },
    { question: "What does AFLAC dental coverage include?", answer: "AFLAC covers preventive, basic, and major dental services depending on your plan." },
    { question: "How do I use my AFLAC insurance at ProCare Dental?", answer: "Bring your AFLAC insurance card to your appointment and we'll process your claim." },
    { question: "Does AFLAC have a waiting period?", answer: "Waiting periods vary by plan. Contact us to verify your specific coverage." },
    { question: "What is the AFLAC annual maximum?", answer: "Annual maximums vary by plan. We can verify your specific benefits." },
    { question: "Does AFLAC cover emergency dental care?", answer: "Coverage depends on your specific AFLAC plan. We'll verify your benefits." },
  ],
});

// Assurant Page
export const AssurantPage = createInsurancePage({
  insuranceName: "Assurant",
  slug: "assurant",
  description: "Assurant offers dental insurance plans with comprehensive coverage. ProCare Dental is an in-network provider for Assurant dental plans.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with Assurant?", answer: "Yes, ProCare Dental is an in-network provider for Assurant dental plans." },
    { question: "What does Assurant cover?", answer: "Assurant covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Assurant annual maximum?", answer: "Most Assurant plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Assurant cover implants?", answer: "Some Assurant plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my Assurant coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does Assurant have a waiting period?", answer: "Most Assurant plans have no waiting period for preventive care." },
  ],
});

// Beam Dental Page
export const BeamDentalPage = createInsurancePage({
  insuranceName: "Beam Dental",
  slug: "beam-dental",
  description: "Beam Dental provides affordable dental insurance coverage. ProCare Dental accepts Beam Dental insurance and helps maximize your benefits.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Affordable monthly premiums",
    "Flexible plan options",
  ],
  faqs: [
    { question: "Does ProCare Dental accept Beam Dental?", answer: "Yes, ProCare Dental accepts Beam Dental insurance." },
    { question: "What does Beam Dental cover?", answer: "Beam Dental covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Beam Dental annual maximum?", answer: "Most Beam Dental plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Beam Dental have a waiting period?", answer: "Most Beam Dental plans have no waiting period for preventive care." },
    { question: "How do I file a claim with Beam Dental?", answer: "We file your Beam Dental claim directly. Simply bring your insurance card." },
    { question: "Does Beam Dental cover emergency dental care?", answer: "Yes, Beam Dental typically covers emergency dental care." },
  ],
});

// Blue Cross Blue Shield Page
export const BCBSPage = createInsurancePage({
  insuranceName: "Blue Cross Blue Shield",
  slug: "blue-cross-blue-shield",
  description: "Blue Cross Blue Shield offers comprehensive dental insurance plans. ProCare Dental is an in-network provider for BCBS dental plans.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Orthodontics available on select plans",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with Blue Cross Blue Shield?", answer: "Yes, ProCare Dental is an in-network provider for BCBS dental plans." },
    { question: "What does Blue Cross Blue Shield cover?", answer: "BCBS covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the BCBS annual maximum?", answer: "Most BCBS plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Blue Cross Blue Shield cover implants?", answer: "Some BCBS plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my BCBS coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does BCBS have a waiting period?", answer: "Most BCBS plans have no waiting period for preventive care." },
  ],
});

// Clover Medicare Page
export const CloverMedicarePage = createInsurancePage({
  insuranceName: "Clover Medicare PPO+HMO",
  slug: "clover-medicare",
  description: "Clover Medicare offers PPO and HMO plans with dental coverage. ProCare Dental is an in-network provider for Clover Medicare plans.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Medicare Advantage coverage",
    "Annual maximum benefit varies by plan",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with Clover Medicare?", answer: "Yes, ProCare Dental is an in-network provider for Clover Medicare plans." },
    { question: "What does Clover Medicare cover?", answer: "Clover Medicare covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Clover Medicare annual maximum?", answer: "Annual maximums vary by plan. We can verify your specific benefits." },
    { question: "Does Clover Medicare cover implants?", answer: "Some Clover Medicare plans cover implants. Verify your specific plan coverage." },
    { question: "How do I verify my Clover Medicare coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does Clover Medicare have a waiting period?", answer: "Waiting periods vary by plan. Contact us to verify your coverage." },
  ],
});

// Careington Page
export const CareingtonPage = createInsurancePage({
  insuranceName: "Careington",
  slug: "careington",
  description: "Careington provides dental discount plans and insurance options. ProCare Dental accepts Careington coverage.",
  coverage: [
    "Discounts on preventive care",
    "Discounts on basic services",
    "Discounts on major services",
    "No waiting periods",
    "Affordable membership fees",
  ],
  faqs: [
    { question: "Does ProCare Dental accept Careington?", answer: "Yes, ProCare Dental accepts Careington dental discount plans." },
    { question: "What does Careington cover?", answer: "Careington provides discounts on preventive, basic, and major dental services." },
    { question: "Does Careington have a waiting period?", answer: "No, Careington has no waiting periods." },
    { question: "How do I use my Careington plan at ProCare Dental?", answer: "Simply bring your Careington card to your appointment and we'll apply your discount." },
    { question: "What discounts does Careington provide?", answer: "Careington provides discounts ranging from 10-60% depending on the service." },
    { question: "Does Careington cover emergency dental care?", answer: "Yes, Careington covers emergency dental services at discounted rates." },
  ],
});

// Dominion National Page
export const DominionNationalPage = createInsurancePage({
  insuranceName: "Dominion National",
  slug: "dominion-national",
  description: "Dominion National provides dental insurance plans with comprehensive coverage. ProCare Dental is an in-network provider for Dominion National.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with Dominion National?", answer: "Yes, ProCare Dental is an in-network provider for Dominion National." },
    { question: "What does Dominion National cover?", answer: "Dominion National covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Dominion National annual maximum?", answer: "Most plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Dominion National cover implants?", answer: "Some plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my Dominion National coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does Dominion National have a waiting period?", answer: "Most plans have no waiting period for preventive care." },
  ],
});

// Fidelio Page
export const FidelioPage = createInsurancePage({
  insuranceName: "Fidelio",
  slug: "fidelio",
  description: "Fidelio provides dental insurance coverage. ProCare Dental accepts Fidelio insurance.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Does ProCare Dental accept Fidelio?", answer: "Yes, ProCare Dental accepts Fidelio dental insurance." },
    { question: "What does Fidelio cover?", answer: "Fidelio covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Fidelio annual maximum?", answer: "Most Fidelio plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Fidelio cover implants?", answer: "Some Fidelio plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my Fidelio coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does Fidelio have a waiting period?", answer: "Most Fidelio plans have no waiting period for preventive care." },
  ],
});

// GEHA Page
export const GEHAPage = createInsurancePage({
  insuranceName: "GEHA",
  slug: "geha",
  description: "GEHA provides dental insurance plans for federal employees and families. ProCare Dental is an in-network provider for GEHA.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with GEHA?", answer: "Yes, ProCare Dental is an in-network provider for GEHA dental plans." },
    { question: "What does GEHA cover?", answer: "GEHA covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the GEHA annual maximum?", answer: "Most GEHA plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does GEHA cover implants?", answer: "Some GEHA plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my GEHA coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does GEHA have a waiting period?", answer: "Most GEHA plans have no waiting period for preventive care." },
  ],
});

// Healthplex Page
export const HealthplexPage = createInsurancePage({
  insuranceName: "Healthplex",
  slug: "healthplex",
  description: "Healthplex provides dental insurance plans. ProCare Dental is an in-network provider for Healthplex.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with Healthplex?", answer: "Yes, ProCare Dental is an in-network provider for Healthplex." },
    { question: "What does Healthplex cover?", answer: "Healthplex covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Healthplex annual maximum?", answer: "Most Healthplex plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Healthplex cover implants?", answer: "Some Healthplex plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my Healthplex coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does Healthplex have a waiting period?", answer: "Most Healthplex plans have no waiting period for preventive care." },
  ],
});

// Lincoln Financial Group Page
export const LincolnFinancialPage = createInsurancePage({
  insuranceName: "Lincoln Financial Group",
  slug: "lincoln-financial-group",
  description: "Lincoln Financial Group provides dental insurance plans. ProCare Dental is an in-network provider for Lincoln Financial.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with Lincoln Financial?", answer: "Yes, ProCare Dental is an in-network provider for Lincoln Financial plans." },
    { question: "What does Lincoln Financial cover?", answer: "Lincoln Financial covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Lincoln Financial annual maximum?", answer: "Most plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Lincoln Financial cover implants?", answer: "Some plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my Lincoln Financial coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does Lincoln Financial have a waiting period?", answer: "Most plans have no waiting period for preventive care." },
  ],
});

// Manhattan Life Page
export const ManhattanLifePage = createInsurancePage({
  insuranceName: "Manhattan Life",
  slug: "manhattan-life",
  description: "Manhattan Life provides dental insurance plans. ProCare Dental accepts Manhattan Life insurance.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Does ProCare Dental accept Manhattan Life?", answer: "Yes, ProCare Dental accepts Manhattan Life dental insurance." },
    { question: "What does Manhattan Life cover?", answer: "Manhattan Life covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Manhattan Life annual maximum?", answer: "Most plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Manhattan Life cover implants?", answer: "Some plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my Manhattan Life coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does Manhattan Life have a waiting period?", answer: "Most plans have no waiting period for preventive care." },
  ],
});

// Mutual Of Omaha Page
export const MutualOfOmahaPage = createInsurancePage({
  insuranceName: "Mutual Of Omaha",
  slug: "mutual-of-omaha",
  description: "Mutual Of Omaha provides dental insurance plans. ProCare Dental is an in-network provider for Mutual Of Omaha.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with Mutual Of Omaha?", answer: "Yes, ProCare Dental is an in-network provider for Mutual Of Omaha." },
    { question: "What does Mutual Of Omaha cover?", answer: "Mutual Of Omaha covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Mutual Of Omaha annual maximum?", answer: "Most plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Mutual Of Omaha cover implants?", answer: "Some plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my Mutual Of Omaha coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does Mutual Of Omaha have a waiting period?", answer: "Most plans have no waiting period for preventive care." },
  ],
});

// Principal Page
export const PrincipalPage = createInsurancePage({
  insuranceName: "Principal",
  slug: "principal",
  description: "Principal provides dental insurance plans. ProCare Dental is an in-network provider for Principal.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with Principal?", answer: "Yes, ProCare Dental is an in-network provider for Principal dental plans." },
    { question: "What does Principal cover?", answer: "Principal covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Principal annual maximum?", answer: "Most Principal plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Principal cover implants?", answer: "Some Principal plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my Principal coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does Principal have a waiting period?", answer: "Most Principal plans have no waiting period for preventive care." },
  ],
});

// Sunlife Page
export const SunlifePage = createInsurancePage({
  insuranceName: "Sunlife",
  slug: "sunlife",
  description: "Sunlife provides dental insurance plans. ProCare Dental is an in-network provider for Sunlife.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with Sunlife?", answer: "Yes, ProCare Dental is an in-network provider for Sunlife dental plans." },
    { question: "What does Sunlife cover?", answer: "Sunlife covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Sunlife annual maximum?", answer: "Most Sunlife plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Sunlife cover implants?", answer: "Some Sunlife plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my Sunlife coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does Sunlife have a waiting period?", answer: "Most Sunlife plans have no waiting period for preventive care." },
  ],
});

// Solstice Page
export const SolsticePage = createInsurancePage({
  insuranceName: "Solstice",
  slug: "solstice",
  description: "Solstice provides dental insurance plans. ProCare Dental accepts Solstice insurance.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Does ProCare Dental accept Solstice?", answer: "Yes, ProCare Dental accepts Solstice dental insurance." },
    { question: "What does Solstice cover?", answer: "Solstice covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Solstice annual maximum?", answer: "Most Solstice plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Solstice cover implants?", answer: "Some Solstice plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my Solstice coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does Solstice have a waiting period?", answer: "Most Solstice plans have no waiting period for preventive care." },
  ],
});

// TruAssure Page
export const TruAssurePage = createInsurancePage({
  insuranceName: "TruAssure",
  slug: "truassure",
  description: "TruAssure provides dental insurance plans. ProCare Dental is an in-network provider for TruAssure.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with TruAssure?", answer: "Yes, ProCare Dental is an in-network provider for TruAssure dental plans." },
    { question: "What does TruAssure cover?", answer: "TruAssure covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the TruAssure annual maximum?", answer: "Most TruAssure plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does TruAssure cover implants?", answer: "Some TruAssure plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my TruAssure coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does TruAssure have a waiting period?", answer: "Most TruAssure plans have no waiting period for preventive care." },
  ],
});

// United Concordia Page
export const UnitedConcordiaPage = createInsurancePage({
  insuranceName: "United Concordia",
  slug: "united-concordia",
  description: "United Concordia provides dental insurance plans. ProCare Dental is an in-network provider for United Concordia.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with United Concordia?", answer: "Yes, ProCare Dental is an in-network provider for United Concordia dental plans." },
    { question: "What does United Concordia cover?", answer: "United Concordia covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the United Concordia annual maximum?", answer: "Most United Concordia plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does United Concordia cover implants?", answer: "Some United Concordia plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my United Concordia coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does United Concordia have a waiting period?", answer: "Most United Concordia plans have no waiting period for preventive care." },
  ],
});

// Unum Page
export const UnumPage = createInsurancePage({
  insuranceName: "Unum",
  slug: "unum",
  description: "Unum provides dental insurance plans. ProCare Dental is an in-network provider for Unum.",
  coverage: [
    "100% coverage for preventive care",
    "70-80% coverage for basic services",
    "50% coverage for major services",
    "Annual deductible typically $50-$100",
    "Annual maximum benefit $1,000-$2,000",
  ],
  faqs: [
    { question: "Is ProCare Dental in-network with Unum?", answer: "Yes, ProCare Dental is an in-network provider for Unum dental plans." },
    { question: "What does Unum cover?", answer: "Unum covers preventive care at 100%, basic services at 70-80%, and major services at 50%." },
    { question: "What is the Unum annual maximum?", answer: "Most Unum plans have an annual maximum of $1,000-$2,000 per year." },
    { question: "Does Unum cover implants?", answer: "Some Unum plans cover implants at 50%. Verify your specific plan coverage." },
    { question: "How do I verify my Unum coverage?", answer: "We can verify your coverage for you. Simply bring your insurance card." },
    { question: "Does Unum have a waiting period?", answer: "Most Unum plans have no waiting period for preventive care." },
  ],
});
