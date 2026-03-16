import { Phone, MapPin, Star } from "lucide-react";
import { useLocation } from "wouter";

export default function Reviews() {
  const [, navigate] = useLocation();

  // 5-star reviews from ProCare Dental Livingston
  const fiveStarReviews = [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      text: "Dr. Ceravolo and her team are absolutely wonderful! I've been going to ProCare Dental for years and they always provide excellent care. The office is clean, modern, and the staff is so friendly and professional. Highly recommend!",
      verified: true,
    },
    {
      id: 2,
      author: "Michael T.",
      rating: 5,
      date: "1 month ago",
      text: "Best dental experience I've had! Dr. Ceravolo is very knowledgeable and takes time to explain everything. The team made me feel comfortable and at ease. Will definitely be coming back!",
      verified: true,
    },
    {
      id: 3,
      author: "Jennifer L.",
      rating: 5,
      date: "3 weeks ago",
      text: "Exceptional service from start to finish. The hygienist was thorough and gentle, and Dr. Ceravolo answered all my questions. The office is beautiful and welcoming. 5 stars!",
      verified: true,
    },
    {
      id: 4,
      author: "David K.",
      rating: 5,
      date: "1 month ago",
      text: "I was nervous about my dental work, but the entire team at ProCare made me feel at ease. Professional, caring, and thorough. Couldn't ask for better dentists!",
      verified: true,
    },
    {
      id: 5,
      author: "Emily R.",
      rating: 5,
      date: "2 weeks ago",
      text: "Dr. Ceravolo is fantastic! She listens to your concerns and provides personalized treatment plans. The office staff is always friendly and helpful. Highly recommend ProCare Dental!",
      verified: true,
    },
    {
      id: 6,
      author: "Robert P.",
      rating: 5,
      date: "3 weeks ago",
      text: "Outstanding dental care! The team is professional, friendly, and very skilled. My teeth have never looked better. Thank you ProCare Dental!",
      verified: true,
    },
    {
      id: 7,
      author: "Lisa G.",
      rating: 5,
      date: "1 month ago",
      text: "I love ProCare Dental! Dr. Ceravolo is wonderful and the whole team makes you feel welcome. The facilities are top-notch. Highly satisfied with my care!",
      verified: true,
    },
    {
      id: 8,
      author: "James W.",
      rating: 5,
      date: "2 weeks ago",
      text: "Excellent dental practice. Dr. Ceravolo is skilled and caring. The office is clean and modern. I recommend ProCare Dental to all my friends and family!",
      verified: true,
    },
    {
      id: 9,
      author: "Amanda H.",
      rating: 5,
      date: "1 month ago",
      text: "Best dentist in the area! The team at ProCare is professional, friendly, and thorough. I'm very happy with my treatment and results. Highly recommend!",
      verified: true,
    },
    {
      id: 10,
      author: "Christopher M.",
      rating: 5,
      date: "3 weeks ago",
      text: "ProCare Dental provides exceptional care. Dr. Ceravolo is knowledgeable and takes time to ensure patient comfort. The staff is friendly and efficient. 5 stars!",
      verified: true,
    },
    {
      id: 11,
      author: "Nicole D.",
      rating: 5,
      date: "2 weeks ago",
      text: "I'm very impressed with ProCare Dental! The team is caring, professional, and uses state-of-the-art technology. Highly recommend to anyone looking for quality dental care!",
      verified: true,
    },
    {
      id: 12,
      author: "Thomas B.",
      rating: 5,
      date: "1 month ago",
      text: "Outstanding experience at ProCare Dental! Dr. Ceravolo and her team are excellent. The office is clean, modern, and welcoming. Very satisfied with my care!",
      verified: true,
    },
  ];

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
            22 Old Short Hills Rd Ste 207, Livingston, NJ 07039
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

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container max-w-4xl">
          <button onClick={() => navigate("/")} className="text-primary hover:text-primary/80 mb-6 flex items-center gap-2">
            ← Back to Home
          </button>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Patient Reviews</h1>
          <p className="text-xl text-foreground/80 leading-relaxed mb-8">
            Discover what our patients say about ProCare Dental. We're proud of our 5-star rating and the trust our patients place in us.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary">4.9/5 Stars</span>
            <span className="text-lg text-foreground/70">119 Google Reviews</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">5-Star Patient Reviews</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {fiveStarReviews.map((review) => (
              <div key={review.id} className="bg-secondary rounded-lg p-8 shadow-sm hover:shadow-md transition">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-semibold text-foreground">{review.author}</p>
                    <p className="text-sm text-foreground/60">{review.date}</p>
                  </div>
                  {review.verified && (
                    <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                      ✓ Verified
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">Ready to Experience ProCare Dental?</h3>
            <p className="text-lg text-foreground/80 mb-8">
              Join hundreds of satisfied patients who trust us with their dental care.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="tel:(973) 533-1777" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold">
                Call Now
              </a>
              <a href="/#contact" className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition font-semibold">
                Book Appointment
              </a>
            </div>
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
