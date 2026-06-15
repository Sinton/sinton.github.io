import {
  defaultThemeConfig,
  type NewspaperThemeConfig,
} from "astro-newspaper-theme/lib/theme-config";

export const themeConfig: NewspaperThemeConfig = {
  ...defaultThemeConfig,
  siteTitle: "我的晚报",
  siteSubtitle: "一份记录作品、文章和旅行的个人日报",
  description: "一份记录作品、文章和旅行的个人日报。",
  lang: "zh-CN",
  issue: "第一卷 第一号",
  since: "2017",
  location: "杭州",
  frequency: "日刊",
  timezone: "Asia/Shanghai",
  navItems: [
    { label: "头版", href: "/" },
    { label: "作品刊", href: "/works/" },
    { label: "随笔栏", href: "/articles/" },
    { label: "远行记", href: "/travel/" },
    { label: "关于我", href: "/about/" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "X", href: "https://x.com/" },
  ],
};
