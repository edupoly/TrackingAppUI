import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoggedIn:false
}
export const loginSlice = createSlice({
    name:'loginslice',
    initialState,
    reducers:{
        setLoggedIn:(state,action)=>{
            state.isLoggedIn=action.payload
        }
    }

})
export const {setLoggedIn}=loginSlice.actions
export default loginSlice.reducer