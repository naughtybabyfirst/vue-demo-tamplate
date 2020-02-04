<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-table :data="rolelist" border stripe style="width: 100%">
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column label="角色名称" prop="rolename"></el-table-column>
        <el-table-column label="权限名称" prop="rightname"></el-table-column>
        <el-table-column label="等级" prop="level"></el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button type="primary" @click="editRow(scope.row,scope.$index)" icon="el-icon-edit" size="small">编辑</el-button>
            <el-button type="danger" @click="deleteRow(scope)" icon="el-icon-delete" size="small">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-card>

    <el-dialog title="修改角色" :visible.sync="editDialogVisible" width="50%" @close="editDialogClosed">
      <el-form :model="editForm" :rules="editFormRules" ref="addFormRef" label-width="80px">
        <el-form-item label="角色名称" prop="rolename">
          <el-input v-model="editForm.rolename"></el-input>
        </el-form-item>
        <el-form-item label="权限名称" prop="rightname">
          <el-input v-model="editForm.rightname"></el-input>
        </el-form-item>
        <el-form-item label="等级" prop="level">
<!--          <el-input v-model="editForm.level"></el-input>-->
          <el-select v-model="editForm.level" placeholder="请选择">
            <el-option
              v-for="item in leveloptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmEdit">保 存</el-button>
        <el-button @click="editDialogVisible = false">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    import vue from 'vue';
    export default {
        name: "RoleList",
        data() {
            return {
                // 角色表
                rolelist: [{
                    rolename: 'admin',
                    rightname: '超级用户',
                    level: '1'
                },{
                    rolename: 'test',
                    rightname: '普通用户',
                    level: '2'
                }],
                editDialogVisible: false,
                editForm: {
                    rolename: '',
                    rightname: '',
                    level: '',
                },
                editFormIndex: 0,
                // 等级列表
                leveloptions: [{
                    value: '1',
                    label: '1'
                },{
                    value: '2',
                    label: '2'
                },{
                    value: '3',
                    label: '3'
                }],
                // 校验规则
                editFormRules: {
                    rolename: [{
                        required: true,
                        message: '请输入角色名称',
                        trigger: 'blur'
                    },{}],
                    rightname: [{
                        required: true,
                        message: '请输入权限名称',
                        trigger: 'blur'
                    },{}],
                }
            }
        },
        methods: {
            // 关闭编辑对话框
            editDialogClosed() {
                this.$refs.editFormRules.resetFields()
            },
            // 编辑操作
            editRow(item, idx){
                this.editFormIndex = idx;
                this.editForm = {
                    rolename: item.rolename,
                    rightname: item.rightname,
                    level: item.level,
                };
                this.editDialogVisible = true;
            },
            // 确认编辑
            confirmEdit() {
                this.editDialogVisible = false;
                //Vue对象提供的静态方法
                vue.set(this.rolelist, this.editFormIndex, this.editForm);
            },
            // 删除
            deleteRow(scope) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // 实际删除操作
                    this.rolelist.splice(scope.$index, 1);

                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
                // this.$message(`删除数据成功，删除数据id为${scope.$index}`);
            },
        }
    }
</script>

<style lang="less" scoped>

</style>
