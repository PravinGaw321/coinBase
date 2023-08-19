import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../apiUrl";
import { API_URL } from "../apiUrl";

export const FetchNftdata = createAsyncThunk("nft/fetchAsyncData", async()=>{
    const responce = await axios.get(`${baseUrl}/${API_URL.nft_list}`).catch((err)=>{
        console.log('err', err);
    })
    return responce.data;
})

const initialValue={
    nftloader: false,
    nftdata: null,
    nfterror: false,
}

export const NftSlice = createSlice({
    name:'nft',
    initialState: initialValue,
    reducers:{

    },
    extraReducers:{
        [FetchNftdata.pending]: (state)=>{
            return {...state, nftloader: true}
        },
        [FetchNftdata.fulfilled]: (state, {payload})=>{
            return {...state, nftloader: false, nftdata: payload}
        },
        [FetchNftdata.rejected]: (state)=>{
            return {...state, nftloader: false, nfterror: true}
        }
    }
})


export default NftSlice.reducer;