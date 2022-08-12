<template>
  <div id="cv-list" class="cv-part">
    <h1>{{ topicName }}</h1>
    <div v-for="(entry, index) in entries" :key="index">
      <p>{{ entry.time }}</p>
      <ul>
        <li v-for="item in entry.activities" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CVTopicList",
  props: ["topicName", "entries"]
}
</script>