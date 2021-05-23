import React from "react";
import { Layout, SEO, BlogItem } from "../components/Components";
import { Box, Container, Grid } from "@material-ui/core";
import blogs from "../data/blogs";

const blogPage = () => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <Box component="section" py={12} className="bg-light-1">
        <Container maxWidth="lg">
          <h2 className="margin-bottom-24 font-size-32">Blog</h2>
          <Grid container spacing={3}>
            {blogs.map((blog, index) => {
              return index !== 0 ? (
                <Grid item md={4} key={index}>
                  <BlogItem blog={blog} />
                </Grid>
              ) : null;
            })}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default blogPage;
