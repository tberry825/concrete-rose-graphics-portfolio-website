import { useRef, useState } from "react";
import { VolumeX } from "lucide-react";

/**
 * Video player that defaults to muted and shows a small hint badge
 * prompting the user to click the speaker icon to enable sound.
 * The badge hides once the video is unmuted.
 */
export default function MutedVideoWithHint({ src, poster, className = "" }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative">
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls
        muted={muted}
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
        className={`w-full aspect-video ${className}`}
      />
      {muted && (
        <div className="pointer-events-none absolute bottom-14 right-3 flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm ring-1 ring-white/15">
          <VolumeX className="w-3.5 h-3.5" />
          Click speaker to hear sound
        </div>
      )}
    </div>
  );
}