import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import websocketMiddleware from "./middleware";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(websocketMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
