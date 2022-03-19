import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";

const IconInformation = ({ text, children }) => {
  return (
    <Flex
      bg="purple.700"
      p="5"
      width="7.5em"
      flexDirection="column"
      alignItems="center"
      rounded="full"
    >
      {children}
      <Text>{text}</Text>
    </Flex>
  );
};

export default IconInformation;
