<template>
 <div>
   <PageTitle
       title="Create Forum Post"
       paragraph="The more you write, the less you have to read. I guess..."
       back_arrow_goal="/forum"
   />
   <div class="container">
     <ForumCreation/>
   </div>
 </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import ForumCreation from "@/components/Forum_View/ForumCreation";
export default {
name: "Create",
  components: {ForumCreation, PageTitle}
}
</script>

<style scoped>

</style>