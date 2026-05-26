import { useModal } from "../../context/ModalContext";
import ExifPill from "./ExifPill";

interface NarrativeCardProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
  exif?: string[];
  number?: string;
  objectPosition?: string;
  variant?: "vertical" | "horizontal" | "immersive";
  maxHeight?: string;
  minHeight?: string;
  height?: string;
  showOverlay?: boolean;
}

export default function NarrativeCard({
  src,
  alt,
  title,
  description,
  exif = [],
  number,
  objectPosition = "center 50%",
  variant = "vertical",
  maxHeight,
  minHeight,
  height,
  showOverlay = true,
}: NarrativeCardProps) {
  const { openLightbox } = useModal();

  const handleClick = () => {
    openLightbox({ src, alt, caption: title });
  };

  const isHorizontal = variant === "horizontal" || variant === "immersive";

  return (
    <div
      className="narrative-card rounded-sm overflow-hidden cursor-pointer bg-deep"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full block object-cover"
          style={{
            objectPosition,
            ...(height
              ? { height, minHeight: height, maxHeight: height }
              : {}),
            ...(!height && maxHeight ? { maxHeight } : {}),
            ...(!height && minHeight ? { minHeight } : {}),
            ...(isHorizontal ? {} : { aspectRatio: "auto" }),
          }}
          loading="lazy"
        />
        {showOverlay && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(1,9,20,0.85)] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-[2]">
              {number && (
                <div className="flex items-center gap-2 mb-2">
                  <span className="timeline-dot" />
                  <span className="font-mono text-[0.6rem] text-star-dim tracking-[0.15em] uppercase">
                    {number}
                  </span>
                </div>
              )}
              <h3 className="font-display text-lg md:text-xl font-normal text-white mb-1">
                {title}
              </h3>
              {description && (
                <p className="text-[rgba(255,255,255,0.45)] text-[0.8rem] font-light leading-[1.7] max-w-[480px]">
                  {description}
                </p>
              )}
              {exif.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {exif.map((e) => (
                    <ExifPill key={e} variant="light">
                      {e}
                    </ExifPill>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
