<template>
  <div>
    <PageTitle
        title="Login"
        paragraph="Some times in life you need to leave your data behind to go forward..."
        back_arrow_goal="/"
        down_arrow_goal="#login"
        :background_image="background"
    />

    <ViewRow id="login">
      <LoginForm/>
    </ViewRow>
  </div>

</template>

<script>
import PageTitle from "@/components/PageTitle";
import LoginForm from "@/components/LoginForm";
import KeyboardImage from "@/assets/img/stock/pexels-keyboard-typing.jpg";
import ViewRow from "@/components/ViewRow";

export default {
  name: "Login",
  components: {ViewRow, LoginForm, PageTitle},
  metaInfo: {
    title: 'Login - '
  },
  data() {
    return {
      background: KeyboardImage
    }
  }
 }
</script>
