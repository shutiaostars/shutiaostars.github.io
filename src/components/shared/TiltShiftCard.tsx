import { useModal } from "../../context/ModalContext";
import ExifPill from "./ExifPill";

interface TiltShiftCardProps {
  src: string;
  alt: string;
  title: string;
  exif?: string[];
  staggerIndex?: number;
}

export default function TiltShiftCard({
  src,
  alt,
  title,
  exif = [],
  staggerIndex = 0,
}: TiltShiftCardProps) {
  const { openLightbox } = useModal();

  return (
    <div
      className="narrative-card rounded-sm overflow-hidden cursor-pointer bg-deep chapter-reveal"
      style={{ transitionDelay: `${staggerIndex * 0.1}s` }}
      onClick={() => openLightbox({ src, alt, caption: title })}
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover block"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(1,9,20,0.85)] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 z-[2]">
          <span className="font-mono text-[0.55rem] tracking-[0.15em] text-star-dim uppercase">
            Tilt-Shift
          </span>
          <h4 className="font-display text-base font-normal text-white mt-1">
            {title}
          </h4>
          {exif.length > 0 && (
            <div className="flex gap-2 mt-2">
              {exif.map((e) => (
                <ExifPill key={e} variant="light">
                  {e}
                </ExifPill>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
