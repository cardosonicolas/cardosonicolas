import * as React from "react";
import { Spinner, Center } from "@chakra-ui/react";

const MySpinner = () => {
  return (
    <Center h="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="green.200"
        color="green.500"
        size="xl"
      />
    </Center>
  );
};

export default MySpinner;
