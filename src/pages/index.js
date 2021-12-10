import * as React from "react";
import Navbar from "../components/Navbar.js";
import {
  Box,
  ChakraProvider,
  Container,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import theme from "../chakra-ui-gatsby-plugin/theme";
import CSSIcon from "../images/CSSIcon";
import HTMLIcon from "../images/HTMLIcon";
import GitIcon from "../images/GitIcon";
import ReactIcon from "../images/ReactIcon";
import NodeIcon from "../images/NodeIcon.js";
import SqlIcon from "../images/SqlIcon.js";
import IconInformation from "../components/IconInformation.js";

const Home = () => {
  return (
    <ChakraProvider theme={theme}>
      <title>Cardoso Nicolás - Web Developer</title>
      <Navbar />
      <Box color="gray.700" textAlign="center">
        <Box mt="16" py="16">
          <Container maxW="container.xl">
            <Text as="p" fontSize="4xl" fontWeight="bold">
              Hi,{" "}
              <Text
                as="mark"
                bg="purple.700"
                color="white"
                p="0.1em"
                rounded="md"
              >
                I’m Nicolás
              </Text>
              . Nice to meet you.
            </Text>
            <Text as="p" fontSize="1xl">
              I'm a trainee web developer based in Entre Ríos, Argentina.
            </Text>
          </Container>
        </Box>
        <Box mt="16" py="16" bg="purple.700" color="white">
          <Container maxW="container.xl">
            <Text as="h2" fontSize="4xl" fontWeight="bold" pb="4">
              About Me
            </Text>
            <Text textShadow="1px 1px #000">
              I'm currently learning web technologies (mostly Javascript) and
              building small projects to make progress every day. I'd love to
              work for a company that makes me grow professionally :) When I'm
              not studying, I enjoy riding my bike downtown and playing
              videogames.
            </Text>
          </Container>
        </Box>
        <Box mt="16" py="16">
          <Container maxW="container.xl">
            <Text as="h2" fontSize="4xl" fontWeight="bold" pb="4">
              Skills
            </Text>
            <SimpleGrid
              columns={{ sm: 1, md: 3 }}
              spacing="5"
              p="1"
              textAlign="center"
              justifyItems="center"
              color="#fff"
            >
              {/* <IconInformation text="CSS">
                <CSSIcon />
              </IconInformation>
              <IconInformation text="HTML">
                <HTMLIcon />
              </IconInformation>
              <IconInformation text="React">
                <ReactIcon />
              </IconInformation>
              <Flex
                bg="purple.700"
                p="5"
                width="7.5em"
                flexDirection="column"
                alignItems="center"
                rounded="full"
              >
                <GitIcon />
              </Flex>
              <Flex
                bg="purple.700"
                p="5"
                width="7.5em"
                flexDirection="column"
                alignItems="center"
                rounded="full"
              >
                <NodeIcon />
              </Flex>
              <Flex
                bg="purple.700"
                p="5"
                width="7.5em"
                flexDirection="column"
                alignItems="center"
                rounded="full"
              >
                <SqlIcon />
              </Flex> */}
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Home;
