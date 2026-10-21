import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import { usePageMeta } from "@/hooks/usePageMeta";

// Shared layout for legal pages (Privacy, Terms, Cookie Policy).
// Props:
//   title: string — page title (also used for <title>)
//   description: string — meta description
//   intro: string — short lead-in under the heading
//   lastUpdated: string — ISO-ish date string
//   sections: [{ id, heading, body }] — body is a ReactNode
export default function LegalLayout({ title, description, intro, lastUpdated, sections }) {
  const reduce = useReducedMotion();
  usePageMeta({
    title: `${title} — Concrete Rose Graphics`,
    description,
    robots: "noindex, follow",
  });

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="noise-grain" aria-hidden />
      <Navbar />
      <main className="relative bg-crg-charcoal overflow-hidden">
        {/* aurora wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 18% 12%, rgba(138,43,226,0.22), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 22%, rgba(177,94,255,0.18), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[640px] h-[360px] blur-[140px] opacity-20 animate-glow-pulse"
          style={{ background: "radial-gradient(ellipse, #8A2BE2, transparent 70%)" }}
        />

        {/* Hero */}
        <section className="relative pt-36 md:pt-44 pb-10">
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-crg-magenta mb-4">
                Legal
              </p>
              <h1 className="font-display font-semibold uppercase leading-[0.92] tracking-tight text-[clamp(2rem,6vw,3.75rem)]">
                <span className="text-white">{title}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
                {intro}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/40">
                Last updated: {lastUpdated}
              </p>
            </Reveal>
          </div>
          <div className="fracture-line mx-auto max-w-7xl mt-12" aria-hidden />
        </section>

        {/* Body: sticky TOC + content */}
        <section className="relative pb-24 md:pb-32">
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
              {/* Table of contents (desktop) */}
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <p className="text-[0.62rem] uppercase tracking-[0.25em] text-white/45 mb-5">
                    Contents
                  </p>
                  <nav className="space-y-3">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="block text-sm text-white/65 hover:text-crg-magenta transition-colors leading-snug"
                      >
                        {s.heading}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Content */}
              <div className="max-w-3xl">
                {sections.map((s, i) => (
                  <Reveal key={s.id} delay={i * 0.04} className="scroll-mt-28" >
                    <section id={s.id} className="mb-12 last:mb-0">
                      <h2 className="font-display font-semibold text-2xl md:text-3xl text-white mb-4 leading-tight">
                        {s.heading}
                      </h2>
                      <div className="space-y-4 text-white/70 leading-relaxed">
                        {s.body}
                      </div>
                    </section>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}