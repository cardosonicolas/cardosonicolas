import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/montserrat";

const styles = {
  global: (props) => ({
    html: { scrollBehavior: "smooth" },
    body: {
      bg: mode("gray.50", "teal.900")(props),
      color: mode("gray.700", "gray.50")(props),
      fontFamily: "Montserrat",
    },
  }),
};

const theme = extendTheme({ styles });
export default theme;
