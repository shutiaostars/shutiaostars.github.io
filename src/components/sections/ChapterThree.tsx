import ChapterHeader from "../shared/ChapterHeader";
import IntroBlock from "../shared/IntroBlock";
import TimelapseCard from "../shared/TimelapseCard";
import { timelapses } from "../../data/chapter3";

export default function ChapterThree() {
  return (
    <section id="chapter3" className="relative z-[1]">
      <div className="max-w-[1400px] mx-auto px-[clamp(1.25rem,4vw,3rem)] py-[clamp(6rem,14vw,11rem)]">
        <ChapterHeader
          chapterNumber="III"
          label="Chapter Three"
          title="延时叙事"
          subtitle="Timelapse · Motion · Time"
          chapterStroke="1px rgba(123,147,168,0.08)"
        />

        <IntroBlock
          label="Time in Motion"
          text="延时摄影是第四维度的艺术。一张照片是瞬间的切片，而一段延时则是时间的河流。从日落到银河升起，从子夜到黎明破晓——每一段视频都是数小时、数千次快门的结果。"
          staggerIndex={2}
        />

        {/* Timelapse cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {timelapses.map((tl, i) => (
            <TimelapseCard
              key={tl.id}
              poster={tl.poster}
              videoSrc={tl.videoSrc}
              title={tl.title}
              duration={tl.duration}
              description={tl.description}
              frameCount={tl.frameCount}
              staggerIndex={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
