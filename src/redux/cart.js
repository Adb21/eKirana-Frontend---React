import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart:[
        {
            total:0
        }
    ]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cart: (state,action) => {
        state.qty = action.payload
      },
  },
})

// // Action creators are generated for each case reducer function
export const { cart } = cartSlice.actions

export default cartSlice.reducer

