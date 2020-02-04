<template>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>

      <el-card>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-input placeholder="请输入内容" v-model="usrInfo.query" clearable @clear="getUserList">
              <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="addDialogVisible=true">添加用户</el-button>
          </el-col>
        </el-row>

        <el-table :data="usrList" border stripe style="width: 100%">
          <el-table-column label="#" type="index"></el-table-column>
          <el-table-column label="姓名" prop="username"></el-table-column>
          <el-table-column label="邮箱" prop="email"></el-table-column>
          <el-table-column label="角色" prop="roles"></el-table-column>
          <el-table-column label="状态">
            <template v-slot="scope">
              <el-switch v-model="scope.row.status" @change="userStatusChanged(scope.row, scope.$index)"></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template v-slot="scope">
              <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
              <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
              <el-tooltip class="item" effect="dark" content="设置按钮" placement="top" :enterable="false">
                <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>


        <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
          <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="addForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="addForm.password"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="addForm.email"></el-input>
            </el-form-item>
            <el-form-item label="手机" prop="phone">
              <el-input v-model="addForm.phone"></el-input>
            </el-form-item>
          </el-form>

          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="confirmAdd">保 存</el-button>
            <el-button @click="addDialogVisible = false">关 闭</el-button>
          </div>
        </el-dialog>

      </el-card>

    </div>
</template>

<script>
    export default {
        name: "flight",
        data() {
            return {
                usrInfo: {
                    query: '',
                },
                usrList: [{
                    username: 'admin',
                    email: '111@gmail.com',
                    roles: 'superadmin',
                    status: true,
                },{
                    username: 'passenger',
                    email: '222@gmail.com',
                    roles: 'test',
                    status: false,
                }],
                total: 0,
                addDialogVisible: false,
                addForm: {
                  username: '',
                  password: '',
                  email: '',
                  // phone: '',
                },
                addFormRules: {
                  username: [{
                      required: true,
                      message: '请输入名称',
                      trigger: 'blur'
                    },{
                      min:3,
                      max:10,
                      message: "3-10个字符之间",
                      trigger: 'blur'
                  }],
                  password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                  },{
                    min:6,
                    max:15,
                    message: "6-15个字符之间",
                    trigger: 'blur'
                  }],
                  email: [{
                    required: true,
                    message: '请输入邮箱',
                    trigger: 'blur'
                  },{

                  }],
                  // phone: [{
                  //   required: true,
                  //   message: '请输入手机号',
                  //   trigger: 'blur'
                  // },{
                  //   min:11,
                  //   max:11,
                  //   message: "11个字符",
                  //   trigger: 'blur'
                  // }]
                },

            }
        },
        created() {
            this.getUserList();
        },
        methods: {
            // 获取用户列表
            getUserList() {
            //    通过api 从数据库里获取数据
            },
            //监听switch开关状态的改变
            userStatusChanged(usrList, ind){
                // console.log(usrList)
                // console.log(ind)
                // 通过api 直接修改数据库数据，
            },
            addDialogClosed() {
                this.$refs.addFormRef.resetFields()
            },
            confirmAdd() {
                this.usrList.push(this.addForm);
                this.addForm = {
                    username: '',
                    password: '',
                    email: '',
                    phone: '',
                };
                this.addDialogVisible = false;
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
