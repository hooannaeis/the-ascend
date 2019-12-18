export const SET_VAR = (state, payload) => {
  state[payload.varName] = payload.varValue;
};

export const FAILED_TRY = (state) => {
  state.failCount += 1;
  if (state.failCount >= state.maxLives) {
    state.gameRunning = false;
    state.gameWon = false;
    state.gameRunning = false;
    state.gameWon = false;
  }
}

export const START_GAME = (state) => {
  state.failCount = 0;
  state.gameRunning = true;
  state.gameWon = false;
  state.roundsLeft = 1;
}

export const GAME_WON = (state) => {
  state.gameRunning = false;
  state.gameWon = true;
}