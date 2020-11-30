import React from "react";
import { Box, Grid } from "@material-ui/core";
import styles from "./BlogItem.module.scss";
import classNames from "classnames";

const BlogItem = (blog) => {
  return (
    <Box component="div" p={2} className={styles["blog_item"]}>
      <Grid container spacing={4} alignItems="center">
        <Grid item md={5}>
          <img
            src="https://miro.medium.com/max/700/0*B_owcQpugXNQbbVu"
            alt="Ready, Set, Research! 3 Things You Need to Know as a Fresh UX
            Researcher"
            className={styles["featured_image"]}
          />
        </Grid>
        <Grid item md={7}>
          <h3 className="margin-bottom-16 text-dark">
            Ready, Set, Research! 3 Things You Need to Know as a Fresh UX
            Researcher
          </h3>
          <p
            className={classNames(
              "text-gray margin-bottom-16",
              styles["blog_description"]
            )}
          >
            As a Filipino student taking my first steps into the field of UX
            Research, figuring out where to start has always been the most
            difficult part. However, thanks to UXR Conference...
          </p>
          <Box component="div" className={styles["blog_author"]}>
            <img
              src="https://miro.medium.com/max/700/0*B_owcQpugXNQbbVu"
              alt="Pauline Baterna"
              className={styles["profile_photo"]}
            />
            <Box component="div">
              <h4 className="text-dark font-weight-medium">Pauline Baterna</h4>
              <small className="text-gray">July 15, 2020</small>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogItem;
