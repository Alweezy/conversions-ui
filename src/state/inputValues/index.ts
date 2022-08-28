import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, IInputValues } from "./types";

const inputValuesSlice = createSlice({
  name: "input values",
  initialState,
  reducers: {
    setFromValue(state, action: PayloadAction<number>){
      state.fromValue = action.payload
    },

    setToValue(state, action: PayloadAction<number>){
      state.toValue = action.payload
    }
  }
})

export const {setFromValue, setToValue} = inputValuesSlice.actions;
export default inputValuesSlice.reducer;