<template>
<div>
  <ol class="list-group list-group">
    <li class="list-group-item d-flex justify-content-between align-items-start"
        v-for="(message,index) in messages" :key="index">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{{ message.user.name }}</div>
        {{ message.message }}
      </div>
      <span class="badge bg-primary rounded-pill">{{ message.created_at }}</span>
    </li>
  </ol>
 </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: "Message",
  data() {
    return {
      socket: io(process.env.VUE_APP_SOCKET_ENDPOINT),
    }
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    }
  },
  created() {
    this.$soketio.on('new-message', (data) => {
      this.$store.commit('addMessage', data);
    })
  }
}
</script>

<style scoped>

</style>