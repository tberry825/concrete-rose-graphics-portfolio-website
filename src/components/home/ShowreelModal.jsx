import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ShowreelModal({ open, onClose, src }) {
  return (
    <AnimatePresence>
      {open && src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] bg-crg-charcoal/90 backdrop-blur-md flex items-center justify-center p-5"
        >
          <button
            onClick={onClose}
            aria-label="Close video"
            className="absolute top-5 right-5 p-2 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-7 h-7" />
          </button>
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl aspect-video border border-white/10 rounded-sm overflow-hidden bg-black shadow-[0_0_120px_-20px_rgba(177,94,255,0.4)]"
          >
            <video src={src} controls autoPlay playsInline className="w-full h-full object-contain" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}