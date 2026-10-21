import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const SCROLL_THRESHOLD = 600;

export default function FloatingBackPill({ to, label }) {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? false : { opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-5 left-5 z-40"
        >
          <Link
            to={to}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#b15eff] bg-[#8A2BE2] text-white text-sm font-medium shadow-[0_9px_28px_rgba(138,43,226,0.45)] hover:bg-[#a043f0] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {label}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}