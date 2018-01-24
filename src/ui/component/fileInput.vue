<template>
  <input type="file" @change="fileChange">
</template>

<script>

export default {
  methods : {
    fileChange () {
      let file = this.$el.files[0];

      $.ajax({
        type: 'POST',
        url: `http://${SERVER_HOST}/analysisTs`,
        crossDomain: true,
        data: '{"some":"json"}',
        dataType: 'json',
        success: function(responseData, textStatus, jqXHR) {
          var value = responseData.someKey;
        },
        error: function (responseData, textStatus, errorThrown) {
          alert('POST failed.');
        }
      });
      
      this.$emit('change')
      
    }
  }
}
</script>

<style>
</style>
