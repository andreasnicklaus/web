<template>
  <footer>
    <div>
      <h3>Topics</h3>
      <a style="text-decoration: line-through;">Pixelpaint</a>
      <!--      <router-link to='/pixelpaint'>Pixelpaint</router-link>-->
      <a style="text-decoration: line-through;">Currency Converter</a>
      <!--      <router-link to='/currency_converter'>Currency Converter</router-link>-->
      <router-link to="/games">Games</router-link>
      <router-link to="/forum">My.Forum</router-link>
      <router-link to="/my-work">My Work</router-link>
    </div>

    <div>
      <h3>About</h3>
      <router-link to='/about'>About</router-link>
      <router-link to='/CV'>My resumé</router-link>
      <router-link to="/imprint">Imprint</router-link>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>
