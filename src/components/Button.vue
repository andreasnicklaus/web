<template>
  <router-link :to=link v-if="link && (link.name || link.startsWith('/'))">
    <div :class="'button ' + (type ? type: '')">
      <slot/>
      {{ text }}
    </div>
  </router-link>

  <a v-else-if="link && !link.startsWith('/')" :href="link" :class="'button ' + (type ? type: '')">
    <slot/>
    {{ text }}
  </a>

  <div id="non-link-button" v-else :class="'button ' + (type ? type: '')">
    <slot/>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ['text', 'link', 'type']
}
</script>