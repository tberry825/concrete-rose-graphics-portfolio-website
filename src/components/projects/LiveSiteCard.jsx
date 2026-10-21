import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function LiveSiteCard({ url, image, title, index = 0 }) {
  const reduce = useReducedMotion();
  let host = "";
  try {
    host = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    host = url;
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group block w-full overflow-hidden rounded-xl bg-[#15101a] ring-1 ring-crg-purple/40 transition-all duration-500 hover:ring-crg-purple hover:shadow-[0_0_55px_-10px_rgba(138,43,226,0.55)]"
    >
      <div className="relative w-full overflow-hidden flex items-center justify-center bg-[#0c1a2d]">
        <Image
          src={image}
          alt={`Live preview of ${title}`}
          fittingType="fit"
          className="w-full object-contain transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
        />

        {/* top label */}
        <div className="absolute top-4 left-4">
          <span className="text-[0.62rem] uppercase tracking-[0.25em] px-3 py-1.5 bg-[#1a1226] border border-crg-purple/50 text-white rounded-sm">
            Live Website
          </span>
        </div>

        {/* bottom gradient for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#15101a] via-[#15101a]/60 to-transparent" />

        {/* visit button */}
        <div className="absolute bottom-4 right-4">
          <span className="w-10 h-10 rounded-full bg-crg-purple border border-crg-purple flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
            <ExternalLink className="w-4 h-4" />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 px-5 py-4">
        <span className="grid place-items-center w-9 h-9 rounded-full bg-crg-purple/15 border border-crg-purple/40 text-crg-purple shrink-0">
          <Globe className="w-4 h-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-white font-medium truncate">{host}</p>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Click to visit live site</p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-crg-purple transition-colors shrink-0">
          Visit Site
          <ExternalLink className="w-4 h-4" />
        </span>
      </div>
    </motion.a>
  );
}