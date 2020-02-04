<template>
  <el-container class="home-container">
<!--      头部区-->
      <el-header>
          <div>
              <img src="../assets/logo.png">
              <span>系统</span>
          </div>
          <el-button type="info" @click="logout">退出</el-button></el-header>
<!--      页面主体区-->
      <el-container>
<!--          侧边栏-->
          <el-aside :width="isCollapse ? '66px' : '200px'" >
              <div class="toggle-button" @click="toggleCollapse">|||</div>
              <el-menu
                  background-color="#304156"
                  text-color="#fff"
                  active-text-color="#409eff"
                  :unique-opened="true"
                  :collapse="isCollapse"
                  :collapse-transition="false"
                  :router="true"
                  :default-active="''">
                  <el-submenu index="1">
                      <template slot="title">
                          <i class="el-icon-user"></i>
                          <span>用户管理</span>
                      </template>
                      <el-menu-item-group>
                          <template slot="title"></template>
                          <el-menu-item index="userlist">用户列表</el-menu-item>
                      </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="2">
                      <template slot="title">
                          <i class="el-icon-s-operation"></i>
                          <span>权限管理</span>
                      </template>
                      <el-menu-item-group>
                          <template slot="title"></template>
                          <el-menu-item index="rolelist">角色列表</el-menu-item>
                      </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="3">
                      <template slot="title">
                          <i class="el-icon-s-help"></i>
                          <span>数据配置</span>
                      </template>
                      <el-menu-item-group>
                          <template slot="title"></template>
                          <el-menu-item index="configparams">参数配置</el-menu-item>
                      </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="4">
                      <template slot="title">
                          <i class="el-icon-edit-outline"></i>
                          <span>计算</span>
                      </template>
                      <el-menu-item-group>
                          <template slot="title"></template>
                          <el-menu-item index="procedurenormal">普通计算</el-menu-item>
                          <el-menu-item index="procedurecomplex">复杂计算</el-menu-item>
                      </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="5">
                      <template slot="title">
                          <i class="el-icon-s-data"></i>
                          <span>结果</span>
                      </template>
                      <el-menu-item-group>
                          <template slot="title"></template>
                          <el-menu-item index="resultnormal">普通计算结果</el-menu-item>
                          <el-menu-item index="resultcomplex">复杂计算结果</el-menu-item>
                      </el-menu-item-group>
                  </el-submenu>
              </el-menu>
          </el-aside>
<!--        右侧内容区-->
          <el-main>
<!--              路由占位符-->
              <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                // 左侧菜单数据
                menulist: [],
                isCollapse: false,
            }
        },
        methods: {
            logout() {
                // 清除登陆的token
                window.sessionStorage.clear();
                // 跳转到登录页
                this.$router.push('/login')
            },
            // 获取菜单
            getMenuList() {
                const {data: res} = this.$http.get();
                if (res.meta.status !== 200){
                    return this.$message.error(res.meta.msg);
                }
                this.menulist = res.data
                console.log(res)
            },

            // 点击按钮，切换菜单的折叠与展开
            toggleCollapse() {
                this.isCollapse = !this.isCollapse
            },
        },

    }
</script>

<style lang="less" scoped>
    .home-container {
        height: 100%;
    }
    .el-header {
        padding-left: 0;
        background-color: #304156;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 20px;

        > div {
            display: flex;
            align-items: center;
            span {
                margin-left: 15px;
            }
        }
    }

    .el-aside {
        background-color: #304156;
        .el-menu {
            border-right: none;
        }
    }

    .el-main {
        background-color: #eaedf1;
    }

    .toggle-button {
        background-color: #304156;
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
    }

</style>
