<template>
  <div>
    <div class="container">
      <div class="jumbotron">
        <h1>Logout</h1>
        <p>Anda berhasil logout.</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Logout",
        created() {
            if (!localStorage.getItem('token')) {
                this.$router.push('Home')
            }

            localStorage.clear();
        }
    }
</script>

<style scoped>

</style>
