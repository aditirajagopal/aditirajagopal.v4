import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import Link from '../components/Link';
import Header from '../components/Header';

import '../styles/index.scss';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <article>
      <header className="bg-gold sans-serif">
        <div className="mw9 center pa4 pt5-ns ph7-l">
          <time className="f6 mb2 dib ttu tracked"><small>Lists, plot twists, and sometimes interesting thoughts</small></time>
          <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
            <span className="bg-black-90 lh-copy white pa1 tracked-tight">
              Blog
            </span>
          </h3>
          <h4 className="f3 fw1 georgia i">Do people still call these blogs?</h4>
          <h5 className="f6 ttu tracked black-80">By Aditi Rajagopal</h5>
        </div>
      </header>
      <div className="pa4 ph7-l georgia mw9-l center">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <article class="center mw5 mw6-ns hidden ba mv4">
              <h1 class="f4 bg-near-black white mv0 pv2 ph3">
                <GatsbyLink to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </GatsbyLink>
              </h1>
              <div class="pa3 bt">
                <h2 className="date">
                  {post.frontmatter.date}
                </h2>
                <p class="f6 f5-ns lh-copy measure mv0">
                    {post.excerpt}
                  <Link to={post.frontmatter.path}>Read more</Link>
                </p>
              </div>
            </article>
          );
        })}
      </div>
    <Footer/>

    </article>
  );
}

export const pageQuery = graphql`
  query BlogQuery {
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
  }
`;
