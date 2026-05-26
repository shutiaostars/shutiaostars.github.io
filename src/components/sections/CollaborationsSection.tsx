import { brandCards, mediaCollabs, lectures } from "../../data/collaborations";

export default function CollaborationsSection() {
  return (
    <section id="collab" className="relative z-[1] bg-void">
      <div className="max-w-[1100px] mx-auto px-[clamp(1.25rem,4vw,3rem)] py-[clamp(5rem,12vw,9rem)]">
        {/* Section header */}
        <div className="story-divider mb-16 relative">
          <div
            className="chapter-number"
            style={{
              WebkitTextStroke: "1px rgba(123,147,168,0.06)",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            C
          </div>
          <div className="relative z-[1] text-center">
            <p className="font-mono text-[0.6rem] tracking-[0.35em] text-star uppercase mb-4 chapter-reveal">
              Collaborations
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-normal text-text-body tracking-[-0.005em] mb-5 chapter-reveal" style={{ transitionDelay: "0.1s" }}>
              合作案例
            </h2>
            <p className="text-text-dim text-[0.95rem] font-light leading-[2] max-w-[520px] mx-auto chapter-reveal" style={{ transitionDelay: "0.2s" }}>
              与影像科技品牌的深度合作，在极限环境中呈现产品核心性能
            </p>
          </div>
        </div>

        {/* Brand cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {brandCards.map((card, i) => (
            <div
              key={card.id}
              className="chapter-reveal group bg-[rgba(123,147,168,0.03)] border border-[rgba(123,147,168,0.06)] rounded-sm overflow-hidden transition-all duration-500 hover:border-[rgba(123,147,168,0.15)] hover:bg-[rgba(123,147,168,0.05)]"
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-[1.05rem] font-medium text-text-body mb-2">
                  {card.name}
                </h3>
                <p className="text-text-dim text-[0.8rem] font-light leading-relaxed mb-3">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2.5 py-0.5 text-[0.65rem] font-mono tracking-[0.04em] text-star-dim bg-[rgba(123,147,168,0.06)] border border-[rgba(123,147,168,0.08)] rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media collaborations */}
        <div className="chapter-reveal text-center mb-16" style={{ transitionDelay: "0.15s" }}>
          <h3 className="font-display text-[1.3rem] font-normal text-text-body mb-6">
            媒体供稿与合作
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {mediaCollabs.map((name) => (
              <span
                key={name}
                className="inline-block px-5 py-2 text-[0.8rem] text-star-dim bg-[rgba(123,147,168,0.04)] border border-[rgba(123,147,168,0.08)] rounded-sm font-light tracking-[0.04em] transition-all duration-300 hover:text-text-body hover:border-[rgba(123,147,168,0.2)]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Lecture cards */}
        <div className="flex flex-col gap-6">
          {lectures.map((lecture, i) => (
            <div
              key={lecture.id}
              className="chapter-reveal group grid grid-cols-1 sm:grid-cols-2 bg-[rgba(123,147,168,0.03)] border border-[rgba(123,147,168,0.06)] rounded-sm overflow-hidden transition-all duration-500 hover:border-[rgba(123,147,168,0.15)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]"
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="aspect-[4/3] sm:aspect-auto overflow-hidden">
                <img
                  src={lecture.image}
                  alt={lecture.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <strong className="font-display text-[1rem] font-medium text-star mb-1.5 block">
                  {lecture.title}
                </strong>
                <p className="text-text-dim text-[0.85rem] font-light leading-[1.9] whitespace-pre-line">
                  {lecture.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
