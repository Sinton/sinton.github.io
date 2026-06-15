export type TravelFootprint = {
  id: string;
  title: string;
  place: string;
  province: string;
  provinceShort: string;
  lng: number;
  lat: number;
  href: string;
  subPlaces?: string[];
};

export const travelFootprints: TravelFootprint[] = [
  {
    id: "xinjiang-altay",
    title: "北疆手记：阿勒泰的风、石头和慢半拍的天光",
    place: "阿勒泰",
    province: "新疆维吾尔自治区",
    provinceShort: "新疆",
    lng: 88.1396,
    lat: 47.8484,
    href: "/travel/xinjiang-altay-field-note/",
    subPlaces: ["可可托海", "将军山", "五彩滩"],
  },
  {
    id: "tibet",
    title: "西藏手记：在高处把声音放低",
    place: "西藏",
    province: "西藏自治区",
    provinceShort: "西藏",
    lng: 91.1322,
    lat: 29.6604,
    href: "/travel/tibet-field-note/",
  },
  {
    id: "daxinganling",
    title: "大兴安岭手记：往北走，直到森林变安静",
    place: "大兴安岭",
    province: "黑龙江省",
    provinceShort: "黑龙江",
    lng: 124.1179,
    lat: 50.4111,
    href: "/travel/daxinganling-field-note/",
  },
  {
    id: "chuanxi",
    title: "川西路上：把行程交给云和山",
    place: "川西",
    province: "四川省",
    provinceShort: "四川",
    lng: 101.9638,
    lat: 30.0507,
    href: "/travel/chuanxi-field-note/",
  },
  {
    id: "xian",
    title: "西安手记：城墙下的风和夜里的灯",
    place: "西安",
    province: "陕西省",
    provinceShort: "陕西",
    lng: 108.9398,
    lat: 34.3416,
    href: "/travel/xian-field-note/",
  },
  {
    id: "inner-mongolia",
    title: "内蒙手记：草原不是背景，是一段很长的呼吸",
    place: "内蒙",
    province: "内蒙古自治区",
    provinceShort: "内蒙古",
    lng: 119.7658,
    lat: 49.2116,
    href: "/travel/inner-mongolia-field-note/",
  },
  {
    id: "huangshan",
    title: "黄山手记：云雾起来的时候，山会换一种说法",
    place: "黄山",
    province: "安徽省",
    provinceShort: "安徽",
    lng: 118.1666,
    lat: 30.129,
    href: "/travel/huangshan-field-note/",
  },
  {
    id: "pingtan",
    title: "平潭手记：海风把一天吹得很轻",
    place: "平潭",
    province: "福建省",
    provinceShort: "福建",
    lng: 119.7912,
    lat: 25.5037,
    href: "/travel/pingtan-field-note/",
  },
];

export const visitedProvinceNames = Array.from(
  new Set(travelFootprints.map((item) => item.province)),
);

export const provinceHrefMap = Object.fromEntries(
  travelFootprints.map((item) => [item.province, item.href]),
) as Record<string, string>;
