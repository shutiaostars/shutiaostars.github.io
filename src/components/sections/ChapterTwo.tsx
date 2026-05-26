import ChapterHeader from "../shared/ChapterHeader";
import IntroBlock from "../shared/IntroBlock";
import TiltShiftCard from "../shared/TiltShiftCard";
import ExifPill from "../shared/ExifPill";
import { deepSpaceImage, tiltShiftWorks } from "../../data/chapter2";
import { useModal } from "../../context/ModalContext";

export default function ChapterTwo() {
  const { openLightbox } = useModal();
  return (
    <section id="chapter2" className="relative z-[1] bg-void">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3rem)] py-[clamp(6rem,14vw,11rem)]">
        <ChapterHeader
          chapterNumber="II"
          label="Chapter Two"
          title="彗星与深空"
          subtitle="Comets · Deep Sky · Tilt-Shift"
          chapterStroke="1px rgba(123,147,168,0.1)"
        />

        <IntroBlock
          label="Beyond the Visible"
          text={`深空天体需要赤道仪精确跟踪、长时间曝光、以及复杂的天文后期处理。而移轴摄影则为这些遥远的星体赋予了一种奇妙的“微缩模型”感——仿佛宇宙也可以被捧在手心。`}
          staggerIndex={2}
        />

        {/* Full-width immersive image */}
        <div className="relative mb-20 chapter-reveal" style={{ transitionDelay: "0.35s" }}>
          <div
            className="narrative-card rounded-sm overflow-hidden cursor-pointer bg-deep"
            onClick={() => openLightbox({ src: deepSpaceImage.src, alt: deepSpaceImage.alt, caption: deepSpaceImage.title })}
          >
            <div className="relative">
              <img
                src={deepSpaceImage.src}
                alt={deepSpaceImage.alt}
                className="w-full block object-cover"
                style={{ aspectRatio: "16/7", objectPosition: deepSpaceImage.objectPosition }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(1,9,20,0.7)] via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Floating caption box */}
            <div className="absolute left-[clamp(1.5rem,5vw,4rem)] bottom-[clamp(1.5rem,5vw,4rem)] max-w-[420px] z-[2]">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-star uppercase">
                Deep Sky Object
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-normal text-white mt-2 mb-3">
                {deepSpaceImage.title}
              </h3>
              <p className="text-[rgba(255,255,255,0.5)] text-[0.85rem] font-light leading-[1.8]">
                {deepSpaceImage.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {deepSpaceImage.exif.map((e) => (
                  <ExifPill key={e} variant="light">
                    {e}
                  </ExifPill>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tilt-shift grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {tiltShiftWorks.map((work, i) => (
            <TiltShiftCard
              key={work.id}
              src={work.src}
              alt={work.alt}
              title={work.title}
              exif={work.exif}
              staggerIndex={i}
            />
          ))}
        </div>

        {/* Technique note */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-12 story-divider chapter-reveal">
          <div className="md:col-span-1">
            <p className="font-mono text-[0.6rem] tracking-[0.2em] text-star uppercase mb-2">
              Technique Note
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-text-dim text-[0.85rem] font-light leading-[2]">
              {`移轴深空是本系列的独特尝试：使用七工匠 50mm F1.4 移轴镜头配合赤道仪，将广袤的星云与星系呈现出"微缩模型"般的视觉效果。这是天文摄影中少有人涉足的领域。`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
