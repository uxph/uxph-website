import React from "react";
import { Grid, Card, Box } from "@material-ui/core";

const EventItem = ({ event }) => {
  const { name, time, date, venue, image_square_url } = event;
  return (
    <Card className="margin-bottom-32">
      <Grid container className="margin-y-16 margin-x-16" spacing={3}>
        <Grid item md={4}>
          <Box
            component="div"
            style={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "3px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={image_square_url}
              style={{
                height: "160px",
                borderRadius: "3px",
              }}
              alt={name}
            />
          </Box>
        </Grid>
        <Grid item md={8}>
          <h3 className="margin-bottom-16">{name}</h3>
          <p className="margin-bottom-4">{date}</p>
          <p className="margin-bottom-4">{time}</p>
          <p className="margin-bottom-4">{venue}</p>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EventItem;
