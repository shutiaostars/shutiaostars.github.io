import { aboutBio, aboutStats } from "../../data/about";
import StatBlock from "../shared/StatBlock";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-[1] bg-void">
      <div className="max-w-[1100px] mx-auto px-[clamp(1.25rem,4vw,3rem)] py-[clamp(5rem,12vw,9rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text content */}
          <div className="chapter-reveal">
            <p className="font-mono text-[0.6rem] tracking-[0.35em] text-star uppercase mb-4">
              About
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-normal text-text-body tracking-[-0.005em] mb-6">
              关于薯条
            </h2>
            <p className="text-text-dim text-[0.95rem] font-light leading-[2] mb-8">
              {aboutBio.text}
            </p>
            <div className="flex gap-10 md:gap-14">
              {aboutStats.map((stat) => (
                <StatBlock key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="chapter-reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="relative rounded-sm overflow-hidden border border-[rgba(123,147,168,0.08)]">
              <img
                src={aboutBio.image}
                alt={aboutBio.imageAlt}
                className="w-full block object-cover"
                style={{ aspectRatio: "4/5", objectPosition: "center 30%" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(1,9,20,0.3)] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
