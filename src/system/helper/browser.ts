import util from 'util'

const exec = util.promisify(require('node:child_process').exec)
const execFile = util.promisify(require('node:child_process').execFile)

export const execProcess = async (command: string, timeout: number): Promise<unknown> => {
  try {
    return await exec(command, { timeout })
  } catch (e) {
    // console.log('execProcess', e)
  }
  return null
}

export const execFileProcess = async (
  file: string,
  args: string[],
  options: object
): Promise<unknown> => {
  try {
    return await execFile(file, args, { ...options })
  } catch (e) {
    // console.log('execFileProcess', e)
  }
  return null
}

export const getAccountProfilePath = (dir: string, profile: string): string => {
  if (!profile) return ''
  return `${dir}\\${getAccountProfileName(profile)}`
}

export const getAccountProfileName = (profile: string): string => {
  return `MKTProfile_${profile}`
}
