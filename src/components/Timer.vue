<template>
  <div>
    <h2>Time left:</h2>
    <div class="timer__parent">
      <span :style="{ width: timeLeftPercent + '%' }"></span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Timer',
  created() {
    let timerInterval = window.setInterval(() => {
      this.$store.state.gameStats.now = new Date().getTime();
      if (!this.timeLeft) {
        this.timeOver();
      }
      if (!this.$store.state.gameRunning) {
        clearInterval(timerInterval);
      }
    }, 250);
  },
  data() {
    return {
      start: new Date().getTime()
    };
  },
  methods: {
    ...mapActions(['timeOver'])
  },
  computed: {
    ...mapGetters(['correctedNow', 'timePassed']),
    secondsPassed() {
      return Math.floor(this.correctedNow - this.$store.state.gameStats.startTime, 0);
    },
    timeLeftPercent() {
      var percentPassed =
        Math.floor(
          ((this.$store.state.gameConfigs.maxTime - this.timePassed) /
            this.$store.state.gameConfigs.maxTime) *
            100
        ) - 1;
      return Math.max(percentPassed, 0);
    },
    timeLeft() {
      return this.timeLeftPercent > 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.timer__parent {
  height: 20px; /* Can be anything */
  position: relative;
  background: $background-middle;
  padding: 5px;

  & > span {
    display: block;
    height: 100%;
    background-color: $warning-color;
    position: relative;
    overflow: hidden;
    max-width: 100%;
    min-width: 0%;
  }
}
</style>
