import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, IMeasurementOption } from "./types";
const measurementOptionsSlice = createSlice({
  name: "measurement options",
  initialState,
  reducers: {
    setFromOption(state, action: PayloadAction<IMeasurementOption>){
      state.fromOption = action.payload
    },
    setToOption(state, action: PayloadAction<IMeasurementOption>){
      state.toOption = action.payload
    }
  }

})

export const {setFromOption, setToOption} = measurementOptionsSlice.actions;
export default measurementOptionsSlice.reducer;