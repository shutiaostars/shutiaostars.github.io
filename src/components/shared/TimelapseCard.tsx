import { useModal } from "../../context/ModalContext";
import ExifPill from "./ExifPill";

interface TimelapseCardProps {
  poster: string;
  videoSrc: string;
  title: string;
  duration: string;
  description: string;
  frameCount: string;
  staggerIndex?: number;
}

export default function TimelapseCard({
  poster,
  videoSrc,
  title,
  duration,
  description,
  frameCount,
  staggerIndex = 0,
}: TimelapseCardProps) {
  const { openVideo } = useModal();

  return (
    <div
      className="narrative-card rounded-sm overflow-hidden cursor-pointer bg-deep relative chapter-reveal"
      style={{ transitionDelay: `${staggerIndex * 0.1}s` }}
      onClick={() => openVideo(videoSrc, title)}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover block"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-full border-2 border-white/70 flex items-center justify-center transition-all duration-400 hover:scale-110 hover:border-white backdrop-blur-sm"
            style={{ boxShadow: "0 0 40px rgba(123,147,168,0.2)" }}
          >
            <div className="w-0 h-0 border-l-[18px] border-t-[11px] border-b-[11px] border-l-white/80 border-t-transparent border-b-transparent ml-1" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="font-display text-lg font-normal text-text-body">
            {title}
          </h3>
          <span className="font-mono text-[0.6rem] text-star-dim">{duration}</span>
        </div>
        <p className="text-text-dim text-[0.8rem] font-light leading-[1.7]">
          {description}
        </p>
        <div className="flex gap-2 mt-3">
          <ExifPill>4K</ExifPill>
          <ExifPill>{frameCount}</ExifPill>
          <ExifPill>25fps</ExifPill>
        </div>
      </div>
    </div>
  );
}
