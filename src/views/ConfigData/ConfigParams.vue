<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据配置</el-breadcrumb-item>
      <el-breadcrumb-item>参数配置</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      参数配置 表格
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "ConfigParams"
    }
</script>

<style lang="less" scoped>

</style>
