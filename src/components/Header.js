import React from 'react';
import Fade from 'react-reveal/Fade'
import Link from 'gatsby-link';
import Img from "gatsby-image"

export default function Header(props) {
  return (
	  <header className="header_bg dt w-100 vh-100 bw5 b--solid b--near-white">
	    <Img className="image_bg z-0" sizes={props.headerImage} />
	    <div className="mt-5 dtc v-mid cover ph3 ph4-m ph5-l z-max absolute">
	      <Fade top duration={2500}>
	        <h2 className="f2 f-headline-l measure fw9">
	          <span className="bg-black-90 white pa1 tracked-tight">
	            aditi rajagopal.
	          </span>
	        </h2>
	      </Fade>
	      <Fade bottom duration={3000}>
	        <h2 className="f4 fw4 dark-gray">Life, musings & miscellaneous thoughts of a Wolverine stuck in Gopherland.</h2>
	      </Fade>

	      <Fade bottom duration={3000}>
	        <div className="mt1">
	          <a href="/about/" title="about" className="f5 dib pr2 mid-gray dim">about</a>
	          <a href="https://www.linkedin.com/in/aditirajagopal/" title="linkedin" className="f5 dib pr2 mid-gray dim">linkedin</a>
	          <a href="" title="blog" className="f5 dib pr2 mid-gray dim">portfolio</a>
	          <a href="https://twitter.com/Aditi_Rajagopal" title="twitter" className="f5 dib pr2 mid-gray dim">tweets</a>
	          <a href="/blog/" title="blog" className="f5 dib pr2 mid-gray dim">writing</a>
	        </div>
	      </Fade>

	      <Fade bottom duration={2000}>
	        <time className="f7 mb2 dib ttu tracked mt3 mid-gray"><small>Last Updated: January 2017</small></time>
	      </Fade>
	    </div>
    </header>
  );
}

