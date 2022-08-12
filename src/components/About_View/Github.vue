<template>
  <a class="fa fa-github" :title="'Github /' + username" :href="'https://www.github.com/' + username"/>

</template>

<script>
export default {
  name: "Github",
  props: ['username']
}
</script>

<style scoped>

</style>
