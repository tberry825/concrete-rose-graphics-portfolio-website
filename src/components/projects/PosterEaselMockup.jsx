// Compact tripod-easel mockup sized to sit alongside gallery cards.
// Renders the exact poster image unaltered on a small CSS easel.
export default function PosterEaselMockup({ src, alt = "Poster mockup" }) {
  const wood = "linear-gradient(180deg,#7a5230,#4a2f1a)";
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0e1626] via-[#0b1120] to-[#05070d] p-5 pb-10 flex items-end justify-center">
      <div className="relative w-full max-w-[240px]">
        {/* left back leg */}
        <div
          className="absolute w-1.5 rounded-full"
          style={{
            top: -16,
            bottom: -44,
            left: "6%",
            transform: "rotate(7deg)",
            transformOrigin: "top center",
            background: wood,
            boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
          }}
        />
        {/* right back leg */}
        <div
          className="absolute w-1.5 rounded-full"
          style={{
            top: -16,
            bottom: -44,
            right: "6%",
            transform: "rotate(-7deg)",
            transformOrigin: "top center",
            background: wood,
            boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
          }}
        />
        {/* crossbar */}
        <div
          className="absolute h-1.5 rounded-full"
          style={{
            left: "8%",
            right: "8%",
            bottom: 48,
            background: "linear-gradient(90deg,#4a2f1a,#7a5230,#4a2f1a)",
          }}
        />
        {/* poster (exact image) */}
        <div
          className="relative bg-white p-1.5 rounded-sm shadow-[0_20px_40px_-12px_rgba(0,0,0,0.7)]"
          style={{ transform: "rotate(-0.6deg)" }}
        >
          <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" />
        </div>
        {/* ground shadow */}
        <div className="mx-auto mt-2 h-2 w-3/4 rounded-full bg-black/40 blur-md" />
      </div>
    </div>
  );
}