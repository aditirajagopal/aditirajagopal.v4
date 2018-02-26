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
								    <a href="https://docs.google.com/document/d/1mx5aRWc55aebCPUMr0_WPiGliJ8J5Cr3lwj2bCGdGfc/edit?usp=sharing">Resume</a>
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
		        <time className="f7 mb2 dib ttu tracked mt3 near-white"><small>Last Updated: February 2017</small></time>
		      </Fade>
		    </div>
	    </header>
			<ScrollableAnchor id={'FAQ'}>
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
						      1. <b>Designing Your Life: How to Build a Well-Lived, Joyful Life</b> <i>by Bill Burnett and Dave Evans</i>
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
			</ScrollableAnchor>
			<ScrollableAnchor id={'ChangeLog'}>
				<article className="cf ph3 ph5-ns pv5">
				  <header className="fn fl-ns w-40-ns pr4-ns">
				    <h1 className="mb3 mt0 lh-title">ChangeLog</h1>
				    <time className="f6 ttu tracked gray">All the updates, right in one place</time>
				  </header>
				  <div className="fn fl-ns w-60-ns">
				    <div className="tab">
				      <input id="tab-02" type="checkbox" name="tabs"/>
				      <label for="tab-02">October 2017 - Got my first patent granted!</label>
				      <div className="tab-content black-70">
				        <p>It's from the ICM days, but you can check it out <a href="https://patents.google.com/patent/US9794190B2">here!</a></p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-03" type="checkbox" name="tabs"/>
				      <label for="tab-03">May 2017 - Joined the Container Service UI team</label>
				      <div className="tab-content black-70">
				        <p>Working directly on the product, on the customer facing UI. Also working with IBM Design to establish design standards (carbon)</p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-04" type="checkbox" name="tabs"/>
				      <label for="tab-04">March 2017 - gave 2 talks at the last SWE Region H Conference</label>
				      <div className="tab-content black-70">
				        <p>I gave 2 talks at the final SWE Region H Conference, which was at University of Michigan. I partnered with my work-bestie Susan to give a talk on <a href="https://docs.google.com/presentation/d/1WKniu1vFCbeqqyJHAdq3HFJvrZq3U60qUM2GmPqVlLI/edit?usp=sharing">Reverse Mentoring</a>, and I gave a talk on <a href="https://docs.google.com/presentation/d/1S9ZTyTdZMROPGSYIX-ICQZ5FeXt8MeQRcVQ6PBGcmgk/edit?usp=sharing">the latest trends in cloud computing (for beginners).</a></p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-05" type="checkbox" name="tabs"/>
				      <label for="tab-05">November 2016 - Started to focus on UI for the Container Service DevOps Team</label>
				      <div className="tab-content black-70">
				        <p>With help and guidance from my team lead, I shifted my focus from operations to UI/Front-end development. Created and owned an "Ops dashboard" for the Container Service.</p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-06" type="checkbox" name="tabs"/>
				      <label for="tab-06">October 2016 - Gave 2 talks & a keynote at we16</label>
				      <div className="tab-content black-70">
				        <p>I partnered with my best friend Melanie to give a lightning talk on <a href="https://docs.google.com/presentation/d/1WKniu1vFCbeqqyJHAdq3HFJvrZq3U60qUM2GmPqVlLI/edit?usp=sharing">Shine Theory</a>, and I gave a talk on <a href="https://docs.google.com/presentation/d/1wnKOVtrMx_1hxqsMF5n6V9lBT-Kx2tD5SsnbJT57bTQ/edit?usp=sharing">contributing to Open Source projects (for beginners).</a> You can also checkout <a href="https://youtu.be/hYKU05C8uBs?t=12m8s" target="_blank">my keynote speech here</a></p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-07" type="checkbox" name="tabs"/>
				      <label for="tab-07">April 2016 - Joined the Containers 2.0 team</label>
				      <div className="tab-content black-70">
				        <p>Started to work on the IBM Container Service on the 'next generation' squad.</p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-08" type="checkbox" name="tabs"/>
				      <label for="tab-08">February 2016 - Gave my first talk at the SWE Region H Conference</label>
				      <div className="tab-content black-70">
				        <p>The room was packed, and I was really nervous. But the slides were super cute. Would consider revising and redoing this presentation.</p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-09" type="checkbox" name="tabs"/>
				      <label for="tab-09">April 2015 - Started working in Open Source communities - OpenStack & Docker</label>
				      <div className="tab-content black-70">
				        <p>Worked in the upstream community, specifically on the networking (Neutron) project. My role evolved into scoping out latest trends in container technology (Docker, Swarm, Mesos, Kubernetes)</p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-10" type="checkbox" name="tabs"/>
				      <label for="tab-10">Aug 2014 - Started working at IBM</label>
				      <div className="tab-content black-70">
				        <p>Started working as a Software Test Engineer on the "IBM Cloud Manager with OpenStack (ICM)" product.</p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-11" type="checkbox" name="tabs"/>
				      <label for="tab-11">May 2014 - SWE Overseas India</label>
				      <div className="tab-content black-70">
				        <p>Volunteered abroad for 2 weeks. We spend the previous semester planning a 1 week STEM camp for 5-8th graders in Walchandnagar, India. We also traveled around Northern India. 2nd contingency to participate.</p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-12" type="checkbox" name="tabs"/>
				      <label for="tab-12">2014 - Revamped SWE@UofM</label>
				      <div className="tab-content black-70">
				        <p>You can read more about this <GatsbyLink to="/journal/swe/">here</GatsbyLink>, but in a Nutshell: <br/>
				        1. Created and managed the section's web presence <br/>
				        2. Revamped communicationa and advertising efforts (1 & 2 led to the section winning the SWE-HQ Communications Award) <br/>
				        3. Rewrote the Strategic Plan based on industry trends, gaps in our programming, and the campus climate. <br/>
				        4. Evaluated and reorganized the leadership structure, and individual roles
				        </p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-13" type="checkbox" name="tabs"/>
				      <label for="tab-13">Summer 2013 - Interned at SAY Media</label>
				      <div className="tab-content black-70">
				        <p>Worked on the Site Experience team, mostly in front-end development. My 'capstone' project was creating a recency and relevancy search algorithm that went into all portfolio sites. I'm a little sad that these publications aren't running anymore 😕. <a href="https://www.xojane.com/beauty/news/best-xovain-articles">xovain</a> was my favorite, and I spent so much time reading their posts even after I finished the internship.
				        <br/><br/>
				        Sidebar - I've debated trying to create my own version of xovain, but I feel like I'd need to invest in 1) better makeup etc and 2) an actual camera that isn't my phone</p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-14" type="checkbox" name="tabs"/>
				      <label for="tab-14">Summer 2012 - Interned at RePunch</label>
				      <div className="tab-content black-70">
				        <p>Spent most of the summer teaching myself the basics of web development, graphic design, and mobile app development. I was one of 3 developers, and 1 of 5 overall. My skills evolved, I had the opportunity to dabble in product and marketing strategy, and I even created our investor portfolio and led our social media marketing campaigns. This was my first experience working on a remote team, and my first experience doing freelance work on the side.</p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-15" type="checkbox" name="tabs"/>
				      <label for="tab-15">Dec 2011 - Mr. Engineer 2012</label>
				      <div className="tab-content black-70">
				        <p>I spent the semester planning the <a href="https://www.youtube.com/watch?v=5S-pkPuA2VI">Mr. Engineer charity competition</a>. This included creating the promotional marketing material and campaign, re-envisioning the flow and content of the program, and coordinating participants. The event was a huge success - we sold out the auditorium, and raised over $2500 for DAPCEP</p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-16" type="checkbox" name="tabs"/>
				      <label for="tab-16">Nov 2011 - Declared Computer Engineering</label>
				      <div className="tab-content black-70">
				        <p>After discussing my options with two different advisors, I ended up declaring Computer Engineering. Looking back, it was more like Professor Brehob pushed me into Computer Engineering and sent me home.</p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-17" type="checkbox" name="tabs"/>
				      <label for="tab-17">Summer 2011 - Interned at Calsonic Kensai</label>
				      <div className="tab-content black-70">
				        <p>I worked on the Electronics team focused on electronics testing and supply chain. The 2011 Japan Tsunami created a lot of supply chain issues for subcomponents (capacitors, resistors etc), so I spent a considerable amount of time tracking missing parts, identifying alternative suppliers, and testing alternative parts in the lab.</p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-18" type="checkbox" name="tabs"/>
				      <label for="tab-18">Fall 2010 - Researcher at UofM Kellogg Eye Center</label>
				      <div className="tab-content black-70">
				        <p>Led two research studies with guidance from Dr. Shivani Gupta, oculoplastics specialist via the Undergraduate Research Opportunity Program (UROP). The studies were focused on accessing quality of life, and quality of care for patients with Graves Eye Disease and Thyroid Eye Disease. This experience was basically the nail in the coffin for my M.D. prospects.</p>
				      </div>
				    </div>
				    <div className="tab">
				      <input id="tab-19" type="checkbox" name="tabs"/>
				      <label for="tab-19">Sept 2010 - Started School at University of Michigan</label>
				      <div className="tab-content black-70">
				        <p>Started at the College of Engineering with the intent of majoring in Biomedical Engineering. Joined the <a href="http://www.swe.engin.umich.edu/">Society of Women Engineers student section</a></p>
				      </div>
				    </div>
				  </div>
				</article>
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
