import { configureStore } from "@reduxjs/toolkit";
import dealsSliceReducer from "../features/deals/dealsSlice";
export const store = configureStore({
  reducer: {
    deals: dealsSliceReducer,
  },
});
