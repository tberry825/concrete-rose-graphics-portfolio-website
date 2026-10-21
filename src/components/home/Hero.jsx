import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const SLIDES = [
  "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/839ae65dd_ChatGPTImageSep15202606_25_46PM.png",
  "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/ecb6b485f_ChatGPTImageSep15202607_25_06PM.png",
  "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/667b0c5f3_ChatGPTImageSep15202609_11_56PM.png",
];

// Tall (9:16) AI-extended versions so subjects stay in frame on mobile
const MOBILE_SLIDES = [
  "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/43b68feee_generated_image.png",
  "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/ecb6b485f_ChatGPTImageSep15202607_25_06PM.png",
  "https://media.base44.com/images/public/6aa974d5b6276f4a026f44f6/d310927e8_generated_image.png",
];

// Per-slide object-position for the tall (portrait/tablet) crop, so off-center
// subjects stay visible instead of side-cropped. Slide 2 is a wide shot with the
// subject full-height at the right edge, so contain it (anchored right) to show
// the whole person rather than cropping them out.
const TALL_POSITIONS = ["center", "right center", "center"];
const TALL_FIT = ["cover", "cover", "cover"];

const SLIDE_DURATION = 14000;

// Use the tall (9:16) slides on any portrait or narrow viewport so subjects
// stay in frame — landscape desktop images crop badly in a tall tablet frame.
function useUseTallSlides() {
  const query = "(max-width: 1024px) and (orientation: portrait), (max-width: 767px)";
  const [tall, setTall] = useState(
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setTall(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return tall;
}

export default function Hero() {
  const reduce = useReducedMotion();
  const useTall = useUseTallSlides();
  const slides = useTall ? MOBILE_SLIDES : SLIDES;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [slides]);

  return (
    <section className="relative w-full overflow-hidden bg-[#171219] text-[#f8f3f7] isolate">
      <div className="relative w-full min-h-[88svh]">
        {/* Carousel slides — crossfade with a slow zoom */}
        <AnimatePresence>
          <motion.img
            key={index}
            src={slides[index]}
            alt=""
            aria-hidden="true"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.22 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 3, ease: "easeInOut" },
              scale: { duration: SLIDE_DURATION / 1000, ease: [0.16, 1, 0.3, 1] },
            }}
            style={
              useTall
                ? { objectPosition: TALL_POSITIONS[index], objectFit: TALL_FIT[index] }
                : undefined
            }
            className={`absolute inset-0 w-full h-full object-cover z-0 ${
              useTall ? "object-center" : "object-center md:object-[center_38%]"
            }`}
          />
        </AnimatePresence>

        {/* Vertical gradient overlay — always on for top/bottom legibility */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg,rgba(12,8,16,0.55) 0%,rgba(12,8,16,0.15) 26%,transparent 55%,rgba(12,8,16,0.92) 100%)",
          }}
        />
        {/* Horizontal gradient — desktop only (text column sits on the left) */}
        <div
          className="absolute inset-0 z-[1] hidden md:block"
          style={{
            background:
              "linear-gradient(90deg,rgba(12,8,16,0.88) 0%,rgba(25,12,35,0.45) 42%,rgba(12,8,16,0.18) 100%)",
          }}
        />
        {/* Light tint on mobile so text stays readable without hiding the image */}
        <div className="absolute inset-0 z-[1] bg-[#0c0810]/40 md:hidden" />

        {/* Subtle particle dot field */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none opacity-[0.18] mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #c084fc 0 1px, transparent 1.5px), radial-gradient(circle at 78% 30%, #fff 0 1px, transparent 1.5px)",
            backgroundSize: "84px 91px, 137px 113px",
          }}
        />

        {/* Content */}
        <div           className="relative z-[4] h-full max-w-7xl mx-auto flex flex-col justify-start pb-16 md:pb-20 px-5 md:px-8 pt-28 md:pt-[218px]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="md:w-[620px]"
          >
            <h1 className="font-hero-display font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.6rem,7vw,4.75rem)]">
              <span className="block">Let's Make</span>
              <span
                className="block text-[#b15eff]"
                style={{ textShadow: "0 0 34px rgba(177,94,255,0.28)" }}
              >
                Your Ideas
              </span>
              <span className="block">Come To Life</span>
            </h1>

            <p className="mt-12 w-full max-w-[475px] text-[15px] md:text-base text-white/75 leading-[1.65] tracking-[0.01em]">
              Creative design and digital experiences built to help brands stand out, connect, and grow.
            </p>

            <div className="flex flex-col items-start gap-[13px] mt-12 md:mt-8 lg:flex-row lg:flex-wrap lg:items-stretch">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center w-[190px] lg:w-auto lg:flex-1 px-5 py-[15px] border border-[#b15eff] bg-[#b15eff] text-[#1b0c18] text-[11px] font-bold uppercase tracking-[0.17em] shadow-[0_10px_28px_rgba(177,94,255,0.22)] transition-all duration-200 hover:shadow-[0_0_24px_rgba(177,94,255,0.4)] active:translate-y-px"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-[190px] lg:w-auto lg:flex-1 px-5 py-[15px] border border-[#b15eff] bg-[#b15eff]/15 text-[#d8b3ff] text-[11px] font-bold uppercase tracking-[0.17em] transition-all duration-200 hover:bg-[#b15eff] hover:text-[#1b0c18] hover:shadow-[0_0_24px_rgba(177,94,255,0.4)] active:translate-y-px"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[5] flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[#b15eff]" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}