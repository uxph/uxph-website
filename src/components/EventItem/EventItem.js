import React from "react";
import { Box } from "@material-ui/core";
import { Button } from "../Components";
import { Link } from "gatsby";
import {
  NavigateNextRounded,
  PinDropRounded,
  EventRounded,
} from "@material-ui/icons";

const EventItem = ({ event }) => {
  const { name, time, date, venue, image_square_url } = event;
  return (
    <Link to="/">
      <Box p={1} borderRadius={8} className="event_item">
        <Box
          component="div"
          display="block"
          height={200}
          borderRadius={4}
          className="bg-light"
          overflow="hidden"
          mb={2}
        >
          <img src={image_square_url} className="featured_image" alt={name} />
        </Box>
        <Box p={1}>
          <h3 className="margin-bottom-8 font-size-18 line-height-24 event_title">
            {name}
          </h3>
          <Box component="div" mb={4} className="event_details">
            <Box
              component="p"
              display="flex"
              alignItems="center"
              className="text-gray"
            >
              <EventRounded className="mr-2" />
              <Box component="span">
                <span className="font-size-14">
                  {date} ({time})
                </span>
              </Box>
            </Box>
            <Box
              component="p"
              display="flex"
              alignItems="center"
              className="text-gray"
            >
              <PinDropRounded className="mr-2" />
              <Box component="span">
                <span className="font-size-14">{venue}</span>
              </Box>
            </Box>
          </Box>
          <Button variant="link" href={null}>
            <span className="text-uppercase">Event recap</span>
            <NavigateNextRounded />
          </Button>
        </Box>
      </Box>
    </Link>
  );
};

export default EventItem;
