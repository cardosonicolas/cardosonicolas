import * as React from "react";
import {
  Box,
  Text,
  Heading,
  Image,
  VStack,
  Link,
  useColorModeValue,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const Card = ({
  image,
  title,
  tecnology,
  linkDesing,
  linkRepo,
  linkDeploy,
  desing,
}) => {
  return (
    <Box
      w="full"
      boxShadow="md"
      overflow="hidden"
      bg={useColorModeValue("white", "teal.800")}
    >
      <Link href={linkDeploy} target="_blank" _hover={{ textDecor: "none" }}>
        <Image
          src={image}
          _hover={{ opacity: "0.8", transition: "opacity 0.2s ease-out" }}
        />
      </Link>
      <VStack py="2em" alignItems="center">
        <VStack>
          <Link
            href={linkDeploy}
            target="_blank"
            _hover={{ textDecor: "none", color: "gray.500" }}
          >
            <Heading fontSize="2xl">{title}</Heading>
          </Link>
          <Text>{tecnology}</Text>
        </VStack>

        <HStack fontSize="sm">
          <Text fontWeight="bold">Designed by:</Text>
          <Link href={linkDesing} target="_blank">
            {desing}
          </Link>
        </HStack>

        <HStack w="full" justifyContent="space-around">
          <Link
            href={linkDeploy}
            target="_blank"
            pt="1em"
            _hover={{ textDecor: "none" }}
          >
            <Button leftIcon={<SiNetlify />} colorScheme="green">
              Demo
            </Button>
          </Link>
          <Link
            href={linkRepo}
            target="_blank"
            pt="1em"
            _hover={{ textDecor: "none" }}
          >
            <Button leftIcon={<FaGithub />} colorScheme="green">
              Code
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
