import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../apiUrl";
import axios from "axios";
import { API_URL } from "../apiUrl";

export const FetchcoinInfo = createAsyncThunk('coin/fetchAsyncCoins', async ()=>{
    const response = await axios.get(`${baseUrl}${API_URL.coin_list}`).catch((err)=>{
        console.log('error', err);
    })
    return response.data;
})

export const FetchcoinCategory = createAsyncThunk('coin/fetchAsyncCategory', async()=>{
    const response = await axios.get(`${baseUrl}${API_URL.coin_category_list}`).catch((err)=>{
        console.log('error', err);
    })

    return response.data;
})

const initialValue ={
    coinlistLoading: false,
    coinlistData: null,
    coinlistError: false,
    coincategoryLoading: false,
    coincategorydata: null,
    coincategoryError: false,
}

export const coinSlice = createSlice({
    name:'coins',
    initialState: initialValue,
    reducers:{
        removeCoinList:(state)=>{
            state.coinlistData = []
        },
        removeCategoryList:(state)=>{
            state.coincategorydata = []
        }
    },
    extraReducers:{
        [FetchcoinInfo.pending]: (state)=>{
            return {...state, coinlistLoading: true}
        },
        [FetchcoinInfo.fulfilled]: (state, {payload})=>{
            return {...state, coinlistLoading: false, coinlistData: payload}
        },
        [FetchcoinInfo.rejected]: (state)=>{
            return {...state, coinlistLoading: false, coinlistError: true}
        },

        [FetchcoinCategory.pending]: (state)=>{
            return {...state, coincategoryLoading: true}
        },
        [FetchcoinCategory.fulfilled]: (state, {payload})=>{
            return {...state, coincategoryLoading: false, coincategorydata: payload}
        },
        [FetchcoinCategory.rejected]: (state)=>{
            return {...state, coincategoryLoading: false, coincategoryError: true}
        }
    },
})

export const {removeCoinList, removeCategoryList} = coinSlice.actions;
export default coinSlice.reducer;