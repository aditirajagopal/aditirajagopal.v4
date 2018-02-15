import React from 'react';
import GatsbyLink from 'gatsby-link';

import '../styles/link.scss';

export default function Link({ children, className, to }) {
  return (
    <GatsbyLink className={[`link`].concat(className || []).join(' ')} to={to}>
      {children}
    </GatsbyLink>
  );
}
