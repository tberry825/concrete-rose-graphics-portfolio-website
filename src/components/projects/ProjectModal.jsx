import { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { PROJECTS } from "@/data/projects";
import CtaButton from "@/components/ui/CtaButton";

export default function ProjectModal({ project, onClose, onNext }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const sections = [
    { label: "Project Overview", value: project.overview },
    { label: "The Challenge", value: project.challenge },
    { label: "Creative Approach", value: project.approach },
    { label: "Final Result", value: project.result },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[80] bg-crg-charcoal/90 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={reduce ? false : { y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? {} : { y: 40, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-5xl my-0 md:my-10 bg-[#121214] border border-white/10 rounded-sm overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close project"
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-crg-charcoal/70 border border-white/10 flex items-center justify-center text-white hover:bg-crg-magenta hover:text-crg-charcoal transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative aspect-[16/9] md:aspect-[16/8] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fittingType="fill"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6 md:p-10">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-crg-magenta">
                {project.category}
              </span>
              <h2 className="mt-3 font-display font-extrabold uppercase tracking-tight text-[clamp(2rem,5vw,4rem)] text-white">
                {project.title}
              </h2>
              <p className="mt-2 text-white/60">{project.client}</p>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap gap-2 mb-10">
              {project.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs uppercase tracking-wider px-3 py-1.5 border border-white/10 rounded-sm text-white/55"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {sections.map((sec) => (
                <div key={sec.label}>
                  <h3 className="text-[0.7rem] uppercase tracking-[0.25em] text-crg-magenta mb-3">
                    {sec.label}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{sec.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <h3 className="text-[0.7rem] uppercase tracking-[0.25em] text-crg-magenta mb-3">
                Technology / Tools
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {project.tools.map((t, i) => (
                  <span key={t} className="font-mono text-sm text-white/60">
                    {t}
                    {i < project.tools.length - 1 && <span className="text-white/20"> / </span>}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <CtaButton to="/contact" variant="primary">
                Start a Similar Project
              </CtaButton>
              <button
                onClick={onNext}
                className="group flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-white/70 hover:text-crg-magenta transition-colors"
              >
                Next Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function nextProject(currentId) {
  const idx = PROJECTS.findIndex((p) => p.id === currentId);
  return PROJECTS[(idx + 1) % PROJECTS.length];
}