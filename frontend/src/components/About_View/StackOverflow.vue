<template>
  <a class="fa fa-stack-overflow" :title="'StackOverflow /' + link" :href="'https://stackoverflow.com/users/' + link"/>

</template>

<script>
export default {
  name: "StackOverflow",
  props: ['link']
}
</script>

<style scoped>

</style>
