<template>
  <div id="app">
      <fileInput @change="fileChange"></fileInput>
  </div>
</template>

<script>
import fileInput from './component/fileInput.vue'

export default {
  methods : {
    fileChange (){
      console.error('!?')
    }
  },
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
