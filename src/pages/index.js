import * as React from "react";
import { ChakraProvider, Spinner, Center } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import theme from "../chakra-ui-gatsby-plugin/theme";
import MySpinner from "../components/MySpinner";
const Layout = React.lazy(() => import("../components/Layout.js"));

const Home = () => {
  const isSSR = typeof window === "undefined";
  return (
    <ChakraProvider theme={theme}>
      <Helmet title="Cardoso Nicolás - Web Developer" />
      {!isSSR && (
        <React.Suspense fallback={<MySpinner />}>
          <Layout />
        </React.Suspense>
      )}
    </ChakraProvider>
  );
};

export default Home;
