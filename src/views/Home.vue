<template>
  <div>
    <div class="pill__container--parent">
      <div class="pill__container" v-if="gameRunning">
        <PopPill v-for="(pillDigit, index) in shuffledArray" :key="index" :digit="pillDigit"></PopPill>
      </div>
      <div v-else>
        <GameResults />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PopPill from '@/components/PopPill.vue';
import GameResults from '@/components/GameResults.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    PopPill,
    GameResults
  },
  computed: mapGetters(['shuffledArray', 'gameRunning', 'minDigit', 'maxDigit', 'digitCount']),
  methods: {
    ...mapActions(['setVar', 'setNextLevel', 'startGame'])
  },
  mounted() {
    this.startGame();
    // this.setNextLevel();
  }
};
</script>

<style lang="scss" scoped>
.pill__container {
  display: grid;
  grid-template-columns: repeat(3, 20vw);
  grid-gap: 5vw;

  &--parent {
    display: flex;
    justify-content: center;
  }
}
</style>
