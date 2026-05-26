import { useState, useRef, useEffect } from "react";
import ChapterHeader from "../shared/ChapterHeader";
import IntroBlock from "../shared/IntroBlock";
import NarrativeCard from "../shared/NarrativeCard";
import ViewAllButton from "../shared/ViewAllButton";
import StatBlock from "../shared/StatBlock";
import { chapter1Featured, chapter1Hidden, chapter1Stats } from "../../data/chapter1";
import { useModal } from "../../context/ModalContext";

export default function ChapterOne() {
  const [viewAllOpen, setViewAllOpen] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const { openLightbox } = useModal();

  useEffect(() => {
    if (viewAllOpen && gridRef.current) {
      const cards = gridRef.current.querySelectorAll<HTMLElement>(".narrative-card");
      cards.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = `opacity 0.5s ${i * 0.05}s ease, transform 0.5s ${i * 0.05}s cubic-bezier(0.16,1,0.3,1)`;
        requestAnimationFrame(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
      });
    }
  }, [viewAllOpen]);

  return (
    <section id="chapter1" className="relative z-[1]">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3rem)] py-[clamp(6rem,14vw,11rem)]">
        <ChapterHeader
          chapterNumber="I"
          label="Chapter One"
          title="银河星空"
          subtitle="Milky Way · Night Sky"
        />

        <IntroBlock
          label="The Journey"
          text="每年三月到十月，银河核心从南半球升起，横跨北半球的夜空。为了等待完美的拍摄窗口，我在零下十五度的无人区支起三脚架，从日落守到日出。这些照片背后是无数次失败的曝光、冻僵的手指、以及按下快门那一刻的虔诚。"
          staggerIndex={2}
        />

        {/* Featured narrative feed */}
        <div className="chapter-reveal space-y-0" style={{ transitionDelay: "0.35s" }}>
          {(() => {
            let pairCount = 0;
            return chapter1Featured.map((work, i) => {
            const isWideLeft = work.layout === "wide-left";
            const isNarrowRight = work.layout === "narrow-right";

            if (work.layout === "full") {
              return (
                <div key={work.id} className="mb-6">
                  <NarrativeCard
                    src={work.src}
                    alt={work.alt}
                    title={work.title}
                    description={work.description}
                    exif={work.exif}
                    number={work.number}
                    objectPosition={work.objectPosition}
                    maxHeight="70vh"
                  />
                </div>
              );
            }

            const nextWork = chapter1Featured[i + 1];
            const isPaired = isWideLeft && nextWork?.layout === "narrow-right";

            if (isWideLeft && isPaired) {
              pairCount++;
              const isFirstPair = pairCount === 1;
              return (
                <div key={`pair-${work.id}`} className={`grid grid-cols-1 gap-4 mb-6 ${isFirstPair ? "md:grid-cols-5" : "md:grid-cols-4"}`}>
                  <div className="md:col-span-3">
                    <NarrativeCard
                      src={work.src}
                      alt={work.alt}
                      title={work.title}
                      description={work.description}
                      exif={work.exif}
                      number={work.number}
                      objectPosition={work.objectPosition}
                      minHeight={isFirstPair ? "360px" : "320px"}
                      maxHeight={isFirstPair ? "60vh" : "55vh"}
                    />
                  </div>
                  <div className={isFirstPair ? "md:col-span-2" : "md:col-span-1"}>
                    <NarrativeCard
                      src={nextWork!.src}
                      alt={nextWork!.alt}
                      title={nextWork!.title}
                      description={nextWork!.description}
                      exif={nextWork!.exif}
                      number={nextWork!.number}
                      objectPosition={nextWork!.objectPosition}
                      minHeight={isFirstPair ? "360px" : "320px"}
                    />
                  </div>
                </div>
              );
            }

            if (isNarrowRight) return null;

            return null;
            });
          })()}
        </div>

        {/* View all toggle */}
        <ViewAllButton open={viewAllOpen} onClick={() => setViewAllOpen(!viewAllOpen)} />

        {/* Hidden full gallery */}
        {viewAllOpen && (
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {chapter1Hidden.map((work) => (
              <div
                key={work.id}
                className="narrative-card rounded-sm overflow-hidden cursor-pointer bg-deep relative"
                onClick={() => openLightbox({ src: work.src, alt: work.alt, caption: work.title })}
              >
                <img
                  src={work.src}
                  alt={work.alt}
                  className="w-full block object-cover"
                  style={{ aspectRatio: "4/3", objectPosition: "center 40%" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(1,9,20,0.85)] via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-[2] translate-y-2 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-base font-normal text-white">{work.title}</h3>
                  <p className="font-mono text-[0.6rem] text-star-dim mt-1">{work.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Location stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center chapter-reveal">
          <div>
            <p className="font-mono text-[0.6rem] tracking-[0.25em] text-star-dim uppercase mb-3">
              Location
            </p>
            <p className="font-display text-2xl font-normal text-text-body mb-3">
              青海 · 新疆 · 内蒙古 等地
            </p>
            <p className="text-text-dim text-[0.85rem] font-light leading-[1.9]">
              跨越多个省份、八处拍摄地。从海拔 3800 米的石林到零下二十度的冬季河谷，每一次拍摄都是一场与自然和耐心的博弈。
            </p>
          </div>
          <div className="flex gap-8 md:gap-12 justify-center md:justify-end">
            {chapter1Stats.map((stat) => (
              <StatBlock key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
