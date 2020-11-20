/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { Nav, Footer } from "./Components";
import "../assets/sass/main.scss";

const Layout = ({ children }) => {
  /*
    NOTE:
    Nav
    main (children)
    Footer
  */

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
