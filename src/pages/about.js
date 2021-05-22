import React from "react";
import {
  Layout,
  SEO,
  Button,
  Card,
  MissionVissionItem,
  FeaturedItem,
  Header,
} from "../components/Components";
import { Box, Container, Grid } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";

const AboutPage = () => {
  const mission_vision = [
    {
      heading: "Mission",
      description:
        "To grow and nurture the Filipino creative community through sharing and collaboration, to help uplift the lives of people and our society.",
    },
    {
      heading: "Vission",
      description:
        "An empowered culture where products and services are built mindfully and sustainably.",
    },
  ];
  const organization_initiatives = [
    {
      image: " ",
      heading: "Monthly Meetups",
      description:
        "UXPH organizes free monthly meetups all around Metro Manila (and soon outside of it). Meetups range from design and entrepreneurship talks, panels, workshops, or social events hosted at partner venues.",
      url: "https://",
      buttonLabel: "View our events",
    },
    {
      image: " ",
      heading: "Design Conferences",
      description:
        "Each year, we hold large-scale design conferences throughout the Philippines. These events feature keynote speakers, workshops, and hiring fairs with local and international partners and are open to all audiences.",
      url: "https://",
      buttonLabel: "Visit UXPH Roadshow",
    },
    {
      image: " ",
      heading: "UX Bootcamp (Coming Soon)",
      description:
        "Soon you'll be able to learn more about the fundamentals of UX Design and put them into practice in an immersive UX Bootcamp. Coming in 2021!",
      url: null,
      buttonLabel: null,
    },
    {
      image: " ",
      heading: "Design Mentorship",
      description:
        "UXPH works with some of the country's most experienced designers. As a way to give back to the community, these designers often offer ongoing mentorship engagements for new and experienced practitioners to the public or private sectors. Message us to learn more!",
      url: null,
      buttonLabel: null,
    },
  ];
  return (
    <Layout>
      <SEO title="About UXPH" />
      <Header>
        <h2 className="margin-bottom-24 font-size-32 text-white">About UXPH</h2>
        <p className="margin-bottom-24 text-white">
          UXPH (User Experience Philippines) is a Filipino non-profit
          organization that hosts the largest network of design professionals,
          enthusiasts, and students in the Philippines. Since 2012, we have been
          building towards a more mature, collaborative, and design-driven
          country through hosting online and offline community initiatives,
          conferences, and programs within local design and technology
          communities.
        </p>
        <p className="margin-bottom-24 text-white">
          UXPH has become the country’s hub for sharing information, resources,
          and building networks in the design community. As of 2020, the UXPH
          community has over 4,000 local and international members from a wide
          range of industries related to technology and even traditional
          businesses.
        </p>
        <Button
          variant="white"
          target="blank"
          href="https://www.facebook.com/groups/252346031458195/"
          className="margin-right-8"
          isExternal={true}
        >
          <Facebook className="margin-right-4" />
          Join the Facebook group
        </Button>
        <Button
          variant="white"
          target="blank"
          href="https://www.facebook.com/uxphofficial/"
          isExternal={true}
        >
          <Facebook className="margin-right-4" />
          Facebook page
        </Button>
      </Header>
      <Box component="section" py={3}>
        <Container maxWidth="md">
          <Card>
            <Grid container spacing={4}>
              {mission_vision.map((mv, index) => {
                return (
                  <Grid item md={6} sm={12} key={index}>
                    <MissionVissionItem mv={mv} />
                  </Grid>
                );
              })}
            </Grid>
          </Card>
        </Container>
      </Box>
      <Box component="section" py={12}>
        <Container maxWidth="md">
          <h2 className="font-size-32 text-dark margin-bottom-32">
            Organization Initiatives
          </h2>
          <Grid container spacing={2}>
            {organization_initiatives.map((feature, index) => {
              return (
                <Grid item md={6} key={index}>
                  <FeaturedItem item={feature} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default AboutPage;
