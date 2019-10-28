<template>
  <div>
    <div class="container">

      <div class="jumbotron">
        <h1>Divisi {{ divisiNama }}</h1>
        <p>Daftar pesanan menurut divisi {{ divisiNama }}.</p>
      </div>
    </div>
    <div class="container">

      <ul class="list-group">
        <li v-for="(item, index) in pesanan" class="list-group-item">
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-8 float-left">
              <table class="table table-borderless">
                <tr>
                  <td colspan="2">
                    <h3>{{ item.nama }}</h3>
                  </td>
                </tr>
                <tr>
                  <td>ID Menu: {{ item.id_menu}}</td>
                  <td>ID Meja: {{ item.id_meja}}</td>
                </tr>
                <tr>
                  <td>ID Pesanan: {{ item.id_pesanan}}</td>
                  <td>Jumlah: {{ item.jumlah }}</td>
                </tr>
                <tr>
                  <td colspan="2" class="float-left">
                    Total Bayar: {{ item.total }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </li>
      </ul>

<!--      <div class="table-responsive">-->
<!--        <table class="table">-->
<!--          <thead>-->
<!--          <tr>-->
<!--            <th>#</th>-->
<!--            <th>Firstname</th>-->
<!--            <th>Lastname</th>-->
<!--          </tr>-->
<!--          </thead>-->
<!--          <tbody>-->
<!--          <tr v-for="item as pesanan">-->
<!--            <td>{{ item.id_menu }}</td>-->
<!--            <td>{{ item.nama }}</td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td>1</td>-->
<!--            <td>Anna</td>-->
<!--            <td>Pitt</td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->
<!--      </div>-->

    </div>
  </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "DivisiPesanan",
        data () {
            return {
                url: 'http://localhost:8012',
                divisiId: this.$route.params.id,
                divisiNama: this.$route.params.nama,
                pesanan: []
            }
        },
        created() {
            if (!localStorage.getItem('token')) {
                this.$router.push('Home')
            }
        },
        mounted() {
            let token = localStorage.getItem('token');
            this.getData(this.divisiNama, token);
        },
        methods: {
            getData: function (type, token) {
                let url = '';

                if (type === 'makanan') {
                    url = this.url + '/api/makanan/' + token;
                }else if (type === 'minuman') {
                    url = this.url + '/api/minuman/' + token;
                } else if (type === 'snack') {
                    url = this.url + '/api/snack/' + token;
                }

                axios.get(url)
                    .then(response => {
                        this.pesanan = response.data;
                    });
                console.log(url);
                // setInterval(function () {
                //     axios.get(url)
                //         .then(response => {
                //             this.pesanan = response.data;
                //         });
                // }, 200000)
            }
        }
    }
</script>

<style scoped>

</style>
