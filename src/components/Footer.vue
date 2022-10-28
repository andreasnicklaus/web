<template>
  <footer>
    <div>
      <h3>Topics</h3>
      <router-link :to="{name: 'Games'}">Games</router-link>
      <router-link :to="{name: 'MyWork'}">My Work</router-link>
    </div>

    <div>
      <h3>About</h3>
      <router-link :to="{name: 'About'}">About</router-link>
      <router-link :to="{name: 'CV'}">My resumé</router-link>
      <router-link :to="{name: 'Imprint'}">Imprint</router-link>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>
