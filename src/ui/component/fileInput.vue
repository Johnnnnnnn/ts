<template>
    <input type="file" @change="fileChange">
</template>

<script>

export default {
  methods : {
    fileChange () {
      let file = this.$el.files[0]
      
      
    }
  }
}
</script>

<style>
</style>
