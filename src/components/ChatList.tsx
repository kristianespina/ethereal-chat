import React from "react";

import ChatListItem from "./ChatListItem";

const ChatList = () => {
  return (
    <div>
      <ChatListItem name="Kristian Espina" isSelected={true} />
      <ChatListItem name="John Doe" isSelected={false} />
      <ChatListItem name="Hollegrehen" isSelected={false} />
      <ChatListItem name="Kafra Employee" isSelected={false} />
      <ChatListItem name="Kafra Employee" isSelected={false} />
      <ChatListItem name="Kafra Employee" isSelected={false} />
      <ChatListItem name="Kafra Employee" isSelected={false} />
      <ChatListItem name="Kafra Employee" isSelected={false} />
      <ChatListItem name="Kafra Employee" isSelected={false} />
      <ChatListItem name="Kafra Employee" isSelected={false} />
      <ChatListItem name="Kafra Employee" isSelected={false} />
    </div>
  );
};

export default React.memo(ChatList);
