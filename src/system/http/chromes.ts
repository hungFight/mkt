import http from './axios-client'

const start = async (payload: IChromeStart): Promise<object> => {
  return await http.post('chromes/start', payload)
}

const profile = async (payload: IChromeStart): Promise<object> => {
  return await http.post('auth/tool/register', payload)
}

export { start, profile }
