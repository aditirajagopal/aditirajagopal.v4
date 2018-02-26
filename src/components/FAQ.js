import React from 'react';
import Link from 'gatsby-link';

export default function FAQ() {
  return (
		<article className="cf ph3 ph5-ns pv5">
		  <header className="fn fl-ns w-40-ns pr4-ns">
		    <h1 className="mb3 mt0 lh-title">FAQ</h1>
		    <time className="f6 ttu tracked gray">Somethings you should know</time>
		  </header>
		  <div className="fn fl-ns w-60-ns">
				<ul className="list pl0">
				  <li className="pa3 pa4-ns bb b--black-10">
				    <b className="db f3 mb1">In a nutshell, who are you?</b>
				    <span className="f5 db lh-copy">
				      I’m a software engineer, inventor, affinity group leader, and SWE advocate at IBM, based out of Rochester Minnesota. I’m also the FY18 Treasurer for the SWE (Society of Women Engineers) Minnesota Professional Section - the largest SWE professional section in the USA. Over the past 5 years I’ve worked primarily in web development and cloud infrastructure - it’s been exciting to see the transformations in the way we use and define technology and “the cloud,” collaborate and communicate as technical professionals, and build and ship products. I’m all about that front-end development life - I’m currently on the front-end development team for the IBM Cloud Container Service, and I enjoy exercising my design skills through my freelance work. I love that through my work (IBM, SWE, and freelance) I’m able to get a greater picture on business operations, and product management. Picking up on the similarities, subtle differences, and cross-applicable best practices is something I crave.
			      </span>
				  </li>
				  <li className="pa3 pa4-ns bb b--black-10">
				    <b className="db f3 mb1">How do I pronounce your name?</b>
				    <span className="f5 db lh-copy">
							<a href="http://www.forvo.com/word/aditi/">/ah/dhi/thi</a> <a href="http://www.pronouncenames.com/pronounce/rajagopal">/rah/jah/go/paal</a>. 
							<br/>
							My first name tends to be a bit tricky for a lot of people, so you can pronounce 'Aditi' as /ah/dee/tee if you'd like. The last name is pretty easy though. Don't stress yourself out. It's phonetic. No surprises here.
				    </span>
				  </li>
				  <li className="pa3 pa4-ns bb b--black-10">
				    <b className="db f3 mb1">
				      Are you looking for new opportunities?
				    </b>
				    <span className="f5 db lh-copy">
	        This is a big "maybe." It really depends on the position, and tbh the location. If you take a quick glance at my track record, you can see that my roles and responsibilities have evolved since I was an electronics intern at Calsonic Kensai to now, as a front-end developer at IBM. 
	        <br/><br/>
	        I have a wide array of skills, and I love to learn. Therefore, I'm looking for a career-change that would allow me to exercise more of my skillset. My professional interests include: front-end development, design, strategy, and brand management. If you can give me an opportunity to expand my horizons beyond the technical realm and into the business side of things, I'd be really interested.
				    </span>
				  </li>
				  <li className="pa3 pa4-ns bb b--black-10">
				    <b className="db f3 mb1">
				      What are you currently reading?
				    </b>
				    <span className="f5 db lh-copy">
				      1. <b>Designing Your Life: How to Build a Well-Lived, Joyful Life</b> <i>by Bill Burnett and Dave Evans</i><br/>
				      2. <b>Crushing It!: How Great Entrepreneurs Build Their Business and Influence-and How You Can, Too</b> <i>by Gary Vaynerchuk</i>
				    </span>
				  </li>
				  <li className="pa3 pa4-ns bb b--black-10">
				    <b className="db f3 mb1">
				      Are you interested in joining our DevOps team?
				    </b>
				    <span className="f5 db lh-copy">
				      plz. no. I mean, I could. I would be more than capable to. But I don't want to. Especially if that's the only thing you want me to do.
				    </span>
				  </li>
				  <li className="pa3 pa4-ns bb b--black-10">
				    <b className="db f3 mb1">
				      Where are you from?
				    </b>
				    <span className="f5 db lh-copy">
				      West Bloomfield, MI. Born and raised in southeast Michigan. I graduated from West Bloomfield High School, and more recently, from University of Michigan. 
				    </span>
				  </li>
				  <li className="pa3 pa4-ns bb b--black-10">
				    <b className="db f3 mb1">
				      Tell me about this nifty website
				    </b>
				    <span className="f5 db lh-copy">
				    	Do you like it?<br/><br/>
							Specs: <br/>
							- Languages Used: ReactJS, HTML, SCSS <br/>
							- Frameworks: GatsbyJS, Tachyons.io <br/>
							- Deployment/Ops: Netlify <br/>
							- Packages & Plugins: react-reveal, gatsby-image, gatsby-link, gatsby-plugin-netlify, gatsby-plugin-react-helmet, gatsby-plugin-sass, react-scrollable-anchor
							<br/><br/>
							No, I haven't written unit tests. But hey, I'm getting better at this!
				    </span>
				  </li>
				</ul>
		  </div>
		</article>
  );
}
