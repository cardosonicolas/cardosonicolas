import * as React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Hero from "./Hero.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Footer from "./Footer.js";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" pt={{ base: "5em", md: "1em" }}>
        <Hero />
        <About />
        <Projects />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
