<template>
  <div id="app">
    <router-link to="/" class="nav--home" v-if="this.$route.name!='Home'">
      &pr;
    </router-link>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $background-bright;
  background-color: $background-dark;
  max-width: $break-tablet;
  text-align: center;
  margin: auto;
  min-height: 78vh;
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
