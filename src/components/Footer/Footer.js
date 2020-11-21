import React from "react";
import styles from "./Footer.module.scss";
import { Container, Grid, Box } from "@material-ui/core";
import { SocialMediaItem } from "../Components";
import social_media from "../../data/social_media.json";
import classNames from "classnames";

const Footer = () => {
  return (
    <Box component="footer" py={12} id={styles["footer"]}>
      <Container maxWidth="md">
        <Grid container spacing={5}>
          <Grid item md={3} sm={5} xs={12}>
            <img
              src="/images/brand/uxph_logo.svg"
              alt="UXPH logo"
              className="margin-bottom-24"
              style={{
                width: "10rem",
              }}
            />
            <p className="text-white">&copy; Copyright 2020</p>
            <a href="/code-of-conduct">View Code of Conduct</a>
            <Box mt={2}>
              <a
                href="https://www.netlify.com/"
                className={classNames(
                  "text-gray font-size-12",
                  styles["netlify_link"]
                )}
                target="blank"
              >
                This site is powered by Netlify
              </a>
            </Box>
          </Grid>
          <Grid item md={9} sm={7} xs={12}>
            <h2 className="text-white margin-bottom-32">Connect with us</h2>

            <Grid container>
              {social_media.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <SocialMediaItem socialMedia={item} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
