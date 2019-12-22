<template>
  <div>
    <h2>Your Highscores</h2>
    <div v-if="localHighscores">
      <div
        v-for="(localHighscore, localHighscoreIndex) in localHighscores" :key="localHighscoreIndex"
      >{{ localHighscore }}s</div>
    </div>

            <!-- <PopPill v-for="(pillDigit, index) in shuffledArray" :key="index" :digit="pillDigit"></PopPill> -->

    <div v-else>you dont have any highscores yet.</div>
  </div>
</template>

<script>
export default {
  name: 'LocalHighscores',
  computed: {
    localHighscores() {
      let localHighscores = localStorage.getItem('localHighscores');
      if (localHighscores) {
        return localHighscores.split(',')
      } else {
        return undefined
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.test {
  display: inline;
}
</style>