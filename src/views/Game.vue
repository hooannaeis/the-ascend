<template>
  <div>
    <div class="game__container">
      <h1>Game Mode</h1>
      <div class="game__container--running" v-if="gameRunning">
        <Timer class="timer__container"/>
        <div class="digit__conainer">
          <PopPill v-for="(pillDigit, index) in shuffledArray" :key="index" :digit="pillDigit"></PopPill>
        </div>
      </div>
      <div v-else class="game__container--over">
        <GameResults />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PopPill from '@/components/PopPill.vue';
import GameResults from '@/components/GameResults.vue';
import Timer from '@/components/Timer.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Game',
  components: {
    PopPill,
    GameResults,
    Timer
  },
  computed: mapGetters(['shuffledArray', 'gameRunning']),
  methods: {
    ...mapActions(['setVar', 'startGame'])
  },
  mounted() {
    this.startGame();
  }
};
</script>

<style lang="scss" scoped>
.game__container {
  &--running {
    display: grid;
    justify-content: center;
    grid-template-areas: 'timer' 'digits';
  }
}

.digit__conainer {
  display: grid;
  grid-template-columns: repeat(3, 20vw);
  grid-gap: 5vw;
  grid-area: digits;
  padding: 0.4rem;
}

.timer__container {
  grid-area: timer;
}
</style>
