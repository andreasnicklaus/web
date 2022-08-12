<template>
  <header>
    <div id="header-content" class="row between">
      <div class="row col-3 nowrap center">
        <span id="menuicon" @click="menuOpen = !menuOpen">
          <MenuIcon :size="36" v-if="menuOpen===false"/>
          <CloseIcon :size="36" v-else/>
        </span>
      </div>

      <div class="row col-3 nowrap center" id="center-head">
        <RouterLink to="/" id="page-name" title="Asante sana squash Banana - Rafiki">Andreas Nicklaus</RouterLink>
      </div>

      <div class="row right-sided col-3 nowrap center">
        <ThemeLightDarkIcon class="material-icons clickable" :size="36" title="Change the theme" v-on:click="change_theme()"/>
        <span id="clock">{{ time }}</span>
      </div>
    </div>

    <div id="menu" :class="getMenuClasses()">
      <img id="profile-pic" alt="Profile Picture of Andreas Nicklaus" :src="profilePic"/>
      <p>Hi, I'm Andi 👋</p>

      <nav>
        <router-link v-for="e in [
            {link: '/', name: 'Home'},
            {link: '/about', name: 'About me'},
            {link: '/my-work', name: 'My work'},
            {link: '/games', name: 'Games'},
        ]" @click.native="menuOpen = !menuOpen" :key="e.name" :to="e.link">{{e.name}}</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import ThemeLightDarkIcon from "vue-material-design-icons/ThemeLightDark.vue"
import MenuIcon from "vue-material-design-icons/Menu";
import CloseIcon from "vue-material-design-icons/Close";

import AN_image from"@/assets/img/AndreasNicklaus.jpeg"

export default {
  name: 'MyHeader',
  props: ['theme'],
  components: {ThemeLightDarkIcon, MenuIcon, CloseIcon},
  data() {
    return {
      timer: setInterval(this.update_time, 1000),
      time: '',
      menuOpen: false,
      profilePic: AN_image,
      get username() {
        return localStorage.getItem('username')
      }
    }
  },
  methods: {
    getMenuClasses() {
      return this.menuOpen ? 'open' : 'closed'
    },
    change_theme() {
      this.$emit('theme_change')
    },
    update_time() {
      let date = new Date()
      this.time = date.toLocaleTimeString('de-DE')
    }
  }
  ,
  destroyed() {
    this.timer = null
  }
}
</script>
