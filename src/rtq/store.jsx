import { configureStore } from "@reduxjs/toolkit";
import { fetchApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer:{
        [fetchApi.reducerPath]:fetchApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchApi.middleware)
})

setupListeners(store.dispatch)