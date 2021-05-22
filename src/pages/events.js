import React from "react";
import {
  Layout,
  SEO,
  // HostEventItem,
  EventItem,
  Header,
  Button,
} from "../components/Components";
import { Container, Box, Grid } from "@material-ui/core";
import events from "../data/events";

const EventsPage = () => {
  // const hostFeature = {
  //   heading: "Host your own UXPH event (Coming Soon!)",
  //   description:
  //     "Have an event idea? You can host your own UXPH-sanctioned event!",
  // };

  return (
    <Layout active="/events">
      <SEO title="Events" />
      <Header bgImage={events[0].image_banner_url}>
        <h1 className="margin-bottom-32 text-white">Featured Event</h1>
        <Box component="div">
          <Grid container spacing={4}>
            <Grid item md={3}>
              <Box
                component="div"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={events[0].image_square_url}
                  style={{
                    height: "200px",
                  }}
                  alt={events[0].name}
                />
              </Box>
            </Grid>

            <Grid item md={9}>
              <h2 className="text-white margin-bottom-16">{events[0].name}</h2>
              <p
                className="text-white font-size-16 margin-bottom-16"
                style={{ fontWeight: "light" }}
              >
                {events[0].date} | {events[0].time} | {events[0].venue}
              </p>
              <p className="text-white margin-bottom-16">
                {events[0].description}
              </p>
              <Button variant="blue">Get Tickets</Button>
            </Grid>
          </Grid>
        </Box>
      </Header>
      {/* <Box component="section" py={12}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item md={8}>
              <h1 className="margin-bottom-32">Past Events</h1>
              {events.map((item, index) => {
                if (index !== 0) return <EventItem event={item} key={index} />;
                else return null;
              })}
            </Grid>
            <Grid item md={4}>
              <h3>Page 1 of 3</h3>
              <HostEventItem host={hostFeature} />
            </Grid>
          </Grid>
        </Container>
      </Box> */}
      <Box component="section" py={12} className="bg-light-1">
        <Container maxWidth="lg">
          <h2 className="margin-bottom-32 font-size-40">Past Events</h2>
          <Grid container spacing={3}>
            {events.map((event, index) => {
              return index !== 0 ? (
                <Grid item md={4}>
                  <EventItem event={event} key={index} />
                </Grid>
              ) : null;
            })}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};
export default EventsPage;
