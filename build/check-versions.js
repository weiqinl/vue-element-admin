var chalk = require('chalk') //定制终端字符串的颜色输出样式
var semver = require('semver')  // 语义化版本控制规范
var packageConfig = require('../package.json') 
var shell = require('shelljs') // 调用系统命令

// 调用子线程同步执行 cmd终端命令
function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

var versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  },
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  var warnings = []
  for (var i = 0; i < versionRequirements.length; i++) {
    var mod = versionRequirements[i]
    // semver.satisfies如果版本满足要求，返回true
    // 这里取反，不满足则将 警告存入warnings数组，供后面使用
    // 警告的内容是： 系统当前版本(红色字体) should be 应用程序要求的版本(绿色字体)
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

// 如果有警告，则用黄色字体将警告输出到终端，并终止当前进程
  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()
    for (var i = 0; i < warnings.length; i++) {
      var warning = warnings[i]
      console.log('  ' + warning)
    }
    console.log()
    process.exit(1)
  }
}
