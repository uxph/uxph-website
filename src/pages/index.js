import React from "react";
import { Layout, SEO } from "../components/Components";
import { mobilePhoneSize } from "../helpers/responsive";
import { useMediaQuery } from "react-responsive";

const IndexPage = () => {
  const isMobilePhone = useMediaQuery({ query: mobilePhoneSize });
  if (isMobilePhone) {
    return <h2>Mobile phone</h2>;
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello World!</h1>
      <i class="fab fa-facebook-square"></i>
      <p>
        UXPH (User Experience Philippines) is a Filipino non-profit organization
        that hosts the largest network of design professionals, enthusiasts, and
        students in the Philippines. Since 2012, we have been building towards a
        more mature, collaborative, and design-driven country through hosting
        online and offline community initiatives, conferences, and programs
        within local design and technology communities. UXPH has become the
        country’s hub for sharing information, resources, and building networks
        in the design community. As of 2020, the UXPH community has over 4,000
        local and international members from a wide range of industries related
        to technology and even traditional businesses.
      </p>
    </Layout>
  );
};

export default IndexPage;
