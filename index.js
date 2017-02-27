'use strict';

const homeTemplate = './template/Home/index';
const guideTemplate = './template/Doc/index';
const redirectDefaultGuideTemplate = './template/Doc/redirect';
const redirectDefaultComponentemplate = './template/Component/redirect';
const componentTemplate = './template/Component/index'

// 入口
// 全局配置
module.exports = {
  home: '/',
  sitename: ' - RAX',
  site: {
    homepage: '//rax.taobao.net',
    logo: '//img.alicdn.com/tps/TB1t0BlJFXXXXXsXXXXXXXXXXXX-286-100.png'
  },
  pick: {
    enUS(markdownData) {
      if (/en\-US/.test(markdownData.meta.filename)) {
        markdownData.post = (markdownData.meta.filename.match(/en\-US\/(.*)\.md/) || [, ''])[1];
        markdownData.post = markdownData.post.toLowerCase();
        return markdownData;
      } else {
        return undefined;
      }
    },
    zhCN(markdownData) {
      if (/zh\-Hans/.test(markdownData.meta.filename)) {
        markdownData.post = (markdownData.meta.filename.match(/zh\-Hans\/(.*)\.md/) || [, ''])[1];
        markdownData.post = markdownData.post.toLowerCase();
        return markdownData;
      } else {
        return undefined;
      }
    }
  },
  routes: [
    { path: '/', component: homeTemplate },
    { path: '/guide', component: redirectDefaultGuideTemplate }, // redirect
    { path: '/guide/:guide', component: guideTemplate },
    { path: '/component', component: redirectDefaultComponentemplate }, // redirect
    { path: '/component/:comp', component: componentTemplate },
  ],
  typeOrder: {},
  categoryOrder: {
    docs: 1
  }
};
