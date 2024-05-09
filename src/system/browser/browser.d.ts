import { Browser, Page } from 'puppeteer-core'
import { Account } from 'src/main/entity'

export interface ILaunchOption {
  proxy?: string
  browserDir: string
  profileDir: string
  isBrowserArrangement: boolean
  indexWindow?: number
  isWinOS?: boolean
  timeout?: number
}

export interface IBrowserLauncher {
  page: Page
  browser: Browser
  port?: number
  account?: Account
  index?: number
}

export interface IResolution {
  x: number
  y: number
}
export interface IProxy {
  autoProxyRegion?: string
  host?: string
  mode?: string
  password: string
  port?: number
  torProxyRegion?: string
  username: string
}
export interface IOptionProfile {
  id: number | string
  name: string
  platform: 'mac m1' | NodeJS.Platform
  Proxy?: IProxy
  userAgent?: string
  mobile?: boolean
  cookie?: string
  browserDir?: string
}
