# vue-element-admin

> Vuejs实例-Vuejs2.0全家桶结合ELementUI制作后台管理界统系统


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

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
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
