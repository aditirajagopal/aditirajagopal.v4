import React from 'react';
import Header from '../components/Header';
import '../styles/index.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerBg: null,
    };
  }
  componentWillMount() {
    this.setState({ headerBg: this.props.data.imageTwo.sizes });
  }

  render() {
    return (
      <div>
        <Header headerImage={this.state.headerBg} />
      </div>
    );
  }
}

export default Index;

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
