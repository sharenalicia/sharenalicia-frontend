<template>
  <div>
    <div class="container">
      <div class="form-group">
        <label for="divisi">Pilih Divisi:</label>
        <select v-model="selected" @change="pilih" class="form-control" id="divisi">
          <option disabled value="">Please select one</option>
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Divisi",
        data() {
            return {
                selected: '',
                options: [
                    { text: 'makanan', value: '1' },
                    { text: 'minuman', value: '2' },
                    { text: 'snack', value: '3' }
                ]
            }
        },
        methods: {
            pilih: function ({ type, target }) {
                let divisiId = target.value;
                let divisiName = target.options[target.selectedIndex].text;
                // console.log(target.value);
                // console.log(target.options[target.selectedIndex].text);

                this.$router.push({
                    name: 'DivisiPesanan',
                    params: {
                        id: divisiId,
                        nama: divisiName
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
