import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    isLoading:false,
    data: [],
    errror: {}

}

const userslice = createSlice({
  name: 'user',
  initialState,
  reducers: {

   UserRequest : (state,action)=>{

    state.isLoading = true;

   },
   UserSuc : (state,action)=>{

    state.isLoading = false;
    state.data = action.payload;

   },
   UserFail : (state,action)=>{
    state.isLoading = false;
    state.errror = action.payload;
   }


  }
});

export const {UserRequest,UserSuc,UserFail} = userslice.actions

export default userslice.reducer