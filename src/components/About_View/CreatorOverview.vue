<template>
  <div class="creator-overview">
    <h1 class="code-font">$whoami 🤗</h1>
    <div id="creator-info">
      <div>
        <h2>{{ name }}</h2>
        <p>Age: {{ creator_age(birthday) }}</p>

        <slot/>

      </div>
      <img :src="image" :alt="'Profile picture of ' + name"/>
    </div>

    <hr/>

    <div v-if="mail || instagramHandle" class="row contact-row">
      <EmailContact v-if="mail" :mail="mail"/>
      <Instagram v-if="instagramHandle" :username="instagramHandle"/>
      <LinkedIn v-if="linkedInHandle" :username="linkedInHandle"/>
      <Github v-if="gitHubHandle" :username="gitHubHandle"/>
      <StackOverflow v-if="stackOverflowLink" :link="stackOverflowLink"/>
    </div>
  </div>
</template>

<script>
import EmailContact from "@/components/About_View/EmailContact";
import Instagram from "@/components/About_View/Instagram";
import LinkedIn from "@/components/About_View/LinkedIn";
import Github from "@/components/About_View/Github";
import StackOverflow from "@/components/About_View/StackOverflow";

export default {
  name: "CreatorOverview",
  components: {StackOverflow, Github, LinkedIn, Instagram, EmailContact},
  props: ['name', 'birthday', 'mail', 'instagramHandle', 'linkedInHandle', 'gitHubHandle','stackOverflowLink', 'image', 'texts'],
  methods: {
    creator_age(datestring) {
      return Math.floor((new Date() - new Date(datestring).getTime()) / 3.15576e+10)
    }
  }
}
</script>
