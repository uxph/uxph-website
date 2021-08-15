import React from "react";
import { Box } from "@material-ui/core";
import { Link } from "gatsby";
import { Button } from "../Components";
import dateFormat from "dateformat";
import { NavigateNextRounded } from "@material-ui/icons";

const BlogItem = ({ blog }) => {
    const { date, slug, cover, title } = blog.node.frontmatter;
    const description = blog.node.html.replace(/(<([^>]+)>)/gi, "");
    return (
        <Link to={slug}>
            <Box p={1} borderRadius={8} className="blog_item">
                <Box
                    component="div"
                    display="block"
                    height={200}
                    borderRadius={4}
                    className="bg-light"
                    overflow="hidden"
                    mb={2}
                >
                    <img src={cover} className="featured_image" alt={title} />
                </Box>
                <Box p={1}>
                    <h3 className="margin-bottom-8 font-size-18 line-height-24 blog_title">{title}</h3>
                    <p className="text-gray margin-bottom-16 blog_description font-size-14 line-height-24 two-liner">
                        {description}
                    </p>
                    <Box component="div" className="blog_author" mb={4}>
                        <img
                            src="https://miro.medium.com/max/700/0*B_owcQpugXNQbbVu"
                            alt="Pauline Baterna"
                            className="profile_photo"
                        />
                        <Box component="div">
                            <h4 className="text-primary font-size-14 font-weight-normal">Pauline Baterna</h4>
                            <small className="text-gray">{dateFormat(date, "mmm d, yyyy")}</small>
                        </Box>
                    </Box>
                    <Button variant="link" href={slug} className="blog_cta">
                        <span className="text-uppercase">Read more</span>
                        <NavigateNextRounded />
                    </Button>
                </Box>
            </Box>
        </Link>
    );
};

export default BlogItem;
