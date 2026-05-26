export interface BrandCard {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
}

export const brandCards: BrandCard[] = [
  {
    id: "canon",
    name: "Canon 佳能",
    description: "深入青海无人区、雪山等极限暗光环境，完美展现 EOS R6 Mark II 与 RF 镜头的画质表现。",
    tags: ["EOS R6 Mark II", "RF15-35mm F2.8", "RF35mm F1.4"],
    image: "assets/collab/canon_8.jpg",
    alt: "Canon 佳能 青海星空",
  },
  {
    id: "oppo",
    name: "OPPO Find X9 Pro",
    description: "深入川西高海拔地区，在寒冷、复杂场景、大光比环境下，展现 OPPO Find X9 Pro 各焦段的完美画质。",
    tags: ["木雅贡嘎", "雅拉雪山", "四姑娘山"],
    image: "assets/collab/oppo_15.jpg",
    alt: "OPPO Find X9 Pro 川西拍摄",
  },
  {
    id: "7artisans",
    name: "七工匠 7Artisans",
    description: "XF50mm F1.4 镜头 · 移轴特殊视角星空。M31 仙女座星系移轴摄影，单条视频播放量 17W+，点赞 1W+。",
    tags: ["移轴星空", "镜头评测"],
    image: "assets/collab/m31_tilt.jpg",
    alt: "七工匠 M31 移轴星空",
  },
  {
    id: "dwarf3",
    name: "DWARF3 智能望远镜",
    description: "为 DWARF3 打造深空摄影样片，用于产品宣传与用户教学，展示自动导星、长时间曝光、远程拍摄等核心优势。",
    tags: ["深空样片", "产品宣传"],
    image: "assets/collab/dwarf_28.jpg",
    alt: "DWARF3 智能望远镜 深空拍摄",
  },
  {
    id: "acepro2",
    name: "Acepro 2 运动相机",
    description: "摄影 vlog 记录与星空延时摄影样片拍摄，展现 Acepro 2 在暗光环境下的视频表现力。",
    tags: ["运动相机", "延时摄影"],
    image: "assets/collab/acepro_31.jpg",
    alt: "Acepro 2 运动相机 延时摄影",
  },
  {
    id: "kuteika",
    name: "酷态科 · 电能棒",
    description: "超级电能棒 10mini 户外摄影充电解决方案合作展示。",
    tags: ["户外电源", "摄影配件"],
    image: "assets/collab/kuteika_37.jpg",
    alt: "酷态科 超级电能棒",
  },
];

export const mediaCollabs = [
  "中国国家天文",
  "北京天文馆",
  "上海天文馆",
  "湖南日报",
  "湖南红网",
];

export interface LectureCard {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

export const lectures: LectureCard[] = [
  {
    id: "lecture2",
    image: "assets/lecture_hnie.jpg",
    title: "讲座分享 · 星野摄影专题",
    subtitle: "湖南工程学院\n高校星空摄影专题讲座，带领大学生领略天文摄影的魅力",
  },
  {
    id: "lecture1",
    image: "assets/lecture_95.jpg",
    title: "讲座分享 · 星野摄影专题",
    subtitle: "湖南尼美佳摄影俱乐部\n分享星空摄影的前期策划、拍摄技巧与后期流程",
  },
];
