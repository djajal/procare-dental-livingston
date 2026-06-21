import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Star, Camera, MessageSquare, HelpCircle } from "lucide-react";
import { useRoute } from "wouter";
import { useState } from "react";

interface ServiceData {
  title: string;
  description: string;
  image: string;
  shortDescription: string;
  benefits: string[];
  details: string;
  gallery: { before: string; after: string; caption: string }[];
  reviews: { name: string; rating: number; text: string; treatment: string }[];
  faqs: { question: string; answer: string }[];
}

const SERVICES_DATA: Record<string, ServiceData> = {
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
    details: `Professional teeth whitening at ProCare Dental in Livingston, NJ is one of the most popular and effective cosmetic dental procedures available today. Our advanced in-office whitening system uses professional-grade bleaching agents that are significantly more powerful and effective than over-the-counter products you might find at a pharmacy or grocery store. During your appointment at our Livingston dental office, we carefully apply a protective barrier to your gums and soft tissues before using a specialized whitening gel combined with a safe LED light activation system to brighten your teeth by up to eight shades in just one hour.

Unlike store-bought whitening strips or trays, our professional treatment delivers consistent, even results without the risk of uneven whitening or gum irritation. Dr. Ceravolo and our team customize each whitening treatment to your specific needs, taking into account your current tooth shade, sensitivity levels, and desired results. We begin with a thorough examination to ensure your teeth and gums are healthy enough for whitening, address any existing dental issues that could affect results, and then develop a personalized treatment plan designed to achieve your ideal shade.

Our practice offers both in-office Zoom whitening for immediate dramatic results and custom take-home whitening kits for patients who prefer a more gradual approach. The take-home kits include custom-fitted trays made from impressions of your teeth, ensuring the whitening gel contacts every surface evenly for uniform results. Many patients choose to combine both methods, starting with an in-office session for instant brightness and then maintaining their results with periodic at-home touch-ups.

The science behind professional whitening involves hydrogen peroxide or carbamide peroxide penetrating the tooth enamel to break apart stain compounds through oxidation. Professional concentrations are carefully calibrated to maximize whitening power while minimizing sensitivity. Our LED activation light accelerates this chemical reaction, allowing us to achieve results in a single visit that would take weeks with over-the-counter products.

Whether you are preparing for a wedding, job interview, class reunion, or simply want to refresh your smile and boost your confidence, professional teeth whitening in Livingston is a safe, fast, and affordable way to dramatically improve your appearance. Patients from Short Hills, West Orange, Millburn, and throughout Essex County trust ProCare Dental for their cosmetic whitening needs because of our expertise, advanced technology, and commitment to patient comfort. Schedule your whitening consultation today and discover how a brighter smile can transform your confidence and make a lasting first impression.`,
    gallery: [
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp", caption: "Zoom Whitening - 6 shades brighter in one visit" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp", caption: "Professional whitening for wedding preparation" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp", caption: "Coffee stain removal with in-office whitening" }
    ],
    reviews: [
      { name: "Sarah M.", rating: 5, text: "I had my teeth whitened at ProCare Dental and the results were amazing! My teeth went from yellowish to bright white in just one session. Dr. Ceravolo was very thorough in explaining the process and I had zero sensitivity afterward.", treatment: "Zoom Whitening" },
      { name: "Michael R.", rating: 5, text: "Best whitening experience I've ever had. The staff was professional and made me feel comfortable. My smile looks incredible and I've gotten so many compliments. Highly recommend ProCare Dental for anyone considering whitening.", treatment: "In-Office Whitening" },
      { name: "Jennifer L.", rating: 5, text: "I was nervous about sensitivity but Dr. Ceravolo used a special formula that prevented any discomfort. The results exceeded my expectations - my teeth are 8 shades whiter! Worth every penny.", treatment: "Professional Whitening" }
    ],
    faqs: [
      { question: "How long do whitening results last?", answer: "Professional whitening results typically last 6-12 months, depending on your lifestyle and dietary habits. We recommend touch-up treatments annually to maintain your bright smile. Avoiding coffee, red wine, and tobacco can extend your results significantly." },
      { question: "Is professional whitening safe for my teeth?", answer: "Yes, professional whitening is completely safe when performed by a dentist. We use proven techniques and protective measures to ensure your gums and tooth enamel are protected throughout the entire procedure." },
      { question: "Will whitening cause tooth sensitivity?", answer: "Our advanced whitening formula is designed to minimize sensitivity. We also apply a desensitizing treatment before and after the procedure if needed. Most patients experience little to no sensitivity with our system." },
      { question: "Can I whiten my teeth if I have crowns or fillings?", answer: "Whitening only affects natural tooth structure. If you have visible crowns or fillings, we can discuss cosmetic options to match your newly whitened teeth for a uniform appearance." },
      { question: "How much does professional teeth whitening cost?", answer: "Professional whitening costs vary based on the treatment chosen. We offer competitive pricing and can discuss financing options during your consultation. Most patients find it very affordable for the dramatic results achieved." },
      { question: "What should I avoid after whitening treatment?", answer: "Avoid dark-colored foods and beverages (coffee, red wine, berries, curry) for 24-48 hours after treatment. Also avoid smoking and acidic drinks during this period to maximize and maintain your results." }
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
    details: `Preventative dental care at ProCare Dental in Livingston, NJ is the best investment you can make in your long-term oral health and overall well-being. Regular checkups and professional cleanings help detect dental problems early, before they become painful and expensive to treat. Our comprehensive preventative care program is designed to keep your teeth and gums healthy for a lifetime, reducing your risk of cavities, gum disease, tooth loss, and even systemic health conditions linked to poor oral health.

During your preventative visit at our Livingston office, our experienced hygienists perform a thorough examination of your teeth, gums, and oral tissues. We take digital X-rays when needed to identify hidden problems beneath the surface, such as cavities between teeth, bone loss, impacted teeth, or developing infections. Our professional cleaning removes plaque and tartar buildup that regular brushing and flossing cannot eliminate, especially in hard-to-reach areas behind molars and below the gumline.

Dr. Ceravolo carefully evaluates each patient for signs of cavities, gum disease, oral cancer, TMJ disorders, and other conditions that are best treated when caught early. Our oral cancer screening is particularly important, as early detection dramatically improves treatment outcomes. We examine all soft tissues of the mouth, including the tongue, cheeks, palate, and throat, for any suspicious changes.

Our preventative care program includes personalized oral hygiene instructions tailored to your specific needs, fluoride treatments for cavity-prone patients, dental sealants for children and teenagers, and periodontal screenings to monitor gum health. We also provide nutritional counseling to help you understand how diet affects your dental health, and we discuss habits that may be harming your teeth, such as teeth grinding, nail biting, or using teeth as tools.

Research consistently shows that patients who maintain regular six-month dental visits save significantly on dental costs over their lifetime compared to those who only visit when problems arise. A small cavity detected early can be treated with a simple filling, while the same cavity left untreated may eventually require a crown, root canal, or even extraction and implant replacement at many times the cost.

At ProCare Dental, we believe prevention is always better than treatment, and our goal is to help every patient in Livingston, Short Hills, West Orange, Millburn, and surrounding Essex County communities maintain a healthy, beautiful smile for life through consistent preventative care. We accept most major dental insurance plans, and preventative visits are typically covered at 100 percent, making it easy and affordable to prioritize your oral health.`,
    gallery: [
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", caption: "Professional cleaning removing years of tartar buildup" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", caption: "Early cavity detection and treatment" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", caption: "Gum health restoration through regular cleanings" }
    ],
    reviews: [
      { name: "David K.", rating: 5, text: "I've been coming to ProCare Dental for my regular cleanings for 3 years now. The hygienists are gentle and thorough, and Dr. Ceravolo always takes time to explain everything. My teeth have never been healthier!", treatment: "Regular Cleaning" },
      { name: "Lisa T.", rating: 5, text: "After years of avoiding the dentist, I finally came to ProCare for a checkup. They caught a small cavity early and fixed it painlessly. Now I never miss my 6-month appointments. The staff makes you feel so comfortable.", treatment: "Comprehensive Exam" },
      { name: "Robert H.", rating: 5, text: "The preventative care program at ProCare is excellent. They caught early signs of gum disease and helped me reverse it with proper cleanings and home care instructions. Grateful for their thorough approach.", treatment: "Periodontal Screening" }
    ],
    faqs: [
      { question: "How often should I visit the dentist for checkups?", answer: "We recommend visiting the dentist every 6 months for a checkup and cleaning. Some patients with gum disease, high cavity risk, or other conditions may benefit from more frequent visits every 3-4 months." },
      { question: "What happens during a preventative dental visit?", answer: "Your visit includes a thorough examination of your teeth and gums, professional cleaning to remove plaque and tartar, digital X-rays if needed, oral cancer screening, and personalized oral hygiene recommendations." },
      { question: "Is professional dental cleaning painful?", answer: "Professional cleaning is generally painless. If you have sensitive teeth or significant tartar buildup, let us know and we can use a gentler approach, apply topical numbing gel, or adjust our technique for your comfort." },
      { question: "Can preventative care actually prevent cavities?", answer: "Absolutely. Regular preventative care significantly reduces cavity risk by removing plaque and tartar, applying fluoride treatments, and identifying early demineralization before it becomes a cavity. Combined with good home hygiene, it's highly effective." },
      { question: "What if I haven't been to the dentist in several years?", answer: "Don't worry or feel embarrassed! We welcome patients regardless of how long it's been. We'll perform a thorough examination and may recommend a deep cleaning or additional visits to address any buildup or issues." },
      { question: "Does dental insurance cover preventative care visits?", answer: "Most dental insurance plans cover preventative care (exams, cleanings, X-rays) at 80-100%. We accept all major insurance plans and can verify your specific coverage before your appointment." }
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
    details: `Cosmetic dentistry at ProCare Dental in Livingston, NJ focuses on improving the appearance of your smile using the latest techniques, materials, and artistic principles available in modern dentistry. Whether you want to whiten your teeth, close gaps, repair chips and cracks, reshape uneven teeth, or completely transform your smile with a full makeover, Dr. Ceravolo and our team have the expertise, artistry, and advanced technology to achieve beautiful, natural-looking results that complement your unique facial features.

Our comprehensive cosmetic dentistry services include porcelain veneers, dental bonding, tooth contouring and reshaping, gum recontouring, professional whitening, and complete smile design consultations. We use advanced digital imaging technology to show you a realistic preview of your expected results before any treatment begins, so you can visualize your new smile and feel confident about your decision. This digital smile design process allows us to collaborate with you on every detail, from tooth shape and size to shade and alignment.

Porcelain veneers are one of our most popular cosmetic treatments, offering a dramatic transformation with minimal tooth preparation. These ultra-thin shells of dental porcelain are custom-crafted by master ceramists to match the translucency, color variations, and surface texture of natural teeth. Veneers can correct a wide range of imperfections including discoloration, chips, cracks, gaps, minor misalignment, and worn or uneven teeth. With proper care, porcelain veneers can last 15-20 years.

For patients seeking more conservative options, dental bonding offers an excellent solution for minor imperfections. Using tooth-colored composite resin, Dr. Ceravolo can repair chips, close small gaps, reshape teeth, and cover discoloration in a single visit without removing any natural tooth structure. Bonding is an affordable, reversible option that delivers immediate results.

Our smile makeover process begins with a comprehensive consultation where we discuss your goals, concerns, and expectations. We examine your teeth, gums, bite alignment, and facial proportions to develop a customized treatment plan. Some patients achieve their ideal smile with a single procedure, while others benefit from a combination of treatments performed in a carefully sequenced plan.

At ProCare Dental in Livingston, we understand that your smile is one of the first things people notice, and it significantly impacts your confidence in social and professional settings. We are committed to helping patients throughout Essex County achieve the confident, radiant smile they deserve through personalized cosmetic dental care that looks natural and lasts for years.`,
    gallery: [
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/porcelain_crowns_service_459e4140.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/porcelain_crowns_service_459e4140.webp", caption: "Porcelain veneers - complete smile transformation" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/porcelain_crowns_service_459e4140.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/porcelain_crowns_service_459e4140.webp", caption: "Dental bonding to repair chipped front teeth" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/porcelain_crowns_service_459e4140.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/porcelain_crowns_service_459e4140.webp", caption: "Gap closure with cosmetic bonding" }
    ],
    reviews: [
      { name: "Amanda P.", rating: 5, text: "Dr. Ceravolo gave me the smile I always dreamed of with porcelain veneers. The digital preview was so helpful in deciding what I wanted. Everyone thinks my teeth are naturally perfect!", treatment: "Porcelain Veneers" },
      { name: "James W.", rating: 5, text: "I had a chipped front tooth that always bothered me. Dr. Ceravolo fixed it with bonding in one visit and it looks completely natural. You can't even tell which tooth was repaired. Amazing work!", treatment: "Dental Bonding" },
      { name: "Patricia S.", rating: 5, text: "My smile makeover at ProCare Dental changed my life. I used to hide my smile in photos but now I can't stop smiling! The whole team was supportive and the results are stunning.", treatment: "Smile Makeover" }
    ],
    faqs: [
      { question: "What is the difference between veneers and dental bonding?", answer: "Veneers are thin porcelain shells that cover the front of teeth, offering superior durability and stain resistance (lasting 15-20 years). Bonding uses tooth-colored resin applied directly to teeth, is less expensive, and can be done in one visit but typically lasts 5-7 years." },
      { question: "How long do cosmetic dental treatments last?", answer: "Porcelain veneers typically last 15-20 years with proper care. Dental bonding lasts 5-7 years. Professional whitening results last 6-12 months. Longevity depends on your oral hygiene habits and lifestyle." },
      { question: "Is cosmetic dentistry covered by dental insurance?", answer: "Most purely cosmetic procedures are not covered by insurance as they're considered elective. However, if a procedure serves both cosmetic and functional purposes (like a crown on a damaged tooth), some coverage may apply." },
      { question: "Will cosmetic dental work look natural?", answer: "Absolutely! We use advanced materials and artistic techniques to create results that match your natural teeth in color, shape, translucency, and surface texture. Our goal is always a natural, beautiful result." },
      { question: "How long does a cosmetic consultation take?", answer: "Initial cosmetic consultations typically take 30-45 minutes. We'll discuss your goals, examine your teeth, take photos, and may create digital previews of potential results so you can visualize your new smile." },
      { question: "Can cosmetic dentistry fix crooked teeth without braces?", answer: "In many cases, yes. Porcelain veneers can create the appearance of perfectly straight teeth without orthodontic treatment. For mild misalignment, veneers or bonding may be excellent alternatives to braces." }
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
    details: `Family dentistry is the cornerstone of ProCare Dental in Livingston, NJ. We believe that establishing good oral health habits early in life sets the foundation for a lifetime of healthy, beautiful smiles. Our practice is specifically designed to be welcoming and comfortable for patients of all ages, from toddlers experiencing their first dental visit to teenagers needing orthodontic evaluations to adults managing complex dental needs to seniors requiring specialized geriatric dental care.

Dr. Ceravolo and Dr. Ditta use a gentle, patient-centered approach that emphasizes communication, education, and comfort. We take time to explain every procedure in age-appropriate language so patients of all ages understand what is happening and feel at ease. For children, we make dental visits fun and positive, using tell-show-do techniques, positive reinforcement, and age-appropriate explanations to build confidence and eliminate fear. Our goal is to create positive dental experiences that encourage children to maintain good oral health habits throughout their lives.

Our comprehensive family dentistry services include pediatric dental exams and cleanings, fluoride treatments, dental sealants, cavity detection and treatment, orthodontic evaluations and referrals, sports mouth guards, adult cleanings and restorations, periodontal care, cosmetic treatments, and geriatric dental care including denture maintenance and dry mouth management. We also provide oral health education for parents, helping them understand proper brushing and flossing techniques for children, nutritional guidance for healthy teeth, and when to seek dental care.

We understand the unique challenges families face when coordinating dental appointments for multiple family members with busy schedules. That is why we offer convenient scheduling that allows multiple family members to be seen on the same day, early morning and after-school appointments, and efficient visit planning that respects your time. Our Livingston dental office features a warm, friendly atmosphere with comfortable waiting areas and modern treatment rooms equipped with the latest dental technology.

For anxious patients of any age, we offer a variety of comfort options including gentle techniques, thorough explanations, distraction methods, and sedation dentistry for those who need additional relaxation. We never rush patients and always ensure they feel safe and in control during their visit.

We accept most major dental insurance plans and offer flexible payment options including financing plans to make quality dental care accessible to every family in Livingston, Short Hills, West Orange, Millburn, Maplewood, and surrounding New Jersey communities. At ProCare Dental, your family's oral health is our top priority, and we look forward to building a long-term relationship with your family.`,
    gallery: [
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", caption: "Child's first dental visit - building positive experiences" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", caption: "Family dental care for all ages" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", caption: "Gentle care for anxious patients" }
    ],
    reviews: [
      { name: "The Martinez Family", rating: 5, text: "Our whole family sees Dr. Ceravolo - from our 4-year-old to my mother-in-law. She's amazing with kids and so patient with everyone. We love that we can all get appointments on the same day!", treatment: "Family Cleanings" },
      { name: "Karen D.", rating: 5, text: "My son used to be terrified of the dentist. After his first visit to ProCare, he actually looks forward to going! The staff is so gentle and makes everything fun for kids. Can't recommend them enough.", treatment: "Pediatric Dentistry" },
      { name: "Tom & Susan B.", rating: 5, text: "We've been bringing our family to ProCare Dental for 5 years. The convenience of scheduling everyone together and the quality of care is unmatched. They truly care about each family member.", treatment: "Comprehensive Family Care" }
    ],
    faqs: [
      { question: "When should my child first visit the dentist?", answer: "Children should visit the dentist by age 1 or within 6 months of their first tooth appearing. Early visits help establish good habits, detect problems early, and create positive associations with dental care." },
      { question: "How do you handle anxious or fearful patients?", answer: "We use a gentle, patient approach with thorough explanations, tell-show-do techniques for children, distraction methods, and sedation options for very anxious patients. We never rush and always ensure patients feel safe." },
      { question: "Do you provide dental care for seniors?", answer: "Yes, we specialize in geriatric dental care including denture maintenance, dry mouth management, gum disease treatment, and coordination with medical providers regarding medications that affect oral health." },
      { question: "Can the whole family be seen on the same day?", answer: "Absolutely! We offer family block scheduling so multiple family members can have appointments back-to-back, minimizing trips to our office and making it convenient for busy families." },
      { question: "What age should children start brushing on their own?", answer: "Children should begin supervised brushing around age 2-3, but parents should continue to help until age 6-7 when they develop the dexterity to brush effectively on their own. We demonstrate proper techniques at every visit." },
      { question: "Do you accept dental insurance for family visits?", answer: "Yes, we accept most major dental insurance plans. Preventative visits for the whole family are typically covered at 80-100%. We also offer family payment plans and financing options." }
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
    details: `Dental implants at ProCare Dental in Livingston, NJ represent the most advanced and permanent solution available for replacing missing teeth. Unlike dentures or bridges that sit on top of the gums or rely on adjacent teeth for support, dental implants replace the entire tooth structure from root to crown, providing unmatched stability, function, and aesthetics. A dental implant consists of a biocompatible titanium post that is surgically placed into your jawbone, where it fuses with the bone through a natural process called osseointegration, creating a strong and stable foundation that mimics a natural tooth root.

Once the implant has fully integrated with your jawbone (typically 3-6 months), a custom-crafted porcelain crown is attached to the implant via an abutment connector. This crown is designed to match your natural teeth in color, shape, size, and translucency, creating a restoration that is virtually indistinguishable from your surrounding teeth. The result is a permanent replacement tooth that looks, feels, and functions exactly like a natural tooth.

One of the most significant advantages of dental implants is their ability to preserve jawbone structure. When a tooth is lost, the jawbone in that area begins to deteriorate due to lack of stimulation. This bone loss can cause facial sagging, shifting of adjacent teeth, and further tooth loss over time. Dental implants provide the same stimulation to the jawbone as natural tooth roots, preventing bone loss and maintaining your facial structure and appearance.

Dr. Ceravolo uses advanced 3D cone beam CT imaging to precisely plan each implant placement, ensuring optimal positioning for both function and aesthetics. This technology allows us to identify the best location, angle, and depth for each implant while avoiding nerves, sinuses, and other critical structures. For patients who have experienced bone loss, we offer bone grafting procedures to rebuild the jawbone and create a solid foundation for implant placement.

Our implant services include single tooth implants, multiple tooth implants, implant-supported bridges for larger gaps, and full-arch implant solutions (All-on-4) for patients who are missing all teeth in an arch. We also offer same-day implant placement in qualifying cases, allowing you to leave our office with a temporary restoration on the same day as your surgery.

Patients from Livingston, Short Hills, West Orange, Millburn, and throughout Essex County choose ProCare Dental for dental implants because of our advanced technology, surgical expertise, and commitment to achieving natural-looking, long-lasting results. With proper care, dental implants can last a lifetime, making them the most cost-effective long-term solution for missing teeth.`,
    gallery: [
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_bridge_service_af7a4c06.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_bridge_service_af7a4c06.webp", caption: "Single tooth implant replacing missing molar" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_bridge_service_af7a4c06.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_bridge_service_af7a4c06.webp", caption: "Implant-supported bridge for multiple missing teeth" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_bridge_service_af7a4c06.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_bridge_service_af7a4c06.webp", caption: "Full arch restoration with dental implants" }
    ],
    reviews: [
      { name: "Richard P.", rating: 5, text: "I was missing two teeth and felt self-conscious for years. Dr. Ceravolo placed implants that look and feel completely natural. The process was easier than I expected and the results are incredible. I can eat anything again!", treatment: "Dental Implants" },
      { name: "Margaret S.", rating: 5, text: "After wearing a partial denture for 10 years, I finally got implants at ProCare. The difference is night and day - no more slipping, no more adhesive. They feel like my own teeth. Best decision I ever made.", treatment: "Implant-Supported Bridge" },
      { name: "Anthony G.", rating: 5, text: "Dr. Ceravolo used 3D imaging to plan my implant perfectly. The surgery was quick, recovery was smooth, and the final crown matches my other teeth perfectly. Highly recommend for anyone considering implants.", treatment: "Single Tooth Implant" }
    ],
    faqs: [
      { question: "How long do dental implants last?", answer: "With proper care including regular brushing, flossing, and dental checkups, dental implants can last 20+ years or even a lifetime. The porcelain crown may need replacement after 10-15 years due to normal wear." },
      { question: "Am I a good candidate for dental implants?", answer: "Most adults with missing teeth are candidates for implants. We evaluate your bone density, overall health, and oral condition. Bone grafting can be performed if bone loss has occurred. Conditions like uncontrolled diabetes or heavy smoking may affect eligibility." },
      { question: "How long does the dental implant process take?", answer: "The complete process typically takes 3-6 months, including surgical placement, osseointegration (bone healing period of 3-4 months), and final crown placement. Some cases qualify for same-day implant placement." },
      { question: "Is dental implant surgery painful?", answer: "The surgery is performed under local anesthesia (with sedation options available), so you won't feel pain during the procedure. Post-surgical discomfort is typically mild and manageable with over-the-counter pain medication." },
      { question: "How much do dental implants cost in Livingston NJ?", answer: "Implant costs vary based on the number of implants, need for bone grafting, and type of restoration. We offer financing options and payment plans. During your consultation, we'll provide a detailed cost breakdown." },
      { question: "What is the success rate of dental implants?", answer: "Dental implants have a success rate of 95-98% when placed by an experienced dentist. Proper patient selection, surgical technique, and post-operative care all contribute to this high success rate." }
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
    details: `Root canal treatment at ProCare Dental in Livingston, NJ is a safe, highly effective endodontic procedure designed to save your natural tooth when the inner pulp becomes infected or severely damaged due to deep decay, repeated dental procedures, cracks, or traumatic injury. Despite its outdated reputation as a painful procedure, modern root canal therapy performed by Dr. Ceravolo is no more uncomfortable than having a routine filling placed, thanks to advanced anesthesia techniques, precision rotary instruments, and decades of refinement in endodontic methodology.

The tooth's pulp is the soft tissue inside the root canal that contains nerves, blood vessels, and connective tissue. When this pulp becomes infected or inflamed, it can cause severe pain, sensitivity to temperature, swelling, and even abscess formation if left untreated. Without treatment, the infection can spread to surrounding bone and tissues, potentially leading to serious health complications and inevitable tooth loss.

The root canal procedure involves carefully removing the infected or inflamed pulp tissue from inside the tooth using specialized instruments, thoroughly cleaning and disinfecting the entire root canal system to eliminate all bacteria, shaping the canals to receive a biocompatible filling material called gutta-percha, and sealing the tooth to prevent reinfection. The entire procedure is performed under local anesthesia, ensuring you remain comfortable throughout.

At our Livingston dental office, we use advanced digital X-rays and electronic apex locators to ensure complete treatment of all root canals, even in complex multi-rooted teeth with curved or narrow canals. These technologies allow Dr. Ceravolo to precisely measure canal lengths, identify all canal branches, and verify thorough cleaning and filling of the entire root canal system.

After root canal treatment, the tooth is typically restored with a custom porcelain crown to protect the remaining tooth structure and restore full chewing function. The crown is color-matched to your surrounding teeth for a seamless, natural appearance. With proper restoration and care, a root canal treated tooth can last a lifetime.

Root canal therapy has a success rate exceeding 95 percent and allows patients to keep their natural teeth rather than resorting to extraction and replacement with bridges or implants. Preserving your natural tooth maintains proper bite alignment, prevents adjacent teeth from shifting, and avoids the cost and complexity of tooth replacement options.

Early treatment is essential for the best outcomes. If you are experiencing persistent tooth pain, prolonged sensitivity to hot or cold, swelling or tenderness in nearby gums, darkening of a tooth, or a recurring pimple on the gums, contact ProCare Dental immediately for an evaluation at our convenient Livingston, NJ location.`,
    gallery: [
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/composite_fillings_service_11796174.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/composite_fillings_service_11796174.webp", caption: "Root canal treatment saving an infected molar" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/composite_fillings_service_11796174.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/composite_fillings_service_11796174.webp", caption: "Crown restoration after root canal therapy" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/composite_fillings_service_11796174.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/composite_fillings_service_11796174.webp", caption: "Pain-free root canal with modern techniques" }
    ],
    reviews: [
      { name: "Christine M.", rating: 5, text: "I was terrified of getting a root canal but Dr. Ceravolo made it completely painless. I didn't feel a thing! The tooth pain I had been suffering with for weeks was gone immediately after the procedure. So grateful.", treatment: "Root Canal Therapy" },
      { name: "Steven K.", rating: 5, text: "Had a root canal on a back molar and it was honestly easier than getting a filling. Dr. Ceravolo is incredibly skilled and the whole team kept me comfortable. The crown looks perfect too.", treatment: "Root Canal + Crown" },
      { name: "Nancy W.", rating: 5, text: "I put off my root canal for months because I was scared. I wish I hadn't waited! The procedure was quick, painless, and the relief was immediate. ProCare Dental is the best.", treatment: "Emergency Root Canal" }
    ],
    faqs: [
      { question: "Why would I need a root canal treatment?", answer: "Root canals are needed when the pulp (nerve tissue) inside a tooth becomes infected or inflamed due to deep decay, cracks, trauma, or repeated dental procedures. Symptoms include severe pain, temperature sensitivity, swelling, and tooth darkening." },
      { question: "Is root canal treatment painful?", answer: "Modern root canal therapy is no more uncomfortable than getting a filling. We use advanced anesthesia techniques to ensure complete numbness. The procedure actually relieves the severe pain caused by the infection." },
      { question: "How long does a root canal procedure take?", answer: "Most root canals take 60-90 minutes depending on the tooth location and complexity. Front teeth with single canals are quicker, while molars with multiple canals may take longer. Some complex cases require two appointments." },
      { question: "What happens after root canal treatment?", answer: "After treatment, the tooth is typically restored with a porcelain crown to protect it and restore full function. You may experience mild soreness for a few days, manageable with over-the-counter pain medication." },
      { question: "How successful are root canal treatments?", answer: "Root canal therapy has a success rate exceeding 95% and is one of the most predictable dental procedures available. With proper restoration and care, a root canal treated tooth can last a lifetime." },
      { question: "Is it better to extract the tooth or get a root canal?", answer: "Saving your natural tooth with a root canal is almost always preferable. Natural teeth provide better chewing function, maintain bone structure, and avoid the cost and complexity of implants or bridges." }
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
    details: `Invisalign clear aligner therapy at ProCare Dental in Livingston, NJ uses a series of custom-made, virtually invisible plastic aligners to gradually and comfortably straighten your teeth without the brackets, wires, and aesthetic compromises of traditional metal braces. Each set of aligners is precisely engineered using advanced 3D computer modeling and proprietary SmartTrack material to move your teeth incrementally toward their ideal positions with predictable, controlled force.

You wear each set of aligners for approximately one to two weeks before progressing to the next set in your customized treatment sequence. The aligners are nearly invisible when worn, making them ideal for adults and teens who want to straighten their teeth discreetly. They are completely removable for eating, drinking, brushing, and flossing, which means no dietary restrictions and easy maintenance of excellent oral hygiene throughout treatment.

Dr. Ceravolo is an experienced Invisalign provider who uses the iTero Element digital scanner to create precise 3D impressions of your teeth, eliminating the need for messy, uncomfortable traditional impression molds. This advanced scanning technology captures thousands of data points to create an exact digital model of your teeth and bite. Using Invisalign's ClinCheck software, Dr. Ceravolo then maps out the precise movements of your teeth from their current positions to their final ideal alignment, creating a complete virtual treatment plan.

This digital planning technology also allows you to see a realistic 3D preview of your expected results before treatment even begins. You can visualize how your smile will look at each stage of treatment and see the final outcome, helping you feel confident and excited about your decision to pursue Invisalign.

Invisalign effectively treats a wide range of orthodontic issues including crowding, spacing, overbites, underbites, crossbites, open bites, and general misalignment. Treatment typically takes 6 to 18 months depending on the complexity of your case, with most cases completed in approximately 12 months. This is often shorter than traditional braces, which typically require 18-24 months.

Throughout your treatment, you'll visit our Livingston office every 6-8 weeks for progress checks and to receive your next sets of aligners. These visits are quick and convenient, typically lasting only 15-20 minutes. There are no painful wire adjustments or broken bracket emergencies to deal with.

Patients from Livingston, Short Hills, West Orange, Millburn, and throughout Essex County choose ProCare Dental for Invisalign because of our expertise, advanced technology, and personalized approach. Contact us today to schedule your complimentary Invisalign consultation and discover how clear aligners can transform your smile without disrupting your lifestyle.`,
    gallery: [
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp", caption: "Invisalign treatment correcting crowded teeth" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp", caption: "Gap closure with Invisalign clear aligners" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/teeth_whitening_service_392268ec.webp", caption: "Overbite correction without traditional braces" }
    ],
    reviews: [
      { name: "Emily R.", rating: 5, text: "I always wanted straight teeth but didn't want metal braces as an adult. Invisalign at ProCare was the perfect solution. Nobody even noticed I was wearing them! My teeth are perfectly straight now after just 10 months.", treatment: "Invisalign Full" },
      { name: "Daniel F.", rating: 5, text: "Dr. Ceravolo's Invisalign treatment was amazing. The digital preview showed me exactly what my teeth would look like, and the results matched perfectly. So much more convenient than braces - I could eat whatever I wanted!", treatment: "Invisalign" },
      { name: "Rachel T.", rating: 5, text: "As a professional, I needed something discreet. Invisalign was perfect - I wore them through meetings and presentations without anyone knowing. The whole process was smooth and the results are beautiful.", treatment: "Invisalign for Adults" }
    ],
    faqs: [
      { question: "How long does Invisalign treatment typically take?", answer: "Treatment duration depends on the complexity of your case. Most cases are completed in 12-18 months, though mild cases may finish in as few as 6 months. Dr. Ceravolo will provide a specific timeline during your consultation." },
      { question: "How many hours per day do I need to wear my aligners?", answer: "Aligners should be worn 20-22 hours per day for optimal results. Remove them only for eating, drinking anything other than water, brushing, and flossing. Consistent wear is key to staying on track with your treatment timeline." },
      { question: "Is Invisalign treatment painful or uncomfortable?", answer: "Invisalign is generally more comfortable than traditional braces. You may feel mild pressure or tightness when starting a new set of aligners, which indicates the teeth are moving. This typically subsides within 1-2 days." },
      { question: "Can I eat and drink normally with Invisalign?", answer: "Yes! Simply remove your aligners before eating or drinking anything except water. There are no food restrictions like with braces. Just brush your teeth before reinserting your aligners to maintain hygiene." },
      { question: "How much does Invisalign cost at ProCare Dental?", answer: "Invisalign costs are comparable to traditional braces and vary based on case complexity. We offer flexible payment plans and accept dental insurance that covers orthodontic treatment. A consultation includes a detailed cost estimate." },
      { question: "Will my teeth shift back after Invisalign treatment?", answer: "We provide custom retainers to maintain your beautiful results. Wearing your retainer as directed (typically nightly) prevents teeth from shifting back to their original positions. Retainer compliance is essential for long-term success." }
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
    details: `Emergency dentistry at ProCare Dental in Livingston, NJ provides fast, compassionate, and professional dental care when you need it most. Dental emergencies can happen at any time without warning, and they require immediate attention to prevent further damage, relieve severe pain, control bleeding, fight infection, and save your natural teeth whenever possible. Our experienced team understands the urgency and anxiety that accompanies dental emergencies, and we are committed to providing prompt, effective care to get you out of pain and on the path to recovery.

Whether you are experiencing a severe toothache that won't respond to over-the-counter pain medication, have a broken or cracked tooth from biting something hard or from an accident, suffered a knocked-out tooth from a sports injury or fall, have a dental abscess or infection causing facial swelling, are dealing with a lost filling or crown exposing sensitive tooth structure, or have sustained trauma to your mouth or jaw, our experienced team is prepared to help immediately.

We reserve same-day emergency appointment slots specifically for urgent situations, so you never have to wait in pain or search desperately for available care. When you call our office with a dental emergency, our staff will triage your situation, provide immediate guidance for managing your condition until you arrive, and schedule you for the earliest available emergency slot.

Dr. Ceravolo and Dr. Ditta are experienced in handling all types of dental emergencies, from traumatic injuries requiring tooth reimplantation to acute infections requiring immediate drainage and antibiotic therapy. Their combined decades of experience mean they can quickly assess your situation, develop an effective treatment plan, and provide the care you need to resolve your emergency.

Our Livingston dental office is equipped with advanced diagnostic technology including digital X-rays and intraoral cameras that allow us to quickly and accurately identify the source of your problem and assess the extent of damage. This rapid diagnosis enables us to develop the most effective treatment plan and begin providing relief as quickly as possible.

We prioritize pain relief and stabilization first, addressing your immediate discomfort and preventing further damage. Once your emergency is stabilized, we work with you to develop a comprehensive follow-up care plan to fully restore your dental health. This may include restorative procedures, cosmetic repairs, or ongoing treatment depending on the nature and severity of your emergency.

If you or a family member experiences a dental emergency in Livingston, Short Hills, West Orange, Millburn, Maplewood, or anywhere in Essex County, call ProCare Dental immediately at (973) 533-1777. Quick action in a dental emergency can mean the difference between saving and losing a tooth, so don't hesitate to reach out for help.`,
    gallery: [
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", caption: "Emergency repair of a broken front tooth" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", caption: "Same-day crown replacement for lost restoration" },
      { before: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", after: "https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/dental_cleanings_service_98148a61.webp", caption: "Tooth reimplantation after sports injury" }
    ],
    reviews: [
      { name: "Mark J.", rating: 5, text: "I broke my front tooth on a Saturday and ProCare got me in first thing Monday morning. Dr. Ceravolo repaired it so well you can't even tell it was broken. The staff was so compassionate during a really stressful time.", treatment: "Emergency Tooth Repair" },
      { name: "Linda H.", rating: 5, text: "Had a terrible toothache that kept me up all night. Called ProCare first thing in the morning and they saw me within an hour. Turned out I needed a root canal - they started it the same day and the pain was gone immediately.", treatment: "Emergency Root Canal" },
      { name: "Carlos R.", rating: 5, text: "My son knocked out a tooth playing basketball. We called ProCare and they told us exactly what to do and got us in right away. They were able to save the tooth! Forever grateful for their quick response.", treatment: "Tooth Reimplantation" }
    ],
    faqs: [
      { question: "What qualifies as a dental emergency?", answer: "Dental emergencies include severe or persistent tooth pain, broken or cracked teeth, knocked-out teeth, dental abscesses (swelling with fever), uncontrolled bleeding, lost fillings or crowns exposing sensitive tissue, and injuries to the mouth, lips, or jaw." },
      { question: "Can I get a same-day emergency appointment?", answer: "Yes! We reserve emergency appointment slots every day specifically for urgent situations. Call us immediately at (973) 533-1777 and we'll get you in as quickly as possible, often within hours." },
      { question: "What should I do if a tooth is knocked out?", answer: "Act quickly! Pick up the tooth by the crown (never the root), gently rinse off debris without scrubbing, try to reinsert it into the socket, or place it in milk or saliva. Call us immediately - reimplantation is most successful within 30 minutes." },
      { question: "How do you treat severe tooth pain?", answer: "We'll perform a thorough examination including X-rays to identify the cause of your pain, provide immediate pain relief, and recommend appropriate treatment. Common causes include infection, cracked teeth, and exposed nerves." },
      { question: "What if I break a tooth after hours?", answer: "Call our office number for after-hours guidance. Rinse with warm water, apply a cold compress to reduce swelling, and save any tooth fragments. Take over-the-counter pain medication and we'll see you first thing the next morning." },
      { question: "Does dental insurance cover emergency visits?", answer: "Most dental insurance plans cover emergency examinations and X-rays. Coverage for treatment depends on the procedure needed. We'll verify your benefits and discuss costs before proceeding with treatment." }
    ]
  }
};

export default function ServiceDetail() {
  const [match, params] = useRoute("/service/:id");
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  if (!match) {
    return <div>Service not found</div>;
  }

  const serviceId = params?.id;
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
        "url": `https://procardent-vwptw3vc.manus.space/service/${serviceId}`,
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
