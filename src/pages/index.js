import React from "react";
import { Layout, SEO, Button, Card, Header } from "../components/Components";
import { Container, Box, Grid } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

const volunteer_perks = [
  "Access to the largest network of UX designers in the Philippines",
  "Ongoing mentorship and learning",
  "Community events and avenues to learn more skills",
  "Career opportunities",
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
      <Header>
        <h1 className="text-white text-center mb-3">UX Philippines</h1>
        <h3 className="font-weight-normal text-white text-center">
          Welcome to the Philippines' largest community of individuals
          passionate about the realm of UX (User Experience), and all things
          related.
        </h3>
      </Header>
      <Box component="section" py={12}>
        <Container maxWidth="md">
          <h2 className="margin-bottom-24 font-size-32">About UXPH</h2>
          <p className="margin-bottom-24">
            UXPH (User Experience Philippines) is a Filipino non-profit
            organization that hosts the largest network of design professionals,
            enthusiasts, and students in the Philippines. Since 2012, we have
            been building towards a more mature, collaborative, and
            design-driven country through hosting online and offline community
            initiatives, conferences, and programs within local design and
            technology communities.
          </p>
          <p className="margin-bottom-24">
            UXPH has become the country’s hub for sharing information,
            resources, and building networks in the design community. As of
            2020, the UXPH community has over 4,000 local and international
            members from a wide range of industries related to technology and
            even traditional businesses.
          </p>
          <Button variant="contained" href="/about">
            Learn more
          </Button>
        </Container>
      </Box>
      <Box component="section" py={12} className="bg-light-1">
        <Container maxWidth="md">
          <Grid container spacing={4} alignItems="center">
            <Grid item md={5} sm={6}>
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
            <Grid item md={7} sm={6}>
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
                      <Box
                        component="div"
                        className="d-flex align-items-center"
                      >
                        <CheckCircle className="text-success margin-right-16 font-size-16" />
                        <p
                          style={{
                            lineHeight: "1.5rem",
                          }}
                        >
                          {perk}
                        </p>
                      </Box>
                    </li>
                  );
                })}
              </ul>
              <Button variant="contained" href="/volunteers">
                See volunteer opportunities
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="section" py={12}>
        <Container maxWidth="md">
          <Grid
            container
            spacing={4}
            alignItems="center"
            direction={isMaxWidth600 ? "column-reverse" : "row"}
          >
            <Grid item md={7} sm={6}>
              <h2 className="margin-bottom-16">Be a community partner</h2>
              <p className="margin-bottom-16">
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
            <Grid item md={5} sm={6}>
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
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default IndexPage;
