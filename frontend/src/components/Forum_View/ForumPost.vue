<template>
  <div class="forum-post">
    <div class="top-row">
      <h1>{{ title }}</h1>
      <i v-if="creator_name === username" class="material-icons md-24" @click="deletePost">delete</i>
    </div>
    <p class="meta-info">{{ creator_name }}, {{ creation_time }}</p>
    <p class="forum-post-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "ForumPost",
  props: ['postId', 'title', 'text', 'creator_name', 'creation_time'],
  data() {
    return {
      get username() {
        return localStorage.getItem('username')
      }
    }
  },
  methods: {
    deletePost() {
      this.$emit('delete', this.postId)
    }
  }
}
</script>