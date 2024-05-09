export const delay = async (ms: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomItem = (array: (string | number)[]): string | number => {
  return array[Math.floor(Math.random() * array.length)]
}

export const sleepTime = async (start: number, end: number): Promise<void> => {
  await delay(random(start, end))
}

export const validPercent = async (percent: number): Promise<boolean> => {
  if (percent > random(0, 100)) {
    return true
  }
  return false
}

export const randomItems = (
  array: (string | number)[],
  countItem: number
): Array<string | number> => {
  if (!array) return []
  if (array.length < countItem) return array
  let arrayInput = array
  const result: (string | number)[] = []
  let count: number = countItem
  while (count--) {
    const itemRandom: string | number = randomItem(arrayInput)
    result.push(itemRandom)
    arrayInput = arrayInput.filter((value: string | number) => {
      return value !== itemRandom
    })
  }
  return result
}

export const genRandDecimal = (min: number, max: number, decimalPlaces: number): number => {
  const rand = Math.random() * (max - min) + min
  const power = 10 ** decimalPlaces
  return Math.floor(rand * power) / power
}

export const genRanHex = (size: number): string =>
  [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')

export const generateUTC = (date: Date, month: number): number => {
  date.setMonth(date.getMonth() + month)
  const dateOld = new Date(1601, 1, 1, 0, 0, 0, 0)
  const tickNow = date.getTime() * 10000 + 621355968000000000
  const tickOld = dateOld.getTime() * 10000 + 621355968000000000
  return (tickNow - tickOld) / 10
}

export const randomIndexFromNumber = (number: number, count: number): number[] => {
  let numberInput = number
  const listNumber: number[] = []
  while (numberInput--) {
    listNumber.push(numberInput)
  }
  return randomItems(listNumber, count) as number[]
}

export const shuffle = (array: string[]): string[] => {
  let currentIndex = array.length
  let randomIndex = 0

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}
