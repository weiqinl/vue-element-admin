# vue-element-admin

> [Vuejs实例-Vuejs2.0全家桶结合ELementUI制作后台管理系统](http://www.cnblogs.com/weiqinl/p/6873761.html)

[直接访问地址:http://weiqinl.com/vue-element-admin/index.html](http://weiqinl.com/vue-element-admin/index.html)

# 用到的技术
1. vuejs 框架
2. vue-cli 脚手架工具
3. vue-router 路由插件
4. vuex 状态管理
5. ElementUI 饿了么ui组件
6. axios  第三方http请求库
7. webpack 资源打包工具

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

#目录结构:  

      vue-element-admin:							 项目名称  
      |   .babelrc                   babel的配置文件  
      |   .editorconfig              编辑器的配置文件  
      |   .gitignore                 git的忽略文件  
      |   .postcssrc.js              编译css的工具  
      |   index.html                 网站主页  
      |   package.json               项目依赖哪些包的文件  
      |   README.md                  说明文档  
      |   
      +---build                      构建的配置文件夹  
      |       build.js               项目构建配置入口
      |       check-versions.js 
      |       dev-client.js
      |       dev-server.js
      |       utils.js
      |       vue-loader.conf.js
      |       webpack.base.conf.js
      |       webpack.dev.conf.js
      |       webpack.prod.conf.js
      |       webpack.test.conf.js
      |       
      +---config                      整体的配置文件夹
      |       dev.env.js
      |       index.js                配置文件入口
      |       prod.env.js
      |       test.env.js
      |       
      +---src                         源文件夹
      |   |   App.vue                 布局组件
      |   |   main.js                 入口文件
      |   |   
      |   +---assets                  静态文件夹
      |   |       logo.png
      |   |       
      |   +---components              组件文件夹
      |   |       Hello.vue           单个组件
      |   |       
      |   \---router                  路由文件夹
      |           index.js            路由主页
      |           
      +---static                      静态文件夹
      |       .gitkeep                空文件（Git本身不允许全空目录提交至版本库，一个办法是在目录下创建一个文件，取名为.gitkeep是习惯用法）
      |       
      \---test                        测试文件夹

# ElementUI动态切换主题色(动态换肤)

## 如何增加主题文件
说明：此项目UI是在elementUI基础上建立的，所以，我们可以通过element提供的方法，来[自定义主题](http://element.eleme.io/#/zh-CN/component/custom-theme)。
### 生成自定义主题文件
使用工具下载自定义主题文件，并命名为`wq-variables.css`。以后我们如果想要增加主题文件，只需要修改变量文件中各个变量所对应的值。
### 编译主题
我们利用[工具](http://element.eleme.io/#/zh-CN/component/custom-theme#an-zhuang-gong-ju)来编译主题。  
在终端，将刚刚修改好的变量文件，通过命令`node_modules/.bin/et -c wq-variables.css`来编译主题。

### 给自定义主题增加命名空间
默认情况下，编译的主题目录会放在`./theme`下。由于，我们是通过改变css的命名空间来切换主题的，那么，我们就需要为刚生成的主题增加命名空间。主题文件内容很多，如果手动一个个添加命名空间，工作量巨大，这个时候，可以使用另一个[给css增加命名空间的工具](https://github.com/weiqinl/tool-web/tree/master/gulpcsswrap)。下载这个项目（当然，也可以将这个工具集成到此项目中，但是我感觉没必要），然后只需要修改`gulpfile.js`文件中①②③3处内容，就可以得到想要的内容，这里注意，本项目css自定义的命名空间统一为`custom-******`,其中`******`建议使用主题色的16进制编码,也可以使用其他字符串，但是要和radio标签统一。

### 引用自定义主题
自定义主题文件，已经有了，只剩下如何引入使用了。

* 在App.vue中import新增的主题样式
* 在`./src/components/nav/topbar/topbar.vue`中，添加对应的radio标签
经过以上两步，就可以正常使用了。
