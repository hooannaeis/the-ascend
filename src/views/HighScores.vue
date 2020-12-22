<template>
  <div>
    <h1>Highscores</h1>
    <LocalHighscores />
    <GlobalHighscores />
  </div>
</template>

<script>
import LocalHighscores from '@/components/LocalHighscores.vue'
import GlobalHighscores from '@/components/GlobalHighscores.vue'

export default {
  name: 'Home',
  components: {
    LocalHighscores,
    GlobalHighscores
  }
}
</script>

<style lang="scss" scoped>
.test {
  display: inline;
}
</style>
