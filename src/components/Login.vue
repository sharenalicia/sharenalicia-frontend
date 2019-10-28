<template>
  <div>

    <form action="" class="login-form" method="post">
      <h1>LOGIN</h1>

      <div>
        <p>{{ message }}</p>
      </div>

      <div class="txtb">
        <input v-model="username" type="text" name="username" id="username">
        <span data-placeholder="Username"></span>
      </div>

      <div class="txtb">
        <input v-model="password" type="password" name="password" id="password">
        <span data-placeholder="password"></span>
      </div>

      <button class="logbtn" type="button" v-on:click="submitLogin">Login</button>

      <div class="bottom-text">
        Don't have account? <a href="#">Sign Up</a>
      </div>
    </form>

  </div>
</template>

<script>
  import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
        url: 'http://localhost:8000',
        username: '',
        password: '',
        message: ''
    }
  },
    created() {
      if (localStorage.getItem('token')) {
          this.$router.push('Divisi')
      }
        // console.log('ini created');
    },
    mounted() {
        // console.log('ini mounted');
    },
    methods: {
      submitLogin: function (event) {
          const newComponent = new URLSearchParams()
          newComponent.append('username', this.username)
          newComponent.append('password', this.password)

          axios.post(this.url + '/api/login', newComponent)
              .then(response => {
                  this.loginSuccessful(response)
              })
      },
        loginSuccessful(res){
          this.message = '';

          if(res.data.success === false) {
              this.loginFailed(res);
              return;
          }

          console.log(res.data.data.apitoken);
          localStorage.setItem('token', res.data.data.apitoken);

          this.$router.push('Divisi');
          // this.$router.replace(this.$route.query.redirect || '/about')
        },
        loginFailed(res){
          this.message = res.data.message;
          delete localStorage.clear();
        },
    }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: Poppins-Regular, sans-serif;
    box-sizing: border-box;
  }
  body{
    min-height: 100vh;
    background-color: #f1f1f1;
  }
  .login-form{
    width: 360px;
    background-color: #f1f1f1;
    height: 580px;
    padding: 80px 40px;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .login-form h1{
    padding-top: 60px;
    text-align: center;
    margin-bottom: 60px;
  }
  .txtb{
    border-bottom: 2px solid #adadad;
    position: relative;
    margin: 30px 0;
  }
  .txtb input{
    font-size: 15px;
    color: #333;
    background:none;
    border:none;
    width: 100%;
    outline: none;
    padding: 0 5px;
    height: 40px;
  }
  .txtb span::before{
    content: attr(data-placeholder);
    top: 50%;
    left: 50px;
    position: absolute;
    color: #adadad;
    transform: translateY(-50%);
    z-index: -1;
    transition: .5s
  }
  .txtb span::after{
    content: '';
    position: absolute;
    height: 2px;
    background: linear-gradient(120deg,#3498db,#8e44ad);
    width: 0%;
    transition: .5s;
  }
  .focus + span::before{
    top:-5px;
  }
  .focus + span ::after{
    width: 100%;
  }
  .logbtn{
    display: block;
    width: 100%;
    height: 50px;
    border: none;
    background:linear-gradient(120deg,#3498db,#8e44ad);
    background-size: 200%;
    color: #fff;
    outline: none;
    cursor: pointer;
    transition: .5s;
  }
  .logbtn:hover{
    background-position: right;
  }
  .bottom-text{
    margin-top: 60px;
    text-align: center;
    font-size: 13px;
  }

  /* ===================================DIVISI================================================== */
  .list{
    background-color: #d3d3d3;
  }
  .main{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h2{
    text-align: center;
  }

  select{
    appearance : none;
    outline: none;
    box-shadow: none;
    background-color: #2c3e50;
    border: 0 !important;
  }
  .select{
    position: relative;
    display: block;
    width: 25rem;
    height: 4rem;
    background-color: #2c3e50;
    line-height: 3;
    border-radius: .25em;
    text-align: center;
    margin-top: 50px;
  }
  select{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 0 0 .5em;
    color: #fff;
    font-size: 1em;
    letter-spacing: .10px;
    cursor: pointer;
    padding-right: 20px;
  }
  .select::after{
    content: '\25bc';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #34495e;
    pointer-events: none;
  }
  .select:hover::after{
    color: #31a3e4;
  }
  .select::after{
    transition: .2s all ease;
  }
</style>
