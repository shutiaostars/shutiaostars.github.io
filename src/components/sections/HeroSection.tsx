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
            PROLOGUE
          </p>

          <h1
            className="font-display text-[clamp(3rem,8vw,7.5rem)] font-normal leading-[0.92] tracking-[-0.01em] text-text-body mb-3 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            薯条<span className="italic text-star">stars</span>
          </h1>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.55s" }}>
            <p className="font-display italic text-[clamp(1.05rem,2vw,1.4rem)] text-text-dim font-normal tracking-[0.04em] mb-2">
              贺意 · He Yi
            </p>
            <p className="font-body text-[clamp(0.8rem,1.3vw,0.95rem)] text-text-dim font-light tracking-[0.08em]">
              天文摄影师 · 星野追光者
            </p>
          </div>

          <div
            className="w-12 h-px bg-star mb-8 mt-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.65s" }}
          />

          <p
            className="text-text-dim text-[0.9rem] font-light leading-[2] max-w-[460px] opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            宇宙中每一束抵达镜头的光，
            <br />
            都穿越了数万光年的黑暗。
            <br />
            这是关于一个追光者的故事。
          </p>

          {/* Scroll prompt */}
          <div
            className="mt-16 opacity-0 animate-fade-up"
            style={{ animationDelay: "1.1s" }}
          >
            <a
              href="#chapter1"
              className="flex items-center gap-3 no-underline text-text-dim text-[0.6rem] tracking-[0.2em] uppercase font-mono transition-colors duration-300 hover:text-star group"
            >
              <span>Begin the Journey</span>
              <span className="inline-block w-8 h-px bg-text-dim group-hover:bg-star transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
