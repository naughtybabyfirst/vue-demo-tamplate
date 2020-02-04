<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>计算</el-breadcrumb-item>
      <el-breadcrumb-item>复杂计算</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
        <el-step title="步骤 4"></el-step>
        <el-step title="步骤 5"></el-step>
      </el-steps>
    </el-card>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
    export default {
        name: "ProcedureComplex",
        data() {
            return {
                active: 0
            };
        },
        methods: {
            next() {
                if (this.active++ > 4) this.active = 0;
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
