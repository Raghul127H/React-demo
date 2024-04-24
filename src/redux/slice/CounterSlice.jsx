import { createSlice} from "@reduxjs/toolkit";



const CounterSlice = createSlice({

    name : "Counter",

    initialState: {
        rice : 1,
        maggie :2
    },
    

    reducers:{
        increment: (state)=>{
            state.rice +=1
        },
        decrement : (state)=>{
            state.rice -=1
        }

    }
   

})

export default CounterSlice.reducer

export const counterAction = CounterSlice.actions