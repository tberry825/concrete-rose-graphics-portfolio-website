import { motion, useReducedMotion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import Marquee from "@/components/ui/Marquee";
import { Image } from "@/components/ui/image";
import { TECH_STACK } from "@/data/services";
import { BRAND } from "@/data/site";
import { Palette, Code2 } from "lucide-react";

const PORTRAIT_URL =
  "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/ae9817b4c_ChatGPTImageSep29202612_16_33AM.png";

const TIMELINE = [
  { year: "01", title: "The Foundation", text: "A background in graphic design — building visual systems, editorial layouts, and brand identities with an eye for composition and craft." },
  { year: "02", title: "The Expansion", text: "Adding front-end development to the toolkit — translating design into clean, responsive, performant code that actually ships." },
  { year: "03", title: "The Business", text: "Concrete Rose Graphics is a creative business where graphic design, branding, and front-end development come together to create polished, purposeful visual and digital experiences." },
];

const PHILOSOPHY = [
  "Design and code are not separate disciplines — they're two halves of one craft.",
  "Beauty and logic aren't in conflict; the best work makes them inseparable.",
  "Every detail is intentional. The difference between good and unforgettable lives in the margins.",
];

const PILLARS = ["Design + Development", "Brand to Code", "Concept to Launch"];

const BACKGROUNDS = [
  {
    icon: Palette,
    kicker: "Graphic Design",
    text: "Years crafting visual identities, editorial systems, and marketing collateral — building a strong sense of typography, composition, and brand storytelling that informs every project.",
  },
  {
    icon: Code2,
    kicker: "Front-End Development",
    text: "Modern web development with React, Tailwind, and a focus on performance and accessibility — turning design into fast, maintainable, production-ready experiences.",
  },
];

// Reusable gradient section heading
function SectionHeading({ lead, accent, className = "", center = false }) {
  return (
    <h2
      className={`font-display font-semibold uppercase tracking-tight text-[clamp(1.8rem,5vw,3.5rem)] ${center ? "text-center" : ""} ${className}`}
    >
      <span className="text-white">{lead} </span>
      <span className="text-gradient-accent">{accent}</span>
    </h2>
  );
}

export default function About() {
  const reduce = useReducedMotion();
  usePageMeta({
    title: "About — Concrete Rose Graphics",
    description:
      "Meet the designer and developer behind Concrete Rose Graphics — a hybrid creative studio where creative thinking meets technical execution.",
  });
  return (
    <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="noise-grain" aria-hidden />
      <Navbar />
      <main>
        {/* Portrait + intro */}
        <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 bg-crg-charcoal overflow-hidden">
          {/* textured grid backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(244,244,244,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,244,0.04) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%)",
            }}
          />
          {/* aurora wash */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(138,43,226,0.28), transparent 60%), radial-gradient(ellipse 55% 45% at 85% 30%, rgba(177,94,255,0.22), transparent 60%), radial-gradient(ellipse 70% 40% at 50% 100%, rgba(138,43,226,0.18), transparent 70%)",
            }}
          />
          {/* ambient glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[760px] h-[420px] blur-[130px] opacity-30 animate-glow-pulse"
            style={{ background: "radial-gradient(ellipse, #8A2BE2, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-[-10%] w-[520px] h-[420px] blur-[140px] opacity-25 animate-glow-pulse"
            style={{ background: "radial-gradient(ellipse, #b15eff, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/3 left-[-8%] w-[420px] h-[420px] blur-[140px] opacity-25 animate-glow-pulse"
            style={{ background: "radial-gradient(ellipse, #b15eff, transparent 70%)" }}
          />
          {/* floating particles */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-24 right-[12%] w-3 h-3 rounded-full bg-crg-magenta blur-[2px] animate-float"
            style={{ boxShadow: "0 0 30px 8px rgba(177,94,255,0.6)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-32 left-[8%] w-2.5 h-2.5 rounded-full bg-[#b15eff] blur-[2px] animate-float-slow"
            style={{ boxShadow: "0 0 26px 6px rgba(177,94,255,0.55)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-[6%] w-2 h-2 rounded-full bg-white/80 blur-[1px] animate-float"
            style={{ boxShadow: "0 0 18px 4px rgba(244,244,244,0.4)" }}
          />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <h1 className="font-display font-semibold uppercase leading-[0.92] tracking-tight text-[clamp(1.75rem,5vw,2.5rem)] whitespace-nowrap mb-10">
                <span className="text-white">Meet </span>
                <span className="text-[#b15eff]" style={{ textShadow: "0 0 34px rgba(177,94,255,0.28)" }}>Tanesha</span>
              </h1>
            </Reveal>
            <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-12 lg:gap-16 items-stretch">
              {/* Intro */}
              <Reveal delay={0.15} className="order-2 md:order-1 flex flex-col gap-6 md:justify-start md:gap-5 lg:justify-start lg:gap-7">
                <p className="text-lg lg:text-3xl text-white font-display font-medium leading-snug">
                  I'm Tanesha — the designer and developer behind{" "}
                  <span className="text-gradient-accent">Concrete Rose Graphics</span>, where
                  creativity meets code.
                </p>
                <p className="text-base lg:text-xl text-white/80 leading-relaxed">
                  I create bold, thoughtful visual identities and modern digital experiences that
                  help brands stand out, connect, and grow. From branding and graphic design to
                  responsive websites and applications, I enjoy taking ideas from concept to launch
                  and shaping them into something polished, purposeful, and memorable.
                </p>
                <div className="relative glass rounded-xl px-5 md:px-6 py-5 md:py-6">
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-crg-purple to-crg-magenta"
                  />
                  <p className="text-sm lg:text-lg text-white/70 leading-relaxed italic">
                    What makes my approach different is the combination of creativity, strategy,
                    technical skill, resilience, and real-world experience I bring to the work. I'm
                    constantly learning, evolving, and finding better ways to solve problems,
                    because I believe great design should do more than look good — it should
                    communicate clearly, support a purpose, and leave a lasting impression.
                  </p>
                </div>
              </Reveal>
              {/* Portrait */}
              <Reveal delay={0.05} className="order-1 md:order-2">
                <div className="relative md:sticky md:top-28 md:h-full lg:h-auto">
                  <div
                    aria-hidden
                    className="absolute -inset-3 rounded-[1.25rem] bg-gradient-to-br from-crg-purple/40 via-transparent to-crg-magenta/40 blur-md"
                  />
                  <div className="relative aspect-[4/5] md:h-full md:aspect-auto lg:h-auto lg:aspect-[4/5] rounded-[1.25rem] overflow-hidden ring-1 ring-white/15 shadow-[0_40px_90px_-35px_rgba(138,43,226,0.65)]">
                    <Image
                      src={PORTRAIT_URL}
                      alt="Tanesha — designer and developer behind Concrete Rose Graphics"
                      fittingType="fill"
                      focalPointY={0.35}
                      className="w-full h-full"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-crg-charcoal/55 via-transparent to-transparent"
                    />
                  </div>
                  {/* floating stat badge */}
                  <div className="absolute -bottom-5 right-4 md:-right-6 glass rounded-xl px-5 py-3.5 flex items-center gap-3">
                    <div className="flex flex-col leading-none">
                      <span className="font-display text-3xl text-gradient-accent font-bold leading-[0.85]">5+</span>
                      <span className="text-[0.5rem] uppercase tracking-[0.22em] text-white/65 mt-1">Years</span>
                    </div>
                    <span className="text-[0.58rem] uppercase tracking-[0.22em] text-white/65 leading-[1.4]">
                      Designing &amp;<br />Developing
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <p className="mt-10 lg:mt-8 text-base lg:text-xl text-white/70 leading-relaxed">
                My career lives at the intersection of creativity, technology, and people. As a
                Graphic Designer and Front-End Developer, I bring both visual thinking and technical
                execution to every project, using tools and technologies such as React, Next.js,
                TypeScript, JavaScript, Tailwind CSS, HTML, CSS, and AI-powered design and
                development tools to build experiences that are functional, engaging, and designed
                to deliver a strong user experience.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-10 lg:mt-8 text-base lg:text-xl text-white/85 leading-relaxed">
                Through <span className="text-gradient-accent font-semibold">{BRAND.name}</span>, I
                bring design, development, storytelling, strategy, and creativity together under
                one roof to help businesses turn ideas into strong, professional brands and
                digital experiences. Whether the project starts with a logo, a campaign, a
                website, or an application, my goal is to create work that feels intentional,
                reflects the vision behind the brand, and gives clients something they can feel
                confident putting into the world.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5">
                {PILLARS.map((p) => (
                  <span
                    key={p}
                    className="text-[0.62rem] uppercase tracking-[0.2em] text-white/75"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <CtaButton to="/contact" variant="primary">
                  Work With Me
                </CtaButton>
              </div>
            </Reveal>
          </div>
          <div className="fracture-line mx-auto max-w-7xl mt-16 md:mt-20" aria-hidden />
        </section>

        {/* Philosophy */}
        <section className="relative py-14 md:py-20 concrete-surface overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute top-10 left-[-8%] w-[420px] h-[420px] blur-[150px] opacity-25"
            style={{ background: "radial-gradient(circle, #8A2BE2, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionHeading lead="Design" accent="Philosophy." className="mb-10" />
            </Reveal>
            <div className="space-y-6">
              {PHILOSOPHY.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="relative glass rounded-2xl px-6 md:px-9 py-6 md:py-8 transition-transform duration-300 hover:-translate-y-1">
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-crg-purple to-crg-magenta"
                    />
                    <p className="font-display text-2xl md:text-4xl leading-[1.25] text-white/90 max-w-3xl">
                      {p}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Backgrounds */}
        <section className="relative py-14 md:py-20 bg-crg-charcoal overflow-hidden">
          {/* layered grid backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(244,244,244,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,244,0.035) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 80%)",
            }}
          />
          {/* ambient glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[360px] blur-[140px] opacity-25 animate-glow-pulse"
            style={{ background: "radial-gradient(ellipse, #8A2BE2, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-[-10%] w-[480px] h-[480px] blur-[150px] opacity-20 animate-glow-pulse"
            style={{ background: "radial-gradient(circle, #b15eff, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-1/4 left-[-6%] w-[380px] h-[380px] blur-[140px] opacity-20 animate-glow-pulse"
            style={{ background: "radial-gradient(circle, #8A2BE2, transparent 70%)" }}
          />
          {/* floating particles */}
          <div aria-hidden className="pointer-events-none absolute top-20 right-[14%] w-2.5 h-2.5 rounded-full bg-crg-magenta blur-[2px] animate-float" style={{ boxShadow: "0 0 24px 6px rgba(177,94,255,0.55)" }} />
          <div aria-hidden className="pointer-events-none absolute bottom-24 left-[10%] w-2 h-2 rounded-full bg-[#b15eff] blur-[2px] animate-float-slow" style={{ boxShadow: "0 0 22px 5px rgba(177,94,255,0.5)" }} />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionHeading lead="The" accent="Background." className="mb-10" />
            </Reveal>
            <div className="grid gap-8 md:grid-cols-2">
              {BACKGROUNDS.map((b, i) => {
                const Icon = b.icon;
                return (
                  <Reveal key={b.kicker} delay={i * 0.12}>
                    <div className="group relative h-full glass rounded-2xl p-7 md:p-9 overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crg-purple via-crg-magenta to-transparent opacity-80"
                      />
                      <div className="flex items-center justify-between mb-5">
                        <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-crg-purple/30 to-crg-magenta/30 ring-1 ring-white/15">
                          <Icon className="relative w-6 h-6 text-white" />
                          <div aria-hidden className="absolute inset-0 rounded-xl blur-md bg-gradient-to-br from-crg-purple/40 to-crg-magenta/40 opacity-50 group-hover:opacity-90 transition-opacity duration-500" />
                        </div>
                        <span aria-hidden className="font-display text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-300">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-3xl md:text-4xl uppercase tracking-tight text-white mb-5">
                        <span className="text-gradient-accent">{b.kicker}</span>
                      </h3>
                      <p className="text-white/70 leading-relaxed">{b.text}</p>
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -bottom-16 -right-16 w-44 h-44 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ background: "radial-gradient(circle, #8A2BE2, transparent 70%)" }}
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="relative py-14 md:py-20 concrete-surface overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[360px] blur-[150px] opacity-20"
            style={{ background: "radial-gradient(ellipse, #8A2BE2, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionHeading lead="The" accent="Journey." className="mb-10" />
            </Reveal>
            <div className="relative space-y-2 pl-4 md:pl-6">
              {/* vertical rail */}
              <span
                aria-hidden
                className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-crg-purple via-crg-magenta/60 to-transparent"
              />
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.1}>
                  <div className="relative grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-7 group">
                    {/* node */}
                    <span
                      aria-hidden
                      className="absolute -left-4 md:-left-7 top-9 w-3 h-3 rounded-full bg-crg-magenta ring-4 ring-crg-magenta/15 shadow-[0_0_18px_rgba(177,94,255,0.7)]"
                    />
                    <span className="font-display font-extrabold text-3xl md:text-5xl text-gradient-accent">{t.year}</span>
                    <div className="border-t border-white/10 pt-6 group-hover:border-crg-magenta/40 transition-colors duration-300">
                      <h3 className="font-display font-semibold text-xl md:text-2xl uppercase tracking-tight mb-2">{t.title}</h3>
                      <p className="text-white/65 leading-relaxed max-w-xl">{t.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="relative py-14 md:py-20 bg-crg-charcoal overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(244,244,244,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,244,0.035) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 80%)",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <SectionHeading lead="Tools &amp;" accent="Technologies." center className="mb-10" />
            </Reveal>
          </div>
          <div className="relative">
            {/* edge fades */}
            <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-crg-charcoal to-transparent" />
            <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-crg-charcoal to-transparent" />
            <Marquee items={TECH_STACK} duration={50} />
          </div>
        </section>

        {/* Differentiator */}
        <section className="relative py-16 md:py-24 concrete-surface overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[440px] blur-[160px] opacity-30"
            style={{ background: "radial-gradient(ellipse, #b15eff, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8 text-center">
            <Reveal>
              <h2 className="font-display font-semibold uppercase leading-[0.95] tracking-tight text-[clamp(1.8rem,5vw,3.5rem)] mb-6">
                <span className="text-white">Why </span>
                <span className="text-gradient-accent">CRG.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="glass rounded-3xl px-7 md:px-12 py-10 md:py-14">
                <p className="text-white/75 leading-relaxed max-w-2xl mx-auto text-lg">
                  Working with Concrete Rose Graphics means getting a creative partner who understands
                  both the visual impact and the functionality behind a strong brand. Every project is
                  approached with intention, strategy, and attention to detail so the final result
                  feels polished, professional, and uniquely yours.
                </p>
                <div className="mt-9">
                  <CtaButton to="/contact" variant="primary">
                    Start a Project
                  </CtaButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}