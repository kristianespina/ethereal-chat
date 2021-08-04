import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import { Socket } from "socket.io-client";
import { ConnectionState } from "../../types/connection";

// Define the initial state using that type
const initialState: ConnectionState = {
  socket: undefined,
};

export const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    updateSocket: (state, action: PayloadAction<Socket>) => {
      return {
        socket: action.payload,
      };
    },
  },
});

export const { updateSocket } = connectionSlice.actions;

export default connectionSlice.reducer;
