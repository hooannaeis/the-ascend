<template>
  <div>
    <div>{{ timeLeft }}</div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';

export default {
  name: 'Timer',
  created() {
    window.setInterval(() => {
      this.now = new Date().getTime() / 1000;
    }, 1000);
  },
  data() {
    return {
      now: new Date().getTime() / 1000,
      start: new Date().getTime() / 1000
    };
  },
  computed: {
    timeLeft() {
      return Math.floor(this.now - this.$store.state.startTime, 0);
    }
  }
};
</script>