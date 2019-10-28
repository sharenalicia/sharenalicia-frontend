import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import Divisi from "../components/Divisi";
import DivisiPesanan from "../components/DivisiPesanan";
import Logout from "../components/Logout";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Login
    },
    {
      path: '/Home',
      redirect: '/'
    },
    {
      path: "/divisi",
      name: 'Divisi',
      component: Divisi
    },
    {
      path: "/divisi/:id/:nama",
      name: 'DivisiPesanan',
      component: DivisiPesanan
    },{
      path: "/logout",
      name: 'Logout',
      component: Logout
    },
  ],
  mode: 'history'
})
