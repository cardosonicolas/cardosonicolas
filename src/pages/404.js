import * as React from "react";
import { Link } from "gatsby";

import { Box, Container, Button, Image } from "@chakra-ui/react";
import notFound from "../images/404.png";

const NotFoundPage = () => {
  return (
    <main>
      <Container p={"3em"}>
        <Image src={notFound} />
        <Box my={6} align="center">
          <Link to="/">
            <Button to="/" colorScheme="green">
              Go home
            </Button>
          </Link>
        </Box>
      </Container>
    </main>
  );
};

export default NotFoundPage;
