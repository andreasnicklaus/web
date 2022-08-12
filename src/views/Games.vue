<template>
<div id="games">
  <PageTitle title="Games" :miniature="miniature()" :background_image="pageimg">
    <Button :link="{name: 'Civilization'}" text="WIP: Civilization" type="inline"/>
    <Button link="http://github.com/andreasnicklaus/spyfall" text="Spyfall" type="inline"/>
    <Button link="http://github.com/andreasnicklaus/werewolves-dawn" text="Werewolves Dawn" type="inline"/>
    <Button link="http://github.com/andreasnicklaus/concept-game" text="Concept" type="inline"/>
  </PageTitle>
  <router-view class="selectedGame"></router-view>
</div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import Button from "@/components/Button";
import switchImg from "@/assets/img/stock/pexels-switch.jpg"
export default {
  name: "Games",
  components: {Button, PageTitle},
  metaInfo: {
    title: 'Games - '
  },
  data() {
    return {
      pageimg: switchImg
    }
  },
  methods: {
    miniature()  {
      return this.$router.currentRoute.path !== '/games'
    }
  }
}
</script>

<style scoped>

</style>
