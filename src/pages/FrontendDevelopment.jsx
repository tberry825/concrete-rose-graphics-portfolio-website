import { motion, useReducedMotion } from "framer-motion";
import { Code2 } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsTabs from "@/components/projects/ProjectsTabs";
import ShowcaseCard from "@/components/projects/ShowcaseCard";
import GradientHeading from "@/components/ui/GradientHeading";
import { PROJECTS } from "@/data/projects";

const LANGUAGES = ["HTML", "CSS", "JavaScript", "React", "Tailwind"];

export default function FrontendDevelopment() {
  const reduce = useReducedMotion();
  usePageMeta({
    title: "Frontend Development — Concrete Rose Graphics",
    description:
      "Frontend development work from Concrete Rose Graphics — coding projects built with HTML, CSS, JavaScript, React, and Tailwind, featuring the DejaVuAI visual search platform.",
  });

  // DejaVuAI is the featured frontend coding project.
  const vertex = PROJECTS.find((p) => p.id === "vertex-studio");
  const dejavu = vertex?.subProjects?.find((s) => s.slug === "dejavuai");

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
            <GradientHeading as="h1" text="Frontend Development" className="font-display text-5xl md:text-7xl font-semibold tracking-tight" />
            <p className="text-lg text-white/65 max-w-2xl leading-relaxed mt-6">
              Production frontend code — interfaces built with modern web technologies, from responsive layouts and design systems to interactive, data-driven tools.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-10">
            <ProjectsTabs />
          </div>

          {/* Languages */}
          <div className="mx-auto max-w-7xl px-5 md:px-8 mt-8 pt-6 border-t border-white/5">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/45 mr-2">Languages &amp; frameworks:</span>
              {LANGUAGES.map((lang) => (
                <span
                  key={lang}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-crg-purple/50 bg-crg-purple/10 text-white text-sm font-medium"
                >
                  <Code2 className="w-3.5 h-3.5 text-crg-purple" />
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Featured project */}
          <div className="mx-auto max-w-7xl px-5 md:px-8 pt-10">
            <div className="flex items-baseline justify-between mb-8">
              <GradientHeading text="Featured Project" className="font-display text-2xl" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/45">1 Project</span>
            </div>
            {dejavu && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <ShowcaseCard
                  src={dejavu.cover}
                  to={`/projects/vertex-studio/dejavuai`}
                  title={dejavu.title}
                  index={0}
                  reduce={reduce}
                />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}