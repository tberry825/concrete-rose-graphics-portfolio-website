import LegalLayout from "@/components/LegalLayout";
import { Link } from "react-router-dom";
import { BRAND, CONTACT } from "@/data/site";

const ENTITY_PLACEHOLDER =
  "[Entity name and jurisdiction to be updated once the LLC is formed]";

const SECTIONS = [
  {
    id: "agreement",
    heading: "Agreement to Terms",
    body: (
      <>
        <p>
          These Terms of Service ("Terms") govern your access to and use of the Concrete Rose
          Graphics website (the "Site"). By accessing or using the Site, you agree to be bound by
          these Terms. If you do not agree, please do not use the Site.
        </p>
        <p className="text-white/45 italic text-sm pt-2">{ENTITY_PLACEHOLDER}</p>
      </>
    ),
  },
  {
    id: "who-we-are",
    heading: "Who We Are",
    body: (
      <p>
        The Site is operated by {BRAND.name}, a creative studio offering graphic design,
        branding, web design, and front-end development services. You can contact us at{" "}
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-crg-magenta hover:text-white transition-colors break-all"
        >
          {CONTACT.email}
        </a>
        .
      </p>
    ),
  },
  {
    id: "use-of-site",
    heading: "Use of the Site",
    body: (
      <>
        <p>
          You may use the Site for lawful purposes and to inquire about our services. You agree
          not to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Use the Site in any way that violates applicable laws or regulations.</li>
          <li>Submit false, misleading, or fraudulent information through our contact form.</li>
          <li>Attempt to gain unauthorized access to the Site, its systems, or data.</li>
          <li>Interfere with the proper functioning of the Site or impose an unreasonable load.</li>
          <li>Reproduce, copy, or scrape content from the Site without permission.</li>
        </ul>
        <p>
          Information you submit through the contact form is governed by our{" "}
          <Link to="/privacy" className="text-crg-magenta hover:text-white transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    body: (
      <>
        <p>
          All content on this Site — including text, graphics, logos, images, design, layout,
          and code — is the property of {BRAND.name} or its licensors and is protected by
          intellectual property laws. You may view and use the Site for personal, non-commercial
          purposes.
        </p>
        <p>
          The portfolio images and case studies shown represent work created for our clients and
          are displayed for portfolio purposes. They may not be copied, reproduced, or used
          without express written permission.
        </p>
        <p>
          "Concrete Rose Graphics" and associated marks are our brand identifiers. Nothing on
          the Site grants you any right to use them without prior written consent.
        </p>
      </>
    ),
  },
  {
    id: "services-and-engagements",
    heading: "Services & Engagements",
    body: (
      <>
        <p>
          The Site provides information about our services and a way to contact us. Submitting
          an inquiry does not create a contract or guarantee a working relationship. Any
          engagement for services will be governed by a separate written agreement (such as a
          proposal, statement of work, or contract) that supersedes these Terms for that
          engagement.
        </p>
        <p>
          Service descriptions on the Site are general and may change. Any timelines, pricing,
          or deliverables are confirmed only in a separate written agreement.
        </p>
      </>
    ),
  },
  {
    id: "user-content",
    heading: "Information You Submit",
    body: (
      <p>
        You are responsible for the accuracy and legality of the information you provide through
        the contact form. You grant {BRAND.name} permission to use that information to respond to
        your inquiry and for the purposes described in our Privacy Policy.
      </p>
    ),
  },
  {
    id: "third-party-links",
    heading: "Third-Party Links & Resources",
    body: (
      <p>
        The Site may link to third-party websites and load external resources (such as web
        fonts). We do not control and are not responsible for the content, practices, or
        availability of those third parties. Your use of third-party sites is at your own risk.
      </p>
    ),
  },
  {
    id: "disclaimer-of-warranty",
    heading: "Disclaimer of Warranties",
    body: (
      <>
        <p>
          The Site and its content are provided "as is" and "as available" without warranties of
          any kind, whether express or implied. We do not warrant that the Site will be
          uninterrupted, error-free, secure, or that any information on it is accurate, complete,
          or current.
        </p>
        <p>
          To the fullest extent permitted by law, we disclaim all implied warranties, including
          implied warranties of merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, {BRAND.name} and its owner(s) shall not be
        liable for any indirect, incidental, special, consequential, or punitive damages, or
        any loss of profits or data, arising out of or related to your use of (or inability to
        use) the Site, even if advised of the possibility of such damages.
      </p>
    ),
  },
  {
    id: "indemnification",
    heading: "Indemnification",
    body: (
      <p>
        You agree to indemnify and hold harmless {BRAND.name} and its owner(s) from any claims,
        damages, or expenses (including reasonable legal fees) arising from your misuse of the
        Site or your violation of these Terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    body: (
      <p>
        These Terms are governed by the laws of the State of Texas, without regard to conflict
        of law principles, subject to update once a formal business entity and jurisdiction are
        established. Any disputes will be resolved in the courts located in or around Houston,
        Texas.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to These Terms",
    body: (
      <p>
        We may revise these Terms at any time by updating this page. Your continued use of the
        Site after changes constitutes acceptance of the revised Terms. We encourage you to
        review this page periodically.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact Us",
    body: (
      <>
        <p>Questions about these Terms? Contact us:</p>
        <div className="glass rounded-xl px-5 py-4 not-prose">
          <p className="text-white/85 font-medium">{BRAND.name}</p>
          <p className="text-white/70">
            Email:{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-crg-magenta hover:text-white transition-colors break-all"
            >
              {CONTACT.email}
            </a>
          </p>
          <p className="text-white/70">Phone: {CONTACT.phone}</p>
          <p className="text-white/70">{CONTACT.address}</p>
        </div>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="The terms that govern your use of the Concrete Rose Graphics website."
      intro="These Terms set the rules for using this website and describe what both you and Concrete Rose Graphics can expect."
      lastUpdated="September 29, 2026"
      sections={SECTIONS}
    />
  );
}