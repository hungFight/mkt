import path from 'node:path'
import { homedir } from 'os'

export const APP_TITLE = import.meta.env.MAIN_VITE_APP_TITLE
export const APP_ID = import.meta.env.MAIN_VITE_APP_ID
export const MASP = 'MKT-ZALO-'
export const KEY_SHA256 = 'abc@#$%^&&$'

const getPathApp = (dir: string[] = ['']): string => {
  return path.join(process.cwd(), ...dir)
}

const getPathUser = (dir: string[]): string => {
  return __filename.includes('app.asar')
    ? path.join(homedir(), '.phanmemmkt', APP_ID, ...dir)
    : path.join(process.cwd(), 'libs', 'data', ...dir)
}

// App Path
export const APP_DIR = getPathApp()
export const BROWSER_DIR = getPathApp(['libs', 'mkt-browser'])

// Data Path
export const DB_FILE = getPathUser([`${APP_ID}.data`])
export const PROFILE_DIR = getPathUser(['Profiles'])
