import axios from 'axios'
import fs from 'fs'
import { join } from 'path'
import { Browser, connect } from 'puppeteer-core'
import { execFileProcess } from '../helper/browser'
import {
  delay,
  getMinResScale65,
  getPositionByIndex,
  getResolutionScreen,
  getUnitRes
} from '../utils'
import { IBrowserLauncher, ILaunchOption, IProxy, IResolution } from './browser'

const getWSEndPoint = async (port: number): Promise<string | undefined> => {
  const response = await axios.get(`http://127.0.0.1:${port}/json/version`)
  if (response.status === 200) {
    return response.data.webSocketDebuggerUrl
  }
  return undefined
}

export const resizeProfile = (
  options: ILaunchOption,
  nameProfile: string,
  size: IResolution
): boolean => {
  try {
    if (options.profileDir) {
      if (fs.existsSync(`${options.profileDir}\\${nameProfile}\\Default\\Preferences`)) {
        const profilePref = fs.readFileSync(
          `${options.profileDir}\\${nameProfile}\\Default\\Preferences`
        )
        const jsonPref = JSON.parse(profilePref as unknown as string)
        jsonPref.gologin.screenWidth = size.x
        jsonPref.gologin.screenHeight = size.y
        fs.writeFileSync(
          `${options.profileDir}\\${nameProfile}\\Default\\Preferences`,
          JSON.stringify(jsonPref)
        )
      }
    }
  } catch {
    return false
  }
  return true
}

export const changeUserAgent = (
  options: ILaunchOption,
  nameProfile: string,
  userAgent: string
): boolean => {
  try {
    if (options.profileDir) {
      if (fs.existsSync(`${options.profileDir}\\${nameProfile}\\Default\\Preferences`)) {
        const profilePref = fs.readFileSync(
          `${options.profileDir}\\${nameProfile}\\Default\\Preferences`
        )
        const jsonPref = JSON.parse(profilePref as unknown as string)
        jsonPref.gologin.userAgent = userAgent
        fs.writeFileSync(
          `${options.profileDir}\\${nameProfile}\\Default\\Preferences`,
          JSON.stringify(jsonPref)
        )
      }
    }
  } catch {
    return false
  }
  return true
}

export const addProxyAuthenticate = (
  options: ILaunchOption,
  nameProfile: string,
  proxy: IProxy
): boolean => {
  try {
    if (options.profileDir) {
      if (fs.existsSync(`${options.profileDir}\\${nameProfile}\\Default\\Preferences`)) {
        const profilePref = fs.readFileSync(
          `${options.profileDir}\\${nameProfile}\\Default\\Preferences`
        )
        const jsonPref = JSON.parse(profilePref as unknown as string)
        jsonPref.gologin.proxy = {
          username: proxy.username,
          password: proxy.password
        }
        fs.writeFileSync(
          `${options.profileDir}\\${nameProfile}\\Default\\Preferences`,
          JSON.stringify(jsonPref)
        )
      }
    }
  } catch {
    return false
  }
  return true
}

export const changeStartupUrl = (
  options: ILaunchOption,
  nameProfile: string,
  url: string
): boolean => {
  try {
    if (options.profileDir) {
      if (fs.existsSync(`${options.profileDir}\\${nameProfile}\\Default\\Preferences`)) {
        const profilePref = fs.readFileSync(
          `${options.profileDir}\\${nameProfile}\\Default\\Preferences`
        )
        const jsonPref = JSON.parse(profilePref as unknown as string)
        jsonPref.gologin.startup_urls = [url]
        jsonPref.gologin.startUrl = url
        fs.writeFileSync(
          `${options.profileDir}\\${nameProfile}\\Default\\Preferences`,
          JSON.stringify(jsonPref)
        )
      }
    }
  } catch (e) {
    return false
  }
  return true
}

export const connectBrowser = async (port: number): Promise<IBrowserLauncher | undefined> => {
  let browser: Browser | undefined
  try {
    const WSEndPoint = await getWSEndPoint(port)
    browser = await connect({
      browserWSEndpoint: WSEndPoint,
      ignoreHTTPSErrors: true,
      defaultViewport: null
    })
    await delay(3500)
    const pages = await browser.pages()
    let pagesCount = pages.length
    while (pagesCount > 1) {
      await pages[pagesCount - 1].close()
      pagesCount--
    }
    const launcher: IBrowserLauncher = {
      browser,
      page: pages[0],
      port: port
    }
    return launcher
  } catch (e) {
    if (
      (e as unknown as Error).message.includes('Connection closed') ||
      (e as unknown as Error).message.includes('Session closed')
    ) {
      if (browser) {
        await browser.close()
      }
    }
    return undefined
  }
}

const launchBrowserArgs = async (
  port: number,
  nameProfile: string,
  options: ILaunchOption
): Promise<string[]> => {
  let optionPosition = ''

  if (options.isBrowserArrangement) {
    const [minX, minY] = getMinResScale65()
    const [unitX, unitY] = getUnitRes()
    let rowCount = 1
    let columnCount = 1
    const size: IResolution = {
      x: unitX,
      y: unitY
    }
    const resolutionScreen = await getResolutionScreen()
    if (resolutionScreen) {
      columnCount = Math.floor(resolutionScreen.x / minX)
      rowCount = Math.floor(resolutionScreen.y / minY)
      if (rowCount === 1 && resolutionScreen.y > 435) rowCount = 2
    }

    let indexBrowser = 0
    if (options.indexWindow) {
      indexBrowser = options.indexWindow
    }
    const position = await getPositionByIndex(rowCount, columnCount, indexBrowser)
    if (position) {
      optionPosition = `--window-position=${position?.x},${position.y}`
      resizeProfile(options, nameProfile, size)
    }
  }
  const iconPath = `${options.browserDir}\\data\\mkt.html`
  let appArg = ''
  changeStartupUrl(options, nameProfile, iconPath)
  if (!options.isWinOS) {
    appArg = `--app="${iconPath}"`
  }
  // Handling proxies
  if (options.proxy && options.proxy.split(':').length > 1) {
    const ipAddress = options.proxy.split(':')[0]
    const portNumber = options.proxy.split(':')[1]
    if (options.proxy.split(':').length > 3) {
      const [, , username, password] = options.proxy.split(':')
      addProxyAuthenticate(options, nameProfile, {
        username,
        password
      })
    }
    options.proxy = `${ipAddress}:${portNumber}`
  }
  const args = [
    // `${options.browserDir}\\chrome.exe`,
    '--force-device-scale-factor=0.65',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${join(options.profileDir, nameProfile)}`,
    '--password-store=basic',
    // '--tz=Asia/Bangkok',
    `--lang=vi-VN`,
    `--font-masking-mode=2`
    // `--gologin-profile=${nameProfile}`,
    // `--disable-encryption`,
    // '--disable-infobars',
    // '--disable-notifications',
    // "--enable-automation",
    // `--restore-last-session`,
    // `--flag-switches-begin`,
    // `--flag-switches-end`,
    // '--silent-debugger-extension-api',
    // "--devtools-flags=disable",
    // '--disable-speech-api', //   Disables the Web Speech API (both speech recognition and synthesis)
    // '--disable-background-networking', // Disable several subsystems which run network requests in the background. This is for use                     // when doing network performance testing to avoid noise in the measurements. ↪️
    // '--disable-background-timer-throttling', // Disable task throttling of timer tasks from background pages. ↪️
    // '--disable-backgrounding-occluded-windows',
    // '--disable-breakpad',
    // '--disable-client-side-phishing-detection',
    // '--disable-component-update',
    // '--disable-default-apps',
    // '--disable-dev-shm-usage',
    // '--disable-domain-reliability',
    // '--disable-extensions',
    // '--disable-features=AudioServiceOutOfProcess',
    // '--disable-hang-monitor',
    // '--disable-ipc-flooding-protection',
    // '--disable-notifications',
    // '--disable-offer-store-unmasked-wallet-cards',
    // '--disable-popup-blocking',
    // '--disable-print-preview',
    // '--disable-prompt-on-repost',
    // '--disable-renderer-backgrounding',
    // '--disable-setuid-sandbox',
    // '--disable-sync',
    // '--hide-scrollbars',
    // '--ignore-gpu-blacklist',
    // '--metrics-recording-only',
    // '--mute-audio',
    // '--no-default-browser-check',
    // '--no-first-run',
    // '--no-pings',
    // '--no-sandbox',
    // '--no-zygote',
    // '--use-gl=swiftshader',
    // '--use-mock-keychain',
    // '--unhandled-rejections=strict',
    // '--headless=new'
  ]
  options.proxy && args.push(`--proxy-server=${options.proxy}`)
  appArg && args.push(appArg)
  args.push(optionPosition)
  return args
}

const getBrowserExec = (browserDir: string): string => {
  if (process.platform === 'darwin') {
    return join(browserDir, 'Orbita-Browser.app', 'Contents', 'MacOS', 'Orbita')
  }
  if (process.platform === 'win32') {
    return join(browserDir, 'chrome.exe')
  }
  return join(browserDir, 'chrome')
}

export const launchProcessBrowser = async (
  port: number,
  nameProfile: string,
  options: ILaunchOption
): Promise<unknown> => {
  const env = {}
  Object.keys(process.env).forEach((key) => {
    env[key] = process.env[key]
  })

  const args = await launchBrowserArgs(port, nameProfile, options)
  const ORBITA_BROWSER = getBrowserExec(options.browserDir)

  return await execFileProcess(ORBITA_BROWSER, args, { env })
}

export const closeBrowser = async (launcher: IBrowserLauncher): Promise<void> => {
  await launcher.browser.close()
}
