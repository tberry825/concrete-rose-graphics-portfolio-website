import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Link2 } from "lucide-react";
import { CONTACT } from "@/data/site";

const SOCIAL_ICON = { Instagram, Facebook, LinkedIn: Linkedin, Behance: Link2 };

export default function TopBar({ scrolled }) {
  return (
    <div
      className={`hidden md:block overflow-hidden transition-all duration-500 ${
        scrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
      }`}
    >
      <div className="border-b border-white/10 bg-crg-charcoal">
        <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between py-3.5 text-xs">
          <div className="flex items-center gap-6 text-white/60">
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-crg-purple" />
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-crg-purple" />
              {CONTACT.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-crg-purple" />
              {CONTACT.address}
            </span>
          </div>
          <div className="flex items-center gap-4">
            {CONTACT.social.map((s) => {
              const Icon = SOCIAL_ICON[s.label] || Link2;
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/45 hover:text-crg-magenta transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}