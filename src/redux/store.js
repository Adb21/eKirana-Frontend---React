import { configureStore } from '@reduxjs/toolkit'
import userAuthReducer from '../redux/userAuth'
import cartReducer from '../redux/cart'


export default configureStore({
  reducer: {
    auth: userAuthReducer,
    cart: cartReducer
  },
})



