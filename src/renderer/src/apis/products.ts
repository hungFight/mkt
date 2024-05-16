import axios, { AxiosResponse } from 'axios'

export const Products = {
  getAll: async (): Promise<AxiosResponse> => {
    return await axios.get('http://localhost:8000/products')
  },
  getOne: async (): Promise<void> => {
    console.info(123)
  }
}
