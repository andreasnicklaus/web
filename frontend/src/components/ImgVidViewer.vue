<template>
  <div class="img-vid-viewer">

    <div class="video-presenter">
      <div class="video-wrapper" :style="{left: -imgIndex * 100 + '%'}">
        <img-or-vid v-for="imgVid in imgVids" :key="imgVid" :path="imgVid"/>
      </div>
    </div>

    <div class="row between">
      <Button :type="getButtonClassPrev()" text="prev" @click.native="decreaseCounter"/>
      <Button :type="getButtonClassNext()" text="next" @click.native="increaseCounter"/>
    </div>

  </div>
</template>

<script>
import ImgOrVid from "@/components/ImgOrVid";
import Button from "@/components/Button";

export default {
  name: "ImgVidViewer",
  components: {Button, ImgOrVid},
  props: ['imgVids'],
  data() {
    return {
      imgIndex: 0
    }
  },
  methods: {
    increaseCounter() {
      if (this.imgIndex < this.imgVids.length - 1) {
        this.imgIndex++
      }
    },
    decreaseCounter() {
      if (this.imgIndex > 0) {
        this.imgIndex--
      }
    },
    getButtonClassPrev() {
      const defaultClasses = 'inline '
      const additionalClasses = this.imgIndex <= 0 ? 'hidden': ''
      return defaultClasses + additionalClasses
    },
    getButtonClassNext() {
      const defaultClasses = 'inline '
      const additionalClasses = this.imgIndex >= this.imgVids.length -1 ? 'hidden': ''
      return defaultClasses + additionalClasses
    }
  }
}
</script>
