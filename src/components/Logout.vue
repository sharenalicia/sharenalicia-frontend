<template>
  <div>
    <div class="container">
      <div class="jumbotron">
        <h1>Logout</h1>
        <p>Anda berhasil logout. akan di alihkan dalam {{ countDown }}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Logout",
        data() {
            return {
                countDown : 5
            }
        },
        mounted() {
        },
        method: {
        },
        created() {
            if (!localStorage.getItem('token')) {
                this.$router.push('Home')
            }
            
            this.$router.push({path: this.$route.path, query: {token: localStorage.getItem('token')}})

            localStorage.clear();


          window.setInterval(() => {
              if(this.countDown <= 0) {
                this.$router.go('/');
              }else{
                this.countDown = this.countDown - 1;
              }
          },1000);
        }
    }
</script>

<style scoped>

</style>
