import * as React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import IconInformation from "./IconInformation";
import CSSIcon from "../images/CSSIcon";
import HTMLIcon from "../images/HTMLIcon";
import GitIcon from "../images/GitIcon";
import ReactIcon from "../images/ReactIcon";
import NodeIcon from "../images/NodeIcon.js";
import SqlIcon from "../images/SqlIcon.js";

const icons = {
  CSS: CSSIcon,
  HTML: HTMLIcon,
  Git: GitIcon,
  React: ReactIcon,
  Node: NodeIcon,
  SQLite: SqlIcon,
};

const IconsGrid = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 3 }}
      spacing="5"
      p="1"
      textAlign="center"
      justifyItems="center"
      color="#fff"
    ></SimpleGrid>
  );
};
