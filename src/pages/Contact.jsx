import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/data/site";

export default function Contact() {
  const reduce = useReducedMotion();
  usePageMeta({
    title: "Contact — Concrete Rose Graphics",
    description:
      "Start a project with Concrete Rose Graphics. Send your project details and let's create something great together.",
  });

  const quickCards = [
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/[^+\d]/g, "")}` },
    { icon: MapPin, label: "Location", value: CONTACT.address, href: null },
  ];

  return (
    <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 concrete-surface overflow-hidden">
          <div
            className="pointer-events-none absolute -top-10 left-[12%] w-[520px] h-[520px] blur-[150px] opacity-25"
            style={{ background: "radial-gradient(circle, #8A2BE2, transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute top-16 right-[8%] w-[420px] h-[420px] blur-[150px] opacity-20"
            style={{ background: "radial-gradient(circle, #b15eff, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight">
                <span className="text-white">Let's </span>
                <span className="text-gradient-accent">Connect.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-white/65 leading-relaxed">
                Have a brand to build, a site to launch, or a campaign to bring to life? Tell us about it —
                let's make something unforgettable together.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Form + Social */}
        <section className="relative py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
            <Reveal className="min-w-0">
              <div className="glass rounded-2xl p-6 md:p-10 w-full min-w-0">
                <h2 className="font-display text-2xl md:text-3xl text-white mb-2">Start a Project</h2>
                <p className="text-white/55 text-sm mb-8">
                  Fill out the form below and we'll get back to you within 1–2 business days.
                </p>
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.15} className="min-w-0">
              <div className="space-y-6 lg:pt-2 min-w-0">
                <div>
                  <h3 className="text-[0.7rem] uppercase tracking-[0.25em] text-crg-magenta mb-4">Follow the Studio</h3>
                  <ul className="space-y-3">
                    {CONTACT.social.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between border-b border-white/10 pb-3 hover:border-crg-magenta transition-colors"
                        >
                          <span className="text-white/80 group-hover:text-white transition-colors">{s.label}</span>
                          <span className="text-sm text-white/40 group-hover:text-crg-magenta transition-colors">{s.handle}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass rounded-xl p-6">
                  <p className="text-white/60 leading-relaxed text-sm">
                    Prefer email? Send the details of your project directly and we'll get back to you within
                    1–2 business days.
                  </p>
                </div>

                <div className="rounded-xl p-6 border border-crg-magenta/50 bg-gradient-to-br from-crg-magenta/15 to-crg-purple/10 shadow-[0_0_36px_-12px_rgba(177,94,255,0.45)]">
                  <p className="font-display text-lg text-crg-magenta mb-1">Currently booking new projects.</p>
                  <p className="text-white/55 text-sm">Limited spots available each month — reach out early.</p>
                </div>

                <div className="space-y-3 pt-2">
                  {quickCards.map((c) => {
                    const Icon = c.icon;
                    const content = (
                      <>
                        <span className="w-10 h-10 rounded-full bg-crg-purple/15 border border-crg-purple/40 flex items-center justify-center text-crg-magenta shrink-0">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[0.6rem] uppercase tracking-[0.25em] text-white/45">{c.label}</span>
                          <span className="block text-white/85 truncate group-hover:text-white transition-colors text-sm">{c.value}</span>
                        </span>
                        {c.href && <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-crg-magenta transition-colors shrink-0" />}
                      </>
                    );
                    const cls = "group glass rounded-xl p-4 flex items-center gap-4 hover:ring-crg-purple/40 transition-all";
                    return c.href ? (
                      <a key={c.label} href={c.href} className={cls}>
                        {content}
                      </a>
                    ) : (
                      <div key={c.label} className={cls}>
                        {content}
                      </div>
                    );
                  })}
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