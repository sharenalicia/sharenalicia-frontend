<template>
  <div>
    <div class="container">

      <div class="jumbotron">
        <h1>Divisi {{ divisiNama }}</h1>
        <p>Daftar pesanan menurut divisi {{ divisiNama }}.</p>
      </div>

      <div class="table-responsive">
        <table class="table">
          <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>City</th>
            <th>Country</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>Anna</td>
            <td>Pitt</td>
            <td>35</td>
            <td>New York</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Anna</td>
            <td>Pitt</td>
            <td>35</td>
            <td>New York</td>
            <td>USA</td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "DivisiPesanan",
        data () {
            return {
                url: 'http://localhost:8000',
                divisiId: this.$route.params.id,
                divisiNama: this.$route.params.nama,
                pesanan: []
            }
        },
        created() {
            if (!localStorage.getItem('token')) {
                this.$router.push('Home')
            }
            console.log(this.divisiId);
            console.log(this.divisiNama);
        },
        mounted() {
            let token = localStorage.getItem('token');
            this.getData(this.divisiNama, token);
            console.log(this.item);
        },
        methods: {
            getData: function (type, token) {
                let url = '';

                if (type === 'makanan') {
                    url = this.url + '/makanan/' + token;
                }else if (type === 'minuman') {
                    url = this.url + '/minuman/' + token;
                } else if (type === 'snack') {
                    url = this.url + '/snack/' + token;
                }

                console.log(url);
                axios.get(url)
                    .then(response => {
                        this.item = response.data;
                    });
            }
        }
    }
</script>

<style scoped>

</style>
