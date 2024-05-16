import http from './axios-client'

const login = async (payload: ILogin): Promise<IAuth> => {
  return await http.post('auth/tool/login', payload)
}

const register = async (payload: IRegister): Promise<IUser> => {
  return await http.post('auth/tool/register', payload)
}
const verifyToken = async (payload: IToken): Promise<IUser> => {
  const response = await http.post('auth/verify-token', payload)
  return response?.data as IUser
}
const logout = async (): Promise<IAuth> => {
  return await http.post('auth/logout', { logout: 1 })
}

export { login, register, logout, verifyToken }
