# XValine

又一个基于 Valine 改造的增加**关键词屏蔽**、**人工审核功能**（先审核后显示）的评论功能

- 感谢 [Valine](https://github.com/xCss/Valine) 提供了这么棒的评论系统
- 感谢 [Valine-Admin](https://github.com/DesertsP/Valine-Admin) 提供的专业评论后台管理
- 另外也感谢 [NeoValine](https://www.ohmysites.com/archives/15/) 提供了改造灵感

<img src='./src/assets/valine.png' width='200' align="right" />

## 特色功能

- 可选项：关键词屏蔽（昵称、评论内容）
- 可选项：是否需要人工审核

## 使用方法

### 关键词屏蔽

``` javascript

/**
 * 使用方法
 * banKeywords: "default" | url | undefined
 */
new Valine({
    el:'#vcomments',
    // 加载默认关键词配置
    banKeywords: "default",
    // 手动指定关键词地址，json 格式，{"code": 200, "data": ["关键词1","关键词2"]}
    // banKeywords: "https://yourconfigurl.json",
    // 或者不填该字段，不屏蔽关键词
    // other config
})


```

### 人工审核

> **说明：此功能需要结合 [Valine-Admin](https://github.com/DesertsP/Valine-Admin) 配套使用**

**请先配置好 `Valine-Admin`**
**请先配置好 `Valine-Admin`**
**请先配置好 `Valine-Admin`**

``` javascript
/**
 * 使用方法
 * requireReview: boolean 是否需要人工审核，默认为 false
 */
new Valine({
    // 页面中 <div id="vcomments"></div>
    el:'#vcomments', 
    // 配置好 Valine-Admin 的 app 信息
    appId: 'Your appId',
    appKey: 'Your appKey',
    // 设置为需要人工审核
    requireReview: true,
    // 推荐加上友情提示语，防止访客发完评价后看不见提bug……
    placeholder: "评论在后台人工审核后可见~"
})
```

### 安装方法

``` javascript

// npm
npm install xvaline --save
// cdn
<script src='https//cdn.jsdelivr.net/gh/xunge0613/xvaline/dist/Valine.min.js'></script>

// Use import
import Valine from 'xvaline';

// or Use require
const Valine = require('xvaline');

new Valine({
    // 页面中 <div id="vcomments"></div>
    el:'#vcomments',
    // other config
})

```

## 关于 [Valine](https://github.com/xCss/Valine/)

[Valine 文档](https://valine.js.org)
[快速开始](https://valine.js.org/quickstart.html)

[![version](https://img.shields.io/github/release/xCss/Valine.svg?style=flat-square)](https://github.com/xCss/Valine/releases)
[![npm downloads](https://img.shields.io/npm/dm/valine.svg?style=flat-square)](https://www.npmjs.com/package/valine)
[![build](https://img.shields.io/circleci/project/github/xCss/Valine/master.svg?style=flat-square)](https://circleci.com/gh/xCss/Valine)

Valine 诞生于2017年8月7日，是一款基于[LeanCloud](https://leancloud.cn)的快速、简洁且高效的无后端评论系统。  

理论上支持但不限于静态博客，目前已有[Hexo](/hexo.html)、[Jekyll](/jekyll.html)、[Typecho](http://typecho.org/)、[Hugo](https://gohugo.io/)、[Ghost](https://ghost.org) 等博客程序在使用Valine。

## 特性

- 快速
- 安全
- Emoji 😉
- 无后端实现
- MarkDown 全语法支持
- 轻量易用
- [文章阅读量统计](/visitor.html) `v1.2.0+`

## Todo

Valine 现在仍处于开发阶段，这里有一些目前还不支持、但已经在计划中的特性：
- 基于[Firebase](https://firebase.google.com/)的评论存储
- 或者更多...

欢迎你为 Valine 的开发作出贡献。


## License
[GPL-2.0](https://github.com/xCss/Valine/blob/master/LICENSE)
