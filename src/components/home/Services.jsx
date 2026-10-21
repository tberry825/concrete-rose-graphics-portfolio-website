import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { SERVICES } from "@/data/services";
import Reveal, { StaggerWords } from "@/components/ui/Reveal";

export default function Services() {
  const [active, setActive] = useState(null);
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-10 md:py-14 concrete-surface">
      {/* Purple texture */}
      <div
        className="pointer-events-none absolute -top-28 left-[10%] w-[460px] h-[460px] blur-[150px] opacity-30"
        style={{ background: "radial-gradient(circle, #8A2BE2, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] right-[5%] w-[360px] h-[360px] blur-[150px] opacity-20"
        style={{ background: "radial-gradient(circle, #b15eff, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading block */}
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-4 md:mb-6">
          <Reveal>
            <h2 className="font-display font-semibold uppercase leading-[0.9] tracking-tight text-[clamp(2.4rem,6.5vw,5rem)] whitespace-nowrap">
              <span className="text-gradient-accent">What I Do</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="font-display font-semibold uppercase tracking-tight text-white/75 text-[clamp(1.1rem,2.8vw,1.85rem)] leading-none md:text-right">
              <StaggerWords text="Services Built to Convert." />
            </h3>
          </Reveal>
        </div>

        <div className="fracture-line mb-2" />

        <div className="border-b border-white/10">
          {SERVICES.map((s, i) => {
            const isOpen = active === s.number;
            return (
              <Reveal key={s.number} delay={i * 0.05}>
                <div
                  onMouseEnter={() => setActive(s.number)}
                  onMouseLeave={() => setActive(null)}
                  className={`group relative border-t border-white/10 transition-colors duration-500 ${
                    isOpen ? "bg-white/[0.04] backdrop-blur-sm" : ""
                  }`}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(138,43,226,0.08), transparent)",
                    }}
                  />
                  <div className="relative flex items-center gap-4 md:gap-12 py-5 md:py-8">
                    <span
                      className={`font-mono text-sm md:text-base transition-colors duration-300 ${
                        isOpen ? "text-crg-magenta" : "text-white/30"
                      }`}
                    >
                      {s.number}
                    </span>
                    <h3
                      className={`font-display font-semibold uppercase tracking-tight text-[clamp(1.6rem,4vw,3rem)] leading-none transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-white/80"
                      }`}
                    >
                      {s.title}
                    </h3>
                    <motion.span
                      animate={reduce ? {} : { rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-auto hidden md:grid place-items-center w-10 h-10 rounded-full border border-white/15 text-white/40 group-hover:text-crg-magenta group-hover:border-crg-magenta/50 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </motion.span>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 md:pl-[4.5rem] max-w-3xl">
                      <p className="text-white/65 leading-relaxed">{s.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs uppercase tracking-wider px-3 py-1.5 border border-white/10 rounded-sm text-white/55"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}