<template>
  <div>
    <h2>Global Highscores</h2>
    <div v-if="globalHighscores">
      <div
        v-for="(globalHighscore, globalHighscoreIndex) in globalHighscores"
        :key="globalHighscoreIndex"
      >
        <div class="highscore__position">
          <span>{{globalHighscoreIndex + 1}}</span>
          <span>{{globalHighscore.username}}</span>
          <span>{{globalHighscore.time}}</span>
        </div>
      </div>
    </div>
    <div v-else>you dont have any highscores yet.</div>
  </div>
</template>

<script>
export default {
  name: 'globalHighscores',
  data() {
    return {
      globalHighscores: null
    };
  },
  async created() {
    this.globalHighscores = await this.getGlobalHighscores();
  },
  methods: {
    async getGlobalHighscores() {
      let globalHighscores = [];
      await this.$store.state.db
        .collection('highscores')
        .orderBy('time')
        .limit(10)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(async function(doc) {
            let snapshot = await doc.data();
            globalHighscores.push({
              username: snapshot.username,
              time: snapshot.time
            });
          });
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log('Error getting documents: ', error);
          return false;
        });
      // eslint-disable-next-line no-console
      console.log('doc', globalHighscores);
      return globalHighscores;
    }
  }
};
</script>

<style lang="scss" scoped>
.highscore {
  &__position {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'rank' 'name' 'time';
  }
}
</style>