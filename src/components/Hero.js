import * as React from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Heading,
  Image,
  Link,
} from "@chakra-ui/react";
import developer from "../images/developer2.png";

const Hero = () => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      textAlign={{ base: "center", md: "start" }}
      alignItems="center"
    >
      <Box>
        <Heading as="h1" fontSize="4xl">
          Hi,{" "}
          <Text as="mark" bgColor="green.200" color="gray.700">
            I’m Nicolás.
          </Text>{" "}
          Nice to meet you.
        </Heading>
        <Text fontSize="2xl" pb="0.5em">
          I'm a frontend developer based in Entre Ríos, Argentina.
        </Text>
        <Link
          href="https://drive.google.com/file/d/1IGzZ6NfEMi0S-4P7g7xGaCZc4ZOgxW6v/view?usp=sharing"
          target="_blank"
          _hover={{ textDecor: "none" }}
        >
          <Button shadow="md" colorScheme="green">
            My resume
          </Button>
        </Link>
      </Box>
      <Box display={{ base: "none", md: "initial" }}>
        <Image src={developer} />
      </Box>
    </Flex>
  );
};

export default Hero;
