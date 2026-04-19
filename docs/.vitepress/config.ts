import { defineConfig } from "vitepress";

const BASE_PATH = "/newtil-components/";

export default defineConfig({
  ignoreDeadLinks: true,
  base: BASE_PATH,
  title: "@newtil/components",
  description: "Material Design 3 CSS 컴포넌트 라이브러리",
  appearance: true,
  lang: "ko",
  head: [
    ["link", { rel: "icon", href: `${BASE_PATH}favicon.ico` }],
  ],

  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/newlecture-corp/newtil-components",
      },
    ],

    search: {
      provider: "local",
    },

    nav: [
      { text: "홈", link: "/" },
      { text: "가이드", link: "/guide/getting-started" },
    ],

    sidebar: [
      {
        text: "가이드",
        base: "/guide",
        items: [
          { text: "시작하기", link: "/getting-started" },
          { text: "아이콘", link: "/icons" },
          { text: "커스터마이징", link: "/customization" },
        ],
      },
      {
        text: "컴포넌트",
        base: "/guide",
        items: [
          { text: "버튼", link: "/buttons" },
          { text: "입력", link: "/inputs" },
          { text: "컨테이너", link: "/containment" },
          { text: "커뮤니케이션", link: "/communication" },
          { text: "네비게이션", link: "/navigation" },
          { text: "레이아웃", link: "/layout" },
        ],
      },
    ],

    outline: {
      label: "목차",
    },

    footer: {
      copyright: "Copyright © 2026 newlecture",
    },
  },
});
