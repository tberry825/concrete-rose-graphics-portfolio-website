import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LOGO_URL, NAV_LINKS } from "@/data/site";
import CtaButton from "@/components/ui/CtaButton";
import TopBar from "@/components/TopBar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <div className="noise-grain" aria-hidden="true" />
      <motion.header
        initial={reduce ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-crg-charcoal/85 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-crg-charcoal/90 via-crg-charcoal/40 to-transparent md:hidden transition-opacity duration-500 ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
        />
        <TopBar scrolled={scrolled} />
        <nav className={`relative mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
          <Link to="/" aria-label="Concrete Rose Graphics home" className="shrink-0">
            <img
              src={LOGO_URL}
              alt="Concrete Rose Graphics logo"
              className={`transition-all duration-500 ${scrolled ? "h-9" : "h-11"} w-auto`}
            />
          </Link>

          <div className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group relative text-sm font-semibold tracking-wide text-white/90 hover:text-white transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-crg-magenta transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
            <CtaButton to="/contact" className="ml-2">
              Start a Project
            </CtaButton>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-crg-charcoal/95 backdrop-blur-xl md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <img src={LOGO_URL} alt="Concrete Rose Graphics" className="h-10 w-auto" />
              <button className="p-2 text-white" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="w-7 h-7" />
              </button>
            </div>
            <div className="flex flex-col gap-2 px-5 mt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={reduce ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    className="block py-4 text-4xl font-display font-semibold tracking-tight border-b border-white/5 text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-5 mt-10">
              <CtaButton to="/contact" className="w-full">
                Start a Project
              </CtaButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}