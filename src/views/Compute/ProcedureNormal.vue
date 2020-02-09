<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>计算</el-breadcrumb-item>
      <el-breadcrumb-item>普通计算</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-alert
        title="简单计算步骤条"
        type="info"
        center
        show-icon
        :closable="false">
      </el-alert>

      <el-steps :active="activeIndex - 0" finish-status="success" align-center>
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>

      <el-form :model="stepForm" :rules="stepFormRules" ref="stepRuleForm" label-width="100px" label-position="top">
        <el-tabs v-model="activeIndex" :tab-position="'left'" :before-leave="beforeTabLeave">
          <el-tab-pane label="步骤 1" name="0">
            <el-form-item label="step 1 name" prop="name">
              <!--            prop 为校验规则名-->
              <el-input v-model="stepForm.name"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="步骤 2" name="1">

          </el-tab-pane>
          <el-tab-pane label="步骤 3" name="2">
            <el-button style="margin-top: 12px;" @click="final">完成</el-button>
          </el-tab-pane>
        </el-tabs>
      </el-form>

    </el-card>

    <!--    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>-->


  </div>
</template>

<script>
  export default {
    name: "ProcedureNormal",
    data() {
      return {
        activeIndex: '0',
        stepForm: {
          name: '',
        },
        stepFormRules: {
          name: [{
            required: true,
            message: '请输入名称',
            trigger: 'blur'
          }, {}]
        }
      };
    },
    methods: {
      next() {
        if (this.activeIndex++ > 2) this.activeIndex = 0;
      },
      // 完成按钮
      final() {
        this.activeIndex = 3;
      },
      beforeTabLeave(activeName, oldActiveName) {
        // 判断处在step1页面 且 输入框的值为空，则禁止跳转页面
        if (oldActiveName === '0' && this.stepForm.name.length === 0) {
          this.$message.error('请先填写输入框');
          return false
        }
      }
    }

  }
</script>

<style lang="less" scoped>

</style>
