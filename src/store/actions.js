export const setVar = ({ commit }, payload) => {
  commit('SET_VAR', payload)
}

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  let tmp,
    current,
    top = array.length
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1))
      tmp = array[current]
      array[current] = array[top]
      array[top] = tmp
    }
  return array
}

export const startGame = ({ commit, state }) => {
  for (var a = [], i = 0; i < state.gameConfigs.maxDigit; ++i)
    a[i] = i + state.gameConfigs.minDigit
  var shuffledArray = shuffle(a)
  commit('SET_VAR', {
    varName: 'shuffledArray',
    varValue: shuffledArray.slice(0, state.gameConfigs.digitCount)
  })

  const orderedArray = [...state.shuffledArray].sort()
  commit('SET_VAR', { varName: 'orderedArray', varValue: orderedArray })

  commit('START_GAME')
  setNextLevel({ commit, state })
}

export const setNextLevel = ({ commit, state }) => {
  if (state.roundsLeft !== 0) {
    let currentDigit = Math.min(...state.orderedArray)
    commit('SET_VAR', { varName: 'currentDigit', varValue: currentDigit })

    let shiftedArray = state.orderedArray
    shiftedArray.shift()
    commit('SET_VAR', { varName: 'orderedArray', varValue: shiftedArray })
    commit('SET_VAR', { varName: 'roundsLeft', varValue: shiftedArray.length })

    let nextDigit = Math.min(...state.orderedArray)
    commit('SET_VAR', { varName: 'nextDigit', varValue: nextDigit })
  } else {
    commit('GAME_WON')
  }
}

export const popDigit = ({ commit, state }, digit) => {
  let shuffledArray = state.shuffledArray
  var index = shuffledArray.indexOf(digit)
  if (index > -1) {
    shuffledArray.splice(index, 1)
  }
  commit('SET_VAR', { varName: 'shuffledArray', varValue: shuffledArray })
}

export const failedTry = ({ commit }) => {
  commit('FAILED_TRY')
}

export const timeOver = ({ commit }) => {
  commit('TIME_OVER')
}
