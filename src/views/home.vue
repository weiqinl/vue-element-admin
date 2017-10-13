<template>
  <div class="home">
    <div class="page-content">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="Date"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="Name"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Address">
        </el-table-column>
      </el-table>
    </div>
    <el-switch v-model="theme" on-color="" off-color=""></el-switch>
    
    <div class="block">
      <span class="demonstration">Button: </span>
      <span class="wrapper">
        <el-button type="success">成功按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button type="info">信息按钮</el-button>
       </span>
    </div>

    <div class="block">
      <el-alert class='alert-item' title="成功提示的文案" type="success">
      </el-alert>
      <el-alert class='alert-item' title="消息提示的文案" type="info">
      </el-alert>
      <el-alert class='alert-item' title="警告提示的文案" type="warning">
      </el-alert>
      <el-alert class='alert-item' title="错误提示的文案" type="error">
      </el-alert>
    </div>
    <div>
      <el-radio-group v-model="moreTheme" @change="changeTheme">
        <el-radio label="20a0ff">默认</el-radio>
        <el-radio label="ff0000">颜色1-红色-ff0000</el-radio>
        <el-radio label="0000ff">颜色2-蓝色-0000ff</el-radio>
        <el-radio label="008000">颜色3-绿色-008000</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>
  <script>
    import { toggleClass, changeClass } from '@/utils'
    import '@/assets/css/theme/custom-theme/index.css' // 换肤版本element-ui css
    import '@/assets/css/theme/0000ff/index.css' // 换肤版本element-ui css
    import '@/assets/css/theme/008000/index.css' // 换肤版本element-ui css
    import '@/assets/css/theme/ff0000/index.css' // 换肤版本element-ui css
    import '@/assets/css/theme/20a0ff/index.css' // 换肤版本element-ui css
    
    export default {
      data() {
        return {
          theme: false,
          moreTheme: '20a0ff',
          tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
        }
      },
      methods: {
        c1hangeClass(element, className) {
          // if (!element || !className) {
          //   return
          // }
          // let classString = element.className
          // const nameIndex = classString.indexOf(className)
          // if (nameIndex === -1) {
          //   classString += ' ' + className
          // } else {
          //   classString += ' ' + classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length)
          // }
          // element.className = classString
          element.className = className
        }
      },
      watch: {
        theme() {
          toggleClass(document.body, 'custom-theme')
        },
        moreTheme(a) {
          changeClass(document.body, 'custom-' + a)
          this.$message('a' + a )
        }
      }
    }
  </script>