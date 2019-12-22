<template>
  <div>
    <h1>Ascend</h1>
    <ul>
      <li>
        <router-link to="/game">
          <button>
            <span>New Game</span>
          </button>
        </router-link>
      </li>
      <li>
        <router-link to="/highscores">
          <button>
            <span>Highscores</span>
          </button>
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
          <button>
            <span>Settings</span>
          </button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style lang="scss" scoped>
.test {
  display: none;
}
</style>
