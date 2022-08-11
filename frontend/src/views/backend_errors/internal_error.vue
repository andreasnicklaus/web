<template>
  <div>
    <PageTitle
        title="Server error"
        paragraph="Never confuse a single defeat with a final defeat"
        back_arrow_goal="/"
        :background_image="background">
      <Button text="Accept the defeat" link="/" type="inline"/>
    </PageTitle>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import Button from "@/components/Button";
import DarkDesk from "@/assets/img/stock/pexels-desk-setup-dark.jpg";

export default {
  name: "internal_error",
  components: {Button, PageTitle},
  data() {
    return {
      background: DarkDesk
    }
  }
}
</script>

<style scoped>

</style>
