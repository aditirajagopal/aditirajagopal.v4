import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import Link from '../components/Link';
import Header from '../components/Header';

import '../styles/index.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
    <h1>Blog Posts</h1>
    <p> it's ugly. i know</p>
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
    <Footer/>
    </div>
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
