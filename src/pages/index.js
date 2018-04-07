import React from 'react';
import Img from "gatsby-image"
import Fade from 'react-reveal/Fade'
import Header from '../components/Header';
import '../styles/index.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerBg: this.props.data.bg.sizes,
    };
  }
  componentWillMount() {
    this.setState({ headerBg: this.props.data.bg.sizes });
  }

  render() {
    return (
      <div>
        <header className="header_bg dt w-100 vh-100 bw5 b--solid b--near-white">
          <Img className="image_bg z-0" sizes={this.state.headerBg} />
          <Header />
        </header>
      </div>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexPageQuery {
    bg: imageSharp(id: { regex: "/bg_volcano/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    } 
  }
`;
