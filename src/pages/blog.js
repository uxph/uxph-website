import React from "react";
import { Layout, SEO, BlogItem } from "../components/Components";

import { Box, Container } from "@material-ui/core";
import events from "../data/blogs";

const blogPage = () => {
    return (
        <Layout>
            <SEO title="Blogs" />
            <Box component="section" py={12}>
                <Container maxWidth="md">
                    <h2 className="margin-bottom-24 font-size-32">Blog</h2>
                    {events.map((item, index) => {
                        if (index !== 0) return <BlogItem blog={item} key={index} />;
                        else return null;
                    })}
                </Container>
            </Box>
        </Layout>
    );
};

export default blogPage;
