export const SET_VAR = (state, payload) => {
  state[payload.varName] = payload.varValue;
};

export const FAILED_TRY = state => {
  state.gameStats.failCount += 1;
  state.gameStats.timePunishments += 3000;
  if (state.gameStats.failCount >= state.gameConfigs.maxLives) {
    state.gameRunning = false;
    state.gameWon = false;
  }
};

export const START_GAME = state => {
  state.gameStats.startTime = new Date().getTime();
  state.gameStats.failCount = 0;
  state.gameStats.timePunishments = 0;
  state.gameRunning = true;
  state.gameWon = false;
  state.roundsLeft = 1;
  state.gameStats.now = new Date().getTime();
};

export const GAME_WON = state => {
  state.gameRunning = false;
  state.gameWon = true;
};

export const TIME_OVER = state => {
  state.gameRunning = false;
  state.gameWon = false;
}