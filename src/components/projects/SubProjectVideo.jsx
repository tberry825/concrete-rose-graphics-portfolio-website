import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Play, X } from "lucide-react";
import { Image } from "@/components/ui/image";

/**
 * Mock demo-video block: a poster + play button that opens a modal player.
 * Swap `videoUrl` for the real video when ready.
 */
export default function SubProjectVideo({ videoUrl, poster, label = "Watch the demo", reduce }) {
  const [open, setOpen] = useState(false);
  const motionProps = reduce
    ? {}
    : { whileHover: { scale: 1.01 }, whileTap: { scale: 0.99 } };

  return (
    <section className="mx-auto max-w-4xl px-5 md:px-8 mt-10 pt-8 border-t border-white/5">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="font-display text-2xl font-semibold text-white">Demo</h2>
        <span className="text-xs uppercase tracking-[0.2em] text-white/45">Preview</span>
      </div>

      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play ${label}`}
        {...motionProps}
        className="group relative block w-full overflow-hidden rounded-2xl ring-1 ring-white/15 aspect-video"
      >
        {/* Poster */}
        {poster ? (
          <Image src={poster} alt={label} fittingType="fill" className="absolute inset-0 w-full h-full" />
        ) : (
          <div className="absolute inset-0 concrete-surface" />
        )}
        {/* dim + glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-crg-charcoal/70 via-crg-charcoal/55 to-crg-charcoal/80" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity duration-500"
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(177,94,255,0.35), transparent 60%)" }}
        />
        {/* mock "browser bar" detail */}
        <div className="absolute top-0 inset-x-0 flex items-center gap-1.5 px-4 py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 text-[0.6rem] uppercase tracking-[0.2em] text-white/40">demo preview</span>
        </div>
        {/* play button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <span className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/10 ring-1 ring-white/30 backdrop-blur-md group-hover:bg-crg-magenta/30 group-hover:ring-crg-magenta transition-colors duration-300">
            <span aria-hidden className="absolute inset-0 rounded-full blur-xl bg-crg-magenta/40 opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
            <Play className="relative w-8 h-8 text-white translate-x-0.5" fill="currentColor" />
          </span>
          <span className="text-sm uppercase tracking-[0.22em] text-white/85 font-semibold">{label}</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] bg-crg-charcoal/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close video"
                className="absolute -top-12 right-0 flex items-center gap-2 text-white/80 hover:text-white text-sm"
              >
                Close <X className="w-5 h-5" />
              </button>
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-[0_40px_90px_-35px_rgba(138,43,226,0.7)] bg-black">
                <video src={videoUrl} controls autoPlay className="w-full h-auto aspect-video" />
              </div>
              <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-white/45">
                {label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}