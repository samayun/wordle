import { WORDLE_TITLE } from '../constants/strings'

const gameStateKey = WORDLE_TITLE

const gameStatKey = WORDLE_TITLE + '-ফলাফল'

const authorGivenKey = 'আসো_খেলা_হবে😂'

const deveoperInfo = {
  author: 'SAMAYUN CHOWDHURY',
  email: 'samayun.m.chowdhury@gmail.com',
  github: 'https://github.com/samayun',
  linkedin: 'https://www.linkedin.com/in/samayun',
  info: 'Found any hackable issues please contact with me',
  warning: 'PLAY LIKE PRO NOW 😂',
}

type StoredGameState = {
  guesses: string[]
  solution?: string
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
  localStorage.setItem(authorGivenKey, JSON.stringify(deveoperInfo))
  localStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey)
  return state ? (JSON.parse(state) as StoredGameState) : null
}

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(authorGivenKey, JSON.stringify(deveoperInfo))
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey)
  return stats ? (JSON.parse(stats) as GameStats) : null
}

export const handleResetState = () => {
  localStorage.removeItem(gameStateKey)
  localStorage.removeItem(gameStatKey)
  localStorage.removeItem(gameStatKey)
  window.location.reload()
}
