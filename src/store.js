import { configureStore } from "@reduxjs/toolkit";
import coinReducer from './redux/CoinReducer';

const store = configureStore({
    reducer:{
        coins: coinReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store;