<template>
  <div>
    <PageTitle
        title="404 - Not Found"
        paragraph="Failure is always an option"
        :background_image="background"
    />
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import DarkDesk from "@/assets/img/stock/pexels-desk-setup-dark.jpg";

export default {
  name: "error_404",
  components: {PageTitle},
  data() {
    return {
      background: DarkDesk
    }
  }
}
</script>

<style scoped>

</style>
