import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function LiveGalleryCard({ src, url, title, index = 0, reduce = false, comingSoon = false, visitLabel = "Click to visit live site", visitAction = "Visit Site" }) {
  let host = "";
  try {
    host = url ? new URL(url).hostname.replace(/^www\./, "") : "";
  } catch {
    host = url || "";
  }

  if (comingSoon) {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
        className="group block rounded-xl bg-[#15101a] ring-1 ring-crg-purple/40 overflow-hidden"
      >
        <div className="relative aspect-[4/3] flex items-center justify-center bg-[#15101a] overflow-hidden">
          <Image src={src} alt={`Preview of ${title}`} fittingType="fit" className="w-full h-full object-contain" />
          <div className="absolute inset-0 grid place-items-center bg-crg-charcoal/80 backdrop-blur-md">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-crg-magenta text-white text-xs font-semibold uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(177,94,255,0.55)] border border-white/20">
              Coming Soon
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 px-5 py-4 bg-[#121016] border-t border-[#382652]">
          <span className="grid place-items-center w-9 h-9 rounded-full border border-crg-purple/60 text-crg-purple/70 shrink-0">
            <Globe className="w-4 h-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-white font-medium truncate">{title}</p>
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">Launching soon</p>
          </div>
          <span className="inline-flex items-center text-sm font-semibold text-white/55 shrink-0">
            Coming Soon
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      className="group block rounded-xl bg-[#15101a] ring-1 ring-crg-purple/40 overflow-hidden transition-all duration-500 hover:ring-crg-purple hover:shadow-[0_0_55px_-10px_rgba(138,43,226,0.55)]"
    >
      <div className="relative aspect-[4/3] flex items-center justify-center bg-[#15101a] overflow-hidden">
        <Image src={src} alt={`Live preview of ${title}`} fittingType="fit" className="w-full h-full object-contain transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]" />
      </div>

      <div className="flex items-center gap-3 px-5 py-4 bg-[#121016] border-t border-[#382652]">
        <span className="grid place-items-center w-9 h-9 rounded-full border border-crg-purple text-crg-purple shrink-0">
          <Globe className="w-4 h-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-white font-medium truncate">{host}</p>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">{visitLabel}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-crg-purple transition-colors shrink-0">
          {visitAction}
          <ExternalLink className="w-4 h-4" />
        </span>
      </div>
    </motion.a>
  );
}