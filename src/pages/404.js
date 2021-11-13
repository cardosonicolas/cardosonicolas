import * as React from "react";
import { Link } from "gatsby";

import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <main>
      <Container p={"1em"}>
        <Heading as="h1">Not found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6} />

        <Box my={6} align="center">
          <Link to="/">
            <Button to="/" colorScheme="teal">
              Go home
            </Button>
          </Link>
        </Box>
      </Container>
    </main>
  );
};

export default NotFoundPage;
