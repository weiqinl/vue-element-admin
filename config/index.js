// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  // 构建应用程序时使用的配置
  build: { // 生产环境
    env: require('./prod.env'), // 环境变量，使用config/prod.env.js中定义的编译环境
    index: path.resolve(__dirname, '../docs/index.html'), // html入口文件
    assetsRoot: path.resolve(__dirname, '../docs'), // 应用程序存放的资源路径，本地文件系统上的绝对路径
    assetsSubDirectory: 'static', // 应用程序存放的资源主目录
    assetsPublicPath: './', // 资源发布的根目录,如果资源不是放在宿主机的根目录，一般修改为'./'
    productionSourceMap: true, // 打包的文件，是否打开source-map  true打开 false 不打开
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // Gzip默认关闭的。在流行的静态主机 例如Surge或者Netlify已经帮你把所有的静态资源文件都gzip了。 
    // 在设置为'true'之前，请确保安装了插件'compression-webpack-plugin'
    productionGzip: false, // 是否开启gzip
    productionGzipExtensions: ['js', 'css'], // 使用gzip压缩的文件扩展名
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // 使用一个额外的参数运行构建命令
    // 构建完成后，异步查看包分析报告。
    // `npm run build --report`
    // 设置'true'或者'false'来控制它的'执行'或'关闭'
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: { // 开发环境
    env: require('./dev.env'), // 环境变量，使用config/dev.env.js中定义的编译环境
    port: 8017, // 运行测试页面时候的端口号
    autoOpenBrowser: true, // 是否自动打开浏览器。true 是，false 否
    assetsSubDirectory: 'static', // 应用程序存放的资源主目录 
    assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
    proxyTable: {}, // 需要 proxyTable 代理的接口（可跨域）
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false // 是否开启cssSourceMap,默认是false关闭的
  }
}
