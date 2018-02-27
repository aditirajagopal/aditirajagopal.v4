import React from 'react';
import PropTypes from "prop-types"
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import Img from 'gatsby-image'

import Header from '../components/Header';
import ProfileBar from '../components/ProfileBar';
import Link from '../components/Link';

import '../styles/index.scss';


class Index extends React.Component {
  constructor() {
      super()
      this.state = {
        headerBg: null,
      }
    }
  componentWillMount() {
    this.setState({ headerBg: this.props.data.imageTwo.sizes })
  }

  render() {
    console.log(this.state.headerBg)
    return(
      <div>
        <Header headerImage={this.state.headerBg} />
      </div>    
  )}

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
