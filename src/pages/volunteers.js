import React from "react";
import {
  Layout,
  SEO,
  Button,
  Header,
  PerkItem,
} from "../components/Components";
import { Container, Box, Grid } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";

const Volunteer = () => {
  const perks = [
    {
      heading:
        "Access to the largest network of UX designers in the Philippines",
      description:
        "Just by joining UXPH you already gain access to an invaluable community of designers to connect, share, and collaborate with.",
    },
    {
      heading: "Community events and avenues to learn more skills",
      description:
        "To be a community organizer, you'll need to practice a few disciplines outside of UX design. There's no better way to learn by doing!",
    },
    {
      heading: "Ongoing mentorship and learning",
      description:
        "UXPH works with some of the country's most experienced designers. As a way to give back to the community, they offer ongoing mentorship for those seeking to learn and improve their craft.",
    },
    {
      heading: "Career opportunities",
      description:
        "UXPH works with forward-thinking companies who values design and collaboration. Being a part of UXPH puts you at the forefront for job openings and internships.",
    },
  ];
  return (
    <Layout>
      <SEO title="Volunteers" />
      <Header
        content={
          <>
            <h1 className="text-white header-title">Volunteer with us!</h1>
            <p className="text-white">
              UXPH is always looking for passionate and enthusiastic individuals
              who want to be a part of the growing Filipino design community!
              Whether you're a professional, student, or simply a design
              enthusiast, we're happy to have you join us!
            </p>
            <br />
            <p className="text-white margin-bottom-32">
              If you’d like to join our team and get involved in the community,
              please fill out our form and we’ll get back to you as soon as we
              can.
            </p>
            <Button
              variant="white"
              href="https://docs.google.com/forms/d/e/1FAIpQLSebupcyPib0ZjVih7kYqXWDyiTB0Q6Vv3R3hHaySNpWwGzUcQ/viewform"
            >
              Sign up to volunteer
            </Button>
          </>
        }
        image={
          <StaticImage
            src="../images/collages/volunteers-collage.png"
            layout="fullWidth"
            placeholder="blurred"
            outputPixelDensities={2}
            quality={100}
            className="featured-image"
            alt="Volunteer with us!"
          />
        }
      />
      <Box component="section" py={12} className="bg-light-1">
        <Container>
          <Grid container spacing={4}>
            {perks.map((perk, index) => {
              return (
                <Grid item md={6} sm={12}>
                  <PerkItem perk={perk} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Volunteer;
