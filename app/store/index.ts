"use client";
import { configureStore } from "@reduxjs/toolkit";
import zodiacReducer from "./zodiacSlice";
import { catFactApi } from "../services/catFactApi";

export const store = configureStore({
  reducer: {
    zodiac: zodiacReducer,
    [catFactApi.reducerPath]: catFactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catFactApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
