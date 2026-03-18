import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Phone, MapPin, Calendar, User } from "lucide-react";
import { Link } from "wouter";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Complete Guide to Dental Implants",
    excerpt: "Learn everything you need to know about dental implants, from the procedure to aftercare.",
    content: `Dental implants are a popular and effective way to replace missing teeth. They are surgically placed into the jawbone and serve as a strong foundation for replacement teeth.

## What Are Dental Implants?

Dental implants are artificial tooth roots made of titanium that are surgically placed into the jawbone. They provide a strong foundation for fixed or removable replacement teeth that are made to match your natural teeth.

## The Implant Process

The dental implant procedure typically involves several steps:

1. **Consultation and Planning** - Your dentist will examine your mouth and take X-rays to determine if you're a good candidate for implants.

2. **Implant Placement** - The implant is surgically placed into the jawbone. This is typically done under local anesthesia.

3. **Osseointegration** - Over the next few months, the implant fuses with the jawbone, creating a strong foundation.

4. **Abutment Placement** - Once the implant has integrated, an abutment is placed on top of the implant.

5. **Crown Placement** - Finally, a custom-made crown is attached to the abutment to complete the restoration.

## Benefits of Dental Implants

- **Improved appearance** - Implants look and feel like natural teeth
- **Improved speech** - Unlike dentures, implants don't slip or move
- **Improved comfort** - No more denture discomfort
- **Easier eating** - Implants function like natural teeth
- **Improved self-esteem** - Restore your confidence and smile
- **Improved oral health** - Implants don't require reducing other teeth
- **Durability** - Implants are very durable and can last a lifetime

## Recovery and Aftercare

After implant placement, it's important to follow your dentist's instructions for proper care and recovery. This may include:

- Avoiding hard or sticky foods for several weeks
- Taking prescribed medications as directed
- Attending follow-up appointments
- Practicing good oral hygiene
- Avoiding smoking and alcohol

If you're interested in dental implants, contact ProCare Dental today to schedule a consultation with Dr. Ceravolo.`,
    author: "Dr. Kristina Ceravolo, DMD",
    date: "March 10, 2026",
    category: "Restorative Dentistry",
    image: "https://via.placeholder.com/800x400?text=Dental+Implants"
  },
  {
    id: "2",
    title: "Teeth Whitening: Professional vs. At-Home",
    excerpt: "Discover the differences between professional and at-home whitening treatments.",
    content: `A bright, white smile is something many people desire. There are several options available for teeth whitening, from professional treatments to at-home kits.

## Professional Teeth Whitening

Professional teeth whitening performed by a dentist offers several advantages:

- **Faster results** - Professional treatments can whiten teeth up to 8 shades in just one appointment
- **Stronger whitening agents** - Dentists use stronger bleaching agents than over-the-counter products
- **Custom trays** - Custom-fitted trays ensure even whitening
- **Safer** - Professional treatments are monitored by a dentist
- **Longer lasting** - Results can last 6-12 months or longer

## At-Home Whitening

At-home whitening kits are more affordable but have some limitations:

- **Slower results** - Results typically take 2-4 weeks
- **Weaker whitening agents** - Over-the-counter products contain lower concentrations of bleaching agents
- **Generic trays** - One-size-fits-all trays may not fit as well
- **Longer application** - Trays must be worn for several hours daily
- **Shorter lasting** - Results typically last 3-6 months

## Which Option Is Right for You?

If you want fast, dramatic results and are willing to invest in your smile, professional teeth whitening is the best choice. If you prefer a more gradual approach and want to save money, at-home kits may be suitable.

For the best results, consider combining professional whitening with at-home maintenance treatments. Contact ProCare Dental to schedule your professional whitening appointment today!`,
    author: "Dr. Kristina Ceravolo, DMD",
    date: "March 8, 2026",
    category: "Cosmetic Dentistry",
    image: "https://via.placeholder.com/800x400?text=Teeth+Whitening"
  },
  {
    id: "3",
    title: "5 Tips for Maintaining Your Dental Health",
    excerpt: "Simple steps you can take daily to keep your teeth and gums healthy.",
    content: `Good oral hygiene is essential for maintaining healthy teeth and gums. Here are five tips to help you maintain your dental health.

## 1. Brush Twice Daily

Brush your teeth at least twice a day with a soft-bristled toothbrush and fluoride toothpaste. Brush for at least two minutes, making sure to clean all surfaces of your teeth.

## 2. Floss Daily

Flossing removes food particles and plaque from between your teeth where your toothbrush can't reach. Make flossing part of your daily routine.

## 3. Limit Sugary Foods and Drinks

Sugar feeds the bacteria in your mouth that cause tooth decay. Limit sugary foods and drinks, and if you do consume them, rinse your mouth with water afterward.

## 4. Visit Your Dentist Regularly

Regular dental checkups and cleanings help prevent tooth decay and gum disease. Most people should visit the dentist every six months.

## 5. Don't Smoke

Smoking increases your risk of tooth decay, gum disease, and oral cancer. If you smoke, consider quitting to improve your oral health.

## Conclusion

By following these simple tips, you can maintain healthy teeth and gums for a lifetime. If you have any concerns about your oral health, contact ProCare Dental to schedule an appointment with Dr. Ceravolo.`,
    author: "Dr. Kristina Ceravolo, DMD",
    date: "March 5, 2026",
    category: "Preventative Care",
    image: "https://via.placeholder.com/800x400?text=Dental+Health+Tips"
  },
  {
    id: "4",
    title: "Understanding Invisalign: Clear Aligners Explained",
    excerpt: "Everything you need to know about Invisalign treatment and how it works.",
    content: `Invisalign is a popular orthodontic treatment that uses clear, removable aligners to straighten teeth. Unlike traditional braces, Invisalign aligners are nearly invisible and can be removed for eating and cleaning.

## How Invisalign Works

Invisalign treatment involves a series of custom-made aligners that gradually move your teeth into the desired position. Each aligner is worn for about two weeks before moving to the next one in the series.

## Advantages of Invisalign

- **Nearly invisible** - The clear aligners are barely noticeable
- **Removable** - You can remove the aligners to eat and drink
- **Comfortable** - No sharp brackets or wires
- **Faster treatment** - Treatment typically takes 12-18 months
- **Better oral hygiene** - You can brush and floss normally
- **Fewer appointments** - Fewer visits to the dentist

## Is Invisalign Right for You?

Invisalign is suitable for most people with mild to moderate orthodontic issues. However, it may not be effective for severe cases. During your consultation, Dr. Ceravolo will determine if Invisalign is the right treatment for you.

## Getting Started

To get started with Invisalign, schedule a consultation with Dr. Ceravolo. She will take impressions of your teeth and create a treatment plan tailored to your needs.`,
    author: "Dr. Kristina Ceravolo, DMD",
    date: "March 1, 2026",
    category: "Orthodontics",
    image: "https://via.placeholder.com/800x400?text=Invisalign+Treatment"
  }
];

export default function BlogPage() {
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
            <span>22 Old Short Hills Rd Ste 207, Livingston, NJ 07039</span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-secondary border-b border-border sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_transparent_3d817dc4.png" alt="ProCare Dental" className="h-14" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Dental Blog & Resources</h1>
            <p className="text-xl text-foreground/70 mb-12">Expert dental care tips, treatment guides, and oral health information</p>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {blogPosts.map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-1 h-64 md:h-auto overflow-hidden bg-gray-300">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-3 text-sm text-foreground/60">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold text-primary">{post.title}</h2>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                        <Link href={`/blog/${post.id}`} className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2">
                          Read More →
                        </Link>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-secondary p-8 rounded-lg text-center mt-16">
              <h2 className="text-2xl font-bold text-primary mb-4">Have Questions About Your Dental Health?</h2>
              <p className="text-foreground/70 mb-6">Schedule a consultation with Dr. Ceravolo to discuss your specific needs</p>
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
              <p className="text-sm">22 Old Short Hills Rd Ste 207</p>
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
