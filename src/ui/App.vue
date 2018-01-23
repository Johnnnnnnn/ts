<template>
  <div id="app">
      <fileInput></fileInput>
  </div>
</template>

<script>
import fileInput from './component/fileInput.vue'

export default {
  components: {
    fileInput
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
