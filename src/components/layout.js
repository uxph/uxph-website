/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { Nav, Footer } from "./Components";
import "../assets/sass/main.scss";
import { ThemeProvider } from "@material-ui/core/styles";
import uxphTheme from "../theme";

const Layout = ({ children, active }) => {
  return (
    <>
      <ThemeProvider theme={uxphTheme}>
        <Nav active={active} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
