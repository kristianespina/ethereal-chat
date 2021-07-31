import React from "react";

import { Spacer } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";
import ProfileAvatar from "./ProfileAvatar";
import ChatEntryMessage from "./ChatEntryMessage";

type Props = {
  sender: string;
  message: string;
  isSenderSelf?: boolean;
};

const ChatEntry = ({ sender, message, isSenderSelf }: Props) => {
  // Invert direction if sender is self
  const direction = isSenderSelf ? "row-reverse" : "row";
  return (
    <>
      <Flex direction={direction} gridGap={4} py={2}>
        <ProfileAvatar name={sender} src="" size="md" />
        <ChatEntryMessage isSenderSelf={isSenderSelf} message={message} />
      </Flex>
    </>
  );
};

export default React.memo(ChatEntry);
