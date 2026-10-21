import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";

export default function Intro() {

  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute -top-24 left-[8%] w-[420px] h-[420px] blur-[140px] opacity-30"
        style={{ background: "radial-gradient(circle, #8A2BE2, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-[6%] w-[360px] h-[360px] blur-[140px] opacity-25"
        style={{ background: "radial-gradient(circle, #b15eff, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-1.5 md:pt-6 pb-16 md:pb-24">
        {/* Headline */}
        <Reveal delay={0.1}>
          <h2 className="font-display font-semibold uppercase leading-[0.92] tracking-tight text-[clamp(2.1rem,6vw,4.5rem)] max-w-4xl">
            <span className="block text-white">Designed with vision.</span>
            <span className="block text-gradient-accent">Built with purpose.</span>
          </h2>
        </Reveal>

        {/* Narrative + read more */}
        <div className="mt-8">
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl">
              Concrete Rose Graphics is a creative design and development business where bold ideas are
              transformed into purposeful visual and digital experiences. Through graphic design,
              branding, and front-end development, every project is created with intention, strategy,
              and attention to detail &mdash; resulting in work that feels polished, memorable,
              functional, and uniquely aligned with the brand behind it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CtaButton to="/about">Discover Our Story</CtaButton>
            </div>
          </Reveal>
        </div>

        {/* Fracture divider */}
        <div className="fracture-line mt-14 md:mt-20" />
      </div>
    </section>
  );
}