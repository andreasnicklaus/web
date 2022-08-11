<template>
  <div>

    <PageTitle
        title="Sign up"
        paragraph="Polly needs a cracker and your data"
        back_arrow_goal="/login"
    />

    <div class="container">
      <SignupForm/>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import SignupForm from "@/components/SignupForm";

export default {
  name: "Signup",
  components: {SignupForm, PageTitle},
  metaInfo: {
    title: 'SignUp - '
  }
}
</script>

<style scoped>

</style>
