<template>
  <div class="user">
    <div v-if="user.name ">{{ this.user.name }} <br><small>(Logged at {{ this.user.loginDate }})</small><br><br><button @click="logout">Logout</button></div>
    <div v-else> <input v-model="input.name" placeholder="Nickname" required minlength="3" maxlength="15" v-on:keyup.enter="saveName"/> <button @click="saveName">Save</button></div>
  </div>
</template>

<script>

export default {
  name: 'User',
  data() {
    return {
      input: {
        name: ''
      },
    }
  },
  methods: {
    saveName() {
      let user = {name: this.input.name, loginDate: new Date().toLocaleString()}
      this.$soketio.emit('add-user', user);
      this.$store.commit('updateUser', user)
    },
    logout(){
      this.$soketio.emit('remove-user', this.user);
      this.$store.commit('updateUser', {})
    }
  },
  computed: {
    user() {
     return this.$store.state.user;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
