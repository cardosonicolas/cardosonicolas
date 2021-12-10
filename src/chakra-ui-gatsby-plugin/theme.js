import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("white", "white")(props),
      fontSize: "xl",
      // color: mode("gray.800", "gray.50")(props),
      // bgGradient: mode("", "linear(to-r, #0F2027, #203A43, #2C5364)")(props),
    },
  }),
};

const theme = extendTheme({ styles });
export default theme;
