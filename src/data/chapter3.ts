export interface Timelapse {
  id: string;
  poster: string;
  videoSrc: string;
  title: string;
  duration: string;
  description: string;
  frameCount: string;
  location: string;
}

export const timelapses: Timelapse[] = [
  {
    id: "tl-01",
    poster: "assets/timelapse_crocodile.jpg",
    videoSrc: "assets/videos/crocodile.mp4",
    title: "鳄鱼湾银河",
    duration: "00:32",
    description: "新疆鳄鱼湾 · 6小时拍摄 · 银河从升起到高悬的完整轨迹",
    frameCount: "720 frames",
    location: "新疆鳄鱼湾",
  },
  {
    id: "tl-02",
    poster: "assets/timelapse_meili.jpg",
    videoSrc: "assets/videos/meili.mp4",
    title: "梅里雪山日照金山",
    duration: "00:18",
    description: "云南梅里雪山 · 日出前30分钟开始拍摄 · 日照金山全过程",
    frameCount: "450 frames",
    location: "云南梅里雪山",
  },
  {
    id: "tl-03",
    poster: "assets/timelapse_muztagh.jpg",
    videoSrc: "assets/videos/muztagh_daynight.mp4",
    title: "慕士塔格峰日转夜",
    duration: "00:45",
    description: "新疆慕士塔格峰 · 8小时不间断 · 日落→星空→银河→日出",
    frameCount: "1200 frames",
    location: "新疆慕士塔格峰",
  },
  {
    id: "tl-04",
    poster: "assets/timelapse_ricefield.jpg",
    videoSrc: "assets/videos/ricefield.mp4",
    title: "月岩山稻田延时",
    duration: "00:22",
    description: "月岩山 · 稻田与星空 · 夏夜蛙鸣中的银河流转",
    frameCount: "550 frames",
    location: "月岩山",
  },
];
