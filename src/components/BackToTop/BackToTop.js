import React, { useEffect, useState } from "react";
import styles from "./BackToTop.module.scss";
import { Box } from "@material-ui/core";
import classNames from "classnames";
import $ from "jquery";

const BackToTop = ({ showAt = 700, speed = 400 }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        const pageOffset = window.pageYOffset;

        // back-to-top show toggle
        if (pageOffset > showAt) {
          setShowBackToTop(true);
        } else {
          setShowBackToTop(false);
        }
      },
      300
    ); //ms

    $("#back-to-top").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, speed);
    });

    // eslint-disable-next-line
  }, []);
  return (
    <Box
      id="back-to-top"
      className={classNames(styles["back_to_top"], {
        [`${styles["hide"]}`]: !showBackToTop,
      })}
      borderRadius="50%"
    >
      <i className={`fas fa-arrow-up ${styles["arrow_icon"]}`}></i>
    </Box>
  );
};

export default BackToTop;
