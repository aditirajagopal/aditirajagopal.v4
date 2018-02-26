import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import Img from 'gatsby-image'

import Header from '../components/Header';
import ProfileBar from '../components/ProfileBar';
import Link from '../components/Link';

import '../styles/index.scss';

export default function Index({ data }) {
  return (
    <div>
      <Header headerImage={data.imageTwo.sizes} />
    </div>
  );
}

export const pageQuery = graphql`
  query IndexPageQuery {
    imageOne: imageSharp(id: { regex: "/profile/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    imageTwo: imageSharp(id: { regex: "/bg_volcano/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    } 
  }
`;
