<template>
  <div class="input-group mb-3">
    <input type="text" v-model="message" class="form-control" placeholder="Message" v-on:keyup.enter="sendMessage">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2"  @click="sendMessage">Send</button>
  </div>
</template>

<script>

export default {
  name: "MessageWrite",
  data(){
    return {
      message: '',
    }
  },
  methods: {
    sendMessage() {
      let message = {message: this.message, user: this.$store.state.user, created_at: new Date().toLocaleString()}
      this.$soketio.emit('add-message', message)
      this.message = '';
    }
  }
}
</script>

<style scoped>

</style>