<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <span v-if="this.$store.state.user.name"> |  </span>
    <router-link to="/chatroom" v-if="this.$store.state.user.name">Chat Room</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  created() {
  },
  beforeUnmount() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
