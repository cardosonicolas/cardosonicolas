import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeTogglerButton = () => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<MoonIcon color="gray.500" />, <SunIcon />);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={useColorModeValue("light", "dark")}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton onClick={toggleColorMode} icon={icon} bg={"inherit"} />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeTogglerButton;
