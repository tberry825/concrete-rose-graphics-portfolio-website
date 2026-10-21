export default function SectionLabel({ children, className = "" }) {
  return (
    <div
      className={`flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#dc9cff] ${className}`}
    >
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-crg-magenta shadow-[0_0_12px_rgba(177,94,255,0.8)]" />
      {children}
    </div>
  );
}