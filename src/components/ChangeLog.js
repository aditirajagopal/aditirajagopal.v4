import React from 'react';
import Fade from 'react-reveal/Fade'
import GatsbyLink from 'gatsby-link';
import Img from "gatsby-image"

export default function ChangeLog() {
  return (
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
  );
}
