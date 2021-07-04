import React from "react";
import { Layout, SEO, Button, Header } from "../components/Components";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import { NavigateNextRounded, CheckRounded } from "@material-ui/icons";
import { useMediaQuery } from "react-responsive";
// import { StaticImage } from "gatsby-plugin-image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

import community_partners from "../data/sponsors/community_partners.json";

const volunteer_perks = [
  "Access to the largest network of UX designers in the Philippines",
  "Ongoing mentorship and learning",
  "Community events and avenues to learn more skills",
  "Career opportunities",
];

const other_blogs = [
  {
    title:
      "A Designer’s Diary of UXPH Conference 2020: Reflections on Navigating Change",
    url: "/blog",
    img: "/",
  },
  {
    title: "A Designer’s Diary of UXPH Conference 2020: Day 2",
    url: "/blog",
    img: "/",
  },
];

const IndexPage = () => {
  const isMaxWidth600 = useMediaQuery({
    query: "(max-width: 599px)",
  });

  return (
    <Layout active="/">
      <SEO title="Home" />
      <Header
        content={
          <>
            <h1 className="text-white header-title">UX Philippines</h1>
            <p className="text-white-1 margin-bottom-32">
              <strong className="text-white">
                Welcome to the Philippines' largest community of individuals
                passionate about the realm of UX (User Experience), and all
                things related.
              </strong>{" "}
              Our community has over 4,000 local and international members from
              a wide range of industries related to technology and even
              traditional businesses.
            </p>
            <Box component="div">
              <Button variant="white" href="/about" className="margin-right-16">
                Learn more
              </Button>
              <Button
                variant="white-alternative"
                href="https://www.facebook.com/groups/uxphofficial"
                isExternal={true}
                target="_blank"
              >
                Join our Facebook group
              </Button>
            </Box>
          </>
        }
        image={
          <LazyLoadImage
            src="../images/collages/homepage-collage.png"
            width="100%"
            alt="Welcome to UXPH"
            effect="opacity"
            className="featured-image"
          />
        }
      />
      {/* <StaticImage
        src="../images/collages/homepage-collage.png"
        layout="fullWidth"
        placeholder="blurred"
        outputPixelDensities={2}
        quality={100}
        className="featured-image"
        alt="Welcome to UXPH"
      /> */}
      <Box component="section" py={14}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={6}
            alignItems="center"
            direction={isMaxWidth600 ? "column-reverse" : "row"}
          >
            <Grid item md={6} sm={6}>
              <Typography variant="h2" className="margin-bottom-24">
                Be a part of the organizing team
              </Typography>
              <Typography variant="body1">
                UXPH is always looking for passionate and enthusiastic
                individuals who want to be a part of the growing Filipino design
                community! Whether you're a professional, student, or simply a
                design enthusiast, we're happy to have you join us!
              </Typography>
              <ul className="margin-y-24 p-0">
                {volunteer_perks.map((perk, index) => {
                  return (
                    <li
                      className="list-style-none margin-bottom-12"
                      key={index}
                    >
                      <div className="d-flex align-items-center">
                        <Box
                          component="div"
                          width={24}
                          height={24}
                          mr={2}
                          borderRadius="100%"
                          className="bg-light-green"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <CheckRounded className="text-success font-size-18" />
                        </Box>
                        <Typography variant="body1">{perk}</Typography>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <Button variant="contained" href="/volunteers">
                See volunteer opportunities
              </Button>
            </Grid>
            <Grid item md={6} sm={6}>
              {/* <StaticImage
                src="../images/collages/team-section-collage.png"
                layout="fullWidth"
                placeholder="blurred"
                outputPixelDensities={2}
                quality={100}
                alt="Be part of the organizing team"
                className="featured-image-right"
              /> */}
              <LazyLoadImage
                src="../images/collages/team-section-collage.png"
                width="100%"
                alt="Be part of the organizing team"
                effect="opacity"
                className="featured-image-right"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="section" py={14}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item md={6} sm={6}>
              {/* <StaticImage
                src="../images/collages/sponsors-section-collage.png"
                layout="fullWidth"
                placeholder="blurred"
                outputPixelDensities={2}
                quality={100}
                alt="Be a community partner"
                className="featured-image-left"
              /> */}
              <LazyLoadImage
                src="../images/collages/sponsors-section-collage.png"
                width="100%"
                alt="Be a community partner"
                effect="opacity"
                className="featured-image-left"
              />
            </Grid>
            <Grid item md={6} sm={6}>
              <Typography variant="h2" className="margin-bottom-16">
                Be a community partner
              </Typography>
              <Typography
                variant="body1"
                className="margin-bottom-16 text-dark-gray"
              >
                UXPH is committed to collaborating with like-minded non-profit
                or commercial companies and organizations. We're always
                interested in partnership opportunities whether it is for new
                projects, speaking engagements, workshops, or sponsorships.
                Learn more about what we can do together to support our causes!
              </Typography>

              <Box component="div" my={4} display="flex">
                {community_partners.map((sponsor, index) => {
                  const { isFeatured, image_url, name } = sponsor;
                  return isFeatured ? (
                    <Box
                      component="div"
                      width={64}
                      height={64}
                      p={0.5}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius={8}
                      key={index}
                      className="shadow"
                      mr={2}
                    >
                      <LazyLoadImage
                        src={image_url}
                        width="100%"
                        alt={name}
                        effect="blur"
                      />
                    </Box>
                  ) : null;
                })}
              </Box>
              <Button variant="contained" href="/sponsorships">
                Learn more
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="section" py={12} className="bg-light-1">
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item md={5} sm={12}>
              <Box
                component="small"
                fontSize={16}
                display="block"
                className="text-uppercase text-primary"
                mb={2}
              >
                Featured Blog
              </Box>
              <h2 className="margin-bottom-24">
                A Designer’s Diary of UXPH Conference 2020: Reflections on
                Navigating Change
              </h2>
              <p className="margin-bottom-24 four-liner">
                UXPH is committed to collaborating with like-minded non-profit
                or commercial companies and organizations. We're always
                interested in partnership opportunities whether it is for new
                projects, speaking engagements, workshops, or sponsorships.
                Learn more about what we can do together to support our causes!
              </p>
              <Button variant="outlined" href="/sponsorships">
                Learn more
              </Button>
            </Grid>
            <Grid item md={7} sm={12}>
              <Grid container spacing={2}>
                {other_blogs.map((blog, index) => {
                  const { title, url } = blog;
                  return (
                    <Grid item md={6} sm={12} key={index}>
                      <Box
                        component="div"
                        p={1}
                        borderRadius={8}
                        className="bg-white featured_blog_subitem"
                      >
                        <Box
                          component="div"
                          height={200}
                          borderRadius={4}
                          className="bg-light"
                          mb={2}
                        ></Box>
                        <Box p={1}>
                          <h3 className="margin-bottom-16 font-size-16 line-height-24 blog_title">
                            {title}
                          </h3>
                          <Button variant="link" href={url}>
                            <span className="text-uppercase">Learn more</span>
                            <NavigateNextRounded />
                          </Button>
                        </Box>
                      </Box>
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

export default IndexPage;
