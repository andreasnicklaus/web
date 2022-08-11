<template>
  <a class="fa fa-linkedin" :title="'LinkedIn /' + username" :href="'https://www.linkedin.com/in/' + username"/>
</template>

<script>
export default {
  name: "LinkedIn",
  props: ['username']
}
</script>

<style scoped>

</style>
