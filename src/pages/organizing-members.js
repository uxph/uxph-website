import React, { useState } from "react";
import _ from "lodash";
import { Layout, SEO, TeamItem } from "../components/Components";
import { Container, Box, Grid, Dialog, DialogContent } from "@material-ui/core";
import { LinkedIn, Twitter } from "@material-ui/icons";
import team_leads from "../data/team/team_leads.json";
import board_members from "../data/team/board_members.json";

const TeamPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [teamInfo, setTeamInfo] = useState({});
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Layout active="/organizing-members">
      <SEO title="organizing-members" />
      <Dialog
        open={modalOpen}
        onClose={toggleModal}
        maxWidth="md"
        // style={{ maxWidth: "1024px", width: "100%", margin: "auto" }}
      >
        <DialogContent className="position-relative padding-x-32">
          <Box
            component="div"
            position="absolute"
            left={0}
            top={0}
            bgcolor="#E0E8F1"
            height="100%"
            width={114}
            zIndex={100}
          ></Box>
          <Box position="relative" zIndex={110}>
            <Box display="flex">
              <Box mr={6}>
                <Box
                  component="img"
                  src={_.get(teamInfo, "image_url", "")}
                  borderRadius="100%"
                  width={160}
                  height={160}
                  border="5px solid white"
                />
              </Box>
              <Box py={3}>
                <Box mb={4}>
                  <h3>{_.get(teamInfo, "name", "")}</h3>
                  <p className="text-primary">{_.get(teamInfo, "role", "")}</p>
                </Box>
                <Box>
                  <Box component="h4" mb={2}>
                    Bio
                  </Box>
                  {_.get(teamInfo, "description", []).map((desc, index) => {
                    return (
                      <Box component="p" mb={3} key={index}>
                        {desc}
                      </Box>
                    );
                  })}
                  <Box display="flex">
                    {_.get(teamInfo, "socials", []).map((social, index) => {
                      const { icon = null, url = "" } = social;
                      return (
                        <Box
                          component="a"
                          display="block"
                          href={url}
                          target="_blank"
                          key={index}
                          mr={2}
                        >
                          {icon === "linkedin" ? (
                            <LinkedIn />
                          ) : icon === "twitter" ? (
                            <Twitter />
                          ) : null}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
      <Box component="section" py={12}>
        <h2 className="font-size-32 margin-bottom-64 text-center text-dark">
          Organizing Members
        </h2>

        <Container maxWidth="md">
          <h2 className="font-size-30 margin-bottom-32 margin-top-64 text-center text-dark">
            Team Leads
          </h2>
          <Grid container spacing={4} justify="center">
            {team_leads.map((team, index) => {
              return (
                <Grid item md={4} sm={12} key={index}>
                  <Box
                    onClick={() => {
                      setTeamInfo(team);
                      toggleModal();
                    }}
                  >
                    <TeamItem team={team} toggleModal={toggleModal} />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <h2 className="font-size-30 margin-bottom-32 margin-top-64 text-center text-dark">
            Core Team
          </h2>
          {/* Core team components */}
          <h2 className="font-size-30 margin-bottom-32 margin-top-64 text-center text-dark">
            Advisory Board
          </h2>
          <Grid container spacing={4} justify="center">
            {board_members.map((board, index) => {
              return (
                <Grid item md={4} sm={12} key={index}>
                  <Box
                    onClick={() => {
                      setTeamInfo(board);
                      toggleModal();
                    }}
                  >
                    <TeamItem team={board} toggleModal={toggleModal} />
                  </Box>
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
