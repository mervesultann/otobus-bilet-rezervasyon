import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import roleReducer from "./slices/roleSlice";
import biletReducer from "./slices/biletSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    role: roleReducer,
    bilet: biletReducer,
  },
});
