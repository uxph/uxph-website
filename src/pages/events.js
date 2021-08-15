import React from "react";
import { Layout, SEO, Card, EventItem, Header, Button } from "../components/Components";
import { graphql } from "gatsby";
import { Container, Box, Grid } from "@material-ui/core";

const EventsPage = ({ data }) => {
    // const hostFeature = {
    //   heading: "Host your own UXPH event (Coming Soon!)",
    //   description:
    //     "Have an event idea? You can host your own UXPH-sanctioned event!",
    // };

    const events = data.allMarkdownRemark.edges;
    const featuredEvent = events[0].node.frontmatter;
    return (
        <Layout active="/events">
            <SEO title="Events" />

            <Header relative={true} pb={19}>
                <h1 className="margin-bottom-24 text-white">Featured Event</h1>
                <Card suspend={300} p={1}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item md={7}>
                            <Box p={2}>
                                <Box
                                    component="small"
                                    fontSize={14}
                                    display="block"
                                    className="text-uppercase text-primary"
                                    mb={2}
                                >
                                    {featuredEvent.date} • {featuredEvent.venue}
                                </Box>
                                <h2 className="font-size-24 line-height-32 two-liner">{featuredEvent.name}</h2>
                                <p className="two-liner font-size-16 margin-bottom-16">{featuredEvent.description}</p>
                                <Button href="/">
                                    <span className="font-size-14">View event details</span>
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item md={5}>
                            <Box borderRadius={4} height={250} className="bg-light"></Box>
                        </Grid>
                    </Grid>
                </Card>
            </Header>

            <Box component="section" pt={26} pb={12} className="bg-light-1">
                <Container maxWidth="lg">
                    <h2 className="margin-bottom-32 font-size-40">Past Events</h2>
                    <Grid container spacing={3}>
                        {events.map((event, index) => {
                            return index !== 0 ? (
                                <Grid item md={4} key={index}>
                                    <EventItem event={event} />
                                </Grid>
                            ) : null;
                        })}
                    </Grid>
                </Container>
            </Box>
        </Layout>
    );
};

export const dataquery = graphql`
    query EventsQuery {
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "event" } } }) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        cover
                        date
                        type
                        time
                        venue
                    }
                    html
                }
            }
        }
    }
`;

export default EventsPage;
