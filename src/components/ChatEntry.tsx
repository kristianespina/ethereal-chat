import React from "react";

import { Flex } from "@chakra-ui/layout";
import ProfileAvatar from "./ProfileAvatar";
import ChatEntryMessage from "./ChatEntryMessage";

type Props = {
  sender: string;
  message: string;
};
const ChatEntry = ({ sender, message }: Props) => {
  const isSenderSelf = false; //! TODO : Determine if the sender is the user
  return (
    <Flex direction="row" gridGap={4} py={2}>
      <ProfileAvatar name={sender} src="" size="md" />
      <ChatEntryMessage isSenderSelf={isSenderSelf} message={message} />
    </Flex>
  );
};

export default ChatEntry;
