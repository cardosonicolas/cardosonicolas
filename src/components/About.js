import * as React from "react";
import { Box, Text, Heading, Image, Flex } from "@chakra-ui/react";
import note from "../images/note.png";

const About = () => {
  return (
    <Box py={{ base: "5em", md: "0em" }} pb={{ base: "0em", md: "5em" }}>
      <Heading
        as="h2"
        fontWeight="normal"
        fontSize="4xl"
        pb="1em"
        textAlign="center"
        id="About me"
      >
        About me
      </Heading>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "start" }}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Box display={{ base: "none", md: "initial" }}>
          <Image src={note} />
        </Box>
        <Box fontSize="2xl" pl={{ md: "2em" }} w={{ md: "60%" }}>
          <Text>
            I am passionate about web application development. Right now I'm
            self-taught using the React ecosystem for personal projects.
          </Text>
          <Text>
            <br />
            My goal is to be part of a work team that allows me to develop
            professionally. <br />
          </Text>
          <Text display={{ base: "none", md: "initial" }}>
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
