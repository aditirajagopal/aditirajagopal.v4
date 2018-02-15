import React from 'react';
import Link from 'gatsby-link';

import '../styles/main.scss';

export default function Tags({ list = [] }) {
  return (
    <ul className="list tl pl0 w-100 mt5">
      {list.map(tag =>
        <li key={tag} className="dib">
          <Link to={`/tags/${tag}`} className="f6 dib pr2 mid-gray dim">
            {tag}
          </Link>
        </li>
      )}
    </ul>
  );
}
