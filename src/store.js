import { configureStore } from "@reduxjs/toolkit";
import coinReducer from './redux/CoinReducer';
import coinDetailReducer from './redux/CoinDetails';

const store = configureStore({
    reducer:{
        coins: coinReducer,
        coindetail: coinDetailReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store;