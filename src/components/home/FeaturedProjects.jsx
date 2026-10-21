import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal, { nextProject } from "@/components/projects/ProjectModal";
import { PROJECTS } from "@/data/projects";

export default function FeaturedProjects() {
  const [selected, setSelected] = useState(null);
  const featured = PROJECTS.slice(0, 4);

  const handleNext = () => {
    setSelected((prev) => (prev ? nextProject(prev.id) : null));
  };

  return (
    <section className="relative py-10 md:py-14 concrete-surface">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <h2 className="font-display font-semibold uppercase leading-[0.9] tracking-tight text-[clamp(2rem,8vw,4rem)]">
              <span className="block text-gradient">Projects</span>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <CtaButton to="/projects" variant="outline">
              View All Projects
            </CtaButton>
          </Reveal>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              onOpen={setSelected}
              large={i % 3 === 0}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} onNext={handleNext} />
    </section>
  );
}