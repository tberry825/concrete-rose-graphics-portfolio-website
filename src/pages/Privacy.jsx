import LegalLayout from "@/components/LegalLayout";
import { Link } from "react-router-dom";
import { BRAND, CONTACT } from "@/data/site";

const ENTITY_PLACEHOLDER =
  "[Entity name and jurisdiction to be updated once the LLC is formed]";

const SECTIONS = [
  {
    id: "overview",
    heading: "Overview",
    body: (
      <>
        <p>
          {BRAND.name} ("we", "us", or "our") respects your privacy. This Privacy Policy explains
          what personal information we collect through this website (the "Site"), how we use and
          protect it, and the choices you have. By using the Site or submitting our contact form,
          you agree to the practices described here.
        </p>
        <p className="text-white/45 italic text-sm pt-2">{ENTITY_PLACEHOLDER}</p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    body: (
      <>
        <p>
          We collect the limited information you choose to provide through our project inquiry
          form. This may include:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <span className="text-white/85">Name</span> — to address you and personalize correspondence.
          </li>
          <li>
            <span className="text-white/85">Email address</span> — to respond to your inquiry.
          </li>
          <li>
            <span className="text-white/85">Phone number</span> (optional) — to follow up by call or text if requested.
          </li>
          <li>
            <span className="text-white/85">Company / organization</span> (optional) — for context about your project.
          </li>
          <li>
            <span className="text-white/85">Project details</span> — your message describing the project type, budget range, timeline, and goals.
          </li>
        </ul>
        <p>
          We do <span className="text-white/85 font-semibold">not</span> collect sensitive
          categories of personal data (such as health, financial account, or government ID
          numbers) through this Site, and we do not knowingly collect information from anyone
          under 16.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    heading: "How We Use Your Information",
    body: (
      <>
        <p>We use the information you submit to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Respond to your project inquiry and discuss potential work.</li>
          <li>Provide quotes, proposals, and project-related communications.</li>
          <li>Maintain a record of correspondence related to your inquiry.</li>
          <li>Improve our services, content, and the Site over time.</li>
        </ul>
        <p>
          We process this information based on our legitimate business interest in responding to
          your request and, where applicable, your consent. We do not use your information to
          make automated decisions that produce legal or similarly significant effects.
        </p>
      </>
    ),
  },
  {
    id: "storage-and-access",
    heading: "Storage & Access",
    body: (
      <>
        <p>
          Your inquiry is stored securely in our website's backend, hosted on the Base44
          platform. Access is restricted to authorized administrators of {BRAND.name} only;
          other users and visitors cannot view your information.
        </p>
        <p>
          Information is transmitted over HTTPS (TLS-encrypted) connections. While we use
          reasonable technical and organizational measures to protect your information, no
          method of transmission or storage is completely secure.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    heading: "Sharing & Sale of Data",
    body: (
      <>
        <p>
          We do <span className="text-white/85 font-semibold">not sell</span> your personal
          information, and we do not rent or trade it for marketing purposes. We do not share
          your information with third parties for their own advertising.
        </p>
        <p>
          We may disclose information when required by law, to respond to a legal process, to
          protect our rights, or where necessary to operate the Site (for example, our hosting
          provider may process data on our behalf solely to deliver the service).
        </p>
      </>
    ),
  },
  {
    id: "retention",
    heading: "Data Retention",
    body: (
      <>
        <p>
          We retain inquiry records for as long as needed to respond to your request and to
          maintain a record of our business correspondence. Inquiries marked archived are kept
          for record-keeping and may be deleted at our discretion or upon your request.
        </p>
        <p>
          You may ask us to delete your inquiry at any time by emailing{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-crg-magenta hover:text-white transition-colors break-all"
          >
            {CONTACT.email}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    body: (
      <>
        <p>Depending on where you live, you may have the right to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your information.</li>
          <li>Object to or restrict certain processing.</li>
          <li>Withdraw consent at any time (without affecting processing already carried out).</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-crg-magenta hover:text-white transition-colors break-all"
          >
            {CONTACT.email}
          </a>
          . We will respond within a reasonable timeframe, generally within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies & Similar Technologies",
    body: (
      <>
        <p>
          The Site uses minimal cookies and external resources (such as web fonts) to operate
          and display correctly. We do not use advertising cookies. For full details, please
          review our{" "}
          <Link to="/cookie-policy" className="text-crg-magenta hover:text-white transition-colors">
            Cookie Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    heading: "Third-Party Links",
    body: (
      <p>
        The Site may contain links to third-party websites (such as social media profiles). We
        are not responsible for the privacy practices of those sites and encourage you to review
        their privacy policies.
      </p>
    ),
  },
  {
    id: "security",
    heading: "Security",
    body: (
      <p>
        We implement reasonable safeguards to protect your information, including encrypted
        transmission and restricted access controls. However, no system is perfectly secure, and
        we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "children",
    heading: "Children's Privacy",
    body: (
      <p>
        The Site is not intended for children, and we do not knowingly collect information from
        anyone under 16. If you believe a child has provided us information, please contact us
        so we can delete it.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will revise the
        "Last updated" date above. Material changes will be noted on the Site. Continued use of
        the Site after changes constitutes acceptance of the updated policy.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact Us",
    body: (
      <>
        <p>
          If you have questions about this Privacy Policy or your personal information, please
          contact us:
        </p>
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

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="How Concrete Rose Graphics collects, uses, and protects the personal information you submit through our contact form."
      intro="This Privacy Policy describes how Concrete Rose Graphics handles the personal information you share with us through this website."
      lastUpdated="September 29, 2026"
      sections={SECTIONS}
    />
  );
}