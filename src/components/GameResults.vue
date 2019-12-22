<template>
  <div>
    <div v-if="gameWon">congrats, you won</div>
    <div v-else>oh no, you lost</div>
    Missed tries: {{ failCount }}
    <ul>
      <li>
        <button @click="startGame">
          <span>
            New Game
          </span>
        </button>
      </li>
      <li>
        <router-link to="/highscores">
          <button>
            <span>
              Highscores
            </span>
          </button>
        </router-link>
      </li>
    </ul>
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

<style lang="scss" scoped>
.test {
  display: none;
}
</style>