import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CtaButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  arrow = true,
  type = "button",
  ariaLabel,
  disabled = false,
}) {
  const reduce = useReducedMotion();
  const navigate = useNavigate();

  const base =
    "group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 rounded-md select-none min-h-[44px] disabled:opacity-60 disabled:pointer-events-none";
  const variants = {
    primary:
      "bg-[#8A2BE2] text-white border border-[#b15eff] hover:bg-[#a043f0] hover:shadow-[0_9px_28px_rgba(138,43,226,0.45)] hover:-translate-y-0.5",
    outline:
      "bg-white/5 border border-white/20 text-crg-offwhite backdrop-blur-md hover:bg-crg-magenta/15 hover:border-crg-magenta/60 hover:shadow-[0_0_24px_rgba(177,94,255,0.27)] hover:-translate-y-0.5",
    light:
      "bg-crg-offwhite text-crg-charcoal hover:shadow-[0_0_40px_-10px_rgba(244,244,244,0.5)] hover:-translate-y-0.5",
    ghost: "text-crg-offwhite hover:text-crg-magenta",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const tapProps = reduce
    ? {}
    : { whileTap: { scale: 0.95 }, transition: { type: "spring", stiffness: 400, damping: 17 } };

  const handle = (e) => {
    if (to) navigate(to);
    onClick?.(e);
  };

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        disabled={disabled}
        className={`${base} ${variants[variant]} ${className}`}
        {...tapProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
      onClick={handle}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
      {...tapProps}
    >
      {content}
    </motion.button>
  );
}