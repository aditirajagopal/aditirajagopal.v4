import React from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'gatsby-link'
import Img from "gatsby-image"

var noBottomBorder = {
  borderTop: 'none',
  borderBottom: 'none',
}

export default function ProfileBar(props) {
  return (
	<article className="cf ph3 ph5-ns pv5 bw5 b--solid b--near-white" style={noBottomBorder}>
		<Fade left>
	  <div className="fl w-100 w-50-ns tc pr5">
  	    <Img className="br-100 ba" sizes={props.profileImage} alt="HOLO It's Me"/>
	  </div>
	  </Fade>
	  <div className="fl w-100 w-50-ns tc pl5">
	  <Fade right cascade>
	      <h1 className="mb3 mt5 lh-title">who dis?</h1>
	      <p className="lh-copy mt4 mt0-ns">

	        Aditi Rajagopal is a Software Engineer, Inventor, Affinity Group Leader, and SWE Advocate at IBM. 
	        She earned her BSE in Computer Engineering and a Certificate in Entrepreneurship from University of Michigan in 2014. 
	        She is the FY18 Treasurer for the SWE-Minnesota section (the largest professional section in the country), and alumni of the SWE-UofM student section.
	        During her time at IBM, she has worked on Cloud Management Software, contributed to 2 Open Source projects, has filed 6 patents, and has 1 patent issued by the USPTO. 
	        Aditi s currently a Software Engineer for the IBM Container Service focused on Front-End Development and UI/UX - her primary expertise is in ReactJS and Ops.
	        She is also a freelance artist, avid twitter user.

	      </p>
	    </Fade>
	  </div>
	</article>




)}
