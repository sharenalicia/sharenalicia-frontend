<template>
  <div id="app">
    <div v-if="isLogin">

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <!-- Brand -->
        <a class="navbar-brand" href="#">APLIKASI</a>

        <!-- Links -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'Divisi'}" class="nav-link">Pilih Divisi</router-link>
          </li>

          <!-- Dropdown -->
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              Halo Namamu
            </a>
            <div class="dropdown-menu">
              <router-link :to="{ name: 'Logout'}" class="dropdown-item">Logout</router-link>
            </div>
          </li>
        </ul>
      </nav>
      <br>
    </div>
<!--    <img src="./assets/logo.png">-->
<!--    <router-link to="friends/1/2/3">Friends</router-link>-->
<!--    <router-link to="account">Account</router-link>-->
<!--    <router-link to="contact">Contact</router-link>-->
    <router-view/>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'app',
        data() {
            return {
                isLogin: false
            }
        },
        created() {
            if (localStorage.getItem('token')) {
                this.isLogin = true;
            }
        },
        mounted() {
            if (localStorage.getItem('token')) {
                this.isLogin = true;
            }
        },
        methods() {

        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
