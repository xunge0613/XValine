# XValine

## 简介

又一个基于 [Valine](https://github.com/xCss/Valine/) 开发的**支持先审核后显示、关键词屏蔽**的评论系统。后端同时兼容默认的 `leancloud` 或 `Valine-admin` 部署。

### 项目链接

- [Github - XValine](https://github.com/xunge0613/XValine)
- [npm - XValine](https://www.npmjs.com/package/xvaline)

## Why XValine

**支持审核后显示、关键词屏蔽**。对于中国大陆注册的网站，如果有评论、留言等功能，根据公安备案的相关要求，需要实现`先审核后显示`、`关键词屏蔽`的功能

**无后端实现**。我的博客是 `Hugo` 搭建的静态网站，很适合与 `Valine` 这类只需要简单配置，而无需后端实现的评论系统搭配使用。

此外，参考了 [NeoValine：一个基于 Valine 开发的支持人工审核的评论系统
](https://www.ohmysites.com/archives/15/)这篇文章中对目前常见几款评论系统的对比。结合上述两点核心诉求，于是就有了 `XValine`。

## 特点

- **默认开启**关键词屏蔽（昵称、评论内容）
- **默认开启**先审核后显示
- 无后端实现，后端同时兼容默认的 `leancloud` 或 `Valine-admin`
- 免费开源无广告（GPL-2.0 License）
- 基于 Valine 二次开发，快速、简洁、高效

## 快速开始

为了便于 `Valine` 用户使用，安装方式尽量与其保持一致。

同时，**默认开启**`先审核后显示`、`关键词屏蔽`功能，方便使用。`Hugo` 用户也无需修改 `layout`、`config.toml` 配置。

### 安装方法

``` javascript

// 使用 npm
npm install xvaline --save

// 使用 cdn 加载最新版本 XValine
<script src='https://cdn.jsdelivr.net/npm/xvaline@latest/dist/Valine.min.js'></script>

// Use import
import Valine from 'xvaline';

// or Use require
const Valine = require('xvaline');

new Valine({
    // 页面中 <div id="vcomments"></div>
    el:'#vcomments',
    // 配置 Leancloud or Valine-Admin 的 app 信息
    appId: 'Your appId',
    appKey: 'Your appKey',
    // other config
})

```

### 关键词屏蔽

设置**关键词屏蔽**后，用户提交评论时，如果包含屏蔽词，则会弹层告知内容中含有`某某屏蔽词`，可以一定程度上减少垃圾信息。

- 支持自定义屏蔽词列表

![image](https://user-images.githubusercontent.com/1448574/86373202-baf5e100-bcb5-11ea-992e-36876b618a1d.png)

``` javascript

/**
 * 关键词屏蔽配置
 * banKeywords: "default" | url | undefined
 * 默认开启，参数 "default"
 */
new Valine({
    el:'#vcomments',
    // 配置 Leancloud or Valine-Admin 的 app 信息
    appId: 'Your appId',
    appKey: 'Your appKey',
    // 默认开启，加载默认关键词配置
    banKeywords: "default",
    // 手动指定关键词地址，json 格式，{"code": 200, "data": ["关键词1","关键词2"]}
    // banKeywords: "https://yourconfigurl.json",
    // 或者不填该字段，不屏蔽关键词
    // other config
})


```

### 先审核后显示

**同时兼容**默认的 `leancloud` 或 `Valine-admin` 部署方式。

设置 `requireReview:true` 后，未审核通过的评论在前端展示时会显示为`该评论需要审核后才可以显示哦~ ヾ(๑╹◡╹)ﾉ"`。

- 使用默认 `leancloud`。在 LeanCloud 后台将评论 `isSpam` 属性改为 `false`，审核通过该评论。（感谢[alwxkxk](https://github.com/xCss/Valine/issues/276#issuecomment-640048814) 的启发）
- 使用 `Valine-admin`。常规操作即可。

![image](https://user-images.githubusercontent.com/1448574/86372944-6eaaa100-bcb5-11ea-959e-4eace054a868.png)

``` javascript
/**
 * 先审核后显示，默认开启
 * requireReview: boolean 是否需要人工审核，默认为 true
 */
new Valine({
    // 页面中 <div id="vcomments"></div>
    el:'#vcomments',
    // 配置 Leancloud or Valine-Admin 的 app 信息
    appId: 'Your appId',
    appKey: 'Your appKey',
    // 设置为需要人工审核
    requireReview: true,
    // 推荐加上友情提示语，防止访客发完评价后看不见提bug……
    placeholder: "评论在后台人工审核后可见~"
})
```

## 鸣谢

- 感谢 [Valine](https://github.com/xCss/Valine) 提供了这么棒的评论系统
- 感谢 [Valine-Admin](https://github.com/DesertsP/Valine-Admin) 提供的专业评论后台管理
- 另外也感谢 [NeoValine](https://www.ohmysites.com/archives/15/)、[alwxkxk](https://github.com/xCss/Valine/issues/276#issuecomment-640048814) 提供了改造灵感

## 附：关于 Valine

### 介绍

[Valine 文档](https://valine.js.org)
[快速开始](https://valine.js.org/quickstart.html)

[![version](https://img.shields.io/github/release/xCss/Valine.svg?style=flat-square)](https://github.com/xCss/Valine/releases)
[![npm downloads](https://img.shields.io/npm/dm/valine.svg?style=flat-square)](https://www.npmjs.com/package/valine)
[![build](https://img.shields.io/circleci/project/github/xCss/Valine/master.svg?style=flat-square)](https://circleci.com/gh/xCss/Valine)

Valine 诞生于2017年8月7日，是一款基于[LeanCloud](https://leancloud.cn)的快速、简洁且高效的无后端评论系统。  

理论上支持但不限于静态博客，目前已有[Hexo](/hexo.html)、[Jekyll](/jekyll.html)、[Typecho](http://typecho.org/)、[Hugo](https://gohugo.io/)、[Ghost](https://ghost.org) 等博客程序在使用Valine。

### 特性

- 快速
- 安全
- Emoji 😉
- 无后端实现
- MarkDown 全语法支持
- 轻量易用
- [文章阅读量统计](/visitor.html) `v1.2.0+`

## License

[GPL-2.0](https://github.com/xCss/Valine/blob/master/LICENSE)
