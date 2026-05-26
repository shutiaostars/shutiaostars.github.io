import type { Artwork } from "./chapter1";

export const deepSpaceImage: Artwork = {
  id: "c2-ds1",
  src: "assets/deepspace_comet.jpg",
  alt: "C/2025 R3 彗星",
  title: "C/2025 R3 (Panstarrs)",
  location: "深空天体",
  description: "赤道仪跟踪，单帧 60s × 45 张叠加。离子尾与尘埃尾清晰可辨，在深空背景下划出璀璨痕迹。",
  exif: ["350mm", "f/6.3", "ISO 1600", "60s × 45"],
  objectPosition: "center 50%",
};

export const tiltShiftWorks: Artwork[] = [
  {
    id: "c2-ts1",
    src: "assets/mw_M31移轴.jpg",
    alt: "M31移轴",
    title: "M31 仙女座星系",
    location: "Tilt-Shift",
    description: "",
    exif: ["50mm", "f/1.4"],
  },
  {
    id: "c2-ts2",
    src: "assets/mw_冰与火移轴.jpg",
    alt: "冰与火移轴",
    title: "冰与火",
    location: "Tilt-Shift",
    description: "",
    exif: ["50mm", "f/1.4"],
  },
  {
    id: "c2-ts3",
    src: "assets/mw_礁湖星云移轴.jpg",
    alt: "礁湖星云移轴",
    title: "礁湖星云",
    location: "Tilt-Shift",
    description: "",
    exif: ["50mm", "f/1.4"],
  },
];
