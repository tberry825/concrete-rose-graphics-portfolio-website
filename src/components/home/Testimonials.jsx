import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { TESTIMONIALS } from "@/data/testimonials";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();
  const t = TESTIMONIALS[idx];

  const go = (dir) => setIdx((p) => (p + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative pt-12 md:pt-16 pb-2.5 overflow-hidden">
      {/* Creative textured backdrop */}
      <div className="absolute inset-0 concrete-surface" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[320px] rounded-full blur-[120px] opacity-30"
        style={{ background: "radial-gradient(circle, #8A2BE2, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[300px] rounded-full blur-[130px] opacity-25"
        style={{ background: "radial-gradient(circle, #b15eff, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="font-display font-semibold uppercase leading-[0.92] tracking-tight text-[clamp(2rem,8vw,4rem)] mb-12">
          <span className="block text-gradient">What Clients</span>
          <span className="block text-gradient-accent">Have To Say</span>
        </h2>

        {/* Creative glass quote card */}
        <div className="relative min-h-[320px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={reduce ? false : { opacity: 0, x: 30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={reduce ? {} : { opacity: 0, x: -30, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative glass rounded-3xl p-7 md:p-12 mx-auto max-w-4xl"
            >
              {/* Gradient top border accent */}
              <div className="absolute inset-x-8 top-0 h-px fracture-line" />

              {/* Top row: client (left) + rating (right) */}
              <div className="flex items-start justify-between gap-6 mb-7">
                {t.image ? (
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden border border-white/15 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)]">
                      <Image
                        src={t.image}
                        alt={`${t.name}'s project`}
                        className="w-full h-full"
                        fittingType="fit"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display font-bold text-white text-base md:text-lg leading-tight">
                        {t.name}
                      </span>
                      <span className="text-xs text-white/50 tracking-wide mt-0.5">
                        {t.project}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-white text-base md:text-lg leading-tight">
                      {t.name}
                    </span>
                    <span className="text-xs text-white/50 tracking-wide mt-0.5">
                      {t.project}
                    </span>
                  </div>
                )}

                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span className="inline-block px-3 py-0.5 rounded-full border border-crg-magenta/40 bg-crg-magenta/10 text-crg-magenta text-[0.6rem] uppercase tracking-[0.18em]">
                    {t.company}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: t.rating || 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-crg-magenta text-crg-magenta" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="font-display text-base md:text-lg leading-[1.55] text-[#eee7f6]">
                “{t.quote}”
              </p>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-crg-magenta hover:border-crg-magenta hover:shadow-[0_0_24px_rgba(177,94,255,0.35)] transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-8 bg-crg-magenta" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-crg-magenta hover:border-crg-magenta hover:shadow-[0_0_24px_rgba(177,94,255,0.35)] transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}