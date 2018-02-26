import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../styles/main.scss';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';

    return (
      <div>
        <Helmet
          title="Aditi Rajagopal  - Website/Portfolio/Blog"
          meta={[
            { name: 'description', content: 'Life, musings & miscellaneous thoughts of a Wolverine stuck in Gopherland' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <article className="helvetica">
          {this.props.children()}
        </article>
      </div>
    );
  }
}
