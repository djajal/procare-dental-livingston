import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";

interface LocationInsurancePageProps {
  location: string;
  insuranceName: string;
  insuranceSlug: string;
}

function LocationInsurancePage({ location, insuranceName, insuranceSlug }: LocationInsurancePageProps) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Insurance", href: "/insurance" },
    { label: insuranceName, href: `/insurance/${insuranceSlug}` },
    { label: location },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 w-full">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero Section */}
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-navy-900 mb-4">
              {insuranceName} Dentist in {location}, NJ
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              ProCare Dental is proud to accept {insuranceName} insurance in {location}. We provide comprehensive dental care for patients with {insuranceName} coverage, ensuring you get the quality treatment you deserve at an affordable cost.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                (973) 533-1777
              </Button>
            </div>
          </section>

          {/* Why Choose ProCare */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Why Choose ProCare Dental for {insuranceName} in {location}?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">In-Network Provider</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We are an in-network provider for {insuranceName}, meaning you'll benefit from negotiated rates and maximize your insurance benefits.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Experienced Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Dr. Kristina Ceravolo and our team have years of experience working with {insuranceName} patients in {location}.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Convenient Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Located in Livingston, we serve patients from {location} and surrounding areas with easy access and flexible scheduling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Coverage Details */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">{insuranceName} Coverage at ProCare Dental</h2>
            <Card>
              <CardHeader>
                <CardTitle>What's Covered</CardTitle>
                <CardDescription>Typical {insuranceName} coverage includes:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700"><strong>Preventative Care:</strong> 100% coverage for cleanings, exams, and X-rays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700"><strong>Basic Procedures:</strong> 80% coverage for fillings, extractions, and root canals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700"><strong>Major Procedures:</strong> 50% coverage for crowns, bridges, and implants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700"><strong>Orthodontics:</strong> Coverage available for braces and aligners (varies by plan)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you accept {insuranceName} in {location}?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes! ProCare Dental is an in-network provider for {insuranceName}. We accept {insuranceName} insurance for all patients in {location} and surrounding areas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is my {insuranceName} deductible?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Deductibles vary by plan. Most {insuranceName} plans have annual deductibles ranging from $0-$150. We recommend contacting your insurance provider or bringing your insurance card to your first visit so we can verify your exact coverage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Does {insuranceName} cover cosmetic procedures?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Most {insuranceName} plans do not cover purely cosmetic procedures like teeth whitening or veneers. However, if a procedure has both cosmetic and functional benefits (like a crown), it may be partially covered. Contact us to discuss your specific situation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I verify my {insuranceName} coverage?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Bring your {insuranceName} insurance card to your appointment, or call us at (973) 533-1777 and we'll verify your coverage for you. We can also check your benefits online if you provide your member ID and group number.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if I have {insuranceName} and another insurance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    If you have dual coverage, we can file claims with both insurances. We'll file with your primary insurance first, then submit any remaining balance to your secondary insurance to maximize your benefits.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-navy-900 text-white rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Schedule Your Appointment?</h2>
            <p className="text-lg mb-6">
              Contact ProCare Dental today to schedule your appointment. We're conveniently located in Livingston and serve patients from {location} and surrounding areas.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold mb-1">Call Us</p>
                  <p className="text-gray-300">(973) 533-1777</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold mb-1">Visit Us</p>
                  <p className="text-gray-300">22 Old Short Hills Rd<br />Livingston, NJ 07039</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold mb-1">Hours</p>
                  <p className="text-gray-300">Mon-Fri: 9am-5pm<br />Sat: By appointment</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />

      {/* FAQ Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: `Do you accept ${insuranceName} in ${location}?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `Yes! ProCare Dental is an in-network provider for ${insuranceName}. We accept ${insuranceName} insurance for all patients in ${location} and surrounding areas.`,
              },
            },
            {
              "@type": "Question",
              name: `What is my ${insuranceName} deductible?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `Deductibles vary by plan. Most ${insuranceName} plans have annual deductibles ranging from $0-$150. We recommend contacting your insurance provider or bringing your insurance card to your first visit.`,
              },
            },
            {
              "@type": "Question",
              name: `Does ${insuranceName} cover cosmetic procedures?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `Most ${insuranceName} plans do not cover purely cosmetic procedures. However, if a procedure has both cosmetic and functional benefits, it may be partially covered.`,
              },
            },
          ],
        })}
      </script>
    </div>
  );
}

export const WestOrangeDeltaDental = () => (
  <LocationInsurancePage location="West Orange" insuranceName="Delta Dental" insuranceSlug="delta-dental" />
);

export const VeronaDeltaDental = () => (
  <LocationInsurancePage location="Verona" insuranceName="Delta Dental" insuranceSlug="delta-dental" />
);

export const MontclairDeltaDental = () => (
  <LocationInsurancePage location="Montclair" insuranceName="Delta Dental" insuranceSlug="delta-dental" />
);

export const WestOrangeAetna = () => (
  <LocationInsurancePage location="West Orange" insuranceName="Aetna" insuranceSlug="aetna" />
);

export const VeronaAetna = () => (
  <LocationInsurancePage location="Verona" insuranceName="Aetna" insuranceSlug="aetna" />
);

export const MontclairAetna = () => (
  <LocationInsurancePage location="Montclair" insuranceName="Aetna" insuranceSlug="aetna" />
);

export const WestOrangeCigna = () => (
  <LocationInsurancePage location="West Orange" insuranceName="Cigna" insuranceSlug="cigna" />
);

export const VeronaCigna = () => (
  <LocationInsurancePage location="Verona" insuranceName="Cigna" insuranceSlug="cigna" />
);

export const MontclairCigna = () => (
  <LocationInsurancePage location="Montclair" insuranceName="Cigna" insuranceSlug="cigna" />
);
