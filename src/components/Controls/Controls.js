import React from "react";
import { Box } from "@material-ui/core";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import classNames from "classnames";

const Controls = ({ current = 0, setCurrent = () => {}, min = 0, max = 5 }) => {
  return (
    <Box component="div" display="inline-block">
      <Box
        component="button"
        className={classNames("margin-right-4 control", {
          disabled: min === current,
        })}
        onClick={() => {
          if (current > min) {
            setCurrent(current - 1);
          }
        }}
      >
        <ArrowBack className="arrow" />
      </Box>
      <Box
        component="button"
        className={classNames("margin-left-4 control", {
          disabled: max === current,
        })}
        onClick={() => {
          if (current < max) {
            setCurrent(current + 1);
          }
        }}
      >
        <ArrowForward className="arrow" />
      </Box>
    </Box>
  );
};

export default Controls;
