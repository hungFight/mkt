/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  isLogged: boolean
  user?: any
}

const initialState: AuthState = {
  isLogged: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggin: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
    setLogout: (state) => {
      state.isLogged = false
      state.user = undefined
    }
  }
})

export const { setLoggin, setUser, setLogout } = authSlice.actions
export default authSlice.reducer
