export const nextDigit = state => state.nextDigit;
export const currentDigit = state => state.currentDigit;
export const orderedArray = state => state.orderedArray;
export const shuffledArray = state => state.shuffledArray;
export const gameRunning = state => state.gameRunning;
export const gameWon = state => state.gameWon;
export const failCount = state => state.gameStats.failCount;
export const roundsLeft = state => state.orderedArray.length;

export const correctedNow = state =>
  state.gameStats.now + state.gameStats.timePunishments;

export const timePassed = state =>
  state.gameStats.now +
  state.gameStats.timePunishments -
  state.gameStats.startTime;
