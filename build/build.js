// 调用check-versions.js 模块，检查node和npm的版本，是否符合最低要求
require('./check-versions')()

// 将NODE环境 设置为生产环境 production 
process.env.NODE_ENV = 'production'

// 优雅的终端旋转器。
// 实现node.js 命令行环境的 loading效果， 和显示loading之后各种状态的图标等
var ora = require('ora')
// 深度删除文件的模块。在node中执行的，类UNIX 命令 `rm -rf` 
var rm = require('rimraf')
// 路径模块
var path = require('path')
// 定制终端字符串的颜色输出样式
var chalk = require('chalk')
var webpack = require('webpack')
// 引入配置文件夹
var config = require('../config')
// 引入生成环境的配置
var webpackConfig = require('./webpack.prod.conf')

// 开启loading动画
var spinner = ora('building for production...')
spinner.start()

// 以下命令整体表示删除文件
// 1：先获取生成资源的目录
// 2：
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  //webpack编译
  webpack(webpackConfig, function (err, stats) {
    spinner.stop() //loading动画停止，界面返回初始化的图标
    if (err) throw err
    // 没有出错，则输出相关信息
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    // 青绿色输出语句
    console.log(chalk.cyan('  Build complete.\n'))
    // 黄色输出语句
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
