/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { Nav, Footer } from "./Components";
import "../assets/sass/main.scss";

const Layout = ({ children, active }) => {
  return (
    <>
      <Nav active={active} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
