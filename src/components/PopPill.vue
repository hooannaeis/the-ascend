<template>
  <div class="poppill" @click="tryPop(digit)">{{ digit }}</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PopPill',
  props: {
    digit: Number
  },
  computed: mapGetters(['currentDigit', 'roundsLeft', 'failCount']),
  methods: {
    tryPop(pressedDigit) {
      if (pressedDigit === this.currentDigit) {
        this.popDigit(pressedDigit);
        this.setNextLevel();
      } else {
        this.failedTry();
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
  height: 20vw;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  border: 2px solid $warning-color;
  cursor: pointer;
}
</style>