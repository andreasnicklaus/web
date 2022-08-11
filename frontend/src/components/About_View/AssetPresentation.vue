<template>
  <div class="asset-presentation">
    <img :src="image" alt="Logo"/>

    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <Button :text="'More info about ' + name" :link="link"/>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "AssetPresentation",
  components: {Button},
  props: ['name', 'description', 'image', 'link']
}
</script>