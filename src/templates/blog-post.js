import React from 'react';
import Helmet from 'react-helmet';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import ForwardIcon from 'react-icons/lib/fa/chevron-right';

import Footer from '../components/Footer';
import Link from '../components/Link';
import Tags from '../components/Tags';

import '../styles/blog-post.scss';

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;
  return (
    <article>
      <Helmet title={`${post.frontmatter.title} - aditi rajagopal`} />
      <header className="bg-gold sans-serif">
        <div className="mw9 center pa4 pt5-ns ph7-l">
          <time className="f6 mb2 dib ttu tracked"><small>{post.frontmatter.date}</small></time>
          <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <span className="bg-black-90 lh-copy white pa1 tracked-tight">
              {post.frontmatter.title}
            </span>
          </h3>
          <Tags list={post.frontmatter.tags || []} />
          <h4 className="f3 fw1 georgia i">{post.frontmatter.description}</h4>
        </div>
      </header>
      <div className="pa4 ph7-l georgia mw9-l center" dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className="blog-post-container">
        <div className="blog-post">
          <div className="navigation">
            {prev &&
              <Link className="link prev" to={prev.frontmatter.path}>
                <BackIcon /> {prev.frontmatter.title}
              </Link>}
            {next &&
              <Link className="link next" to={next.frontmatter.path}>
                {next.frontmatter.title} <ForwardIcon />
              </Link>}
          </div>
        </div>
      </div>
    <Footer />
    </article>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`;
