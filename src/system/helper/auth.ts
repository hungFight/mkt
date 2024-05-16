import { createHmac } from 'node:crypto'
import { MASP, KEY_SHA256 } from './constant'

const makeLicense = (his: string, userId: string | number): string => {
  return `${MASP}${his}-${userId}`
}

const hashCodeProduct = (license: string | undefined): string => {
  const msg = `${MASP}.${license}`
  const hash = createHmac('sha256', KEY_SHA256).update(msg).digest('hex').toUpperCase()

  return hash
}

export { makeLicense, hashCodeProduct, MASP }
