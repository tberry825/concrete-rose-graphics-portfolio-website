import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Image } from "@/components/ui/image";

export default function ProjectCard({ project, index = 0 }) {
  const reduce = useReducedMotion();
  const navigate = useNavigate();

  return (
    <motion.button
      type="button"
      onClick={() => navigate(`/projects/${project.id}`)}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block w-full text-left overflow-hidden rounded-xl bg-[#15101a] ring-1 ring-crg-purple/40 transition-all duration-500 hover:ring-crg-purple hover:shadow-[0_0_55px_-10px_rgba(138,43,226,0.55)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden flex items-center justify-center bg-[#15101a]">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category}`}
          fittingType="fit"
          className="w-full h-full object-contain transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
        />

        {/* Category header pill (top left) */}
        <div className="absolute top-4 left-4">
          <span className="text-[0.62rem] uppercase tracking-[0.25em] px-3 py-1.5 bg-[#1a1226] border border-crg-purple/50 text-white rounded-sm">
            {project.category}
          </span>
        </div>

        {/* Bottom gradient for button legibility */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#15101a] via-[#15101a]/60 to-transparent" />

        {/* Action button (bottom right only) */}
        <div className="absolute bottom-4 right-4">
          <span className="w-10 h-10 rounded-full bg-crg-purple border border-crg-purple flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}