<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.test {
  display:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $background-dark;
  max-width: $break-tablet;
  text-align: center;
  margin: auto;
}
</style>
