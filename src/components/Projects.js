import * as React from "react";
import { Box, Heading, Grid, Link, useDisclosure } from "@chakra-ui/react";
import Card from "../components/Card.js";
import RESTCountriesAPI from "../images/RESTCountriesAPI.png";
import LoopstudiosLandingPage from "../images/LoopstudiosLandingPage.png";
import IPAddressTracker from "../images/IPAddressTracker.png";
import BaseApparelComingSoonPage from "../images/BaseApparelComingSoonPage.png";
import SinglePriceGridComponent from "../images/SinglePriceGridComponent.png";

const cards = [
  {
    id: 1,
    title: "REST Countries API",
    tecnology: "REACT • STYLED COMPONENTS",
    image: RESTCountriesAPI,
    desing: "frontendmentor.io",
    linkDesing:
      "https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca",
    linkRepo: "https://github.com/cardosonicolas/country-flags",
    linkDeploy: "https://cardosonicolas-restcountries.netlify.app/",
  },

  {
    id: 2,
    title: "Loopstudios landing page",
    tecnology: "HTML • CSS • JS",
    image: LoopstudiosLandingPage,
    desing: "frontendmentor.io",
    linkDesing:
      "https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw",
    linkRepo: "https://github.com/cardosonicolas/loopstudios-landing-page",
    linkDeploy: "https://cardosonicolas-loopstudios-landing-page.netlify.app/",
  },
  {
    id: 3,
    title: "IP Address Tracker",
    tecnology: "REACT • STYLED COMPONENTS",
    image: IPAddressTracker,
    desing: "frontendmentor.io",
    linkDesing:
      "https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0",
    linkRepo: "https://github.com/cardosonicolas/ip-address-tracker",
    linkDeploy: "https://cardosonicolas-ip-address-tracker-master.netlify.app/",
  },
  {
    id: 4,
    title: "Single price grid component",
    tecnology: "HTML • CSS",
    image: SinglePriceGridComponent,
    desing: "frontendmentor.io",
    linkDesing:
      "https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc",
    linkRepo:
      "https://github.com/cardosonicolas/single-price-grid-component-master",
    linkDeploy: "https://cardosonicolas-singleprice-gridcomponent.netlify.app/",
  },
  {
    id: 5,
    title: "Base Apparel coming soon page",
    tecnology: "HTML • CSS • JS",
    image: BaseApparelComingSoonPage,
    desing: "frontendmentor.io",
    linkDesing:
      "https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0",
    linkRepo:
      "https://github.com/cardosonicolas/base-apparel-coming-soon-master",
    linkDeploy:
      "https://cardosonicolas-base-apparel-coming-soon-master.netlify.app/",
  },
];
const Projects = () => {
  const { isOpen, onToggle } = useDisclosure();
  let counting = isOpen ? cards.length : 3;

  return (
    <Box pt="5em" textAlign="center" id="Projects">
      <Heading
        as="h2"
        fontWeight="normal"
        fontSize="4xl"
        pb="1em"
        textAlign="center"
      >
        Last projects
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap="3"
        pb="2em"
      >
        {cards
          .slice(0, counting)
          .map(
            ({
              title,
              tecnology,
              linkDesing,
              linkRepo,
              image,
              desing,
              linkDeploy,
              id,
            }) => (
              <Card
                key={id}
                title={title}
                tecnology={tecnology}
                linkDesing={linkDesing}
                linkRepo={linkRepo}
                image={image}
                desing={desing}
                linkDeploy={linkDeploy}
              />
            )
          )}
      </Grid>
      <Link
        onClick={onToggle}
        fontSize="2xl"
        textDecor="underline"
        _hover={{ color: "green.400" }}
      >
        See {isOpen ? "less" : "more"}
      </Link>
    </Box>
  );
};

export default Projects;
