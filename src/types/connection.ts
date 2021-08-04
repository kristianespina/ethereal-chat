import { Socket } from "socket.io-client";
export type ConnectionState = {
  socket?: Socket;
};

export type Authentication = {
  username: string;
};
