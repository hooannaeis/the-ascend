<template>
  <div>
    Time Left:
    <div class="timer__parent">
      <span :style="{ width: timeLeftPercent + '%' }"></span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Timer',
  created() {
    let timerInterval = window.setInterval(() => {
      this.$store.state.now = new Date().getTime();
      if (!this.timeLeft) {
        this.timeOver();
      };
      if (!this.$store.state.gameRunning) {
        clearInterval(timerInterval);
      }
    }, 1000);
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
    secondsPassed() {
      return Math.floor(this.$store.state.now - this.$store.state.startTime, 0);
    },
    timeLeftPercent() {
      var percentPassed =
        Math.floor(
          ((this.$store.state.gameConfigs.maxTime - this.secondsPassed) /
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
  box-shadow: inset 0 -1px 1px $background-bright;

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
