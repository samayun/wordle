import localForage from 'localforage'

const gameStateKey = 'gameState'

type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
  localStorage.setItem(authorGivenKey, JSON.stringify(deveoperInfo))
  localForage.setItem(gameStateKey, gameState)
}

export const loadGameStateFromLocalStorage = async () => {
  try {
    const state: any = await localForage.getItem(gameStateKey)

    return state ? (state as StoredGameState) : null
  } catch (error) {
    console.log('ERROR IN : loadGameStateFromLocalStorage')
  }
}

const gameStatKey = 'hackedGameStats'
const authorGivenKey = 'আসো_খেলা_হবে😂'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}
const deveoperInfo = {
  author: 'SAMAYUN CHOWDHURY',
  email: 'samayun.m.chowdhury@gmail.com',
  github: 'https://github.com/samayun',
  linkedin: 'https://www.linkedin.com/in/samayun',
  info: 'Found any hackable issues please contact with me',
  warning: 'PLAY LIKE PRO NOW 😂',
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(authorGivenKey, JSON.stringify(deveoperInfo))
  localForage.setItem(gameStatKey, gameStats)
}

export const loadStatsFromLocalStorage = async () => {
  try {
    const state: any = await localForage.getItem(gameStateKey)

    return state ? (state as StoredGameState) : null
  } catch (error: any) {
    console.log(
      error.message || 'ERROR IN LOADING GAME STATE FROM LOCAL STORAGE'
    )
  }
}
