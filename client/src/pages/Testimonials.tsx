import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, MapPin, Play } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

interface VideoTestimonial {
  id: string;
  name: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
  quote: string;
  rating: number;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    title: "Invisalign Patient",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://via.placeholder.com/400x300?text=Sarah+Johnson",
    quote: "Dr. Ceravolo transformed my smile with Invisalign. I'm so confident now!",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    title: "Dental Implant Patient",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://via.placeholder.com/400x300?text=Michael+Chen",
    quote: "The dental implant procedure was painless and the results are amazing.",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Jennifer Martinez",
    title: "Cosmetic Dentistry Patient",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://via.placeholder.com/400x300?text=Jennifer+Martinez",
    quote: "My veneers look completely natural. I get compliments on my smile all the time!",
    rating: 5
  },
  {
    id: "testimonial-4",
    name: "David Thompson",
    title: "General Dentistry Patient",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://via.placeholder.com/400x300?text=David+Thompson",
    quote: "ProCare Dental provides exceptional care. Highly recommended!",
    rating: 5
  }
];

export default function TestimonialsPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-3">
        <div className="container flex justify-end items-center gap-8">
          <a href="tel:(973)533-1777" className="flex items-center gap-2 hover:opacity-80 transition">
            <Phone className="w-4 h-4" />
            <span>(973) 533-1777</span>
          </a>
          <a href="https://maps.google.com/?q=22+Old+Short+Hills+Rd+Suite+207,+Livingston,+NJ+07039" className="flex items-center gap-2 hover:opacity-80 transition">
            <MapPin className="w-4 h-4" />
            <span>22 Old Short Hills Rd Suite 207, Livingston, NJ 07039</span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-secondary border-b border-border sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_new-itoU26Uu5fW47iKpWCMPA7.webp" alt="ProCare Dental" className="h-14" />
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">Services</Link>
            <Link href="/reviews" className="text-foreground hover:text-primary transition">Reviews</Link>
            <Link href="/" className="text-foreground hover:text-primary transition">Contact</Link>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8">Book an Appointment</Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-20 md:py-32">
        <div className="container">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Patient Testimonials</h1>
            <p className="text-xl text-foreground/70 mb-12">Hear from our satisfied patients about their experiences at ProCare Dental</p>

            {/* Video Testimonials Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {videoTestimonials.map(testimonial => (
                <Card key={testimonial.id} className="overflow-hidden hover:shadow-lg transition cursor-pointer" onClick={() => setSelectedVideo(testimonial)}>
                  <CardContent className="p-0 relative">
                    <div className="relative h-64 overflow-hidden bg-gray-300">
                      <img 
                        src={testimonial.thumbnail} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40 transition">
                        <div className="bg-orange-600 rounded-full p-4">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-primary mb-1">{testimonial.name}</h3>
                      <p className="text-sm text-foreground/70 mb-3">{testimonial.title}</p>
                      <p className="text-foreground/80 mb-4 italic">"{testimonial.quote}"</p>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedVideo(null)}>
                <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full" onClick={e => e.stopPropagation()}>
                  <div className="relative pt-[56.25%]">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={selectedVideo.videoUrl}
                      title={selectedVideo.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">{selectedVideo.name}</h3>
                    <p className="text-foreground/70 mb-4">{selectedVideo.title}</p>
                    <p className="text-foreground/80 mb-4">"{selectedVideo.quote}"</p>
                    <button 
                      onClick={() => setSelectedVideo(null)}
                      className="text-primary hover:text-primary/80 font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="bg-secondary p-8 rounded-lg text-center mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Ready to Transform Your Smile?</h2>
              <p className="text-foreground/70 mb-6">Schedule your consultation with Dr. Ceravolo today</p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-6 text-lg">
                  Book an Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/reviews">Reviews</Link></li>
                <li><Link href="/">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-sm">(973) 533-1777</p>
              <p className="text-sm">22 Old Short Hills Rd Suite 207</p>
              <p className="text-sm">Livingston, NJ 07039</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Hours</h3>
              <p className="text-sm">Mon-Tue, Thu: 8am-6pm</p>
              <p className="text-sm">Sat: 8am-1pm</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/sitemap">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
