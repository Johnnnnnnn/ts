<template>
  <input type="file" @change="fileChange">
</template>

<script>

export default {
  methods : {
    fileChange () {
      

      if( window.FormData !== undefined ) 
      //make sure that we can use FormData ie>9, chrome > 7, opera > 12 safari >5, android > 3  gecko mobile > 2, opera mobile >12 <- wil support XHR too
      {
        let form = new FormData()
        let file = this.$el.files[0];  
        form.append('userFile', file)
        $.ajax(
          {
            type: 'POST',
            url: `http://${SERVER_HOST}/analysisTs`,
            crossDomain: true,
            data: form,
            success: function(responseData, textStatus, jqXHR) {
              console.error(`success, status = ${textStatus}` )
            },
            error: function (responseData, textStatus, errorThrown) {
              console.error(`fail, status = ${textStatus}, error = + ${errorThrown}` )
            },
            cache: false,
            contentType: false,
            processData: false
          }
        );
        this.$emit('change')
      }
    }
  }
}
</script>

<style>
</style>
