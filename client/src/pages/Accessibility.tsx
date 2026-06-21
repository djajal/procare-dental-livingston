import { useEffect } from "react";

/**
 * ADA Accessibility Statement Page
 * Required for ADA compliance - communicates commitment to accessibility
 * and provides contact information for accessibility issues
 */
export default function Accessibility() {
  useEffect(() => {
    document.title = "Accessibility Statement | ProCare Dental Livingston";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "ProCare Dental's accessibility statement. We are committed to ensuring our website is accessible to all users, including those with disabilities.");
    }
  }, []);

  return (
    <main className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          Accessibility Statement
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
          <section aria-labelledby="commitment">
            <h2 id="commitment" className="text-2xl font-bold text-primary mb-4">
              Our Commitment to Accessibility
            </h2>
            <p>
              ProCare Dental is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant 
              accessibility standards to ensure we provide equal access to all users.
            </p>
          </section>

          <section aria-labelledby="standards">
            <h2 id="standards" className="text-2xl font-bold text-primary mb-4">
              Conformance Status
            </h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and 
              developers to improve accessibility for people with disabilities. It defines three levels 
              of conformance: Level A, Level AA, and Level AAA. ProCare Dental's website strives to 
              conform to WCAG 2.1 Level AA standards.
            </p>
          </section>

          <section aria-labelledby="measures">
            <h2 id="measures" className="text-2xl font-bold text-primary mb-4">
              Measures We Take
            </h2>
            <p>ProCare Dental takes the following measures to ensure accessibility of our website:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Include accessibility as part of our mission statement</li>
              <li>Provide continual accessibility training for our staff</li>
              <li>Assign clear accessibility goals and responsibilities</li>
              <li>Employ formal accessibility quality assurance methods</li>
              <li>Use semantic HTML and ARIA landmarks throughout the site</li>
              <li>Ensure all interactive elements are keyboard accessible</li>
              <li>Provide text alternatives for all non-text content</li>
              <li>Maintain sufficient color contrast ratios (minimum 4.5:1)</li>
              <li>Ensure forms have properly associated labels</li>
              <li>Provide skip navigation links for keyboard users</li>
            </ul>
          </section>

          <section aria-labelledby="technologies">
            <h2 id="technologies" className="text-2xl font-bold text-primary mb-4">
              Compatibility with Browsers and Assistive Technology
            </h2>
            <p>
              ProCare Dental's website is designed to be compatible with the following assistive 
              technologies:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>
            <p className="mt-4">
              The website is designed to be compatible with recent versions of the following browsers:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Apple Safari</li>
              <li>Microsoft Edge</li>
            </ul>
          </section>

          <section aria-labelledby="limitations">
            <h2 id="limitations" className="text-2xl font-bold text-primary mb-4">
              Known Limitations
            </h2>
            <p>
              Despite our best efforts to ensure accessibility of ProCare Dental's website, there may 
              be some limitations. Below is a description of known limitations:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Third-party content:</strong> Some content provided by third parties (such as 
                embedded maps or review widgets) may not be fully accessible. We monitor these 
                integrations and work with providers to improve accessibility.
              </li>
              <li>
                <strong>PDF documents:</strong> Some older PDF documents may not be fully accessible. 
                Please contact us if you need information from a PDF in an alternative format.
              </li>
            </ul>
          </section>

          <section aria-labelledby="feedback">
            <h2 id="feedback" className="text-2xl font-bold text-primary mb-4">
              Feedback & Contact Information
            </h2>
            <p>
              We welcome your feedback on the accessibility of ProCare Dental's website. Please let us 
              know if you encounter accessibility barriers:
            </p>
            <div className="bg-secondary/50 rounded-xl p-6 mt-4 space-y-3">
              <p><strong>Phone:</strong> <a href="tel:9735331777" className="text-primary hover:underline">(973) 533-1777</a></p>
              <p><strong>Address:</strong> 22 Old Short Hills Rd, Suite 207, Livingston, NJ 07039</p>
              <p><strong>Response time:</strong> We try to respond to accessibility feedback within 2 business days.</p>
            </div>
          </section>

          <section aria-labelledby="enforcement">
            <h2 id="enforcement" className="text-2xl font-bold text-primary mb-4">
              Enforcement Procedure
            </h2>
            <p>
              If you are not satisfied with our response to your accessibility concern, you may file a 
              complaint with the U.S. Department of Justice, Civil Rights Division, or contact your 
              local ADA Center for assistance.
            </p>
            <p className="mt-4">
              <strong>ADA Information Line:</strong>{" "}
              <a href="tel:18005140301" className="text-primary hover:underline">1-800-514-0301</a> (Voice) |{" "}
              <a href="tel:18005140383" className="text-primary hover:underline">1-800-514-0383</a> (TTY)
            </p>
          </section>

          <section aria-labelledby="assessment">
            <h2 id="assessment" className="text-2xl font-bold text-primary mb-4">
              Assessment & Updates
            </h2>
            <p>
              This statement was last updated on <time dateTime="2026-06-21">June 21, 2026</time>. 
              We regularly review and update our accessibility practices to ensure ongoing compliance 
              with WCAG 2.1 Level AA standards.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
