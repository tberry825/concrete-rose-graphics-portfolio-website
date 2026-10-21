import { motion, useReducedMotion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/process";
import Reveal, { StaggerWords } from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Process() {
  const reduce = useReducedMotion();
  return (
    <section className="relative py-28 md:py-44 concrete-surface">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel className="mb-10">How It Works</SectionLabel>
        </Reveal>
        <h2 className="font-display font-semibold uppercase leading-[0.95] tracking-tight text-[clamp(2.2rem,6.5vw,5.5rem)] mb-20">
          <span className="block">
            <StaggerWords text="From Idea" />
          </span>
          <span className="block text-gradient-accent">
            <StaggerWords text="To Impact." delay={0.35} />
          </span>
        </h2>

        <div className="relative">
          <div className="absolute left-[1.15rem] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-crg-magenta/40 via-white/10 to-transparent" />
          <div className="space-y-12 md:space-y-20">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={reduce ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-16 md:items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`md:text-right ${i % 2 === 1 ? "md:text-left" : ""}`}>
                  <span className="font-display font-extrabold text-5xl md:text-7xl text-gradient-accent">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display font-semibold uppercase text-2xl md:text-3xl tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <div className="mt-3 md:mt-0">
                  <p className="text-white/65 leading-relaxed max-w-sm">{step.description}</p>
                </div>
                <span className="absolute left-0 md:left-1/2 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full bg-crg-charcoal border-2 border-crg-magenta" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}