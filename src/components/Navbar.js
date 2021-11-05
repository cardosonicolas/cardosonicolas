import * as React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = ["About", "Portfolio", "Skills", "Contact"];

const NavLink = ({ children }) => (
  <Link
    p={2}
    _hover={{
      textDecoration: "none",
    }}
    href={`#${children}`}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("blue.50", "blue.900")} p={"1em"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          maxW={"1200px"}
          margin={"auto"}
        >
          <IconButton
            size={"md"}
            bg={"inherit"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>{"<Nicolás />"}</Box>

          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>

          <IconButton onClick={toggleColorMode} bg={"inherit"}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </Flex>

        {isOpen ? (
          <Box pt={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={"4"}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
