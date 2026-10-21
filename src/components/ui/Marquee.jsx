export default function Marquee({ items, className = "", duration = 40 }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex w-max"
        style={{ animation: `marquee ${duration}s linear infinite` }}
      >
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="mx-10 text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-white/30 hover:text-crg-magenta transition-colors duration-300"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}