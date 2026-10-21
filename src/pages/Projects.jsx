import { motion, useReducedMotion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectsTabs from "@/components/projects/ProjectsTabs";
import GradientHeading from "@/components/ui/GradientHeading";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  const reduce = useReducedMotion();
  usePageMeta({
    title: "Projects — Concrete Rose Graphics",
    description:
      "Selected work from Concrete Rose Graphics — branding, web design, graphic design, front-end development, and digital campaign projects.",
  });

  return (
    <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Navbar />
      <main>
        <section className="relative pb-20 pt-28 md:pt-32 overflow-hidden">
          {/* Purple smoke texture */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-crg-charcoal" />
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-80" style={{ background: "radial-gradient(circle at 15% 10%, rgba(138,43,226,0.35), transparent 35%), radial-gradient(circle at 85% 25%, rgba(186,85,255,0.28), transparent 38%), radial-gradient(circle at 50% 80%, rgba(138,43,226,0.25), transparent 45%)" }} />
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

          {/* Heading */}
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <GradientHeading as="h1" text="All Projects" className="font-display text-5xl md:text-7xl font-semibold tracking-tight" />
          </div>

          {/* Tabs */}
          <div className="mt-10">
            <ProjectsTabs />
          </div>

          {/* Masonry gallery */}
          <div className="mx-auto max-w-7xl px-5 md:px-8 pt-8">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {PROJECTS.map((p, i) => (
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