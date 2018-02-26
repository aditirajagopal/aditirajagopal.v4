import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import ScrollableAnchor from 'react-scrollable-anchor'

import Link from '../components/Link';
import FAQ from '../components/FAQ';
import ChangeLog from '../components/ChangeLog';

import '../styles/index.scss';

export default function About( {data} ) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
  	<div>
		  <header className="header_bg dt w-100 vh-100 bw5 b--solid b--near-white">
		    <Img className="image_bg z-0" sizes={data.iceCastle.sizes} />
		    <div className="w-100 vh-80 tc mt-5 dtc v-mid cover ph3 ph4-m ph5-l z-max absolute">
						<div className="tc">
						  <Img className="br-100 h45 w45 dib ba b--black-05 pa2" sizes={data.iceQueen.sizes} alt="avatar"/>
						</div>
		      <Fade top duration={2500}>
		        <h2 className="f1 measure fw9">
		          <span className="bg-black-90 white pa1 tracked-tight">
		            aditi rajagopal.
		          </span>
		        </h2>
		      </Fade>
		      <Fade top duration={3000}>
		        <h2 className="f4 fw1 near-white">Software Engineer - Inventor - Artist</h2>
		      </Fade>
		      <Fade bottom duration={2000}>
			      <div className="dt-ns dt--fixed-ns">
						  <div className="dtc-ns tc pv2 ph2 bg-black-10 mt1">
						    <h2 className="f4 fw1 near-white">About</h2>
		              <div className="f5 dg pr2">
								    <a href="#FAQ" className="white-50 dim">FAQ</a>
								    <a href="#ChangeLog" className="white-50 dim">ChangeLog</a>
					          <a href="https://www.linkedin.com/in/aditirajagopal/" title="linkedin" className="white-50 dim">linkedin</a>
					          <a href="https://twitter.com/Aditi_Rajagopal" title="twitter" className="white-50 dim">tweets</a>
							    </div>
						  </div>
						  <div className="dtc-ns tc pv2 ph2 bg-black-05">
						    <h2 className="f4 fw1 near-white">Projects</h2>
		              <div className="f5 dg pr2">
			                <GatsbyLink to="/journal/swe/" className="white-50 dim">
			                  Society of Women Engineers
			                </GatsbyLink>
			                <GatsbyLink to="/journal/stacy4wbsd/" className="white-50 dim">
			                  Stacy for WBSD
			                </GatsbyLink>
			                <GatsbyLink to="/journal/tangles/" className="white-50 dim">
			                  Tangles Hair Studio
			                </GatsbyLink>
			                <GatsbyLink to="/portfolio/" className="white-50 dim">
			                  Portfolio
			                </GatsbyLink>						    
							    </div>
						  </div>
						  <div className="dtc-ns tc pv2 ph2 bg-black-10">
						    <h2 className="f4 fw1 near-white">Writing</h2>
						      {posts
						        .filter(post => post.node.frontmatter.title.length > 0)
						        .map(({ node: post }) => {
						          return (
					              <div className="f5 db pr2">
					                <GatsbyLink to={post.frontmatter.path} className="white-50 dim">
					                  {post.frontmatter.title}
					                </GatsbyLink>
					              </div>
						          );
						        })}
			              <div className="f5 db pr2">
			                <GatsbyLink to="/blog/" className="white-50 dim">
			                  ...more
			                </GatsbyLink>
			              </div>
						  </div>
						</div>
					</Fade>
		      <Fade bottom duration={4000}>
		        <time className="f7 mb2 dib ttu tracked mt3 near-white"><small>Last Updated: February 2018</small></time>
		      </Fade>
		    </div>
	    </header>
			<ScrollableAnchor id={'FAQ'}>
				<FAQ/>
			</ScrollableAnchor>
			<ScrollableAnchor id={'ChangeLog'}>
				<ChangeLog/>
			</ScrollableAnchor>
		</div>
	);
}

export const aboutQuery = graphql`
  query AboutPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 3) {
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
    iceCastle: imageSharp(id: { regex: "/icecastle/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    iceQueen: imageSharp(id: { regex: "/icequeen/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    } 
  }
`;
