import { usePageMeta } from "@/hooks/usePageMeta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaButton from "@/components/ui/CtaButton";
import { PRICING_SECTIONS, ADDONS, FUNERAL_PROGRAMS, PRICING_NOTICE } from "@/data/pricing";

export default function Pricing() {
  usePageMeta({
    title: "Services and Prices — Concrete Rose Graphics",
    description:
      "Pricing and investment for Concrete Rose Graphics services. Every project is scoped individually.",
    robots: "noindex, nofollow",
  });

  return (
    <div>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 md:pt-36 pb-8 md:pb-10 concrete-surface overflow-hidden">
          <div
            className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] blur-[140px] opacity-20"
            style={{ background: "radial-gradient(circle, #8A2BE2, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <h1 className="font-display font-semibold uppercase leading-[0.92] tracking-tight text-[clamp(2.2rem,6.5vw,4.5rem)]">
              <span className="block text-white">Services and</span>
              <span className="block text-gradient-accent">Prices.</span>
            </h1>
            <div>
              <p className="mt-6 text-white/60 leading-relaxed">
                Transparent starting points for every service. Every project is scoped individually
                to fit your goals, timeline, and budget.
              </p>
              <p className="mt-4 text-xs text-white/45 leading-relaxed">
                All prices are subject to change according to the scope of the project and discussion
                between client and designer. These are starting prices.
              </p>
            </div>
          </div>
        </section>

        {/* Price sections */}
        {PRICING_SECTIONS.map((section) => (
          <section key={section.key} className="relative py-10 md:py-14 bg-crg-charcoal">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div>
                <div className="mb-8 md:mb-10">
                  <h2 className="font-display font-semibold uppercase tracking-tight text-2xl md:text-3xl text-white">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm text-white/50">{section.subtitle}</p>
                  <div className="fracture-line mt-5" />
                </div>
              </div>
              <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((p) => (
                  <div key={p.name}>
                    <div className="group relative h-full p-7 md:p-8 border border-white/10 rounded-sm bg-gradient-to-b from-white/[0.03] to-transparent hover:border-crg-magenta/50 transition-colors duration-300 flex flex-col">
                      <h3 className="font-display font-semibold uppercase tracking-tight text-xl text-white">
                        {p.name}
                      </h3>
                      <p className="mt-4 font-display font-extrabold text-4xl text-gradient-accent">
                        {p.price}
                      </p>
                      <ul className="mt-6 space-y-2.5 flex-1">
                        {p.includes.map((inc, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-white/65">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-crg-magenta shrink-0" />
                            {inc}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7">
                        <CtaButton to="/contact" variant="outline" className="w-full">
                          Request a Quote
                        </CtaButton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Add-ons */}
        <section className="relative py-10 md:py-14 bg-crg-charcoal">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div>
              <div className="mb-8 md:mb-10">
                <h2 className="font-display font-semibold uppercase tracking-tight text-2xl md:text-3xl text-white">
                  Add-Ons
                </h2>
                <p className="mt-2 text-sm text-white/50">Charged separately, added to any package.</p>
                <div className="fracture-line mt-5" />
              </div>
            </div>
            <div>
              <div className="border border-white/10 rounded-sm overflow-hidden">
                {ADDONS.map((a, i) => (
                  <div
                    key={a.feature}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-6 px-6 py-5 ${
                      i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                    } ${i !== ADDONS.length - 1 ? "border-b border-white/10" : ""}`}
                  >
                    <span className="text-sm font-medium text-white/85">{a.feature}</span>
                    <span className="text-sm text-white/60 sm:text-right">{a.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Funeral programs */}
        <section className="relative py-10 md:py-14 bg-crg-charcoal">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div>
              <div className="mb-8 md:mb-10">
                <h2 className="font-display font-semibold uppercase tracking-tight text-2xl md:text-3xl text-white">
                  Funeral Programs
                </h2>
                <p className="mt-2 text-sm text-crg-magenta/90">Design only — printing is separate and not included in these prices.</p>
                <div className="fracture-line mt-5" />
              </div>
            </div>
            <div>
              <div className="p-7 md:p-8 border border-white/10 rounded-sm bg-gradient-to-b from-white/[0.03] to-transparent">
                <p className="text-white/65 leading-relaxed max-w-2xl">{FUNERAL_PROGRAMS.note}</p>
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-white/15">
                        {FUNERAL_PROGRAMS.columns.map((c) => (
                          <th key={c} className="py-3 pr-4 last:pr-0 text-[0.65rem] uppercase tracking-[0.18em] text-crg-magenta whitespace-nowrap align-bottom">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {FUNERAL_PROGRAMS.rows.map((r, i) => (
                        <tr
                          key={r.option}
                          className={`align-top ${i % 2 === 0 ? "bg-white/[0.02]" : ""} border-b border-white/5`}
                        >
                          <td className="py-4 pr-4 text-sm font-semibold text-white/90 whitespace-nowrap">
                            {r.option}
                          </td>
                          <td className="py-4 pr-4 text-sm text-white/65 whitespace-nowrap">{r.size}</td>
                          <td className="py-4 pr-4 text-sm text-white/60">{r.desc}</td>
                          <td className="py-4 pr-0 text-sm font-medium text-white/85 whitespace-nowrap">{r.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-7 max-w-xs">
                  <CtaButton to="/contact" variant="outline" className="w-full">
                    Request a Quote
                  </CtaButton>
                </div>
              </div>
            </div>

            <div>
              <p className="mt-10 text-center text-white/55 max-w-2xl mx-auto leading-relaxed">
                {PRICING_NOTICE}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}