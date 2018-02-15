import React from 'react';
import Fade from 'react-reveal/Fade'
import Link from 'gatsby-link';
import Img from "gatsby-image"

export default function Footer(props) {
  return (
		<footer className="pa4 pa5-l black-70 bt b--black-10">
		  <div className="dt dt--fixed w-100" >
		    <div className="dn dtc-ns v-mid">
		    	<a href="/" title="home" className="f7 dib pr2 mid-gray dim">
			      Aditi Rajagopal - Last Update: Feb 2018
		      </a>
		    </div>
		    <div className="db dtc-ns black-70 tc tr-ns v-mid">
			    <div className="mt1">
			      <a href="https://www.linkedin.com/in/aditirajagopal/" title="linkedin" className="f7 dib pr2 mid-gray dim">linkedin</a>
			      <a href="" title="blog" className="f7 dib pr2 mid-gray dim">portfolio</a>
			      <a href="https://twitter.com/Aditi_Rajagopal" title="twitter" className="f7 dib pr2 mid-gray dim">tweets</a>
			      <a href="/blog/" title="blog" className="f7 dib pr2 mid-gray dim">writing</a>
			    </div>
		    </div>
		  </div>
		</footer>  
	);
}

