<template>
  <div class="login-form">
    <div class="login-inputs">
      <input class="input" type="text" v-model="username" placeholder="username"/>
      <input class="input" type="password" v-model="password" placeholder="password"/>
    </div>

    <div class="login-options row between">
      <Button text="Login" v-on:click.native="trigger_login" type="inline"/>
      <router-link id="signout-link" to="/signup">Sign up</router-link>
    </div>

    <p v-show="message" :class="'message ' + messageType">
      {{ message }}
    </p>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Authentication from '@/services/authentication'

export default {
  name: "LoginForm",
  components: {Button},
  data() {
    return {
      username: '',
      password: '',
      message: '',
      messageType: ''
    }
  },
  methods: {
    trigger_login() {
      Authentication.login(this.username, this.password).then(response => {
        if (response.success) {
          this.$router.push('/')
        } else {
          this.message = response.message
          this.messageType = 'error'
        }
      })
    }
  }
}
</script>
