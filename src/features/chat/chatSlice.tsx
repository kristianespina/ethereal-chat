import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ChatState, User } from "../../types/chat";

// Define the initial state using that type
const initialState: ChatState = {
  onlineUsers: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateOnlineUsers: (state, action: PayloadAction<User[]>) => {
      return {
        ...state,
        onlineUsers: action.payload,
      };
    },
  },
});

export const { updateOnlineUsers } = chatSlice.actions;

export default chatSlice.reducer;
