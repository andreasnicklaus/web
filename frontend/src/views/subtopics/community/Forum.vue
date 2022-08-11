<template>
  <div id="ForumHome">
    <PageTitle
        title="My.Forum"
        paragraph="Communicate with other users through your posts"
        back_arrow_goal="/"
    />

    <div class="container">
      <ForumControl/>
      <ForumPost v-for="post in posts" :key="post.post_id"
                 :postId="post.post_id"
                 :title="post.title"
                 :creation_time="post.creation_time"
                 :text="post.text"
                 :creator_name="post.creator_name"
                 @delete="deletePost"
      />
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import ForumPost from "@/components/Forum_View/ForumPost";
import ForumControl from "@/components/Forum_View/ForumControl";
import ForumService from "@/services/community/forumServices"

export default {
  name: "Forum",
  components: {ForumControl, ForumPost, PageTitle},
  data() {
    return {
      posts: []
    }
  },
  methods: {
    deletePost(post_id) {
      console.log(post_id)
      ForumService.deletePost(post_id).then(posts => {
        this.posts = posts.reverse()
      })
    }
  },
  created() {
    ForumService.getPosts().then(posts => {
      this.posts = posts.reverse()
    })
  }
}
</script>