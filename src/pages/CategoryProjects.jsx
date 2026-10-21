import { useParams, Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryCard from "@/components/projects/GalleryCard";
import LiveGalleryCard from "@/components/projects/LiveGalleryCard";
import ShowcaseCard from "@/components/projects/ShowcaseCard";
import ExpandableBrandCard from "@/components/projects/ExpandableBrandCard";
import GradientHeading from "@/components/ui/GradientHeading";
import FloatingBackPill from "@/components/ui/FloatingBackPill";
import { PROJECTS } from "@/data/projects";

export default function CategoryProjects() {
  const { slug } = useParams();
  const reduce = useReducedMotion();
  const project = PROJECTS.find((p) => p.id === slug);

  usePageMeta({
    title: `${project?.title ?? "Projects"} — Concrete Rose Graphics`,
    description: project?.description ?? "Selected work from Concrete Rose Graphics.",
  });

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-40 pb-24 text-center">
          <h1 className="font-display text-3xl text-white">Project not found</h1>
          <Link to="/projects" className="inline-flex items-center gap-2 mt-6 text-crg-magenta hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const category = project.category;
  const visibleSubProjects = (project["subProjects"] ?? []).filter((s) => !s.hideCard);

  return (
    <motion.div initial={false} animate={{ opacity: 1 }}>
      <Navbar />
      <main className="pt-32 md:pt-40 pb-24">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-5 md:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-crg-purple/50 bg-crg-purple/10 text-white text-sm hover:bg-crg-purple/20 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
          <div className="flex flex-col gap-6">
            <GradientHeading as="h1" text={project.title} className="font-display text-5xl md:text-7xl font-semibold tracking-tight" />
            <p className="text-lg text-white/65 max-w-2xl leading-relaxed">{project.description}</p>
            {/* Tools */}
            <div className="flex flex-wrap items-baseline gap-2 pt-2 text-sm">
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/45">Tools used:</span>
              <span className="text-white/80">{project.tools.join("  ·  ")}</span>
            </div>
          </div>
        </section>

        {/* Overview + Capabilities side by side */}
        <section className="mx-auto max-w-7xl px-5 md:px-8 mt-8 pt-6 border-t border-white/5">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-14 items-start">
            <div>
              <GradientHeading text="Project Overview" className="font-display text-2xl mb-4" />
              <p className="text-white/70 leading-relaxed text-lg">{project.overview}</p>
            </div>
            {project.skills?.length > 0 && (
              <div className="hidden md:block self-stretch w-px bg-white/10" />
            )}
            {project.skills?.length > 0 && (
              <div>
                <GradientHeading text="Capabilities" className="font-display text-2xl mb-4" />
                <p className="text-white/75 text-base leading-relaxed">{project.skills.join("  ·  ")}</p>
              </div>
            )}
          </div>
        </section>

        {/* Sub-projects: live-link groups render inline as headings + cards;
            image-based sub-projects render as expandable navigation cards */}
        {visibleSubProjects?.length > 0 && (
          <>
            {visibleSubProjects.some((s) => s.liveLinks?.length) ? (
              <section className="mx-auto max-w-7xl px-5 md:px-8 mt-8 pt-6 border-t border-white/5">
                <div className="flex flex-col gap-12">
                  {visibleSubProjects
                    .filter((sub) => sub.liveLinks?.length)
                    .map((sub) => (
                      <div key={sub.slug}>
                        <div className="flex items-baseline justify-between mb-6">
                          <GradientHeading text={sub.title} className="font-display text-2xl" />
                          <span className="text-xs uppercase tracking-[0.2em] text-white/45">
                            {sub.liveLinks.length} {sub.liveLinks.length === 1 ? "Link" : "Links"}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
                          {sub.liveLinks.map((link, i) => (
                            <LiveGalleryCard
                              key={link.url}
                              src={link.cover}
                              url={link.url}
                              title={link.name}
                              index={i}
                              reduce={reduce}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </section>
            ) : (
              <section className="mx-auto max-w-7xl px-5 md:px-8 mt-8 pt-6 border-t border-white/5">
                <div className="flex items-baseline justify-between mb-8">
                  <GradientHeading text={`${category} Work`} className="font-display text-2xl" />
                  <span className="text-xs uppercase tracking-[0.2em] text-white/45">
                    {visibleSubProjects.length} {visibleSubProjects.length === 1 ? "Project" : "Projects"}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
                  {visibleSubProjects.map((sub, i) => (
                    <ExpandableBrandCard key={sub.slug} subProject={sub} index={i} reduce={reduce} parentSlug={project.id} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* Full gallery */}
        {(project.gallery?.length > 0 || project.galleryGroups?.length > 0) && (
          <section className="mx-auto max-w-7xl px-5 md:px-8 mt-8 pt-6 border-t border-white/5">
            {project.galleryGroups ? (() => {
              // Group consecutive groups that share a parent under a parent heading.
              const sections = [];
              project.galleryGroups.forEach((group) => {
                const last = sections[sections.length - 1];
                if (group.parent) {
                  if (last && last.parent === group.parent) {
                    last.groups.push(group);
                  } else {
                    sections.push({ parent: group.parent, groups: [group] });
                  }
                } else {
                  sections.push({ group });
                }
              });
              return (
                <div className="flex flex-col gap-8">
                  {sections.map((section) =>
                    section.parent ? (
                      <div key={section.parent}>
                        <div className="mb-8">
                          <GradientHeading text={section.parent} className="font-display text-3xl md:text-4xl mb-3" />
                          <div className="fracture-line" />
                        </div>
                        <div className="md:pl-6 border-l-2 border-crg-purple/30 flex flex-col gap-8">
                          {section.groups.map((group) => (
                            <div key={group.title}>
                              <div className="flex items-baseline justify-between mb-6">
                                <GradientHeading text={group.title} className="font-display text-2xl" />
                                <span className="text-xs uppercase tracking-[0.2em] text-white/45">
                                  {group.images.length} {group.images.length === 1 ? "Image" : "Images"}
                                </span>
                              </div>
                              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                                {group.images.map((src, i) => (
                                  <GalleryCard
                                    key={src}
                                    src={src}
                                    alt={`${group.title} ${i + 1}`}
                                    index={i}
                                    reduce={reduce}
                                  />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div key={section.group.title}>
                        <div className="flex items-baseline justify-between mb-6">
                          <GradientHeading text={section.group.title} className="font-display text-2xl" />
                          <span className="text-xs uppercase tracking-[0.2em] text-white/45">
                            {section.group.images.length} {section.group.images.length === 1 ? "Image" : "Images"}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                          {section.group.images.map((src, i) => (
                            <GalleryCard
                              key={src}
                              src={src}
                              alt={`${section.group.title} ${i + 1}`}
                              index={i}
                              reduce={reduce}
                            />
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              );
            })() : (
              <>
                <div className="flex items-baseline justify-between mb-8">
                  <GradientHeading text={`${category} Work`} className="font-display text-2xl" />
                  <span className="text-xs uppercase tracking-[0.2em] text-white/45">
                    {project.gallery.length} {project.gallery.length === 1 ? "Image" : "Images"}
                  </span>
                </div>
                {project.id === "logos" || project.id === "business-cards" ? (
                  <div className="flex flex-col gap-5">
                    {Array.from(
                      { length: Math.ceil(project.gallery.length / 2) },
                      (_, ri) => {
                        const pair = project.gallery.slice(ri * 2, ri * 2 + 2);
                        return (
                          <div key={ri} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {pair.map((src, i) => (
                              <GalleryCard
                                key={src}
                                src={src}
                                alt={`${project.title} ${ri * 2 + i + 1}`}
                                index={ri * 2 + i}
                                reduce={reduce}
                              />
                            ))}
                          </div>
                        );
                      }
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {project.gallery.map((item, i) => {
                      const isObj = typeof item === "object" && item !== null;
                      const src = isObj ? item.src : item;
                      const comingSoon = isObj ? !!item.comingSoon : false;
                      const url = isObj ? item.url : project.liveUrl;
                      const title = isObj && item.title ? item.title : project.title;
                      const visitLabel = isObj && item.visitLabel ? item.visitLabel : undefined;
                      const visitAction = isObj && item.visitAction ? item.visitAction : undefined;
                      const to = isObj ? item.to : undefined;
                      if (to) {
                        return (
                          <ShowcaseCard
                            key={src}
                            src={src}
                            to={to}
                            title={title}
                            index={i}
                            reduce={reduce}
                          />
                        );
                      }
                      return url || comingSoon ? (
                        <LiveGalleryCard
                          key={src}
                          src={src}
                          url={url}
                          title={title}
                          comingSoon={comingSoon}
                          index={i}
                          reduce={reduce}
                          visitLabel={visitLabel}
                          visitAction={visitAction}
                        />
                      ) : (
                        <GalleryCard
                          key={src}
                          src={src}
                          alt={`${title} ${i + 1}`}
                          index={i}
                          reduce={reduce}
                        />
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </section>
        )}

      </main>
      <Footer />
      <FloatingBackPill to="/projects" label="All Projects" />
    </motion.div>
  );
}