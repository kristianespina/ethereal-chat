import React from "react";

import { Flex } from "@chakra-ui/layout";
import { Input, Text, Button, FormControl } from "@chakra-ui/react";

const LoginBox = () => {
  const handleLogin = () => {};
  return (
    <Flex direction="column" gridGap={4} justifyContent="center" height="100%">
      <FormControl>
        <Text fontWeight="bold" fontSize="2xl">
          Login to continue
        </Text>
        <Input size="lg" variant="filled" placeholder="Email address" mt={4} />
        <Input
          size="lg"
          variant="filled"
          placeholder="Password"
          type="password"
          mt={4}
        />
        <Button
          colorScheme="blue"
          size="md"
          mt={9}
          borderRadius={99}
          w="full"
          onSubmit={handleLogin}
        >
          Login
        </Button>
      </FormControl>
    </Flex>
  );
};

export default LoginBox;
