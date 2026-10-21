import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

// Gallery card that links to an internal project showcase page.
// Uses a light, padded interior so logo artwork on a white background
// sits with breathing room and stays fully visible inside the card.
export default function ShowcaseCard({ src, to, title, index = 0, reduce = false }) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
    >
      <Link
        to={to}
        className="group block rounded-xl bg-[#15101a] ring-1 ring-crg-purple/40 overflow-hidden transition-all duration-500 hover:ring-crg-purple hover:shadow-[0_0_55px_-10px_rgba(138,43,226,0.55)]"
      >
        <div className="relative aspect-[4/3] flex items-center justify-center bg-white overflow-hidden p-8 md:p-10">
          <Image
            src={src}
            alt={`${title} showcase`}
            fittingType="fit"
            className="w-full h-full object-contain transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex items-center gap-3 px-5 py-4 bg-[#121016] border-t border-[#382652]">
          <span className="grid place-items-center w-9 h-9 rounded-full border border-crg-purple text-crg-purple shrink-0">
            <Sparkles className="w-4 h-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-white font-medium truncate">{title}</p>
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">View Project Showcase</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-crg-purple transition-colors shrink-0">
            View
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}