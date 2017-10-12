// 调用check-versions.js 模块，检查node和npm的版本，是否符合最低要求
require('./check-versions')()

// 获取配置
var config = require('../config')
// 如果Node的环境变量中没有设置当前的环境(NODE_ENV), 则使用config中配置的环境作为当前环境
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

// opn模块，使用默认应用程序，打开网址、文件、 可执行程序等内容的一个插件。
// 例如,使用默认浏览器打开urls。跨平台可用。
// 这里用它来调用默认浏览器打开dev-server监听的端口，例如: localhost:8080
var opn = require('opn')
// path模块提供用于处理文件和目录路径的实用程序。
var path = require('path')
// 引入express 模块
var express = require('express')
// 引入 webpack模块
var webpack = require('webpack')

// 一个express中间件，用于将http请求代理到其他服务器
// 例：localhost:8080/api/xxx  -->  localhost:3000/api/xxx
// 这里使用该插件可以将前端开发中涉及到的请求代理到API服务器上，方便与服务器对接
var proxyMiddleware = require('http-proxy-middleware')

// 根据 Node 环境来引入相应的 webpack 配置
// 这里用 "testing" 来判断Node环境, 是因为在两个webpack.***.conf中还会有判断
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// dev-server 监听的端口，默认为config.dev.port设置的端口，即8080
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port

// 用于判断是否要自动打开浏览器的布尔变量，
// 当配置文件中没有设置自动打开浏览器的时候其值为 false
// `!!`是一个逻辑操作，表示强制转换类型。这里强制转换为`bool`类型
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser

// 定义HTTP代理，到自定义API接口
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

// 创建一个express实例
var app = express()

// 根据webpack配置文件创建Compiler对象
var compiler = webpack(webpackConfig)

// 引入webpack开发中间件, 此插件只在开发环境中有用。
// 使用compiler对象来对相应的文件进行编译和绑定
// 编译绑定后将得到的产物存放在内存中而没有写进磁盘
// 将这个中间件交给express使用之后即可访问这些编译后的产品文件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  //绑定中间件到publicpath中，使用方法和在webpack中相同
  publicPath: webpackConfig.output.publicPath, 
  quiet: true // 允许在console控制台显示 警告 和 错误 信息
})

// 引入热重载功能的中间件。
// Webpack热重载仅使用webpack-dev-middleware开发中间件。
// 这个中间件，允许您在没有webpack-dev-server的情况下，将热重载功能到现有服务器中。
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  // 用于打印行的功能
  log: () => {}
})

// 当html-webpack-plugin 提交之后通过热重载中间件发布重载动作使得页面重载
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// 将 proxyTable 中的代理请求配置挂在express服务器上
// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// connect-history-api-fallback 模块，通过指定的索引页来代理请求的中间件，对于使用HTML5历史API的单个页面应用程序非常有用。
// 处理 HTML5历史api回退的问题
// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// 为webpack打包输出服务
// serve webpack bundle output
app.use(devMiddleware)

// 热重载和状态保留功能
// 显示编译错误信息
// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// posix属性提供了对路径方法的POSIX特定实现的访问。
// 服务纯静态资源。 利用Express托管静态文件，使其可以作为资源访问
// 想要访问static文件夹下的资源，必须添加 staticPath 返回的地址作为上一级地址。
// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

// 应用启动时候的访问地址信息，例如 http://localhost:8080
var uri = 'http://localhost:' + port

// 异步回调
var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
// 如果webpack开发中间件有效执行，那么执行后面的回调函数。
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // 如果是 testing 环境， 不需要打开浏览器
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

// 启动express服务器并监听相应的端口（8080）
var server = app.listen(port)

// 模块导出。
// 1：执行异步函数
// 2：提供close方法，关闭服务器
module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
