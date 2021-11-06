<template>
  <div class="container">
    <div class="row">
      <div class="col">

      <Messages/>
    </div>
    </div>
    <div class="row">
      <div class="col"><br>

    <MessageWrite/>
    </div>
    </div>
  </div>
</template>
<script>
import Messages from "../components/Messages";
import MessageWrite from "../components/MessageWrite";

export default {
  name: 'Chatroom',
  components: {
    Messages, MessageWrite
  }
}
</script>
<style scoped>

</style>