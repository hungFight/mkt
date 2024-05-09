import { IResolution } from '../browser/browser'
import { execProcess } from '../helper/browser'
import { getUnitRes } from './browser'

export const getResolutionScreen = async (): Promise<IResolution | undefined> => {
  try {
    const desktopMonitor = (await execProcess(
      'wmic path Win32_VideoController get CurrentHorizontalResolution,CurrentVerticalResolution',
      5000
    )) as string
    if (desktopMonitor && desktopMonitor.includes('CurrentVerticalResolution')) {
      const re = new RegExp('\\d+', 'g')
      const resolutionRaw = desktopMonitor.match(re)
      if (resolutionRaw && resolutionRaw.length === 2) {
        const resolution: IResolution = {
          x: Number(resolutionRaw[0]),
          y: Number(resolutionRaw[1])
        }
        return resolution
      }
    }
    return undefined
  } catch {
    return undefined
  }
}

export const getPositionByIndex = async (
  rowCount: number,
  columnCount: number,
  index: number
): Promise<IResolution | undefined> => {
  const resolution = await getResolutionScreen()
  if (resolution) {
    const [unitX, unitY] = getUnitRes()

    const surplusIndex = index % columnCount
    let cellIndex = Math.floor(index / columnCount)
    let x = 0
    let y = 0
    if (
      Math.floor(index / columnCount) >= rowCount &&
      !(index / columnCount === rowCount && index % columnCount === 0)
    ) {
      cellIndex = Math.floor(index / columnCount) % rowCount
    }
    if (surplusIndex === 0 && index >= columnCount) {
      x = unitX * (columnCount - 1)
      y = unitY * (cellIndex - 1)
    } else {
      x = unitX * (surplusIndex - 1)
      y = unitY * cellIndex
    }
    const resolutionResult: IResolution = {
      x,
      y
    }
    return resolutionResult
  }
  return undefined
}
