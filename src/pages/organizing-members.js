import React from "react";
import { Layout, SEO, TeamItem } from "../components/Components";
import { Container, Box, Grid } from "@material-ui/core";
import {
  committee_leads,
  coordinators,
  board_members,
} from "../data/team.json";

const TeamPage = () => {
  return (
    <Layout active="/organizing-members">
      <SEO title="organizing-members" />

      <Box component="section" py={12}>
        <h2 className="font-size-32 margin-bottom-64 text-center text-dark">
          Organizing Members
        </h2>

        <Container maxWidth="md">
          <h2 className="font-size-30 margin-bottom-32 margin-top-64 text-center text-dark">
            Team Leads
          </h2>
          <Grid container spacing={4} justify="center">
            {committee_leads.map((team, index) => {
              return (
                <Grid item md={4} sm={12} key={index}>
                  <TeamItem team={team} />
                </Grid>
              );
            })}
          </Grid>
          <h2 className="font-size-30 margin-bottom-32 margin-top-64 text-center text-dark">
            Core Team
          </h2>
          <Grid container spacing={4} justify="center">
            {coordinators.map((team, index) => {
              return (
                <Grid item md={4} sm={12} key={index}>
                  <TeamItem team={team} />
                </Grid>
              );
            })}
          </Grid>
          <h2 className="font-size-30 margin-bottom-32 margin-top-64 text-center text-dark">
            Advisory Board
          </h2>
          <Grid container spacing={4} justify="center">
            {board_members.map((team, index) => {
              return (
                <Grid item md={4} sm={12} key={index}>
                  <TeamItem team={team} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default TeamPage;
