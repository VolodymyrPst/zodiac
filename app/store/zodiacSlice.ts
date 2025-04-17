"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ZodiacState {
  name: string;
  index: number;
}

const initialState: ZodiacState = {
  name: "aries",
  index: 0,
};

const zodiacSlice = createSlice({
  name: "zodiac",
  initialState,
  reducers: {
    setZodiac: (state, action: PayloadAction<ZodiacState>) => {
      state.name = action.payload.name;
      state.index = action.payload.index;
    },
  },
});

export const { setZodiac } = zodiacSlice.actions;
export default zodiacSlice.reducer;
