import React from "react";
import { Box, Grid } from "@material-ui/core";
import styles from "./BlogItem.module.scss";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

const BlogItem = ({ blog }) => {
    const isMaxWidth785 = useMediaQuery({ query: "(max-width: 784px)" });
    const isMaxWidth600 = useMediaQuery({ query: "(max-width: 599px)" });

    if (!blog) {
        blog = {
            name: "Ready, Set, Research! 3 Things You Need to Know as a Fresh UX Researcher",
            date: "July 15, 2020",
            description:
                "This will be my first time attending a UX+ Conference. I'm excited to learn from everyone's journey and their topics!",
            image_square_url: "https://miro.medium.com/max/700/0*B_owcQpugXNQbbVu",
            image_banner_url: "https://miro.medium.com/max/700/0*B_owcQpugXNQbbVu",
            become_speaker_url: "#",
            blog_url: "/blog/attending-asias-largest-ux-event-as-a-scholar",
            livestream_url: "#",
            blog_id: 7,
            tag: "UX+ Conference",
        };
    }

    return (
        <Box component="div" p={2} className={styles["blog_item"]}>
            <Grid container spacing={isMaxWidth600 ? 2 : 4} alignItems="center">
                <Grid item md={5} sm={isMaxWidth785 ? 6 : 5}>
                    <img
                        src={blog.image_square_url}
                        alt={blog.name}
                        className={classNames(styles["featured_image"], {
                            [`${styles["mobile"]}`]: isMaxWidth600,
                        })}
                    />
                </Grid>
                <Grid item md={7} sm={6}>
                    <h3 className="margin-bottom-16 text-dark">{blog.name}</h3>
                    {!isMaxWidth600 && (
                        <p className={classNames("text-gray margin-bottom-16", styles["blog_description"])}>
                            {blog.description}
                        </p>
                    )}

                    <Box component="div" className={styles["blog_author"]}>
                        <img src={blog.image_square_url} alt="Pauline Baterna" className={styles["profile_photo"]} />
                        <Box component="div">
                            <h4 className="text-dark font-weight-medium">Pauline Baterna</h4>
                            <small className="text-gray">{blog.date}</small>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BlogItem;
