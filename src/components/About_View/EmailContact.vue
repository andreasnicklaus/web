<template>
  <a v-if="!plaintext" class="fa fa-envelope" title="Contact via E-Mail" :href="create_mail()"/>
  <a v-else class="underline" title="Contact via E-Mail" :href="create_mail()">{{mail}}</a>
</template>

<script>
export default {
  name: "EmailContact",
  props: {
    mail: String,
    plaintext: Boolean
  },
  methods:{
    create_mail() {
      return "mailto:" + this.mail
          + "?subject=" + encodeURIComponent("Contact from your website")
          + "&body=" + encodeURIComponent(
              'Sehr geehrter Herr Nicklaus,\r\r\r\rMit freundlichen Grüßen,\r\r'
          )
    }
  }
}
</script>

<style scoped>

</style>
