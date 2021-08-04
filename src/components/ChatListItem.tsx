import React from "react";
import { Flex, Box, Text } from "@chakra-ui/layout";

import ProfileAvatar from "./ProfileAvatar";

type Props = {
  name: string; // Name of Chat Participant
  isSelected?: boolean; // User currently selected in chat
};

const ChatListItem = ({ name, isSelected }: Props) => {
  const bgColor = isSelected ? "gray.100" : "none";
  return (
    <Box
      bgColor={bgColor}
      px={4}
      py={4}
      borderRadius={12}
      _hover={{ bgColor: "gray.200", cursor: "pointer" }}
    >
      <Flex direction="row">
        <ProfileAvatar name={name} src="" size="md" />
        <Box w="100%" pl={4}>
          {/* Name of Chat Participant */}
          <Text fontWeight="bold">{name}</Text>
          {/* Status */}
          <Text fontSize="sm" color="gray.700">
            Online
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default React.memo(ChatListItem);
