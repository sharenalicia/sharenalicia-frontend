<template>
  <div>
    <div class="container">
      <div v-if="invalidToken">
        <div class="alert alert-danger" role="alert">
          Token Invalid.
        </div>
      </div>
      <div class="jumbotron">
        <h1>Divisi {{ divisiNama }}</h1>
        <p>Daftar pesanan menurut divisi {{ divisiNama }}.</p>
        <!-- <p>Data di reload dalam {{ countDown }} detik</p> -->
      </div>
    </div>
    <div class="container">
      <p>
        <button type="button" class="btn btn-primary btn-lg btn-block" v-on:click="cetak">CETAK</button>
      </p>
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
                pesanan: [],
                countDown: 15,
                invalidToken: ''
            }
        },
        created() {
            if (!localStorage.getItem('token')) {
                this.$router.push('Home')
            }
            this.$router.push({path: this.$route.path, query: {token: localStorage.getItem('token')}})
            let token = this.$route.query.token;

            if (token !== localStorage.getItem('token')) {
              this.invalidToken = true;
            }
        },
        mounted() {
            let token = localStorage.getItem('token');
            this.getData(this.divisiNama, token);
            
            window.setInterval(() => {
              if(this.countDown <= 0) {
                this.countDown = 15;
                
                let token = localStorage.getItem('token');
                this.getData(this.divisiNama, token);
              }else{
                this.countDown = this.countDown - 1;
              }
          },1000);
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
            },
            cetak: function () {
                window.print();
            }
        }
    }
</script>

<style scoped>

</style>
