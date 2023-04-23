import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../apiUrl";
import axios from "axios";
import { API_URL } from "../apiUrl";

export const FetchcoinInfo = createAsyncThunk('coin/coininfo', async ()=>{
    const response = await axios.get(`${baseUrl}${API_URL.coin_category_list}`).catch((err)=>{
        console.log('err', err);
    })
    return response.data;
})

const initiValue ={
    loading : false,
    value: null,
    error: false,
}


export const coinSlice = createSlice({
    name:'coins',
    initialState: initiValue,
    reducers:{

    },
    extraReducers:{
        [FetchcoinInfo.pending]: ()=> (state)=>{
            return {...state, loading: true}
        },
        [FetchcoinInfo.fulfilled]: ()=> (state, {payload})=>{   
            return {...state, loading: false, value: payload}
        },
        [FetchcoinInfo.rejected]: ()=> (state)=> {
            return {...state, loading: false, error: true}
        }
    }
})

export default coinSlice.reducer;