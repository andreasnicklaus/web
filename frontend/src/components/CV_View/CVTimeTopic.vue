<template>
  <div id="cv-time" class="cv-part">
    <h1>{{ topicName }}</h1>
    <div v-for="(entry, index) in entries" :key="index" class="cv-time-data">
        <span>{{ entry.time }}</span>
        <span>{{ entry.activity }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CVTimeTopic",
  props: ['topicName', 'entries']
}
</script>

<style scoped>

</style>