import React from "react";
import { Layout, SEO, Button, Header } from "../components/Components";
import { Container, Box, Grid } from "@material-ui/core";
import { CheckCircle, NavigateNextRounded } from "@material-ui/icons";
import { useMediaQuery } from "react-responsive";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";

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

  const isMaxWidth425 = useMediaQuery({
    query: "(max-width: 424px)",
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
          <StaticImage
            src="../images/collages/homepage-collage.png"
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
          <Grid container spacing={0} justify="flex-end">
            <Grid item md={6}>
              <h2 className="margin-bottom-24">About UXPH</h2>
              <p className="margin-bottom-24">
                UXPH (User Experience Philippines) is a Filipino non-profit
                organization that hosts the largest network of design
                professionals, enthusiasts, and students in the Philippines.
                Since 2012, we have been building towards a more mature,
                collaborative, and design-driven country through hosting online
                and offline community initiatives, conferences, and programs
                within local design and technology communities.
              </p>
              <Button variant="contained" href="/about">
                Learn more
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="section" py={12} className="bg-light-1">
        <Container maxWidth="lg">
          <Grid
            container
            spacing={6}
            alignItems="center"
            direction={isMaxWidth600 ? "column-reverse" : "row"}
          >
            <Grid item md={6} sm={6}>
              <h2 className="margin-bottom-16">
                Be a part of the organizing team
              </h2>
              <p>
                UXPH is always looking for passionate and enthusiastic
                individuals who want to be a part of the growing Filipino design
                community! Whether you're a professional, student, or simply a
                design enthusiast, we're happy to have you join us!
              </p>
              <ul className="margin-y-24 p-0">
                {volunteer_perks.map((perk, index) => {
                  return (
                    <li
                      className="list-style-none margin-bottom-12"
                      key={index}
                    >
                      <div className="d-flex align-items-center">
                        <CheckCircle className="text-success margin-right-16 font-size-18" />
                        <p
                          style={{
                            lineHeight: "1.5rem",
                          }}
                        >
                          {perk}
                        </p>
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
              <img
                src="https://www.uxph.org/assets/images/organizing-team-circle.png"
                alt="Organizing team"
                className={classNames(
                  "mx-auto d-block",
                  {
                    "w-100": !isMaxWidth600,
                  },
                  {
                    "w-75": isMaxWidth600 && !isMaxWidth425,
                  },
                  {
                    "w-100": isMaxWidth600 && isMaxWidth425,
                  }
                )}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="section" py={12}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item md={6} sm={6}>
              <img
                src="https://www.uxph.org/assets/images/community-circle.png"
                alt="Community partners"
                className={classNames(
                  "mx-auto d-block",
                  {
                    "w-100": !isMaxWidth600,
                  },
                  {
                    "w-75": isMaxWidth600 && !isMaxWidth425,
                  },
                  {
                    "w-100": isMaxWidth600 && isMaxWidth425,
                  }
                )}
              />
            </Grid>
            <Grid item md={6} sm={6}>
              <h2 className="margin-bottom-16">Be a community partner</h2>
              <p className="margin-bottom-16 text-dark-gray">
                UXPH is committed to collaborating with like-minded non-profit
                or commercial companies and organizations. We're always
                interested in partnership opportunities whether it is for new
                projects, speaking engagements, workshops, or sponsorships.
                Learn more about what we can do together to support our causes!
              </p>
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
                Read more
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
                            <span className="text-uppercase">Read more</span>
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
