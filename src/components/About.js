import * as React from "react";
import { Box, Text, Heading, Image, Flex } from "@chakra-ui/react";
import note from "../images/note.png";

const About = () => {
  return (
    <Box pt="5em" id="About me">
      <Heading
        as="h2"
        fontWeight="normal"
        fontSize="4xl"
        pb="1em"
        textAlign="center"
      >
        About me
      </Heading>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "start" }}
        alignItems="center"
      >
        <Box w="100%" pr="1em" display={{ base: "none", md: "initial" }}>
          <Image src={note} />
        </Box>
        <Box>
          <Text fontSize="2xl">
            I am passionate about web application development. I am currently
            self-taught using the React ecosystem for personal projects.
          </Text>
          <Text fontSize="2xl">
            <br />
            My goal is to be part of a work team that allows me to develop
            professionally. <br />
          </Text>
          <Text fontSize="2xl" display={{ base: "none", md: "initial" }}>
            <br />
            When I'm not studying, I like to ride my bike with my group of
            friends.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
