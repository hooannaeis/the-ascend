<template>
  <div>
    <div v-if="gameWon">
      <h2>Yeaahhh!!!</h2>
      <p style="font-size: 2rem">😎</p>
      <p>Your time: {{ secondsPassed }} Seconds</p>
      <p v-if="formSuccess">{{ formSuccess }}</p>
      <div v-if="showUsernameField">
        <p>
          Your time is fast enough to go on the global leaderboard. Do you want
          to add it?
        </p>
        <p>
          <input
            type="text"
            name="username"
            ref="username"
            v-model="username"
            placeholder="Enter username"
          />
        </p>
        <p v-if="formError">{{ formError }}</p>
        <p>
          <button @click="handleNewHighscore">
            <span>Save highscore</span>
          </button>
        </p>
      </div>
    </div>
    <div v-else>
      <h2>Noooo!!!</h2>
      <p style="font-size: 2rem">😣</p>
      <p>Go ahead, try again.</p>
    </div>

    <LocalHighscores />

    <ul>
      <li>
        <button @click="startGame">
          <span>New Game</span>
        </button>
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
import LocalHighscores from '@/components/LocalHighscores.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'GameResults',
  data() {
    return {
      showUsernameField: false,
      username: '',
      slowestGlobalHighscore: null,
      formError: false,
      formSuccess: false,
      secondsPassed: null,
      highscoreKey: 'localHighscores',
      highscoresFull: false
    }
  },
  components: {
    LocalHighscores
  },
  computed: {
    ...mapGetters(['gameWon', 'timePassed'])
  },
  async mounted() {
    this.secondsPassed = this.calculateTotalSeconds()

    if (this.gameWon) {
      let localHighscores = localStorage.getItem(this.highscoreKey)
      this.username = localStorage.getItem('username')
      if (localHighscores) {
        let lhArray = localHighscores.split(',')
        lhArray.push(String(this.secondsPassed))
        let floatArray = this.numberifyStringArray(lhArray)
        floatArray.sort(function(a, b) {
          return a - b
        })
        localStorage.setItem(this.highscoreKey, floatArray.slice(0, 3))

        this.slowestGlobalHighscore = await this.getSlowestGlobalHighscore()
        this.highscoresFull = (await this.getCurrentNumberOfHighscores()) >= 10

        if (
          (this.secondsPassed &&
            this.secondsPassed < this.slowestGlobalHighscore.data.time) ||
          !this.highscoresFull
        ) {
          this.makeConfetti()

          this.showUsernameField = true
        }
      } else {
        localStorage.setItem(this.highscoreKey, String(this.secondsPassed))
      }

      this.$gtag.event('level_end', {
        success: this.gameWon,
        seconds_passed: this.secondsPassed
      })
    }
  },
  methods: {
    ...mapActions(['startGame']),
    calculateTotalSeconds() {
      const MILISECONDS_IN_A_SECOND = 1000
      return (this.timePassed / MILISECONDS_IN_A_SECOND).toFixed(3)
    },
    numberifyStringArray(inputArray) {
      let outArray = []
      for (var i = 0; i < inputArray.length; i++) {
        var numberAsFloat = parseFloat(inputArray[i])
        if (numberAsFloat) outArray.push(numberAsFloat)
      }
      return outArray
    },
    async getCurrentNumberOfHighscores() {
      let count = 0
      await this.$store.state.db
        .collection('highscores')
        .get()
        .then(snap => {
          count = snap.size
        })
      // eslint-disable-next-line
      console.log('currently sotring ', count, ' highscores')
      return count
    },
    async handleNewHighscore() {
      if (this.username && this.secondsPassed) {
        if (this.highscoresFull) {
          this.deleteSlowestHighscore()
        }
        this.storeHighscoreTime()
        localStorage.setItem('username', this.username)
        this.formSuccess = 'Good job, you made it to the global leaderboard'
        this.formError = false
        this.showUsernameField = false
      } else {
        this.formError = 'please set a username'
        this.formSuccess = false
      }
    },
    storeHighscoreTime() {
      const highscoreDoc = {
        username: this.username,
        time: parseFloat(this.secondsPassed)
      }
      this.$store.state.db.collection('highscores').add(highscoreDoc)
    },
    deleteSlowestHighscore() {
      if (!this.slowestGlobalHighscore) return

      this.$store.state.db
        .collection('highscores')
        .doc(this.slowestGlobalHighscore.id)
        .delete()
    },
    async getSlowestGlobalHighscore() {
      const doc = await this.$store.state.db
        .collection('highscores')
        .orderBy('time', 'desc')
        .limit(1)
        .get()
        .then(async function(querySnapshot) {
          const temp = await {
            id: querySnapshot.docs[0].id,
            data: querySnapshot.docs[0].data()
          }

          return temp
        })
        .catch(function() {
          return false
        })
      return doc
    },
    makeConfetti() {
      if (!window.confetti) {
        return
      }
      window.confetti.speed = 0
      window.confetti.start(3000)
    }
  },
  beforeMount() {
    let confettiScript = document.createElement('script')
    confettiScript.src = '/confetti.js'
    document.head.appendChild(confettiScript)
  }
}
</script>

<style lang="scss" scoped>
.test {
  display: none;
}
</style>
