import React from "react";
import { Layout, SEO, Button } from "../components/Components";
import { Container } from "@material-ui/core";
// import { mobilePhoneSize } from "../helpers/responsive";
// import { useMediaQuery } from "react-responsive";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container maxWidth="md">
        <h1>Hello World!</h1>
        <p>
          UXPH (User Experience Philippines) is a Filipino non-profit
          organization that hosts the largest network of design professionals,
          enthusiasts, and students in the Philippines. Since 2012, we have been
          building towards a more mature, collaborative, and design-driven
          country through hosting online and offline community initiatives,
          conferences, and programs within local design and technology
          communities. UXPH has become the country’s hub for sharing
          information, resources, and building networks in the design community.
          As of 2020, the UXPH community has over 4,000 local and international
          members from a wide range of industries related to technology and even
          traditional businesses.
          <i className="fab fa-facebook-square"></i>
        </p>
        <Button variant="outlined">About UXPH</Button>
        <Button variant="contained">About UXPH</Button>
      </Container>
    </Layout>
  );
};

export default IndexPage;
