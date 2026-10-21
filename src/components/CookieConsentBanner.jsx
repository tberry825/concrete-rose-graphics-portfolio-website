import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const STORAGE_KEY = "crg_cookie_consent_v1";

// Reads the stored consent choice: "accepted" | "rejected" | null
// Future non-essential scripts (analytics, pixels) should check this before loading.
export function getCookieConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export default function CookieConsentBanner() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem(STORAGE_KEY);
      if (!choice) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 md:px-6 md:pb-6"
        >
          <div className="glass mx-auto max-w-5xl rounded-2xl px-5 md:px-7 py-4 md:py-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
            <p className="flex-1 text-sm text-white/75 leading-relaxed text-center sm:text-left">
              We use strictly necessary cookies to operate this site and load fonts. We only set
              non-essential cookies (such as analytics) with your consent. See our{" "}
              <Link
                to="/cookie-policy"
                className="text-crg-magenta hover:text-white transition-colors underline-offset-2 hover:underline"
              >
                Cookie Policy
              </Link>
              .
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => choose("rejected")}
                className="px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] rounded-md bg-white/5 border border-white/20 text-white/80 backdrop-blur-md hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={() => choose("accepted")}
                className="px-6 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] rounded-md bg-[#8A2BE2] text-white border border-[#b15eff] hover:bg-[#a043f0] hover:shadow-[0_9px_28px_rgba(138,43,226,0.45)] transition-all duration-300"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}