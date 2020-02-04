import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login';
import Home from '../components/Home';
import Welcome from "../components/Welcome";
import UserList from "../views/User/UserList";
import RoleList from '../views/Authorization/RoleList';
import ConfigParams from '../views/ConfigData/ConfigParams';
import ProcedureComplex from "../views/Compute/ProcedureComplex";
import ProcedureNormal from "../views/Compute/ProcedureNormal";
import ResultComplex from "../views/Result/ResultComplex";
import ResultNormal from "../views/Result/ResultNormal";

Vue.use(Router);

const router = new Router({
  routes: [
      {
          path: "/login",
          component: Login
      },
      {
          path: '/',
          redirect: '/login'
      },
      {
          path: '/home',
          component: Home,
          redirect: '/welcome',
          children: [{
              path: '/welcome',
              component: Welcome
          },{
              path: '/userlist',
              component: UserList
          },{
              path: '/rolelist',
              component: RoleList
          },{
            path: '/configparams',
            component: ConfigParams
          },{
            path: '/procedurecomplex',
            component: ProcedureComplex
          },{
            path: '/procedurenormal',
            component: ProcedureNormal
          },{
            path: '/resultcomplex',
            component: ResultComplex
          },{
            path: '/resultnormal',
            component: ResultNormal
          }]
      }
  ]
});

//挂载路由导航守卫
router.beforeEach((to, from, next)=> {
    // to: 将要访问的路径
    // from: 代表从哪个路径跳转过来
    // next: 是一个函数，表示放行
    //      next() 直接放行
    //      next('/login')  强制跳转的路径

    if(to.path === '/login') return next();
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token');
    // 判断tokenStr是否有值，如果没有则强制跳转到/login路径
    // 如果有值，则直接放行
    if (!tokenStr) return next('/login');
    next();

});

export default router
