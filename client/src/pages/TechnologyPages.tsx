import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

// Intraoral Camera Page
export function IntraoralCameraPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white py-3 px-4 text-right">
        <a href="tel:(973)533-1777" className="hover:underline">(973) 533-1777</a> | 
        <span className="ml-2">22 Old Short Hills Rd Ste 207, Livingston, NJ 07039</span>
      </header>

      <nav className="bg-secondary px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_new-itoU26Uu5fW47iKpWCMPA7.webp" alt="ProCare Dental" className="h-14" />
        </Link>
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/our-technology">Back to Technology</Link>
        </div>
      </nav>

      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Intraoral Camera Technology</h1>
            <p className="text-lg">Advanced visualization for precise diagnosis and treatment planning</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto py-12 px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">What is an Intraoral Camera?</h2>
              <p className="text-gray-700 mb-4">
                An intraoral camera is a small, pen-sized camera that allows us to see inside your mouth in high definition. This advanced technology captures detailed images of your teeth, gums, and oral tissues, enabling us to identify problems that might not be visible to the naked eye.
              </p>
              <p className="text-gray-700">
                The camera connects to a computer monitor, allowing both you and your dentist to see the images in real-time. This transparency helps you understand your oral health status and treatment needs.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center min-h-80">
              <div className="text-center">
                <p className="text-gray-500">Intraoral Camera Image</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Key Benefits</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Early Detection:</strong> Identify cavities, cracks, and gum disease early</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Patient Education:</strong> See exactly what your dentist sees</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Accurate Records:</strong> Digital documentation for your file</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Better Communication:</strong> Understand treatment recommendations</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Precision Treatment:</strong> Targeted care for specific areas</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Confidence:</strong> Know your oral health status clearly</span>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">How It Works</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg mb-2">1. Gentle Scanning</h3>
                <p className="text-gray-700">We gently place the small camera in your mouth to capture images of different areas</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg mb-2">2. Real-Time Display</h3>
                <p className="text-gray-700">Images appear instantly on the monitor for immediate review</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg mb-2">3. Detailed Analysis</h3>
                <p className="text-gray-700">We analyze the images to identify any concerns or treatment needs</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg mb-2">4. Treatment Planning</h3>
                <p className="text-gray-700">Use the images to develop your personalized treatment plan</p>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Experience Advanced Dental Care</h3>
            <p className="mb-6">Our intraoral camera technology helps us provide you with the most accurate diagnosis and effective treatment.</p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100">Book an Appointment</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">Call Now</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2026 ProCare Dental. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Rotary Endodontics Page
export function RotaryEndodonticsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white py-3 px-4 text-right">
        <a href="tel:(973)533-1777" className="hover:underline">(973) 533-1777</a> | 
        <span className="ml-2">22 Old Short Hills Rd Ste 207, Livingston, NJ 07039</span>
      </header>

      <nav className="bg-secondary px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_new-itoU26Uu5fW47iKpWCMPA7.webp" alt="ProCare Dental" className="h-14" />
        </Link>
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/our-technology">Back to Technology</Link>
        </div>
      </nav>

      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Rotary Endodontics Technology</h1>
            <p className="text-lg">Modern root canal treatment with precision and efficiency</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto py-12 px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Advanced Root Canal Treatment</h2>
              <p className="text-gray-700 mb-4">
                Rotary endodontics uses motorized instruments that rotate at specific speeds to clean and shape the root canal system. This technology provides superior results compared to traditional hand instruments.
              </p>
              <p className="text-gray-700">
                The rotary system is more efficient, reduces treatment time, and provides a more thorough cleaning of the canal system, leading to better treatment outcomes and faster healing.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center min-h-80">
              <div className="text-center">
                <p className="text-gray-500">Rotary Endodontics Equipment</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Advantages of Rotary Endodontics</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Faster Treatment:</strong> Reduced appointment time</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Better Cleaning:</strong> More thorough canal preparation</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Less Fatigue:</strong> Reduced hand strain for the dentist</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Improved Success:</strong> Better long-term outcomes</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Patient Comfort:</strong> Gentler on teeth and tissues</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Precision:</strong> Consistent, controlled motion</span>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">The Rotary Process</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg mb-2">1. Canal Access</h3>
                <p className="text-gray-700">We create access to the infected root canal</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg mb-2">2. Rotary Cleaning</h3>
                <p className="text-gray-700">Motorized instruments rotate to remove infected tissue</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg mb-2">3. Precise Shaping</h3>
                <p className="text-gray-700">The canal is shaped for optimal filling</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg mb-2">4. Gutta-Percha Filling</h3>
                <p className="text-gray-700">The canal is sealed with biocompatible material</p>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Save Your Natural Tooth</h3>
            <p className="mb-6">Our rotary endodontics technology makes root canal treatment more efficient and comfortable than ever before.</p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100">Book an Appointment</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">Call Now</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2026 ProCare Dental. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Dexis Digital X-Ray Page
export function DexisDigitalXrayPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white py-3 px-4 text-right">
        <a href="tel:(973)533-1777" className="hover:underline">(973) 533-1777</a> | 
        <span className="ml-2">22 Old Short Hills Rd Ste 207, Livingston, NJ 07039</span>
      </header>

      <nav className="bg-secondary px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_new-itoU26Uu5fW47iKpWCMPA7.webp" alt="ProCare Dental" className="h-14" />
        </Link>
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/our-technology">Back to Technology</Link>
        </div>
      </nav>

      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Dexis Digital X-Ray Sensors</h1>
            <p className="text-lg">Advanced imaging with minimal radiation exposure</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto py-12 px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Digital Radiography Excellence</h2>
              <p className="text-gray-700 mb-4">
                Dexis digital X-ray sensors provide crystal-clear images with up to 90% less radiation exposure compared to traditional film X-rays. These high-resolution sensors capture every detail needed for accurate diagnosis.
              </p>
              <p className="text-gray-700">
                Digital images appear instantly on our computer screens, allowing for immediate review and discussion with you. The images can be easily stored, retrieved, and compared over time.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center min-h-80">
              <div className="text-center">
                <p className="text-gray-500">Digital X-Ray Technology</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Benefits of Dexis Digital X-Rays</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>90% Less Radiation:</strong> Safer for you and your family</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Instant Images:</strong> Immediate results for quick diagnosis</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Superior Quality:</strong> Crystal-clear, high-resolution images</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Digital Records:</strong> Easy storage and retrieval</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Comparison Tools:</strong> Track changes over time</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Environmental:</strong> No chemical processing required</span>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Digital X-Ray Types</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Intraoral X-Rays</h3>
                <p className="text-gray-700">Detailed images of individual teeth and surrounding bone structure for cavity detection and treatment planning.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Panoramic X-Rays</h3>
                <p className="text-gray-700">Full-mouth overview showing all teeth, jaw structure, and bone density for comprehensive assessment.</p>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Safe, Advanced Imaging</h3>
            <p className="mb-6">Experience the benefits of modern digital X-ray technology with minimal radiation exposure.</p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100">Book an Appointment</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">Call Now</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2026 ProCare Dental. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Nomad 2 Pro Handheld X-Rays Page
export function NomadProXrayPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white py-3 px-4 text-right">
        <a href="tel:(973)533-1777" className="hover:underline">(973) 533-1777</a> | 
        <span className="ml-2">22 Old Short Hills Rd Ste 207, Livingston, NJ 07039</span>
      </header>

      <nav className="bg-secondary px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_new-itoU26Uu5fW47iKpWCMPA7.webp" alt="ProCare Dental" className="h-14" />
        </Link>
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/our-technology">Back to Technology</Link>
        </div>
      </nav>

      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Nomad 2 Pro Handheld X-Rays</h1>
            <p className="text-lg">Portable, convenient digital radiography for comprehensive care</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto py-12 px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Portable Digital Imaging</h2>
              <p className="text-gray-700 mb-4">
                The Nomad 2 Pro is a handheld, wireless digital X-ray system that provides the same high-quality images as traditional wall-mounted units, with the added convenience of portability. This allows us to take X-rays anywhere in our office.
              </p>
              <p className="text-gray-700">
                The wireless technology eliminates cables and provides maximum flexibility for patient positioning, making it easier to capture the exact images needed for diagnosis and treatment planning.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center min-h-80">
              <div className="text-center">
                <p className="text-gray-500">Nomad 2 Pro X-Ray System</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Nomad 2 Pro Advantages</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Portable Design:</strong> Take X-rays anywhere in the office</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Wireless Technology:</strong> No cables or connections needed</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>High Resolution:</strong> Crystal-clear digital images</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Low Radiation:</strong> Minimal exposure for patient safety</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Flexible Positioning:</strong> Easy patient positioning</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Instant Results:</strong> Images available immediately</span>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Routine Exams</h3>
                <p className="text-gray-700">Comprehensive X-ray documentation for regular dental checkups and cavity detection.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Treatment Planning</h3>
                <p className="text-gray-700">Detailed imaging for complex treatment cases and surgical planning.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Emergency Care</h3>
                <p className="text-gray-700">Quick imaging for emergency dental situations and trauma assessment.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Follow-up Imaging</h3>
                <p className="text-gray-700">Convenient imaging for post-treatment evaluation and monitoring.</p>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Advanced Portable Imaging</h3>
            <p className="mb-6">Experience the convenience and quality of our Nomad 2 Pro handheld X-ray system.</p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100">Book an Appointment</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">Call Now</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2026 ProCare Dental. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Advanced AI Dental Diagnostics Page
export function AIDigitalDiagnosticsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white py-3 px-4 text-right">
        <a href="tel:(973)533-1777" className="hover:underline">(973) 533-1777</a> | 
        <span className="ml-2">22 Old Short Hills Rd Ste 207, Livingston, NJ 07039</span>
      </header>

      <nav className="bg-secondary px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663355308413/VwPTW3VCJkeR46zZ3DPjBz/procare_dental_logo_new-itoU26Uu5fW47iKpWCMPA7.webp" alt="ProCare Dental" className="h-14" />
        </Link>
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/our-technology">Back to Technology</Link>
        </div>
      </nav>

      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Advanced AI Dental Diagnostics</h1>
            <p className="text-lg">Artificial intelligence-powered analysis for superior diagnostic accuracy</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto py-12 px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">AI-Powered Precision</h2>
              <p className="text-gray-700 mb-4">
                Our advanced AI diagnostic system analyzes X-rays and intraoral images with machine learning algorithms trained on millions of dental cases. This technology helps identify potential problems that might be missed by the human eye alone.
              </p>
              <p className="text-gray-700">
                The AI system works alongside our experienced dentists to provide a second opinion and highlight areas of concern, ensuring comprehensive and accurate diagnosis for the best possible treatment outcomes.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center min-h-80">
              <div className="text-center">
                <p className="text-gray-500">AI Diagnostic Analysis</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">AI Diagnostics Benefits</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Early Detection:</strong> Identify problems at earliest stages</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Accuracy:</strong> Reduce diagnostic errors and missed findings</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Consistency:</strong> Standardized analysis across all cases</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Efficiency:</strong> Faster analysis and treatment planning</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Confidence:</strong> Dentist and patient confidence in diagnosis</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight className="text-primary flex-shrink-0" />
                <span><strong>Prevention:</strong> Better prevention strategies based on AI insights</span>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">What AI Can Detect</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Cavities & Decay</h3>
                <p className="text-gray-700">Identify early-stage cavities and areas of tooth decay that may not be visible to the naked eye.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Bone Loss</h3>
                <p className="text-gray-700">Detect bone loss and periodontal disease progression for early intervention.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Impacted Teeth</h3>
                <p className="text-gray-700">Identify impacted or misaligned teeth requiring orthodontic or surgical intervention.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Abnormalities</h3>
                <p className="text-gray-700">Flag unusual findings or potential pathology for further evaluation.</p>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Intelligent Dental Care</h3>
            <p className="mb-6">Benefit from cutting-edge AI technology combined with expert clinical judgment for superior dental care.</p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100">Book an Appointment</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">Call Now</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2026 ProCare Dental. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
