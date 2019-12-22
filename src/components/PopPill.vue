<template>
  <div class="poppill" :class="{'poppill--failed': isFailedTry}" @click="tryPop(digit)">{{ digit }}</div>
</template>



<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PopPill',
  props: {
    digit: Number
  },
  data() {
    return {
      isFailedTry: false
    }
  },
  computed: mapGetters(['currentDigit', 'roundsLeft', 'failCount']),
  methods: {
    tryPop(pressedDigit) {
      if (pressedDigit === this.currentDigit) {
        this.popDigit(pressedDigit);
        this.setNextLevel();
      } else {
        this.failedTry();
        this.isFailedTry = true;
        setTimeout(() => {
          this.isFailedTry = false;
        }, 100)
      }
    },
    ...mapActions(['setNextLevel', 'popDigit', 'failedTry'])
  }
};
</script>

<style lang="scss" scoped>
.poppill {
  display: -ms-flexbox;
  display: flex;
  color: $background-bright;
  background: $background-dark;
  width: 20vw;
  max-width: 20vh;
  height: 20vw;
  max-height: 20vh;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  border: 2px solid $warning-color;
  cursor: pointer;

  &--failed {
    background: $warning-color;
  }
}
</style>