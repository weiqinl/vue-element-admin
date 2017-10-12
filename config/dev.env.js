var merge = require('webpack-merge') // 提供一个合并功能，连接数组、合并对象来创建一个新对象
var prodEnv = require('./prod.env') 

// 合并输出
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
