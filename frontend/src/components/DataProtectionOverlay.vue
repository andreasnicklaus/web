<template>
  <div id="data-protection">
    <div class="inset-box">
      <div class="left">
        <h1>Usage data collection</h1>
        <span>
          When using this site, you agree with me collecting usage data. You can
          get more information <router-link class="underline" to="/imprint#dataProtectionNotice">here</router-link>.
          <br/>
          Additionally, I use cookies to store your authentication when you log in.
          <br/>
          You need to consent to get rid of this message.
        </span>
      </div>
      <Button text="Consent" v-on:click.native="$emit('consent')"/>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "DataProtectionOverlay",
  components: {Button}
}
</script>

<style scoped>

</style>
