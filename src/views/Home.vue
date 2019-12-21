<template>
  <div>
    <div class="game__container">
      <div class="game__container--running" v-if="gameRunning">
        <div class="digit__conainer">
          <PopPill v-for="(pillDigit, index) in shuffledArray" :key="index" :digit="pillDigit"></PopPill>
        </div>
        <Timer class="timer__container"/>
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
  name: 'home',
  components: {
    PopPill,
    GameResults,
    Timer
  },
  computed: mapGetters(['shuffledArray', 'gameRunning']),
  methods: {
    ...mapActions(['setVar', 'setNextLevel', 'startGame'])
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
    grid-template-areas: 'digits' 'timer';
  }
}

.digit__conainer {
  display: grid;
  grid-template-columns: repeat(3, 20vw);
  grid-gap: 5vw;
  grid-area: digits;
}

.timer__container {
  grid-area: timer;
}
</style>
