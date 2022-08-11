<template>
  <div class="dropdown">
    <div class="dropbox" @click="show=!show">
      <span>{{ selectedValue }}</span>
      <i v-if="!show" class="material-icons">expand_more</i>
      <i v-if="show" class="material-icons">expand_less</i>
    </div>

    <div class="dropable" v-if="show">
      <div class="dropdown-option" v-for="option in options" :key="option" @click="updateSelectedValue(option)">
        {{ option }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: ['options', 'defaultValue'],
  data() {
    return {
      selectedValue: this.defaultValue,
      show: false
    }
  },
  methods: {
    updateSelectedValue(value) {
      this.selectedValue = value
      this.$emit('onChange', value)
      this.show = false;
    }
  }
}
</script>