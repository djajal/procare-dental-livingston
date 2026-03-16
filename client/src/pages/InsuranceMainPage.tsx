import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, DollarSign, Clock } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Main Insurance & Coverage Page
 * Lists all accepted insurance providers and explains benefits
 */

const INSURANCE_PROVIDERS = [
  "AmeriHealth Medicare Advantage PPO",
  "Aetna",
  "Ameritas",
  "Anthem",
  "AFLAC",
  "Assurant",
  "Beam Dental",
  "Blue Cross Blue Shield (All States)",
  "Clover Medicare PPO+HMO",
  "Cigna",
  "Careington",
  "Delta Dental",
  "Dominion National",
  "Fidelio",
  "GEHA",
  "Guardian",
  "Healthplex",
  "Horizon NJ BCBS",
  "Humana",
  "Lincoln Financial Group",
  "Manhattan Life",
  "Metlife",
  "Mutual Of Omaha",
  "Principal",
  "Sunlife",
  "Solstice",
  "TruAssure",
  "United Concordia",
  "United Healthcare",
  "Unum",
];

const TOP_INSURANCES = [
  { name: "Delta Dental", slug: "delta-dental" },
  { name: "Aetna", slug: "aetna" },
  { name: "Cigna", slug: "cigna" },
  { name: "United Healthcare", slug: "united-healthcare" },
  { name: "MetLife", slug: "metlife" },
  { name: "Guardian", slug: "guardian" },
  { name: "Horizon NJ BCBS", slug: "horizon-nj-bcbs" },
  { name: "Humana", slug: "humana" },
];

export default function InsuranceMainPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4" role="heading" aria-level={1}>
              Dental Insurance in Livingston, NJ
            </h1>
            <p className="text-xl text-foreground/80 mb-6">
              ProCare Dental accepts most major PPO and Medicare Advantage dental insurance plans. We work directly with your insurance provider to maximize your benefits and minimize your out-of-pocket costs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center" role="heading" aria-level={2}>
            Why Choose ProCare Dental for Your Insurance?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>In-Network Provider</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  We're in-network with most major dental insurance plans, ensuring you receive maximum coverage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Maximize Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  We verify your benefits before your visit and help you understand your coverage options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Fast Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  We file insurance claims directly with your provider for faster reimbursement and reduced hassle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Transparent Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  We provide upfront estimates of your out-of-pocket costs before treatment begins.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Insurance Plans */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center" role="heading" aria-level={2}>
            Featured Insurance Plans
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Learn more about coverage and benefits for these popular insurance providers
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {TOP_INSURANCES.map((insurance) => (
              <Link key={insurance.slug} href={`/insurance/${insurance.slug}`}>
                <Card className="hover:shadow-lg transition cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{insurance.name}</CardTitle>
                    <CardDescription>Learn about coverage & benefits</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Accepted Insurances */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center" role="heading" aria-level={2}>
            All Accepted Insurance Providers
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            ProCare Dental accepts most major PPO and Medicare Advantage plans. If your insurance isn't listed below, please contact us to verify coverage.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {INSURANCE_PROVIDERS.map((provider, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground">{provider}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 bg-blue-50 border-t border-blue-200">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4" role="heading" aria-level={2}>
              Important Information
            </h2>
            <div className="space-y-4 text-foreground/80">
              <p>
                <strong>PPO Plans Accepted:</strong> We accept most major PPO (Preferred Provider Organization) plans and Medicare Advantage plans.
              </p>
              <p>
                <strong>Plans NOT Accepted:</strong> We do not accept Commercial HMO, DHMO, NJFamilyCare, Horizon NJ Health, Amerigroup, Fidelis, Wellcare, or Community plans.
              </p>
              <p>
                <strong>Verification Required:</strong> Coverage varies by specific plan. We recommend verifying your benefits with your insurance company or contacting our office before your first visit.
              </p>
              <p>
                <strong>Out-of-Network Benefits:</strong> If your insurance is not on this list or we are not contracted with your specific plan, we can still file your insurance claim and accept assignment of benefits to help you maximize your coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6" role="heading" aria-level={2}>
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to verify your insurance coverage and schedule your dental visit in Livingston, NJ.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <a href="tel:(973) 533-1777">Call Now</a>
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
}
