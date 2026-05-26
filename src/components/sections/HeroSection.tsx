import { useParallax } from "../../hooks/useParallax";

export default function HeroSection() {
  const parallaxStyle = useParallax(0.35);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-[1]">
        <img
          src="assets/mw_青海宁缠垭口银河.jpg"
          alt="银河"
          className="w-full h-full object-cover"
          style={{ ...parallaxStyle, objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,9,20,0.2)] via-[rgba(1,9,20,0.5)] to-cosmos" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(1,9,20,0.6) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-[2] max-w-[900px] mx-auto px-6 pt-20 w-full">
        <div className="md:ml-[10%]">
          <p
            className="font-mono text-[0.6rem] tracking-[0.4em] text-star mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            天文摄影 · 星河揽照
          </p>

          <h1
            className="font-display text-[clamp(3rem,8vw,7.5rem)] font-normal leading-[0.92] tracking-[-0.01em] text-text-body mb-3 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            薯条<span className="italic text-star">stars</span>
          </h1>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.55s" }}>
            <p className="font-display italic text-[clamp(1.05rem,2vw,1.4rem)] text-text-dim font-normal tracking-[0.04em] mb-2">
            </p>
            <p className="font-body text-[clamp(0.8rem,1.3vw,0.95rem)] text-text-dim font-light tracking-[0.08em]">
              追逐银河与星光，记录宇宙的静默诗篇
            </p>
          </div>

          <div
            className="w-12 h-px bg-star mb-8 mt-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.65s" }}
          />

          <p
            className="text-text-dim text-[0.85rem] font-light tracking-[0.1em] opacity-0 animate-fade-up"
            style={{ animationDelay: "0.75s" }}
          >
            银河 · 深空 · 暗夜风光
          </p>

          {/* Action buttons */}
          <div
            className="flex gap-4 mt-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.85s" }}
          >
            <a
              href="#chapter1"
              className="inline-flex items-center px-6 py-2.5 border border-star text-star text-[0.8rem] font-medium tracking-[0.04em] rounded-sm no-underline transition-all duration-300 hover:bg-star hover:text-cosmos"
            >
              浏览作品
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-6 py-2.5 border border-[rgba(123,147,168,0.2)] text-text-dim text-[0.8rem] font-medium tracking-[0.04em] rounded-sm no-underline transition-all duration-300 hover:border-star hover:text-star"
            >
              了解更多
            </a>
          </div>

          {/* Scroll prompt */}
          <div
            className="mt-16 opacity-0 animate-fade-up"
            style={{ animationDelay: "1.1s" }}
          >
            <a
              href="#about"
              className="flex items-center gap-3 no-underline text-text-dim text-[0.6rem] tracking-[0.2em] uppercase font-mono transition-colors duration-300 hover:text-star group"
            >
              <span>向下探索</span>
              <span className="inline-block w-8 h-px bg-text-dim group-hover:bg-star transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
