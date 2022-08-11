<template>
  <div id="app" :class="this.theme">
    <MyHeader :theme=theme @theme_change="changeTheme"/>

    <router-view class="main"/>

    <DataProtectionOverlay v-if="show_dp_overlay" v-on:consent="consent"/>

    <MyFooter/>
  </div>
</template>

<script>
import MyFooter from '@/components/Footer.vue'
import MyHeader from "@/components/Header";
import AuthenticationService from "@/services/authentication";
import DataProtectionOverlay from "@/components/DataProtectionOverlay";
import localstorageHandler from "@/services/utils/localstorageHandler";

export default {
  name: 'App',
  components: {
    DataProtectionOverlay,
    MyHeader,
    MyFooter
  },
  metaInfo: {
    titleTemplate: '%sAndreas Nicklaus',
    meta: [
      { name: 'description', content: "Come take a look at my website and let me know how I'm doing! Come get to know me!"},
      { name: 'author', content: 'Andreas Nicklaus'},
      { name: 'keywords', content: 'Andreas Nicklaus, Nicklaus, About, Life, Skills, Job, Resume, CV, work, study, student, website, software developer, hobby'},
      { name: 'author', content: 'Andreas Nicklaus'}
    ]
  },
  data() {
    return {
      theme: 'light',
      show_dp_overlay: true
    }
  },
  methods: {
    changeTheme() {
      if (this.theme === "light") {
        this.theme = 'dark'
      } else if (this.theme === 'dark') {
        this.theme = 'light'
      }
    },
    consent() {
      this.show_dp_overlay = false;
      localstorageHandler.store('AcceptedDataProctection', true)
    }
  },
  created() {
    AuthenticationService.checkLoginStatus()
    // TODO: bind consent to user account if possible
    let dpAccept = localstorageHandler.get('AcceptedDataProctection')
    if (dpAccept) this.consent()
  }

}
</script>

<style src="@/assets/style/main.scss" lang="scss"></style>
