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
import developer from "../images/developer3.png";

const Hero = () => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      textAlign={{ base: "center", md: "start" }}
      alignItems="center"
      justifyContent={"space-between"}
      h={{ md: "90vh" }}
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
          href="https://drive.google.com/file/d/18q7dMuPKftPdxBYXyJ_SBwlE--U4L4yK/view"
          target="_blank"
          _hover={{ textDecor: "none" }}
        >
          <Button shadow="md" colorScheme="green">
            My resume
          </Button>
        </Link>
      </Box>
      <Image src={developer} display={{ base: "none", md: "initial" }} />
    </Flex>
  );
};

export default Hero;
