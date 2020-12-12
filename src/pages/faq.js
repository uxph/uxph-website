import React, { useState } from "react";
import { Container, Box, Grid, Tabs, Tab } from "@material-ui/core";
import { Layout, SEO, FaqItem } from "../components/Components";
import categories from "../helpers/faq_categories";
const Faq = () => {
  const [value, setValue] = useState(0);
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
      category: 1,
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
      category: 1,
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
      category: 1,
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
      category: 1,
    },
    {
      question: "Can I just walk in or bring a +1 to a UXPH event?",
      answer: (
        <p className="text-gray margin-bottom-12">
          No, you must RSVP online to our event page for each event unless
          otherwise stated. This is often for security and venue purposes, and
          to ensure we have enough space for everyone to have a comfortable time
          at our event.
        </p>
      ),
      category: 1,
    },
    {
      question: "Do you provide certificates for attending UXPH events?",
      answer: (
        <p className="text-gray margin-bottom-12">
          UXPH does NOT provide certificates of attendance to our free community
          events as these are not considered formal training sessions. We do
          provide certificates of attendance for our conferences, however.
          Instructions are given at conference end, and only to those who have
          purchased a ticket.
        </p>
      ),
      category: 1,
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
      category: 2,
    },
    {
      question: "How can I be a part of the UXPH team?",
      answer: (
        <p className="text-gray margin-bottom-12">
          To be an organizing member or an event volunteer, please check out our
          volunteers page for specific roles the team may be looking for and
          follow the instructions for the screening process. You may also email
          &nbsp;
          <a href="mailto:community@uxph.org" className="blue link">
            community@uxph.org
          </a>{" "}
          with your details.{" "}
        </p>
      ),
      category: 2,
    },
    {
      question: "How much time do I need to commit to volunteering for UXPH?",
      answer: (
        <p className="text-gray margin-bottom-12">
          Commitment varies depending on the role/s you'd like to fulfill on the
          team. When volunteering for a community meetup, expect to spend a
          total of 5-6 hours each event. Organizer roles typically requires more
          time and presence per week as the team is very active in planning its
          initiatives.{" "}
        </p>
      ),
      category: 2,
    },
    {
      question: "When can I volunteer for UXPH?",
      answer: (
        <p className="text-gray margin-bottom-12">
          The organization is in operation all-year around, and we're always
          open to accepting new volunteers. Check out our volunteers page or get
          in touch with us at &nbsp;
          <a href="mailto:community@uxph.org" className="blue link">
            community@uxph.org
          </a>
          .{" "}
        </p>
      ),
      category: 2,
    },
    {
      question: "How can I be a speaker or workshop facilitator for UXPH?",
      answer: (
        <p className="text-gray margin-bottom-12">
          UXPH is always looking for enthusiastic people who want to share their
          knowledge with the rest of the community. Check out our volunteers
          page for more information or get in contact with us at &nbsp;
          <a href="mailto:partnerships@uxph.org" className="blue link">
            partnerships@uxph.org
          </a>
          . Let us know what you'd like to talk or host a workshop on!{" "}
        </p>
      ),
      category: 3,
    },
    {
      question: "Do I get paid to be a speaker for UXPH?",
      answer: (
        <p className="text-gray margin-bottom-12">
          No. Speaker engagements are considered volunteer work with the
          interest of contributing to the community and its cause. During
          conferences, UXPH will cover speaker meals and certain costs on behalf
          of the speaker.
        </p>
      ),
      category: 3,
    },
    {
      question: "What's the difference between a partner and sponsor of UXPH?",
      answer: (
        <>
          <p className="text-gray margin-bottom-12">
            A Community Partner of UXPH is often a student or non-profit
            organization or advocacy willing to help support UXPH and its events
            with volunteers, marketing, or other resources. We will do the same
            for your organization.{" "}
          </p>
          <p className="text-gray margin-bottom-12">
            A Sponsor of UXPH is often a company or organization who would like
            to support UXPH with monetary or other in-kind incentives in
            exchange access and exposure to the Philippine Creative Community.{" "}
          </p>
        </>
      ),
      category: 3,
    },
    {
      question: "How can I be a community partner or sponsor of UXPH?",
      answer: (
        <p className="text-gray margin-bottom-12">
          Please visit our sponsorship page on the website and get in touch at
          &nbsp;
          <a href="mailto:partnerships@uxph.org" className="blue link">
            partnerships@uxph.org
          </a>
          . We look forward to hearing from you!{" "}
        </p>
      ),
      category: 3,
    },
    {
      question: "When and where is the UXPH conference?",
      answer: (
        <p className="text-gray margin-bottom-12">
          The UXPH Conference is an annual event. Conference dates and locations
          vary. Stay tuned for the announcement this year! More details will be
          announced on the conference website.{" "}
        </p>
      ),
      category: 4,
    },
    {
      question: "How much does it cost to attend the UXPH Conference?",
      answer: (
        <p className="text-gray margin-bottom-12">
          Conference tickets vary. More details will be announced on the
          conference website.{" "}
        </p>
      ),
      category: 4,
    },
    {
      question: "Are tickets refundable or transferable?",
      answer: (
        <>
          <p className="text-gray margin-bottom-12">
            Tickets to free events can be cancelled or transferred, but we ask
            that you vacate your seat as soon as possible so another interested
            attendee can attend in your place. Attendance is recorded and
            constant no-shows will be temporarily barred from attending UXPH
            events as outlined in our Code of Conduct.{" "}
          </p>
          <p className="text-gray margin-bottom-12">
            Tickets to paid events are not refundable but are transferable.
            Transfers must be made at least 1 day before the event starts.
            Contact us with the details of the new attendee and we will
            accommodate.{" "}
          </p>
        </>
      ),
      category: 5,
    },
    {
      question: "Are purchases refundable?",
      answer: (
        <p className="text-gray margin-bottom-12">
          Refunds depend on the item purchased and its state. Please contact us
          to settle the matter at{" "}
          <a href="mailtoinfo@uxph.org" className="blue link">
            info@uxph.org
          </a>
          .{" "}
        </p>
      ),
      category: 5,
    },
    {
      question: "I'd like to report an incident.",
      answer: (
        <p className="text-gray margin-bottom-12">
          If you were part of or witnessed an incident at a UXPH event or online
          community that was in violation of our{" "}
          <a href="/code-of-conduct" className="blue link">
            Code of Conduct
          </a>{" "}
          or your own private space, please let our team members know as soon as
          possible so we may try and address the matter. Please fill out{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfuM_uB2c9oCPWBacXW4b-gYESB-qHVA9204uhh9hp7_0ESZA/viewform"
            className="blue link"
            target="blank"
          >
            this form
          </a>{" "}
          to report an incident.{" "}
        </p>
      ),
      category: 6,
    },
    {
      question: "Do you have a Code of Conduct?",
      answer: (
        <p className="text-gray margin-bottom-12">
          Please view our community Code of Conduct{" "}
          <a href="/code-of-conduct" className="blue link">
            here
          </a>
          . We follow and enforce this throughout all our events and community
          initiatives.
        </p>
      ),
      category: 7,
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
                value={value}
                orientation="vertical"
                variant="scrollable"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                indicatorColor="primary"
                indicator="primary"
                textColor="primary"
                aria-label="Categories"
              >
                {categories.map((item, index) => {
                  return (
                    <Tab
                      label={item.label}
                      key={index}
                      value={index}
                      disableFocusRipple={false}
                      style={{
                        alignItems: "self-start",
                        justifyContent: "flex-start",
                      }}
                    />
                  );
                })}
              </Tabs>
            </Grid>
            <Grid item md={9}>
              {faq_items.map((item, index) => {
                if (item.category === value || value === 0)
                  return <FaqItem faq={item} key={index} />;
                else return null;
              })}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Faq;
