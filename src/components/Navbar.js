import * as React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ThemeTogglerButton from "./ThemeTogglerButton";

const Links = ["About", "Portfolio", "Skills", "Contact"];

const NavLink = ({ children }) => {
  return (
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
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const icon = isOpen ? <CloseIcon /> : <HamburgerIcon />;

  return (
    <>
      <Box p={"1em"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          maxW={"container.md"}
          margin={"auto"}
        >
          <IconButton
            size={"md"}
            bg={"inherit"}
            icon={icon}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Text fontWeight="extrabold" fontSize="md">
            {"<Nicolás />"}
          </Text>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <ThemeTogglerButton />
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
