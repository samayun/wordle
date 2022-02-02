// const gameStateKey = 'gameState'

// type StoredGameState = {
//   guesses: string[]
//   solution: string
// }

// export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
//   localStorage.setItem(authorGivenKey, JSON.stringify(deveoperInfo))
//   localStorage.setItem(gameStateKey, JSON.stringify(gameState))
// }

// export const loadGameStateFromLocalStorage = () => {
//   const state = localStorage.getItem(gameStateKey)

//   return state ? (JSON.parse(state) as StoredGameState) : null
// }

// const gameStatKey = '😂'
// const authorGivenKey = 'আসো_খেলা_হবে😂'

// export type GameStats = {
//   winDistribution: number[]
//   gamesFailed: number
//   currentStreak: number
//   bestStreak: number
//   totalGames: number
//   successRate: number
// }
// const deveoperInfo = {
//   author: 'SAMAYUN CHOWDHURY',
//   email: 'samayun.m.chowdhury@gmail.com',
//   github: 'https://github.com/samayun',
//   linkedin: 'https://www.linkedin.com/in/samayun',
//   info: 'Found any hackable issues please contact with me',
//   warning: 'PLAY LIKE PRO NOW 😂',
// }

// export const saveStatsToLocalStorage = (gameStats: GameStats) => {
//   localStorage.setItem(authorGivenKey, JSON.stringify(deveoperInfo))
//   localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
// }

// export const loadStatsFromLocalStorage = () => {
//   const stats = localStorage.getItem(gameStatKey)
//   return stats ? (JSON.parse(stats) as GameStats) : null
// }

const gameStateKey = 'শব্দখেলা';

type StoredGameState = {
  guesses: string[]
  solution?: string
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey)
  return state ? (JSON.parse(state) as StoredGameState) : null
}

const gameStatKey = 'শব্দখেলা'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey)
  console.log({ stats })
  return stats ? (JSON.parse(stats) as GameStats) : null
}
