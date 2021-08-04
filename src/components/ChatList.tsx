import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";

import { updateOnlineUsers } from "../features/chat/chatSlice";

import ChatListItem from "./ChatListItem";

const ChatList = () => {
  const dispatch = useAppDispatch();
  const { socket } = useAppSelector((state) => state.connection);
  const { onlineUsers } = useAppSelector((state) => state.chat);

  useEffect(() => {
    // Get Online Users
    socket?.on("onlineUsers", (onlineUsers) => {
      dispatch(updateOnlineUsers(onlineUsers));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    console.log("Online Users:", onlineUsers?.length);
  }, [onlineUsers]);
  return (
    <div>
      {onlineUsers?.map((user) => (
        <ChatListItem
          key={user.email}
          name={user.displayName}
          isSelected={false}
        />
      ))}
    </div>
  );
};

export default React.memo(ChatList);
