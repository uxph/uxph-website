import React from "react";
import { Layout, SEO, HostEventItem } from "../components/Components";
import { Container, Box, Grid } from "@material-ui/core";

const EventsPage = () => {
  const hostFeature = {
    heading: "Host your own UXPH event (Coming Soon!)",
    description:
      "Have an event idea? You can host your own UXPH-sanctioned event!",
  };
  return (
    <Layout active="/events">
      <SEO title="Events" />

      <Box component="section" py={12}>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item md={7}>
              <h1>List of events here</h1>
            </Grid>
            <Grid item md={5}>
              <HostEventItem host={hostFeature} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};
export default EventsPage;
