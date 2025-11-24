import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice ({
    name: 'counter',
    initialState:{
        allUser:[],
        counter: 0
    },
    reducers:{
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        incrementByAmount: (state) => {
            state.counter += action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer;