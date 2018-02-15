import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import Img from 'gatsby-image'

import Header from '../components/Header';
import ProfileBar from '../components/ProfileBar';
import Link from '../components/Link';

import '../styles/index.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <Header headerImage={data.imageTwo.sizes} />
    </div>
  );
}

export const pageQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
    imageOne: imageSharp(id: { regex: "/profile.jpg/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    imageTwo: imageSharp(id: { regex: "/bg_volcano.jpg/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    } 
  }
`;
