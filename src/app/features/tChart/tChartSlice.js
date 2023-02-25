import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const tChartSlice = createSlice({
  name: "tChart",
  initialState,
  reducers: {
    spliceTChart: (state, action) => {
      state.items.splice(action.payload);
    },
    insertTChart: {
      reducer: (state, action) => {
        state.items.splice(action.payload.tChartID, 0, action.payload);
      },
      prepare: (value) => {
        return {
            payload: {
                ...value,
                currentList: "tChart",
            }
        }
      }
    },
  },
});

export const {} = tChartSlice.actions;
export default tChartSlice.reducer;
