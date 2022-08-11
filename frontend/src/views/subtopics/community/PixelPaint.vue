<template>
  <div>
    <PageTitle
        title="Pixel Paint"
        paragraph="Paint one pixel a day - every day"
    />

    <div>
      <div>
        <p>Click a field to set a color:</p>
        <table>
          <tr v-for="row in pixeldata.keys()" v-bind:key="row">
            <td v-for="column in pixeldata[row].keys()" v-bind:key="column" :class=pixeldata[row][column]
                v-on:click="field_clicked(row, column)"></td>
          </tr>
        </table>

        <div>
          <p>Select a color:</p>

          <table>
            <tr>
              <td v-for="color in possibleColors"
                  v-bind:key=color
                  :class="[color, (color===selected) ? 'selected' : null]"
                  v-on:click="change_selected(color)"
              ></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PageTitle from "@/components/PageTitle";

export default {
  name: "PixelPaint",
  components: {PageTitle},
  data() {
    return {
      possibleColors: ['red', 'green', 'white', 'blue'],
      selected: 'red',
      pixeldata: [
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
      ] // TODO: load from backend
    }
  },
  methods: {
    field_clicked(row, column) {
      let pixel_copy = this.pixeldata
      pixel_copy[row][column] = this.selected
      this.$set(this.pixeldata, pixel_copy)
      // TODO: post change to server (websockets?)
    },

    change_selected(color) {
      this.selected = color
    }
  }

}
</script>