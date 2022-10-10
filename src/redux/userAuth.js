import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedin : false,
  user:'',
  tokens : {}
}

export const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    login: (state,action) => {
      let {username,token} = action.payload
      state.user = username
      state.tokens = token
      state.loggedin = true
      localStorage.setItem('username', username)
      localStorage.setItem('token', token['access'])
    },
    logout: (state) => {
      state.user = ''
      state.tokens = {}
      state.loggedin = false
      localStorage.removeItem('username');
      localStorage.removeItem('token');
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { login,logout } = authSlice.actions

export default authSlice.reducer

