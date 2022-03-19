import * as React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import theme from "../chakra-ui-gatsby-plugin/theme";
import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Footer from "../components/Footer.js";

const Home = () => {
  return (
    <ChakraProvider theme={theme}>
      <Helmet title="Cardoso Nicolás - Web Developer" />
      <Navbar />
      <Container maxW="container.xl" pt={{ base: "5em", md: "1em" }}>
        <Hero />
        <About />
        <Projects />
      </Container>
      <Footer />
    </ChakraProvider>
  );
};

export default Home;
