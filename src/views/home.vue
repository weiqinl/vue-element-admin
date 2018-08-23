<template>
  <div class="home">
    <div class="page-content">
      <div class="charts">
        <div id="myChart" class="myChart"></div>
      </div>
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
  </div>
</template>
  <script>
import echarts from "echarts";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ]
    };
  },
  mounted() {
    //  初始化echarts实例
    var myChart = echarts.init(document.getElementById("myChart"));

    // 指定图标的配置项和数据
    var option = {
      title: {
        text: "ECharts 示例"
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
      xAxis: {
        data: ["一月", "二月", "三月", "四月", "五月", "六月"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 16, 20]
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
  }
};
</script>
<style lang="scss">
.home {
  .charts {
    .myChart {
      width: 300px;
      height: 300px;
    }
  }
}
</style>
