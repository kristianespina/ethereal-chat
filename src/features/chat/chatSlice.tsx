import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ChatState, User, Message } from "../../types/chat";

// Define the initial state using that type
const initialState: ChatState = {
  onlineUsers: [],
  messages: [],
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
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages?.push(action.payload);
    },
  },
});

export const { updateOnlineUsers, addMessage } = chatSlice.actions;

export default chatSlice.reducer;
