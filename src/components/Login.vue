<template>
    <div class="login_container">
      <div class="login_box">
<!--        头像区域-->
        <div class="avatar_box">
          <img src="../assets/logo.png">
        </div>
<!--        登陆表单区-->
<!--        ref="loginFormRef"  为表单的引用对象-->
        <el-form ref="loginFormRef" :model="loginform" :rules="loginFormRules" label-width="0px" class="login_form">
<!--    添加规则：
      1. :rules="loginFormRules" 规则对象
      2. export default {
        name: "Login",
        data(){}
        中添加规则loginFormRules:{[],[]}
      -->
<!--用户名-->
          <el-form-item prop="username">
            <el-input v-model="loginform.username" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
<!--密码-->
          <el-form-item prop="passwd">
            <el-input v-model="loginform.passwd" prefix-icon="el-icon-lock" type="password"></el-input>
          </el-form-item>
<!--按钮区-->
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登陆</el-button>
            <el-button type="info" @click="ResetloginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                // 登陆表单数据绑定对象
                loginform: {
                    username: 'admin',
                    passwd: '123456'
                },
                // 表单验证规则
                loginFormRules: {
                    username: [
                        { required: true, message: '请输入登陆名称', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '请输入登陆密码', trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    ],
              },
            }
        },
        methods: {
            // 登陆
            login() {
                // Promise 则用async，返回值用await
                this.$refs.loginFormRef.validate(async valid => {
                    console.log(valid);
                    // valid为false
                    if (!valid) return;

                    // const {data: res} = await this.$http.post('url', this.loginform);
                    // console.log(res);

                    // if (res.meta.status !== 200) {
                    //     // return console.log('登陆失败');
                    //     this.$message.error('登录失败');
                    // }
                    this.$message.success('登陆成功');
                    //    1. 登陆成功后，将token保存到客户端的sessionStorage中
                    //        1.1 项目中除了登陆外的其他API接口，必须在登录之后访问
                    //        1.2 token只应在当前网站打开期间有效，所以将token保存在sessionStorage中

                    // window.sessionStorage.setItem('token', res.data.token);
                    window.sessionStorage.setItem('token', '这是一个token');

                    //    2. 通过编程式导航跳转到后台主页，路由地址为/home
                    this.$router.push('/home')

                });
            },
            //  重置按钮
            ResetloginForm() {
                this.$refs.loginFormRef.resetFields();
            }
        }
    }
</script>

<style lang="less" scoped>
  .login_container{
      background-color: #2b4b6b;
      height: 100%;
  }
  .login_box {
      width: 450px;
      height: 300px;
      background-color: #fff;
      border-radius: 3px;
      position: absolute;
      /*相对上一级区域的50%， 50%*/
      left: 50%;
      top: 50%;
      /*相对自身的*/
      transform: translate(-50%, -50%);

      .avatar_box{
          height: 130px;
          width: 130px;
          border: 1px solid #eeeeee;
          /*外边框为圆形*/
          border-radius: 50%;
          padding: 10px;
          /*阴影*/
          box-shadow: 0 0 10px #dddddd;
          /*居中*/
          position: absolute;
          left: 50%;
          /*translate(-50%, -50%) 是相对本区域的大小， 即65px, 65px*/
          transform: translate(-50%,-50%);
          background-color: #dddddd;
          img {
              width: 100%;
              height: 100%;
              background-color: #eeeeee;
              /*图形为圆形*/
              border-radius: 50%;
          }
    }

    .login_form {
      position: absolute;
      bottom: 0;
      width: 100%;
      /*右移20px*/
      padding: 0 20px;
      box-sizing: border-box;
    }

    .btns {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
