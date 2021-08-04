export type Entry = {
  sender: string;
  message: string;
};
export type Message = {
  sender?: string;
  destination: string;
  payload: Payload;
};
export type Payload = {
  type: string;
  content: string;
};
export type ChatState = {
  onlineUsers?: User[];
};
export type User = {
  email: string;
  displayName: string;
  level: Number;
};
