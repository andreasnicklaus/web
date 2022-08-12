<template>
  <div :class="getPageTitleClass()">

    <div v-if="background_image != null || background_video != null" class="background">
      <img v-if="background_image != null" :src="background_image" :alt="background_image_alt">

      <video v-else-if="background_video != null" autoplay loop muted>
        <source :src="background_video" type="video/mp4">
      </video>
    </div>

    <div id="pagetitle-content">
      <router-link id="back-arrow" v-if="!no_back_arrow" :to="back_arrow_goal ? {name: back_arrow_goal } : back_link"  class="material-icons" >
        <ArrowLeftIcon title="go back" :size="36"/>
      </router-link>

      <div :class="getHeadingDivClass()">
        <hr/><h1>{{ this.title }}</h1><hr/>
      </div>

      <p v-if="paragraph">{{ this.paragraph }}</p>

      <slot/>

      <a id="down-arrow" v-if="down_arrow_goal !== undefined" :href="down_arrow_goal">
        <ArrowDownIcon :title="null" :size="48" class="material-icons" />
      </a>
    </div>
  </div>
</template>

<script>
import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue"
import ArrowDownIcon from "vue-material-design-icons/MenuDown"

export default {
  name: "PageTitle",
  components: {ArrowLeftIcon, ArrowDownIcon},
  props: {
    title: String,
    paragraph: String,
    back_arrow_goal: String,
    down_arrow_goal: String,
    no_back_arrow: Boolean,
    background_image: String,
    background_image_alt: String,
    background_video: String,
    miniature: Boolean
  },
  data() {
    return {
      back_link: window.previousUrl
    }
  },
  methods: {
    getHeadingDivClass() {
      const defaultClasses = 'deco '
      const additionalClasses =  ''
      return defaultClasses + additionalClasses
    },
    getPageTitleClass() {
      const defaultClasses = 'page-title '
      let additionalClasses = this.background_image != null || this.background_video != null ? 'backdrop-set ' : ''
      additionalClasses = additionalClasses + (this.miniature ? 'mini ' : '')
      return defaultClasses + additionalClasses
    }
  }
}
</script>
