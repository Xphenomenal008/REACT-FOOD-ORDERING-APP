import { configureStore, createSlice } from "@reduxjs/toolkit";

const loginslice=createSlice({
    name:"login",
    initialState:{
        login:true
    },
    reducers:{
        setlogout(state){
            state.login=false
        },
        setlogin(state){
            state.login=true
        }
    }
})
const store=configureStore({
    reducer:{
        login:loginslice.reducer
    }
})
export default store
export const loginactions=loginslice.actions