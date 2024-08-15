import { createSlice } from '@reduxjs/toolkit'
import { ProductData } from '../../productData'

const InitialProduct = {
    value: ProductData
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: InitialProduct,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { increment } = counterSlice.actions
export default counterSlice.reducer 











// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount, multiply } = counterSlice.actions
// export default counterSlice.reducer 
