import * as React from "react";
import Navbar from "../components/Navbar.js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../chakra-ui-gatsby-plugin/theme";

const Home = () => {
  return (
    <ChakraProvider theme={theme}>
      <title>Cardoso Nicolás - Web Developer</title>

      <Navbar></Navbar>
    </ChakraProvider>
  );
};

export default Home;
