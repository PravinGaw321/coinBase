import { configureStore } from "@reduxjs/toolkit";
import coinReducer from './redux/CoinReducer';
import coinDetailReducer from './redux/CoinDetails';
import nftDetailReducer from './redux/NftReducer';

const store = configureStore({
    reducer:{
        coins: coinReducer,
        coindetail: coinDetailReducer,
        nft: nftDetailReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store;