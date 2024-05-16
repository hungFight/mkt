import { ipcRenderer } from 'electron'
import eventKeys from '../event-keys'

export const ipcRendererAuth = {
  getHis: async (): Promise<string> => {
    return await ipcRenderer.invoke(eventKeys.auth.get_his)
  }
}
