<template>
  <div class="forum-create">
    <input v-model="title" class="input" type="text" placeholder="Give your post a title"/>
    <textarea v-model="text" class="input" placeholder="Be creative here"/>
    <Button type="create" text="Create this post" v-on:click.native="createPost"/>
  </div>
</template>

<script>
import Button from "@/components/Button";
import ForumService from "@/services/community/forumServices"

export default {
  name: "ForumCreation",
  components: {Button},
  data() {
    return {
      text: '',
      title: ''
    }
  },
  methods: {
    createPost() {
      console.log(this.title, this.text)
      ForumService.createPost(this.title, this.text).then(response => {
        console.log(response)
        this.$router.push('/forum')
      })
    }
  }
}
</script>

<style scoped>

</style>