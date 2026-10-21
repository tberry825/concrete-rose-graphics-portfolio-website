// Two-tone heading matching the site's section headings:
// white lead words + a gradient-accent final word.
export default function GradientHeading({ text, as: Tag = "h2", className = "" }) {
  const words = (text || "").trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return <Tag className={className} />;
  const lead = words.slice(0, -1).join(" ");
  const accent = words[words.length - 1];
  return (
    <Tag className={className}>
      {lead ? (
        <>
          <span className="text-white">{lead} </span>
          <span className="text-gradient-accent">{accent}</span>
        </>
      ) : (
        <span className="text-gradient-accent">{accent}</span>
      )}
    </Tag>
  );
}