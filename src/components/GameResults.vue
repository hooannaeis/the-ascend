<template>
  <div>
    <div v-if="gameWon">congrats, you won</div>
    <div v-else>oh no, you lost</div>
    Missed tries: {{ failCount }}
    <button @click="startGame">New Game</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'GameResults',
  computed: mapGetters(['gameWon', 'failCount']),
  methods: {
    ...mapActions(['startGame'])
  }
};
</script>