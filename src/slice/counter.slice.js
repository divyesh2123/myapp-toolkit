import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    counter: 0
}

const counterslice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {

    inc: (state,action)=>
    {
        return {...state,counter: state.counter+1};
    },

    dec: (state,action) =>
    {

        return state.counter -1;
    }

  }
});

export const {inc,dec} = counterslice.actions

export default counterslice.reducer