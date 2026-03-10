import { Phone, MapPin } from "lucide-react";
import { useLocation } from "wouter";

export default function PrivacyPolicy() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-3 text-sm">
        <div className="container flex justify-between items-center">
          <a href="tel:(973) 533-1777" className="flex items-center gap-2 hover:text-secondary transition">
            <Phone className="w-4 h-4" />
            (973) 533-1777
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-secondary transition">
            <MapPin className="w-4 h-4" />
            22 Old Short Hills Rd Suite 207, Livingston, NJ 07039
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-secondary py-4 sticky top-0 z-50 shadow-sm">
        <div className="container flex justify-between items-center">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_new-itoU26Uu5fW47iKpWCMPA7.webp" alt="ProCare Dental" className="h-14" />
          </button>
          <div className="flex gap-8 items-center">
            <a href="/" className="text-foreground hover:text-primary transition">Home</a>
            <a href="/#services" className="text-foreground hover:text-primary transition">Services</a>
            <a href="/#contact" className="text-foreground hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <button onClick={() => navigate("/")} className="text-primary hover:text-primary/80 mb-6 flex items-center gap-2">
            ← Back to Home
          </button>

          <h1 className="text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
          <p className="text-foreground/70 mb-8">Last Updated: March 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">Introduction</h2>
              <p className="text-foreground/80 leading-relaxed">
                ProCare Dental Livingston ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">Information We Collect</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
                <li><strong>Data From Social Networks:</strong> User information from social networks, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">Use of Your Information</h2>
              <p className="text-foreground/80 leading-relaxed">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Generate a personal profile about you so that future visits to the Site will be personalized</li>
                <li>Increase the efficiency and operation of the Site</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
                <li>Notify you of updates to the Site</li>
                <li>Offer new products, services, and/or recommendations to you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">Disclosure of Your Information</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may share information we have collected about you in certain situations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to comply with the law.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">Security of Your Information</h2>
              <p className="text-foreground/80 leading-relaxed">
                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-secondary p-6 rounded-lg mt-4">
                <p className="font-semibold text-primary mb-2">ProCare Dental Livingston</p>
                <p className="text-foreground/80">22 Old Short Hills Rd Suite 207</p>
                <p className="text-foreground/80">Livingston, NJ 07039</p>
                <p className="text-foreground/80 mt-2">Phone: (973) 533-1777</p>
              </div>
            </section>
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
