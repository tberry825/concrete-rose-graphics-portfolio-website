import { Link } from "react-router-dom";
import { LOGO_URL, BRAND, NAV_LINKS, CONTACT } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-crg-charcoal border-t border-white/5 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-20"
        style={{ background: "radial-gradient(circle, #8A2BE2, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={LOGO_URL} alt="Concrete Rose Graphics" className="h-12 w-auto mb-5" />
            <p className="text-xs text-white/55 max-w-xs leading-relaxed">{BRAND.statement}</p>
          </div>

          <div>
            <div className="h-12 flex items-end mb-5">
              <h3 className="text-[0.7rem] uppercase tracking-[0.3em] text-crg-magenta">Explore</h3>
            </div>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-xs text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="h-12 flex items-end mb-5">
              <h3 className="text-[0.7rem] uppercase tracking-[0.3em] text-crg-magenta">Legal</h3>
            </div>
            <ul className="space-y-2.5">
              <li><Link to="/privacy" className="text-xs text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-xs text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-xs text-white/70 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <div className="h-12 flex items-end mb-5">
              <h3 className="text-[0.7rem] uppercase tracking-[0.3em] text-crg-magenta">Connect</h3>
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="text-xs text-white/70 hover:text-white transition-colors whitespace-nowrap">
                  {CONTACT.email}
                </a>
              </li>
              {CONTACT.social.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs text-white/70 hover:text-white transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col items-start gap-4 text-xs text-white/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
            <p>© {year} Concrete Rose Graphics, LLC. All rights reserved.</p>
            <p>Design that breaks through the concrete.</p>
          </div>
          <p className="text-left text-[0.7rem] text-white/30 leading-relaxed max-w-3xl">
            Concrete Rose Graphics, LLC is a Texas limited liability company. All content on this site is the property of Concrete Rose Graphics, LLC and may not be reproduced without written permission.
          </p>
        </div>
      </div>
    </footer>
  );
}