<template>
  <div class="imgorvid">
    <img v-if="isImgPath(path)" :src="path" alt="">

    <video v-else-if="isVidPath(path)" :id="path" autoplay loop muted>
      <source :src="path" type="video/mp4">
    </video>

    <p v-else>{{ path }}</p>
  </div>
</template>

<script>
import PathChecks from "@/services/utils/pathChecks";

export default {
  name: "ImgOrVid",
  props: ['path'],
  methods: {
    isImgPath(path) {
      return PathChecks.isImgPath(path)
    },
    isVidPath(path) {
      return PathChecks.isVidPath(path)
    }
  }
}
</script>
