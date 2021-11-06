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
export default {
  name: "Message",
  data() {
    return {
    }
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    }
  }
}
</script>

<style scoped>

</style>