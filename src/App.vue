<template>
  <div id="app">
    <router-link to="/" class="nav--home" v-if="this.$route.name!='Home'">&pr;</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    // eslint-disable-next-line no-console
    console.log(this.$store.state.db);
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $background-bright;
  background-color: $background-dark;
  max-width: $break-phone;
  text-align: center;
  margin: auto;
  min-height: 98vh;
  min-width: 94vw;
}

.nav {
  &--home {
    position: relative;
    top: 1rem;
    left: -45%;
  }
}
</style>
