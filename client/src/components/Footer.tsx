import { Link } from "wouter";

/**
 * Persistent Footer Component
 * Used across all pages for consistent branding and links
 */

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ProCare Dental</h3>
            <p className="text-white/80 text-sm">
              Professional dental care with a personal touch in Livingston, NJ.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/#services" className="hover:text-white transition">Preventative Care</a></li>
              <li><a href="/#services" className="hover:text-white transition">Cosmetic Dentistry</a></li>
              <li><a href="/#services" className="hover:text-white transition">Family Dentistry</a></li>
              <li><a href="/#services" className="hover:text-white transition">Dental Implants</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition">Reviews</Link></li>
              <li><Link href="/insurance" className="hover:text-white transition">Insurance</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Nearby Towns</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/dentist-west-orange" className="hover:text-white transition">West Orange</Link></li>
              <li><Link href="/dentist-verona" className="hover:text-white transition">Verona</Link></li>
              <li><Link href="/dentist-montclair" className="hover:text-white transition">Montclair</Link></li>
              <li><Link href="/dentist-bloomfield" className="hover:text-white transition">Bloomfield</Link></li>
              <li><Link href="/dentist-essex-fells" className="hover:text-white transition">Essex Fells</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-white/80 mb-2"><a href="tel:(973) 533-1777" className="hover:text-white transition">(973) 533-1777</a></p>
            <p className="text-sm text-white/80">Livingston, NJ 07039</p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex justify-center mb-6">
            <div>
              <a style={{display: 'block'}} href='https://www.zocdoc.com/practice/procare-dental-livingston-168071?lock=true&isNewPatient=false&referrerType=widget' className='zd-plugin' data-type='book-button' data-practice-id='168071' title='ProCare Dental Livingston'>
                <img src='https://offsiteSchedule.zocdoc.com/images/remote/zd_bookonline_162x48.png?type=bobjs&monolith_provider_id=168071&practice_id=pt_v_yyrdwF5k2edNrvM8lGNw' alt='ProCare Dental Livingston' title='ProCare Dental Livingston' style={{border: '0'}}/>
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-white/70">&copy; 2026 ProCare Dental. All rights reserved. | Dentist in Livingston, NJ</p>
        </div>
      </div>
    </footer>
  );
}
