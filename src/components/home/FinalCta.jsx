import Reveal, { StaggerWords } from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";

const ROSE_URL = "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/368e7e717_Purpleconcreteroseondustysurface-Edited.png";

const CTA_BG = "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/953ac9131_generated_4aa6e228.jpg";

export default function FinalCta() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-crg-charcoal">
      <img
        src={CTA_BG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-crg-charcoal via-crg-charcoal/60 to-crg-charcoal" />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[120px] opacity-40"
        style={{ background: "radial-gradient(circle, rgba(138,43,226,0.5), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8 text-center">
        <h2 className="font-display font-semibold uppercase leading-[0.92] tracking-tight text-[clamp(1.8rem,6vw,3.5rem)] mb-5">
          <span className="block">
            <StaggerWords text="Have an Idea?" />
          </span>
          <span className="block text-gradient-accent">
            <StaggerWords text="Let's Make It" delay={0.25} />
          </span>
          <span className="block">
            <StaggerWords text="Impossible to Ignore." delay={0.45} />
          </span>
        </h2>

        <Reveal delay={0.25}>
          <img
            src={ROSE_URL}
            alt=""
            aria-hidden="true"
            className="mx-auto mb-6 w-28 h-28 md:w-36 md:h-36 object-contain"
          />
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CtaButton to="/contact" variant="primary">
              Start a Project
            </CtaButton>
            <CtaButton to="/projects" variant="outline">
              View My Work
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}