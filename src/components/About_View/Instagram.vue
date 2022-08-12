<template>
  <a class="fa fa-instagram" :title="'Instagram @' + username" :href="'https://instagram.com/' + username"/>
</template>

<script>
export default {
  name: "Instagram",
  props: ['username']
}
</script>
