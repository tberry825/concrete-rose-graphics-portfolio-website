import { motion, useReducedMotion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectsTabs from "@/components/projects/ProjectsTabs";
import GradientHeading from "@/components/ui/GradientHeading";
import { PROJECTS, GRAPHIC_DESIGN_IDS } from "@/data/projects";

const DESIGN_TOOLS = ["Adobe Illustrator", "Adobe Photoshop", "Figma"];

const DESIGN_CAPABILITIES = [
  "Brand Identity",
  "Logo Design",
  "Web Design",
  "Print Design",
  "Layout",
  "Typography",
  "Art Direction",
];

export default function GraphicDesign() {
  const reduce = useReducedMotion();
  usePageMeta({
    title: "Graphic Design — Concrete Rose Graphics",
    description:
      "Graphic design work from Concrete Rose Graphics — logos, brand identity, flyers, posters, business cards, book covers, product labels, and large-format print.",
  });

  const projects = GRAPHIC_DESIGN_IDS
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Navbar />
      <main>
        <section className="relative pb-20 pt-28 md:pt-32 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-crg-charcoal" />
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-80" style={{ background: "radial-gradient(circle at 15% 10%, rgba(138,43,226,0.35), transparent 35%), radial-gradient(circle at 85% 25%, rgba(186,85,255,0.28), transparent 38%), radial-gradient(circle at 50% 80%, rgba(138,43,226,0.25), transparent 45%)" }} />
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

          {/* Heading */}
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <GradientHeading as="h1" text="Graphic Design" className="font-display text-5xl md:text-7xl font-semibold tracking-tight" />
            <p className="text-lg text-white/65 max-w-2xl leading-relaxed mt-6">
              Brand identity, print, web, and visual systems crafted to make each brand unmistakable — from logos and business cards to websites, posters, billboards, and book covers.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-10">
            <ProjectsTabs />
          </div>

          {/* Tools + Capabilities */}
          <div className="mx-auto max-w-7xl px-5 md:px-8 mt-8 pt-6 border-t border-white/5">
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-14 items-start">
              <div>
                <GradientHeading text="Tools Used" className="font-display text-2xl mb-4" />
                <p className="text-white/80 leading-relaxed">{DESIGN_TOOLS.join("  ·  ")}</p>
              </div>
              <div className="hidden md:block self-stretch w-px bg-white/10" />
              <div>
                <GradientHeading text="Capabilities" className="font-display text-2xl mb-4" />
                <p className="text-white/75 leading-relaxed">{DESIGN_CAPABILITIES.join("  ·  ")}</p>
              </div>
            </div>
          </div>

          {/* Projects grid */}
          <div className="mx-auto max-w-7xl px-5 md:px-8 pt-10">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {projects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}