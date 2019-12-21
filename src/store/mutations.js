export const SET_VAR = (state, payload) => {
  state[payload.varName] = payload.varValue;
};

export const FAILED_TRY = state => {
  state.failCount += 1;
  if (state.failCount >= state.maxLives) {
    state.gameRunning = false;
    state.gameWon = false;
  }
};

export const START_GAME = state => {
  state.startTime = new Date().getTime();
  state.failCount = 0;
  state.gameRunning = true;
  state.gameWon = false;
  state.roundsLeft = 1;
  state.now = new Date().getTime();
};

export const GAME_WON = state => {
  state.gameRunning = false;
  state.gameWon = true;
};

export const TIME_OVER = state => {
  state.gameRunning = false;
  state.gameWon = false;
}