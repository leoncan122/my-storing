import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface AuthLogin {
  loading: boolean;
  id: string;
  token: string;
}
const initialState = {
  loading: false,
  id: "",
  token: "",
};
export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      // const res = await fetch("http:localhost:4000");
      // const data = await res.json();
      const data = await [{ name: "leon", id: "1213" }];
      return data[0];
    } catch (error) {
      throw Error("unauthorized");
      return rejectWithValue(error);
    }
  }
);
export const AuthLoginSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.name;
        state.id = action.payload.id;
      });
  },
});
export default AuthLoginSlicer.reducer;
