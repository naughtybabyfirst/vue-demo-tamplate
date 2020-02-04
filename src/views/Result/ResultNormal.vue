<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>结果</el-breadcrumb-item>
      <el-breadcrumb-item>普通计算结果</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <div id="echarts" style="width: 600px; height: 400px"></div>
    </el-card>
  </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "ResultNormal",
        data() {
            return {

            }
        },
        created() {

        },
        // 此时页面上的元素已经渲染完毕
        mounted() {
            this.createMyEcharts();
        },
        methods: {
            createMyEcharts() {
              var myChart = echarts.init(document.getElementById('echarts'));
              var option = {
                title: {
                  text: '简单计算结果ECharts展示'
                },
                tooltip: {},
                legend: {
                  data:['销量']
                },
                xAxis: {
                  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20]
                }]
              };

              // 使用刚指定的配置项和数据显示图表。
              myChart.setOption(option);
            }
        }
    }
</script>

<style scoped>

</style>
