<template>
  <!--  <input type="number" @input="handleInput" v-model="content"/>-->
  <div class="input number">
<!--    <span>{{ content }}</span>-->
    <input type="number" class="input" :min="min" v-model="content" @change="setContent"/>
    <div class="control">
      <i class="material-icons" @click="increase">expand_less</i>
      <i class="material-icons" @click="decrease">expand_more</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Numberinput",
  props: ['value', 'min'],
  data() {
    return {
      content: this.value
    }
  }
  ,
  methods: {
    increase() {
      this.content++;
      this.$emit('input', this.content)
    },
    decrease() {
      if (this.min != null) {
        if (this.content > this.min) {
          this.content--;
        }
      } else {
        this.content--;
      }
      this.$emit('input', this.content)
    },
    setContent() {
      this.$emit('input', this.content)
    }
  }
}
</script>

