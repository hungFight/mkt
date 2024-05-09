import axios, { AxiosResponse } from 'axios'

export const Accounts = {
  getAll: async (): Promise<AxiosResponse> => {
    return await axios.get('http://localhost:8000/products')
  }
}
