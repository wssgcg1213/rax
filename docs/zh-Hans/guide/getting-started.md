# 快速开始

端开发的同学一直在探索的路上，无论是 KIMI 体系，还是 React 和 React Native 的尝试，我们一直走在拓展的边界。 但是，不可否认的是，性能、兼容、效率、体验问题始终围绕在我们身边，一直在突破却还依然没有跨越。

RAX 是一个全新的思路。它是一个通用的跨容器的渲染引擎， 如果你使用过 React ， 那么你就已经知道了该如何使用 RAX ， 因为它们的API是完全兼容的。

RAX 的诞生，主要还是为淘系广泛的业务来服务的。我们还记得 React Native 的口号： `learn once, write anywhere` 。 但对于我们来说，或许这还不够。真正的释放我们的劳动力，才是 RAX 要做的事情。 RAX 旨在` write once , run everywhere` 。我们只要开发一次，便不用再担心各个平台的兼容。  

这里我们就来从零开始，上手一个 RAX 项目。

## 1.工具安装

#### 安装 Nodejs

对我们的一些项目工程来说，Nodejs 是必须的，请先从 [Nodejs官网](https://nodejs.org/en/) 下载并安装 Nodejs。

#### 安装 DEF

[DEF](http://def.alibaba-inc.com/?spm=0.0.0.0.GmCxid) 是功能强大的前端集成开发环境，如果之前你还没安装过 `DEF 2.0`, 那么安装一下：

```
$ npm install tnpm -g --registry=http://registry.npm.alibaba-inc.com
$ tnpm install @ali/def@next -g
```
注意：  如果报错 "EACCES: permission denied" , 那么请重新使用 root/Administrator 权限重新安装。

#### 安装 RAX 套件

```
$ def install @ali/def-kit-rax
```

## 2.项目初始化

我们已经预备了开始项目的一系列工程工具。下面就可以开始初始化我们的 RAX 项目了。  
接下来我们一步步初始化一个 RAX 项目。

创建并进入一个新目录：

#### 初始化 rax 项目

进入项目目录，输入 `def init rax`，选择初始化 rax 项目

![](http://gw.alicdn.com/tfs/TB1MXTXOVXXXXbGapXXXXXXXXXX-1193-710.png)

如图交互填写初始化字段后，完成项目初始化

目录规范如下：



### 目录规范

```javascript
rax-project
    |----.happypack                               // 编译缓存文件
    |----build                                    // build 目录
    |     |----pages                              // 页面集合目录
    |            |----page1                       
    |            |----page2                       // 页面目录
    |                   |----web.xtpl             // h5 页面模板，生成 h5 页面 html 文件
    |                   |----weex.xtpl            // weex 脚本模板，生成 weex 页面 bundle js 文件
    |                   |----index.weex.js      // native 版本 js 文件
    |                   |----index.web.js         // web 版本 js 文件
    |                   |----pagedata.json        // 页面坑位描述文件
    |----node_modules                             // 依赖目录
    |----pagemaster                               // 模板目录
    |        |----h5.xtpl                         // h5 页面模板，默认不用修改，可根据业务自身情况调整
    |        |----weex.xtpl                     // weex 脚本模板，默认不用修改，可根据业务自身情况调整
    |----src                                      // 源码目录
    |     |----common                             // 公用逻辑目录，原 c 目录，业务公用部分，内容形式不做限制
    |     |----mods                               // 跨页面模块集合目录
    |           |----mod1                         // 模块目录
    |                 |----lib                    // 模块引用文件（例 style.js）
    |                 |----mock                   // 模拟数据目录
    |                 |----schema                 // 数据 schema 目录
    |                 |----index.js               // 模块入口脚本
    |                 |----README.md              
    |     |----pages
    |           |----page1
    |           |----page2
    |                  |----mods
    |                        |----mod1
    |                              |----lib
    |                              |----mock
    |                              |----schema
    |                              |----index.js
    |                              |----README.md
    |                  |----index.js              // 页面入口文件
    |----.gitignore                               // npm 忽略文件配置
    |----.pagedata.json                           // 页面坑位临时描述文件
    |----abc.json                                 // 构建描述文件
    |----package.json                             
    |----README.md
```


#### 添加页面

在项目目录中，输入 `def add`，选择添加页面

![](http://gw.alicdn.com/tfs/TB1WFesPXXXXXaJXpXXXXXXXXXX-1144-755.png)

如图交互填写 `页面名称` 后，完成页面新增

#### 添加模块（本地新建）

在项目目录中，输入 `def add`，选择添加模块

![](http://gw.alicdn.com/tfs/TB1p_CEPXXXXXXxXXXXXXXXXXXX-1116-727.png)

如图交互选择 `新增模块渠道` 为 **本地新建模块**、`新增模块目录`、`新增模块名称`等字段后，完成项目添加模块

## 3.开始开发

基于套件给我们生成的代码模板，我们就可以开始开发自己的项目了。

```jacascript
import {createElement, Component, render} from 'rax';
import {View, Text} from '@ali/rax-components';
import styles from './index.css';

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appBanner}>Welcome to Rax</Text>
        </View>
        <Text style={styles.appIntro}>
          To get started, edit src/pages/index.js and save to reload.
        </Text>
      </View>
    );
  }
}

render(<App />);
```

## 4. 页面预览

执行 `def dev` 可以启动实时预览。

以`index`页面为列，对应的页面地址如下：

* WEB 页面：http://127.0.0.1:3333/src/pages/index/index.html
* WEEX 页面：http://127.0.0.1:3333/src/pages/index/index.html?wh_weex=true （在浏览器环境直接访问该地址，可以得到WEB页面；通过手淘访问该地址，则会返回相应的WEEX页面）
* Bundle 地址：http://127.0.0.1:3333/src/pages/index/index.html?wh_native=true
