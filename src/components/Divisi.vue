<template>
  <div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
    export default {
        name: "Divisi",
        data() {
            return {
                selected: '',
                options: [
                    { text: 'One', value: 'A' },
                    { text: 'Two', value: 'B' },
                    { text: 'Three', value: 'C' }
                ]
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
