export interface Artwork {
  id: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  description: string;
  exif: string[];
  objectPosition?: string;
}

export interface FeaturedArtwork extends Artwork {
  number: string;
  layout: "full" | "wide-left" | "narrow-right";
}

export const chapter1Featured: FeaturedArtwork[] = [
  {
    id: "c1-01",
    number: "01",
    src: "assets/mw_天峻石林银河拱桥.jpg",
    alt: "天峻石林银河拱桥",
    title: "天峻石林银河拱桥",
    location: "青海",
    description: "青海天峻石林，海拔3800米。零下十度拍摄，银河拱桥横跨石林之巅。",
    exif: ["24mm", "f/1.4", "ISO 6400", "15s × 12"],
    objectPosition: "center 35%",
    layout: "full",
  },
  {
    id: "c1-02",
    number: "02",
    src: "assets/mw_星光灌溉翡翠湖.jpg",
    alt: "星光灌溉翡翠湖",
    title: "星光灌溉翡翠湖",
    location: "青海",
    description: "青海翡翠湖，盐湖倒映星空。夏夜微风，湖面如镜，银河垂落。",
    exif: ["20mm", "f/1.8", "ISO 5000"],
    objectPosition: "center 45%",
    layout: "wide-left",
  },
  {
    id: "c1-03",
    number: "03",
    src: "assets/mw_新疆鳄鱼湾冬季星空.jpg",
    alt: "新疆鳄鱼湾冬季星空",
    title: "鳄鱼湾冬季星空",
    location: "新疆",
    description: "新疆鳄鱼湾，冬季零下二十度。河水蜿蜒，银河低垂天际线。",
    exif: ["16mm", "f/2.8", "ISO 6400"],
    objectPosition: "center 50%",
    layout: "narrow-right",
  },
  {
    id: "c1-04",
    number: "04",
    src: "assets/mw_公格尔九别峰黄道光X猎户座.jpg",
    alt: "公格尔九别峰",
    title: "公格尔九别峰 · 黄道光与猎户座",
    location: "新疆",
    description: "新疆公格尔九别峰，罕见黄道光与猎户座同框。十二月凌晨四点拍摄。",
    exif: ["35mm", "f/1.8", "ISO 3200"],
    objectPosition: "center 40%",
    layout: "wide-left",
  },
  {
    id: "c1-05",
    number: "05",
    src: "assets/mw_天山神秘大峡谷银河.jpg",
    alt: "天山神秘大峡谷",
    title: "天山神秘大峡谷",
    location: "新疆",
    description: "银河从峡谷缝隙中穿行而过",
    exif: ["14mm", "f/2.8"],
    objectPosition: "center 50%",
    layout: "narrow-right",
  },
];

export const chapter1Hidden: Artwork[] = [
  { id: "c1-h01", src: "assets/mw_慕士塔格峰银河.jpg", alt: "慕士塔格峰银河", title: "慕士塔格峰银河", location: "新疆", description: "", exif: [] },
  { id: "c1-h02", src: "assets/mw_茶园拱桥.jpg", alt: "茶园拱桥", title: "茶园拱桥", location: "福建", description: "", exif: [] },
  { id: "c1-h03", src: "assets/mw_内蒙古-莫尔格勒河冬季银河.jpg", alt: "莫尔格勒河冬季银河", title: "莫尔格勒河冬季银河", location: "内蒙古", description: "", exif: [] },
  { id: "c1-h04", src: "assets/mw_天峻石林全天接片.jpg", alt: "天峻石林全天接片", title: "天峻石林全天接片", location: "青海", description: "", exif: [] },
  { id: "c1-h05", src: "assets/mw_我与紫金山彗星.jpg", alt: "我与紫金山彗星", title: "我与紫金山彗星", location: "彗星", description: "", exif: [] },
  { id: "c1-h06", src: "assets/mw_我与紫金山彗星2.jpg", alt: "我与紫金山彗星2", title: "我与紫金山彗星 Ⅱ", location: "彗星", description: "", exif: [] },
  { id: "c1-h07", src: "assets/mw_移轴调色盘.jpg", alt: "移轴调色盘", title: "移轴调色盘", location: "移轴摄影", description: "", exif: [] },
  { id: "c1-h08", src: "assets/mw_M31移轴.jpg", alt: "M31移轴", title: "M31 仙女座星系", location: "移轴摄影", description: "", exif: [] },
  { id: "c1-h09", src: "assets/mw_冰与火移轴.jpg", alt: "冰与火移轴", title: "冰与火", location: "移轴摄影", description: "", exif: [] },
  { id: "c1-h10", src: "assets/mw_礁湖星云移轴.jpg", alt: "礁湖星云移轴", title: "礁湖星云", location: "移轴摄影", description: "", exif: [] },
];

export const chapter1Stats = [
  { value: "8", label: "拍摄地" },
  { value: "120+", label: "曝光小时" },
  { value: "-25°C", label: "最低温度" },
];
