<template>
	<div class="home-page">
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
    <br />
    <el-input placeholder="elinput输入框">a</el-input>
    <input placeholder="input输入框">b</input>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
	</div>
</template>
<script>
export default {
  name: 'app',
  data() {
      return {
        num1: 1,
        currentPage: 2
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
}
</script>