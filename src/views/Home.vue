<template>
  <div>
    <h1>Ascend</h1>
    <p>
      All you need to do is press the numbers in ascending order. You can do it
      😉
    </p>
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
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.test {
  display: none;
}
</style>
