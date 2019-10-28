import Vue from 'vue'
import Router from 'vue-router'
import Account from '@/components/Account'
import Contact from '@/components/Contact'
import Friends from '@/components/Friends'
import Login from "../components/Login";
import Divisi from "../components/Divisi";
import DivisiPesanan from "../components/DivisiPesanan";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Login
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
    },
    {
      path: '/friends/:id/:age/:weight',
      name: 'Friends',
      props: true,
      component: Friends
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ],
  mode: 'history'
})
