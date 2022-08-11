<template>
  <div class="signup-form">
    <input class="input" type="text" v-model="username" placeholder="Give yourself a username"/>
    <input class="input" type="password" v-model="password" placeholder="Set your password"/>
    <input class="input" type="password" v-model="password_repetition" placeholder="repeat your password"/>
    <Button text="Create user account" v-on:click.native="trigger_signup"/>
    <div v-show="message" :class="'message ' + messageType">
      {{ message }}
      <RouterLink v-if="messageType==='success'" to="/login" class="forward">Log in</RouterLink>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import AuthenticationService from '@/services/authentication'

export default {
  name: "SignupForm",
  components: {Button},
  data() {
    return {
      username: '',
      password: '',
      password_repetition: '',
      message: '',
      messageType: ''
    }
  },
  methods: {
    trigger_signup() {
      if (this.password === this.password_repetition) {
        AuthenticationService.signup(this.username, this.password).then(response => {
          this.message = response.message
          this.messageType= response.success ? 'success': 'error'
        })
      } else {
        this.message = 'The passwords must be equal'
        this.messageType = 'error'
      }
    }
  }
}
</script>

<style scoped>

</style>