import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nobody Chat",
  description: "使用手册",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '简介', link: '/introduction' },
        ]
      },
      // {
      //   text: '使用',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      {
        text: '使用',
        items: [
          { text: '不太快的快速开始', link: '/base-start' },
          { text: '笔记', link: '/note' },
          { text: '分叉 / 会画图', link: '/flow' }
        ]
      },
      {
        text: '设置',
        items: [
          { text: '基础', link: '/setting/base' },
          { text: '识别', link: '/setting/recognition' },
          { text: '语音', link: '/setting/speech' },
          { text: 'Prompt', link: '/setting/prompt' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: 'AFQ', link: '/afq' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ThisSeanZhang/nobody-docs' }
    ]
  }
})
