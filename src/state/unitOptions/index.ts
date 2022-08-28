import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, IunitOption } from "./types";
const unitOptionsSlice = createSlice({
  name: "unit options",
  initialState,
  reducers: {
    setUnitOption(state, action: PayloadAction<IunitOption>){
      state.unitOption = action.payload
    }
  }

})

export const {setUnitOption} = unitOptionsSlice.actions;
export default unitOptionsSlice.reducer;