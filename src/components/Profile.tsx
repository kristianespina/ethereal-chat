import React from "react";

import { Center, Box } from "@chakra-ui/layout";

import ProfileAvatar from "./ProfileAvatar";
import { Button, Text, Container } from "@chakra-ui/react";

type Props = {
  name?: string;
  status: string;
};

const Profile = ({ name, status }: Props) => {
  return (
    <Box w="100%">
      <Center>
        <ProfileAvatar name={name} src="" size="lg" />
      </Center>
      <Box bgColor="gray.100" mh="213px" mt={-9} borderRadius={12} p={4} pb={7}>
        <Container pt={8} centerContent>
          <Text fontSize="xl" fontWeight="bold" m={0}>
            {name}
          </Text>
          <Text fontSize="sm" fontWeight="bold" color="gray.400" mt={0}>
            {status}
          </Text>
          <Button colorScheme="blue" w="100%" mt={8} size="sm">
            Chat Preferences
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default React.memo(Profile);
