import React from "react";
import { Layout, SEO, Button, Header } from "../components/Components";
import { Box, Typography, Container, Grid } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";
import {
  PeopleRounded,
  EmojiEventsRounded,
  EmojiPeopleRounded,
  MenuBookRounded,
} from "@material-ui/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AboutPage = () => {
  const initiatives = [
    {
      heading: "Monthly Meetups",
      description:
        "UXPH organizes free monthly meetups all around Metro Manila (and soon outside of it). Meetups range from design talks, workshops, or social events hosted at partner venues.",
      icon: <PeopleRounded className="text-primary font-size-20" />,
    },
    {
      heading: "Design Conferences",
      description:
        "Each year, we hold large-scale design conferences throughout the Philippines featuring keynote speakers, workshops, hiring fairs and a lot more.",
      icon: <EmojiEventsRounded className="text-primary font-size-20" />,
    },
    {
      heading: "UX Bootcamp (Coming Soon)",
      description:
        "Soon you'll be able to learn more about the fundamentals of UX Design and put them into practice in an immersive UX Bootcamp.",
      icon: <MenuBookRounded className="text-primary font-size-20" />,
    },
    {
      heading: "Design Mentorship",
      description:
        "UXPH works with some of the country's most experienced designers in offering ongoing mentorship engagements for new and experienced practitioners.",
      icon: <EmojiPeopleRounded className="text-primary font-size-20" />,
    },
  ];
  return (
    <Layout active="/about">
      <SEO title="About UXPH" />
      <Header
        contentWidth={6}
        content={
          <>
            <Typography variant="h1" className="text-white header-title">
              About UXPH
            </Typography>
            <Typography
              variant="body1"
              className="text-white-1 margin-bottom-32"
            >
              <strong className="text-white">
                UXPH (User Experience Philippines) is a Filipino non-profit
                organization that hosts the largest network of design
                professionals, enthusiasts, and students in the Philippines.
              </strong>{" "}
              Our community has over 4,000 local and international members from
              a wide range of industries related to technology and even
              traditional businesses.
            </Typography>
            <Box component="div" mb={2} display="flex">
              <Box
                minHeight={48}
                minWidth={48}
                width={48}
                height={48}
                bgcolor="#ffffff"
                borderRadius={8}
                mr={3}
                mt={1}
                p={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              >
                <LazyLoadImage
                  src="../images/icons/mission.svg"
                  alt="Our mission"
                  width="100%"
                  effect="blur"
                />
              </Box>
              <Typography variant="body1" className="text-white-1">
                <strong className="text-white">Our mission</strong> is to grow
                and nurture the Filipino creative community through sharing and
                collaboration, to help uplift the lives of people and our
                society.
              </Typography>
            </Box>
            <Box component="div" mb={4} display="flex">
              <Box
                minHeight={48}
                minWidth={48}
                width={48}
                height={48}
                borderRadius={8}
                p={1}
                mr={3}
                mt={1}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              >
                <LazyLoadImage
                  src="../images/icons/eye.svg"
                  effect="blur"
                  alt="Our vision"
                  width="100%"
                />
              </Box>
              <Typography variant="body1" className="text-white-1">
                <strong className="text-white">Our vision</strong> is to have an
                empowered culture where products and services are built
                mindfully and sustainably.
              </Typography>
            </Box>
            <Box component="div">
              <Button
                variant="white"
                href="https://www.facebook.com/groups/uxphofficial"
                isExternal={true}
                className="margin-right-16"
                target="_blank"
              >
                Join our Facebook group
              </Button>
              <Button
                variant="white-alternative"
                href="https://www.facebook.com/uxphofficial"
                isExternal={true}
                target="_blank"
              >
                Visit our page
              </Button>
            </Box>
          </>
        }
        image={
          <StaticImage
            src="../images/collages/about-uxph-collage.png"
            layout="fullWidth"
            placeholder="blurred"
            outputPixelDensities={2}
            quality={100}
            className="featured-image"
            alt="Welcome to UXPH"
          />
        }
      />
      <Box component="section" py={12}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item md={5} sm={12}>
              <Box mb={2}>
                <Typography variant="h2">Organization Initiatives</Typography>
              </Box>
              <Box mb={4}>
                <Typography variant="body1">
                  Since 2012, we have been building towards a more mature,
                  collaborative, and design-driven country through hosting
                  online and offline community initiatives, conferences, and
                  programs within local design and technology communities.
                </Typography>
              </Box>
              <Button variant="container" href="/events">
                See our events
              </Button>
            </Grid>
            <Grid item md={7} sm={12}>
              <Grid container spacing={2}>
                {initiatives.map((initiative, index) => {
                  const { heading, description, icon } = initiative;

                  return (
                    <Grid item md={6} sm={12} key={index}>
                      <Box
                        width={50}
                        height={50}
                        mb={2}
                        className="bg-light-blue"
                        borderRadius="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        {icon}
                      </Box>
                      <Box mb={2}>
                        <Typography variant="h4">{heading}</Typography>
                      </Box>
                      <Typography variant="body2">{description}</Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default AboutPage;
