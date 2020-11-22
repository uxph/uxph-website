import React from "react";
import { Layout, SEO } from "../components/Components";
import { Box, Container } from "@material-ui/core";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About UXPH" />
      <Box component="section" py={12}>
        <Container maxWidth="md">
          <h1>About Page</h1>
        </Container>
      </Box>
    </Layout>
  );
};

export default AboutPage;
