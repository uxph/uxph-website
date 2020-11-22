import React from "react";
import { Layout, SEO } from "../components/Components";
import { Container, Box } from "@material-ui/core";
const EventsPage = () => {
  return (
    <Layout active="/events">
      <SEO title="Events" />
      <Box component="section" py={12}>
        <Container maxWidth="md">
          <h1>EventsPage</h1>
        </Container>
      </Box>
    </Layout>
  );
};
export default EventsPage;
