import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: string;
  email: string;
  location: string;
  favorites: string[];
  status: "connected" | "disconnected";
}
export const initialState: User = {
  username: "",
  email: "",
  location: "",
  favorites: [],
  status: "disconnected",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
    },
    connect: (state, action) => {
      return { ...state, ...action.payload, status: "connected" };
    },
  },
  extraReducers: (builder) => {},
});
export const { addFavorites, connect } = userSlice.actions;
export default userSlice.reducer;
