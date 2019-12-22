<template>
  <div>
    <h1>Highscores</h1>
    <LocalHighscores />
  </div>
</template>

<script>
import LocalHighscores from '@/components/LocalHighscores.vue';

export default {
  name: 'Home',
  components: {
    LocalHighscores
  }
};
</script>

<style lang="scss" scoped>
.test {
  display: inline;
}
</style>
