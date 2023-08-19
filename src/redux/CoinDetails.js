import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL, baseUrl } from "../apiUrl";

export const Fetchcoindetail = createAsyncThunk('coin/fetchAsyncdetail', async(id)=>{
    const responce = await axios.get(`${baseUrl + `api/v3/coins/${id}`}`).catch((err)=>{
        console.log('error', err);
    })
    
    return responce.data;
})

const initialValue={
    detailloader: false,
    coindetail: null,
    coindetailerror: false,
}

export const coinDetailSlice = createSlice({
    name:'coindetail',
    initialState: initialValue,
    reducers:{
        removeCoindetail: (state)=>{
            state.coindetail =[]
        },
    },
    extraReducers:{
        [Fetchcoindetail.pending]: (state)=>{
            return {...state, detailloader: true}
        },
        [Fetchcoindetail.fulfilled]: (state, {payload})=>{
            return {...state, detailloader:false, coindetail: payload}
        },
        [Fetchcoindetail.rejected]: (state)=>{
            return {...state, detailloader: false, coindetailerror: true}
        }
    }
})


export const {removeCoindetail} = coinDetailSlice.actions;
export default coinDetailSlice.reducer;