interface ChapterHeaderProps {
  chapterNumber: string;
  label: string;
  title: string;
  subtitle: string;
  chapterStroke?: string;
  staggerIndex?: number;
}

export default function ChapterHeader({
  chapterNumber,
  label,
  title,
  subtitle,
  chapterStroke = "1px rgba(123,147,168,0.12)",
  staggerIndex = 0,
}: ChapterHeaderProps) {
  return (
    <div className="story-divider mb-16 md:mb-24 relative">
      <div
        className="chapter-number"
        style={{ WebkitTextStroke: chapterStroke }}
      >
        {chapterNumber}
      </div>
      <div className="relative z-[1]">
        <p className="font-mono text-[0.6rem] tracking-[0.35em] text-star uppercase mb-4 chapter-reveal">
          {label}
        </p>
        <h2
          className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-normal text-text-body tracking-[-0.005em] mb-5 chapter-reveal"
          style={{ transitionDelay: `${(staggerIndex + 1) * 0.1}s` }}
        >
          {title}
        </h2>
        <p
          className="font-display italic text-[clamp(1rem,1.8vw,1.3rem)] text-text-dim font-normal chapter-reveal"
          style={{ transitionDelay: `${(staggerIndex + 2) * 0.1}s` }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
