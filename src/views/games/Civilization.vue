<template>
  <div id="civilization">
    <ViewRow>
      <h1>WIP: Civilization</h1>
      <p>🪙 {{ game.money }}</p>

      <div class="island" v-for="island in game.islands" :key="island.name + Math.random()">
        <h2 class="island-name">{{ island.name }}</h2>
        <div class="row even">
          <span v-for="(amount, name) in island.resources" :key="name">{{ name }} {{ amount }}</span>
        </div>

        <h3>Static resources</h3>
        <div class="row even">
          <span v-for="staticBuilding in island.staticBuildings" :key="staticBuilding">{{ staticBuilding }}</span>
        </div>

        <h3>Houses</h3>
        <div class="row even">
          <span v-for="house in island.houses" :key="house.level + Math.random()"><HomeIcon/> lvl. {{ house.level }}</span>
        </div>

        <h3>Production Buildings</h3>
        <div class="row even">
          <span v-for="productionBuilding in island.productionBuildings"
                :key="productionBuilding.name + Math.random()">{{ productionBuilding.name }} ({{ productionBuilding.level }})</span>
        </div>
      </div>

      <Button text="Add Island" v-on:click.native="game.addEmptyIsland()">
        <PlusIcon/>
      </Button>
<!--      <Button text="Game Tick" v-on:click.native="game.tick()"/>-->
    </ViewRow>
  </div>
</template>

<script>
import ViewRow from "@/components/ViewRow";
import CivGame from "@/services/games/civilization/civMain";
import Button from "@/components/Button";
import HomeIcon from "vue-material-design-icons/Home"
import PlusIcon from "vue-material-design-icons/Plus"

export default {
  name: "Civilization",
  components: {Button, ViewRow, HomeIcon, PlusIcon},
  metaInfo: {
    title: 'Civilization - '
  },
  data() {
    return {
      game: new CivGame()
    }
  },
  mounted() {
    const self = this
    setInterval(() => self.game.tick(), 2000)
  }
}
</script>

