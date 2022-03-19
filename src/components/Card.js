import * as React from "react";
import {
  Box,
  Text,
  Heading,
  Image,
  VStack,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Card = ({ image, title, tecnology, linkDesing, linkRepo, desing }) => {
  return (
    <Box
      w="full"
      boxShadow="md"
      overflow="hidden"
      bg={useColorModeValue("white", "teal.800")}
    >
      <Image src={image} _hover={{ opacity: "0.8" }} />
      <VStack py="2em" alignItems="center">
        <VStack>
          <Heading fontSize="2xl">{title}</Heading>
          <Text>{tecnology}</Text>
        </VStack>
        <Link href={linkDesing} target="_blank">
          <Text>{`Designed by: ${desing}`}</Text>
        </Link>

        <Link href={linkRepo} target="_blank" pt="1em">
          <Icon
            as={FaGithub}
            w="8"
            h="8"
            fill="green.400"
            _hover={{
              fill: "green.200",
            }}
          />
        </Link>
      </VStack>
    </Box>
  );
};

export default Card;
