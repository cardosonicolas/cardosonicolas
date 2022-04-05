import * as React from "react";
import {
  Container,
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  Stack,
  Text,
  Fade,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ThemeTogglerButton from "./ThemeTogglerButton";

const Links = ["About me", "Projects", "Contact"];

const NavLink = ({ children }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        color: "green.400",
      }}
      href={`#${children}`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const icon = isOpen ? <CloseIcon /> : <HamburgerIcon />;

  return (
    <>
      <Container
        shadow="sm"
        maxW="full"
        py="0.5em"
        borderTopWidth={5}
        borderStyle="solid"
        borderColor="green.400"
        zIndex="1"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          margin="auto"
          maxW="container.xl"
        >
          <IconButton
            size="md"
            bg="inherit"
            icon={icon}
            display={{ md: "none" }}
            onClick={onToggle}
          />
          <Text fontSize="md">{"Cardoso Nicolás"}</Text>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>

          <ThemeTogglerButton />
        </Flex>

        {isOpen ? (
          <Fade in={isOpen} unmountOnExit>
            <Box pt={4} display={{ md: "none" }}>
              <Stack as="nav" spacing="4">
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          </Fade>
        ) : null}
      </Container>
    </>
  );
};

export default Navbar;
