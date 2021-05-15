import React from "react";
import SEO from "../components/seo";
import { Button } from "../components/Components";
import { Box } from "@material-ui/core";
import { ArrowForwardRounded } from "@material-ui/icons";

const NotFoundPage = () => (
  <Box component="div" className="text-center">
    <SEO title="404: Page not found" />
    <h1 className="text-center font-size-64 margin-bottom-12 text-danger">
      Oops!
    </h1>
    <p className="text-center font-size-18 text-gray">
      We can't seem to find the page you're looking for.
    </p>
    <Button href="/" className="margin-x-auto">
      Back to homepage
      <ArrowForwardRounded className="margin-left-4" />
    </Button>
  </Box>
);

export default NotFoundPage;
