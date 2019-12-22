<template>
  <div>
    <div v-if="gameWon">
      <h1>Congrats</h1>
      <p>you won</p>
      <p>Your time: {{ secondsPassed }} Seconds</p>
    </div>
    <div v-else>
      <h2>Oh no</h2>
      <p>you lost</p>
    </div>

    <LocalHighscores />

    <ul>
      <li>
        <button @click="startGame">
          <span>New Game</span>
        </button>
      </li>
      <li>
        <router-link to="/highscores">
          <button>
            <span>Highscores</span>
          </button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import LocalHighscores from '@/components/LocalHighscores.vue';
import { mapGetters, mapActions } from 'vuex';

function numberifyStringArray(inputArray) {
  let outArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    var numberAsFloat = parseFloat(inputArray[i]);
    if (numberAsFloat) outArray.push(numberAsFloat);
  }
  return outArray;
}

export default {
  name: 'GameResults',
  components: {
    LocalHighscores
  },
  computed: {
    ...mapGetters(['gameWon', 'timePassed']),
    secondsPassed() {
      const MILISECONDS_IN_A_SECOND = 1000;
      return (this.timePassed / MILISECONDS_IN_A_SECOND).toFixed(3);
    }
  },
  created() {
    if (this.gameWon) {
      const HIGHSCORE_VAR_NAME = 'localHighscores';
      let localHighscores = localStorage.getItem(HIGHSCORE_VAR_NAME);
      if (localHighscores) {
        let lhArray = localHighscores.split(',');
        lhArray.push(String(this.secondsPassed));
        let floatArray = numberifyStringArray(lhArray);
        floatArray.sort(function(a, b) {
          return a - b;
        });
        localStorage.setItem(HIGHSCORE_VAR_NAME, floatArray.slice(0, 3));
      } else {
        localStorage.setItem(HIGHSCORE_VAR_NAME, String(this.secondsPassed));
      }
    }
  },
  methods: {
    ...mapActions(['startGame'])
  }
};
</script>

<style lang="scss" scoped>
.test {
  display: none;
}
</style>