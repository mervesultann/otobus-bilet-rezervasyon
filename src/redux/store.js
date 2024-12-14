import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import roleReducer from "./slices/roleSlice";
import biletReducer from "./slices/biletSlice";
import kampanyaReducer from "./slices/kampanyaSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    role: roleReducer,
    bilet: biletReducer,
    kampanya: kampanyaReducer,
  },
});
