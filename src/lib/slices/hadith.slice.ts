import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  hadiths: [],
};

const hadithSlice = createSlice({
  name: "hadith",
  initialState,
  reducers: {
    setHadiths(state, action: PayloadAction<string[]>) {
      state.hadiths = action.payload;
    },
    clearHadiths(state) {
      state.hadiths = [];
    },
  },
});

export const { setHadiths, clearHadiths } = hadithSlice.actions;

export default hadithSlice.reducer;
