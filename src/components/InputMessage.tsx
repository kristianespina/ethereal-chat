import React from "react";

import { Box } from "@chakra-ui/layout";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const InputMessage = () => {
  return (
    <Box bgColor="white">
      <InputGroup size="lg">
        <Input placeholder="Write your message here" />
        <InputRightElement>
          <IconButton aria-label="Send" icon={<ChevronRightIcon />} size="sm" />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default InputMessage;
