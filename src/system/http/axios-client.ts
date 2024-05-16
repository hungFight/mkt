import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { User, localUser } from '../db/entity'

const APP_KEY_API_URL = 'https://key.phanmemmkt.vn/api/v1/'

const axiosClient = axios.create({
  baseURL: APP_KEY_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosClient.interceptors.request.use(
  async function (config: InternalAxiosRequestConfig) {
    // Do something before request is sent
    const user = await localUser()
    if (user && user!.apiToken) {
      config.headers.Authorization = `Bearer ${user!.apiToken}`
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response?.status === 401) {
      localUser().then((user: User) => {
        user.apiToken = undefined
        user.save()
      })
    }
    // Do something with response error
    return Promise.reject(error)
  }
)

export default axiosClient
