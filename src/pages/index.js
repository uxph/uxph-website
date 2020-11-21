import React from "react";
import { Layout, SEO, Button } from "../components/Components";
import { Container, Box } from "@material-ui/core";
// import { mobilePhoneSize } from "../helpers/responsive";
// import { useMediaQuery } from "react-responsive";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Box component="section" py={12}>
        <Container maxWidth="md">
          <h1 className="margin-bottom-24">About UXPH</h1>
          <p className="margin-bottom-24">
            UXPH (User Experience Philippines) is a Filipino non-profit
            organization that hosts the largest network of design professionals,
            enthusiasts, and students in the Philippines. Since 2012, we have
            been building towards a more mature, collaborative, and
            design-driven country through hosting online and offline community
            initiatives, conferences, and programs within local design and
            technology communities.
          </p>
          <p className="margin-bottom-24">
            UXPH has become the country’s hub for sharing information,
            resources, and building networks in the design community. As of
            2020, the UXPH community has over 4,000 local and international
            members from a wide range of industries related to technology and
            even traditional businesses.
          </p>
          <Button variant="contained">Learn more</Button>
        </Container>
      </Box>
    </Layout>
  );
};

export default IndexPage;
