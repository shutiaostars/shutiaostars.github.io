interface IntroBlockProps {
  label: string;
  text: string;
  staggerIndex?: number;
}

export default function IntroBlock({ label, text, staggerIndex = 0 }: IntroBlockProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-16 md:mb-24">
      <div className="md:col-span-1 chapter-reveal" style={{ transitionDelay: `${staggerIndex * 0.1}s` }}>
        <p className="font-mono text-[0.6rem] tracking-[0.2em] text-star uppercase mb-4">{label}</p>
      </div>
      <div className="md:col-span-2 chapter-reveal" style={{ transitionDelay: `${(staggerIndex + 1) * 0.1}s` }}>
        <p className="text-text-dim text-[0.95rem] font-light leading-[2] max-w-[560px]">{text}</p>
      </div>
    </div>
  );
}
