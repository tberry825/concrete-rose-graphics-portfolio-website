import { useParams, Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryCard from "@/components/projects/GalleryCard";
import SubProjectVideo from "@/components/projects/SubProjectVideo";
import MutedVideoWithHint from "@/components/projects/MutedVideoWithHint";
import PosterEaselMockup from "@/components/projects/PosterEaselMockup";
import LiveGalleryCard from "@/components/projects/LiveGalleryCard";
import GradientHeading from "@/components/ui/GradientHeading";
import FloatingBackPill from "@/components/ui/FloatingBackPill";
import { PROJECTS } from "@/data/projects";

export default function SubProjectPage() {
  const { slug, subSlug } = useParams();
  const reduce = useReducedMotion();
  const project = PROJECTS.find((p) => p.id === slug);
  const sub = project?.subProjects?.find((s) => s.slug === subSlug);

  usePageMeta({
    title: `${sub?.title ?? "Project"} — Concrete Rose Graphics`,
    description: `${sub?.title ?? ""} — brand identity work by Concrete Rose Graphics.`,
  });

  if (!project || !sub) {
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

  return (
    <motion.div initial={false} animate={{ opacity: 1 }}>
      <Navbar />
      <main className="pt-32 md:pt-40 pb-24">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-5 md:px-8">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-crg-purple/50 bg-crg-purple/10 text-white text-sm hover:bg-crg-purple/20 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> {project.title}
          </Link>
          <div className="flex flex-col gap-3">
            <GradientHeading as="h1" text={sub.title} className="font-display text-5xl md:text-7xl font-semibold tracking-tight" />
            {sub.year && (
              <span className="text-sm uppercase tracking-[0.2em] text-white/45">{sub.year}</span>
            )}
          </div>
        </section>

        {/* Overview / description (e.g. DejaVuAI) */}
        {sub.description && (
          <section className="mx-auto max-w-7xl px-5 md:px-8 mt-10 pt-8 border-t border-white/5">
            <GradientHeading text="Overview" className="font-display text-2xl mb-6" />
            {sub.subtitle && (
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">{sub.subtitle}</h2>
            )}
            {sub.role && (
              <p className="text-sm uppercase tracking-[0.2em] text-crg-magenta mb-6">{sub.role}</p>
            )}
            {typeof sub.description === "string" ? (
              <p className="text-lg text-white/75 leading-relaxed max-w-3xl">{sub.description}</p>
            ) : (
              <div className="space-y-4">
                {sub.description.map((p, i) => (
                  <p key={i} className="text-base text-white/75 leading-relaxed">{p}</p>
                ))}
              </div>
            )}
            {sub.tools?.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2.5">
                {sub.tools.map((t) => (
                  <span key={t} className="px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.18em] border border-crg-purple/40 bg-crg-purple/10 text-white/85">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Work details (e.g. DejaVuAI contributions) */}
        {sub.workDetails?.length > 0 && (
          <section className="mx-auto max-w-7xl px-5 md:px-8 mt-10 pt-8 border-t border-white/5">
            <GradientHeading text="Work" className="font-display text-2xl mb-8" />
            <div className={sub.slug === "dejavuai" ? "grid grid-cols-1 gap-y-10 max-w-5xl" : "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 max-w-5xl"}>
              {sub.workDetails.map((item) => (
                <div key={item.title} className="border-l border-crg-purple/30 pl-5">
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.body}</p>
                  {item.videoUrl && (
                    <div className="mt-4 rounded-xl overflow-hidden ring-1 ring-white/10 bg-black">
                      <MutedVideoWithHint src={item.videoUrl} poster={item.videoPoster} />
                      {item.videoCaption && (
                        <div className="px-5 py-4 text-sm text-white/65 leading-relaxed border-t border-white/10 bg-white/[0.03]">
                          {typeof item.videoCaption === "string" ? (
                            <p>{item.videoCaption}</p>
                          ) : (
                            <div className="space-y-4">
                              {item.videoCaption.map((section, idx) => (
                                <div key={idx} className={idx > 0 ? "pt-4 border-t border-white/10" : ""}>
                                  {section.title && (
                                    <h4 className="font-display text-base font-semibold text-white/90 mb-2">{section.title}</h4>
                                  )}
                                  {section.paragraphs?.map((p, i) => (
                                    <p key={i} className={i > 0 ? "mt-3" : ""}>{p}</p>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Demo video (e.g. DejaVuAI) */}
        {sub.videoUrl && (
          <SubProjectVideo
            videoUrl={sub.videoUrl}
            poster={sub.videoPoster || sub.cover}
            label={sub.videoLabel || "Watch the demo"}
            reduce={reduce}
          />
        )}

        {/* Live links (e.g. digital obituaries) */}
        {sub.liveLinks?.length > 0 && (
          <section className="mx-auto max-w-7xl px-5 md:px-8 mt-8 pt-6 border-t border-white/5">
            <div className="flex items-baseline justify-between mb-8">
              <GradientHeading text={`Digital ${sub.title}`} className="font-display text-2xl" />
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
          </section>
        )}

        {/* Gallery */}
        {(sub.images?.length > 0 || sub.posterMockup) && (
          <section className="mx-auto max-w-7xl px-5 md:px-8 mt-8 pt-6 border-t border-white/5">
            <div className="flex items-baseline justify-between mb-8">
              <GradientHeading text={`${sub.title} Work`} className="font-display text-2xl" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/45">
                {(sub.images?.length ?? 0) + (sub.posterMockup ? 1 : 0)} {((sub.images?.length ?? 0) + (sub.posterMockup ? 1 : 0)) === 1 ? "Image" : "Images"}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
              {sub.posterMockup && (
                <PosterEaselMockup src={sub.posterMockup} alt={`${sub.title} poster`} />
              )}
              {sub.images.map((src, i) => (
                <GalleryCard key={src} src={src} alt={`${sub.title} ${i + 1}`} index={i} reduce={reduce} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
      <FloatingBackPill to={`/projects/${project.id}`} label={project.title} />
    </motion.div>
  );
}