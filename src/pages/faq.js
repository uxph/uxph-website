import React from "react";
import { Container, Box, Grid, Tabs, Tab } from "@material-ui/core";
import { Layout, SEO, FaqItem } from "../components/Components";
import categories from "../helpers/faq_categories";
const Faq = () => {
  const faq_items = [
    {
      question: "What are UXPH events like?",
      answer: (
        <>
          <p className="text-gray margin-bottom-12">
            UXPH organizes free monthly meetups all around Metro Manila (and
            soon outside of it). Meetups range from talks, panels, workshops, or
            social events focused on design, research, entrepreneurship, and
            project management. These events are hosted at various sponsor
            venues or held remotely online.
          </p>
          <p className="text-gray margin-bottom-12">
            Our events are casual and open to everyone anyone interested in
            learning. Come out and meet the community!
          </p>
        </>
      ),
      category: "Events & Certificates",
    },
    {
      question: "When and where do you host events?",
      answer: (
        <p className="text-gray margin-bottom-12">
          We host monthly meetups at various venues throughout Metro Manila.
          Details are announced online on our social media outlets and on our
          website a few weeks before the events take place.
        </p>
      ),
      category: "Events & Certificates",
    },
    {
      question: "Does it cost anything to attend an event?",
      answer: (
        <p className="text-gray margin-bottom-12">
          Our community events are free to attend unless otherwise stated. You
          will need to RSVP to the event online when we announce their details.
          Our conferences are paid, and by ticket purchase only.
        </p>
      ),
      category: "Events & Certificates",
    },
    {
      question: "What's included in an event?",
      answer: (
        <p className="text-gray margin-bottom-12">
          You can always expect to learn something new and network with some
          friendly faces at a UXPH event. Our events are volunteer-driven and
          sponsored by companies who want to contribute to our community. As
          such, there are often refreshments or snacks provided for attendees by
          our sponsors, but it varies per event and is limited.
        </p>
      ),
      category: "Events & Certificates",
    },
    {
      question: "Can I just walk in or bring a +1 to a UXPH event?",
      answer: (
        <p className="text-gray margin-bottom-12">
          UXPH does NOT provide certificates of attendance to our free community
          events as these are not considered formal training sessions. We do
          provide certificates of attendance for our conferences, however.
          Instructions are given at conference end, and only to those who have
          purchased a ticket.
        </p>
      ),
      category: "Events & Certificates",
    },
    {
      question: "Do you provide certificates for attending UXPH events?",
      answer: (
        <p className="text-gray margin-bottom-12">
          No, you must RSVP online to our event page for each event unless
          otherwise stated. This is often for security and venue purposes, and
          to ensure we have enough space for everyone to have a comfortable time
          at our event.
        </p>
      ),
      category: "Community and Volunteering",
    },
    {
      question: "Who can be a part of the UXPH team?",
      answer: (
        <>
          <p className="text-gray margin-bottom-12">
            UXPH is completely volunteer-driven and is open to anyone who wants
            to be involved in contributing to our community and cause. Whether
            you're a career shifter, student, professional, or enthusiast who
            wants to learn more about the world of design, you're welcome!
          </p>
          <p className="text-gray margin-bottom-12">
            The organizing team values individuals who are active, organized,
            love to challenge and grow their skillsets, and love working in
            teams. If that sounds like you, please get in touch!
          </p>
        </>
      ),
      category: "Community and Volunteering",
    },
  ];

  return (
    <Layout active="/faq">
      <SEO title="FAQ" />
      <Box component="section" py={12}>
        <Container maxWidth="md">
          <h1 className="margin-bottom-32">Frequently Asked Questions</h1>
          <Grid container spacing={4}>
            <Grid item md={3}>
              <h4>Categories</h4>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                aria-label="Categories"
              >
                {categories.map((item, index) => {
                  return (
                    <Tab
                      label={item.label}
                      key={index}
                      className="text-left w-100"
                    />
                  );
                })}
              </Tabs>
            </Grid>
            <Grid item md={9}>
              {faq_items.map((item, index) => {
                return <FaqItem faq={item} key={index} />;
              })}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Faq;
