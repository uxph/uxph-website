import React from "react";
import { Container, Box, Grid } from "@material-ui/core";
import {
  Layout,
  SEO,
  SponsorItem,
  PerkItem,
  FeaturedItem,
} from "../components/Components";
import { community_partners } from "../data/sponsors.json";

const Sponsorships = () => {
  const perks = [
    {
      heading: "Expand your network and reach",
      description:
        "UXPH boasts a wide reach of professional creatives, students, and companies throughout the Philippines from our events and online community.",
    },
    {
      heading: "Engage the creative community",
      description:
        "We connect you with professional designers, students, speakers, workshop facilitators, and other communities throughout the Philippines. Help us give back and establish more thought leadership within the industry.",
    },
    {
      heading: "Showcase your brand",
      description:
        "Showcase what your brand is all about from your products or services to your advocacies and company culture. Help us push for a better, more design-driven Philippines!",
    },
    {
      heading: "Hire for your team",
      description:
        "The UXPH community is the perfect place to look when it comes to hiring creative professionals for your team from students to seasoned professionals and consultants.",
    },
  ];
  const featured = [
    {
      image: "images/brand/uxph_icon.png",
      heading: "Sponsorship",
      description:
        "If you'd like to become a sponsor of UXPH to some capacity, please download our sponsorship package for more information or contact partnerships@uxph.org.",
      url: null,
    },
    {
      image: "images/brand/uxph_icon.png",
      heading: "Host your own UXPH event (Coming soon!)",
      description:
        "Have an event idea? You can host your own UXPH-sanctioned event! Download our information packet to know more about the requirements and process.",
      url: null,
    },
  ];
  return (
    <Layout>
      <SEO title="Sponsorships" />
      <Box component="section" py={12}>
        <Container maxWidth="md">
          <h2 className="font-size-32 text-dark">Partner with UXPH</h2>
        </Container>
      </Box>
      <Box component="section" py={12}>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {featured.map((feature, index) => {
              return (
                <Grid item md={6} key={index}>
                  <FeaturedItem item={feature} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <Box component="section" py={12}>
        <Container maxWidth="md">
          <h2 className="font-size-32 text-dark margin-bottom-48">
            Sponsorship Perks
          </h2>
          <Grid container spacing={4}>
            {perks.map((perk, index) => {
              return (
                <Grid item md={6} sm={12} key={index}>
                  <PerkItem perk={perk} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <Box component="section" py={12}>
        <Container maxWidth="md">
          <h2 className="font-size-32 margin-bottom-64 text-center text-dark">
            Our Community Partners
          </h2>
          <Grid container spacing={4} justify="center">
            {community_partners.map((sponsor, index) => {
              return (
                <Grid item md={3} key={index}>
                  <SponsorItem sponsor={sponsor} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Sponsorships;
