import React, { useState } from "react";

import { Box } from "@chakra-ui/layout";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { useForm } from "react-hook-form";
import { useAppSelector } from "../app/hooks";
import { Message } from "../types/chat";

const InputMessage = () => {
  const [message, setMessage] = useState("");
  const { handleSubmit } = useForm();
  const { socket } = useAppSelector((state) => state.connection);
  const { email } = useAppSelector((state) => state.user);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const sendMessage = () => {
    const messageToSend: Message = {
      sender: email,
      destination: "__BROADCAST__",
      payload: {
        type: "chat",
        content: message,
      },
    };
    socket?.emit("message", messageToSend);

    setMessage("");
  };
  return (
    <Box bgColor="white">
      <form onSubmit={handleSubmit(sendMessage)}>
        <InputGroup size="lg">
          <Input
            placeholder="Write your message here"
            onChange={handleInputChange}
            value={message}
          />
          <InputRightElement>
            <IconButton
              aria-label="Send"
              icon={<ChevronRightIcon />}
              size="sm"
              type="submit"
            />
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
};

export default React.memo(InputMessage);
