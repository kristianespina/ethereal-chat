import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import { UserState } from "../../types/user";

// Define the initial state using that type
const initialState: UserState = {
  email: "",
  displayName: "",
  token: "",
  level: 0,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
