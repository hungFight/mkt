import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: IpcApi
  }
}

export declare interface IpcApi {
  darkMode: ipcRendererDarkMode
  appUpdate: ipcRendererAppUpdate
  auth: IpcRendererAuth
  accounts: IpcRendererAccounts
  categories: IpcRendererCategories
  actions: IpcRendererActions
}

export declare interface IpcRendererAuth {
  getHis(): Promise<string>
  login(payload: ILoginForm): Promise<boolean>
  logout(): Promise<void>
  verifyToken(): Promise<boolean>
  register(payload: IRegisterForm): Promise<boolean>
  getUser(): Promise<User>
}
