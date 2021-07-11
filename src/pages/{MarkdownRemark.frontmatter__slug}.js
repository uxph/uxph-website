import React from "react";
import { graphql } from "gatsby";
import { Layout, Button } from "../components/Components";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const isBlog = frontmatter.type === "blog";
  return (
    <Layout active="/">
      <div className="blog-post-container margin-x-96 margin-y-64">
        <div className="blog-flex-container">
          {isBlog ? (<div className="author-container">
            <div className="author-card margin-top-128">
              <div className="author-info">
                <div className="author-avatar"></div>
                <div className="author-names">
                  <h5>Bae Suzy</h5>
                  <p>@baesuzy</p>
                </div>
              </div>
              <div className="author-membership margin-top-4">
                <p className="margin-bottom-4">Web Pillar Member</p>
                <Button className="override-button-12">View Member</Button>
              </div>
            </div>
          </div>
) : (null)}
          <div className="blog-post">
            <h1 className="center">{frontmatter.title}</h1>
            <p className="margin-bottom-32">{frontmatter.date} • 3 min read</p>
            
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>

      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        slug
        title
        type
      }
    }
  }
`;
