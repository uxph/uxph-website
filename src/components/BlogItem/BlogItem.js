import React from "react";
import { Box, Grid } from "@material-ui/core";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

const BlogItem = (blog) => {
  const isMaxWidth785 = useMediaQuery({ query: "(max-width: 784px)" });
  const isMaxWidth600 = useMediaQuery({ query: "(max-width: 599px)" });
  return (
    <Box component="div" p={2} className="blog_item">
      <Grid container spacing={isMaxWidth600 ? 2 : 4} alignItems="center">
        <Grid item md={5} sm={isMaxWidth785 ? 6 : 5}>
          <img
            src="https://miro.medium.com/max/700/0*B_owcQpugXNQbbVu"
            alt="Ready, Set, Research! 3 Things You Need to Know as a Fresh UX
            Researcher"
            className={classNames("featured_image", {
              mobile: isMaxWidth600,
            })}
          />
        </Grid>
        <Grid item md={7} sm={6}>
          <h3 className="margin-bottom-16 text-dark">
            Ready, Set, Research! 3 Things You Need to Know as a Fresh UX
            Researcher
          </h3>
          {!isMaxWidth600 && (
            <p className="text-gray margin-bottom-16 blog_description">
              As a Filipino student taking my first steps into the field of UX
              Research, figuring out where to start has always been the most
              difficult part. However, thanks to UXR Conference...
            </p>
          )}

          <Box component="div" className="blog_author">
            <img
              src="https://miro.medium.com/max/700/0*B_owcQpugXNQbbVu"
              alt="Pauline Baterna"
              className="profile_photo"
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
