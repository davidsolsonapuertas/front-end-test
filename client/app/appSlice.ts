import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  prevNumber: number | undefined;
  number: number | undefined;
  loading: boolean;
  error: boolean;
}

const initialState: AppState = {
  prevNumber: undefined,
  number: undefined,
  loading: true,
  error: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setNumber: (state, action: PayloadAction<number>) => {
      state.prevNumber = state.number;
      state.number = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setNumber, setLoading, setError } = appSlice.actions;

export default appSlice.reducer;
