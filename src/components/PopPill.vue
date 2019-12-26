<template>
  <div
    class="poppill"
    :class="{'poppill--fail': isFail, 'poppill--success': isSuccess}"
    @click="tryPop(digit)"
  >{{ digit }}</div>
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
      isFail: false,
      isSuccess: false
    };
  },
  computed: mapGetters(['currentDigit', 'roundsLeft', 'failCount']),
  methods: {
    tryPop(pressedDigit) {
      if (pressedDigit === this.currentDigit) {
        this.setNextLevel();
        this.isSuccess = true;
        setTimeout(() => {
          this.isSuccess = false;
        }, 100);

        this.popDigit(pressedDigit);
      } else {
        this.failedTry();
        this.isFail = true;
        setTimeout(() => {
          this.isFail = false;
        }, 100);
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
  font-size: 1.5rem;
  border: 2px solid $warning-color;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &--fail {
    background: $warning-color;
    transform: scale(1.5);
  }
  &--success {
    background: $accent-color;
    transform: scale(0.5);
  }
}
</style>