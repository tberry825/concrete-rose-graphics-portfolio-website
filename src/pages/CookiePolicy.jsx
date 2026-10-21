import LegalLayout from "@/components/LegalLayout";
import { Link } from "react-router-dom";
import { BRAND } from "@/data/site";

const ENTITY_PLACEHOLDER =
  "[Entity name and jurisdiction to be updated once the LLC is formed]";

function CookieTable() {
  const rows = [
    {
      name: "Essential / functional",
      purpose: "Remembers your cookie consent choice so the banner does not reappear.",
      stored: "Local storage on your device",
      category: "Essential",
    },
    {
      name: "Web fonts (Google Fonts, Fontshare)",
      purpose: "Loads the typefaces used to display this Site correctly.",
      stored: "On Google's / Fontshare's servers; requests your browser",
      category: "External resource",
    },
    {
      name: "Platform analytics (built-in)",
      purpose: "Aggregated, anonymous usage metrics about the Site, operated by the hosting platform. Does not identify you personally.",
      stored: "Managed by the hosting platform",
      category: "Analytics (non-identifying)",
    },
  ];
  return (
    <div className="not-prose overflow-x-auto -mx-2 md:mx-0">
      <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-white/[0.04] text-left">
            <th className="px-4 py-3 font-semibold text-white/85 uppercase tracking-wider text-[0.65rem]">Type</th>
            <th className="px-4 py-3 font-semibold text-white/85 uppercase tracking-wider text-[0.65rem]">Purpose</th>
            <th className="px-4 py-3 font-semibold text-white/85 uppercase tracking-wider text-[0.65rem]">Where stored</th>
            <th className="px-4 py-3 font-semibold text-white/85 uppercase tracking-wider text-[0.65rem]">Category</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-white/10 align-top">
              <td className="px-4 py-3 text-white/85">{r.name}</td>
              <td className="px-4 py-3 text-white/70">{r.purpose}</td>
              <td className="px-4 py-3 text-white/70">{r.stored}</td>
              <td className="px-4 py-3 text-white/70">{r.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const SECTIONS = [
  {
    id: "overview",
    heading: "Overview",
    body: (
      <>
        <p>
          This Cookie Policy explains how {BRAND.name} uses cookies and similar technologies on
          this website (the "Site"). It complements our{" "}
          <Link to="/privacy" className="text-crg-magenta hover:text-white transition-colors">
            Privacy Policy
          </Link>
          , which explains how we handle the personal information you submit.
        </p>
        <p className="text-white/45 italic text-sm pt-2">{ENTITY_PLACEHOLDER}</p>
      </>
    ),
  },
  {
    id: "what-are-cookies",
    heading: "What Cookies Are",
    body: (
      <p>
        Cookies are small text files stored on your device when you visit a website. They are
        widely used to make sites work efficiently and to provide information to site owners.
        "Similar technologies" includes local storage, web fonts, and other browser-based
        storage this Site relies on.
      </p>
    ),
  },
  {
    id: "what-we-use",
    heading: "What We Use",
    body: (
      <>
        <p>
          This Site is intentionally light on tracking. We use cookies and similar technologies
          only to operate the Site and display it correctly. We do <span className="text-white/85 font-semibold">not</span> use
          advertising cookies, and we do not sell information derived from cookies.
        </p>
        <CookieTable />
      </>
    ),
  },
  {
    id: "essential",
    heading: "Essential Technologies",
    body: (
      <p>
        Some technologies are necessary for the Site to function and cannot be turned off in our
        systems. They are usually set in response to your actions, such as remembering that you
        have acknowledged the cookie consent banner.
      </p>
    ),
  },
  {
    id: "external-resources",
    heading: "External Resources",
    body: (
      <p>
        To display the Site's typography, your browser loads fonts from Google Fonts and
        Fontshare. These requests are handled by those third-party services and may be subject
        to their own policies. We do not control what those providers collect independently of
        the font requests.
      </p>
    ),
  },
  {
    id: "analytics",
    heading: "Analytics",
    body: (
      <p>
        The hosting platform may collect aggregated, anonymous usage statistics to help us
        understand how the Site is used. This data is not linked to your name or contact
        information. Where applicable, you can request that we disable platform-level analytics
        for your activity by contacting us.
      </p>
    ),
  },
  {
    id: "consent",
    heading: "Your Consent",
    body: (
      <p>
        When you first visit the Site, a cookie consent banner appears at the bottom of the
        screen. Clicking "Acknowledge" records your consent in your browser's local storage and
        hides the banner on future visits. You can clear this and review the banner again by
        clearing your browser's local storage for this Site.
      </p>
    ),
  },
  {
    id: "managing-cookies",
    heading: "Managing Cookies in Your Browser",
    body: (
      <>
        <p>
          Most web browsers let you control cookies through their settings. You can usually:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>View and delete cookies already stored on your device.</li>
          <li>Block cookies or set them to expire when you close your browser.</li>
          <li>Block third-party and external resource requests.</li>
        </ul>
        <p>
          Note that blocking essential cookies may affect how the Site functions, including the
          consent banner itself. Useful guides:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-crg-magenta hover:text-white transition-colors">
              Chrome cookie settings
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-crg-magenta hover:text-white transition-colors">
              Firefox cookie settings
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-crg-magenta hover:text-white transition-colors">
              Safari cookie settings
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to This Policy",
    body: (
      <p>
        We may update this Cookie Policy as the Site evolves. Changes take effect when posted,
        and we will update the "Last updated" date above.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Contact Us",
    body: (
      <p>
        Questions about cookies on this Site? Contact us at{" "}
        <a
          href="mailto:tberry@concreterosegraphics.com"
          className="text-crg-magenta hover:text-white transition-colors break-all"
        >
          tberry@concreterosegraphics.com
        </a>
        .
      </p>
    ),
  },
];

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      description="How Concrete Rose Graphics uses cookies and similar technologies on this website."
      intro="This Site is intentionally light on tracking. This policy explains the cookies and external resources it does use and how you can control them."
      lastUpdated="September 29, 2026"
      sections={SECTIONS}
    />
  );
}