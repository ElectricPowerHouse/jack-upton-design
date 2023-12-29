import React, {Component} from 'react';
import './work-section.css';
import Fade from 'react-reveal/Fade';

class WorkSection extends Component {

  render() {
    return (<div className='Work-Section'>
      {this.renderHeader()}
      <div className='Work-Section-Body' style={{
          background: "#ebebea",
          marginTop: "-25px"
        }}>
          <div className='Work-Section-Body'>
           <div className="Work-Section-Body2">
          <Fade duration={2500}>
            {this.renderBigFiveExample()}
          </Fade>
        </div>
        </div>
        <div className='Work-Section-Body' style={{
          background: "#ebebea"
        }}>
        <div className="Work-Section-Body2" >
          <Fade duration={2500}>
            {this.renderWMExample()}
          </Fade>
        </div>
      </div>
      </div>
      <div className='Work-Section-Body'>
        <div className="Work-Section-Body2">
          <Fade duration={2500}>
            {this.renderNECExample()}
          </Fade>
        </div>

      </div>
      <div className='Work-Section-Body' style={{
          background: "#ebebea"
        }}>
        <div className="Work-Section-Body2">
          <Fade duration={2500}>
            {this.renderCenareoExample()}
          </Fade>
        </div>
      </div>

      <div className='Work-Section-Body'>
        <div className="Work-Section-Body2">
          <Fade duration={2500}>
            {this.renderElucimedExample()}
          </Fade>
        </div>
      </div>
    </div>);
  }


  renderBigFiveExample() {
    return (<div className="Work-Example">
      <div className="Work-Title WM-Title">
        The Big Five
      </div>
      <div className="Work-Link">
        <a href="https://thebigfive.app" className="Work-Link-Text" target="_blank" rel="noopener noreferrer">thebigfive.app</a>
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Background:
        </span>
        &nbsp; I became interested in the “Big 5” method of assessing personality. This method is well-known in academia but not very well-known outside of it. There are some online websites where you can take a test to assess your personality using this metric, but often they are not very easy-to-use or accessible. I wanted to make a site that was fun and easily understandable for a general audience. My goal is to make the Big 5 metric more well-known to everyone, as I found it helped a lot in my life for my understanding of myself and how I relate to others. 
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Problem:</span>
        &nbsp;  I had to be very self-driven and learn a lot of new concepts to create the site. I read academic texts to better understand the Big 5 metric, and how to deploy online tests & assess users accurately. I also had to further my knowledge of website development to get everything on the site to work properly. 

      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Solution:</span>
        &nbsp; I released a version 1.0 of the site in December 2022. The site works & I have received good feedback from users who have done the test and got their results. I aim to make incremental improvements in the future, including a paid version of the test with more extensive results. 

      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Role:</span>
        &nbsp;  I worked on all aspects of the site from beginning to end. I created design prototypes, did the UI design, coded the site from scratch in React, & wrote all of the results text myself. 

      </div>

      <div className="Photo-Wrapper">
        <img className="Work-Photo" src={require("./../images/Big5preview.png")} width="100%" height="auto"/>
      </div>
      <div className="Photo-Wrapper">
        <img className="Work-Photo" src={require("./../images/Big5screen.png")} width="100%" height="auto"/>
      </div>
    </div>);
  }


  renderWMExample() {
    return (<div className="Work-Example">
      <div className="Work-Title WM-Title">
        Waste Management
      </div>
      <div className="Work-Link">
        <a href="https://www.wastemanagement.co.nz" className="Work-Link-Text" target="_blank" rel="noopener noreferrer">wastemanagement.co.nz</a>
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Background:
        </span>
        &nbsp; Waste Management is New Zealand's largest Waste Management provider.
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Problem:</span>
        &nbsp; I joined Waste Management when they were creating a new and improved website to improve their brand image and create additional sales. A focus for the new site was to enable customers to place an order for a new bin and to make sure that process was as streamlined as possible.

      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Solution:</span>
        &nbsp; Integrating the “order a bin” path primarily throughout the site. Particular focus was paid to making sure that this UX path was understandable and easy to access.
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Role:</span>
        &nbsp; I was working with an external team of designers and developers, helping with all aspects of the design of the website, including creating UI, thinking through UX, and leading usability tests.
      </div>

      <div className="Photo-Wrapper">
        <img className="Work-Photo" src={require("./../images/wm2.jpeg")} width="100%" height="auto"/>
      </div>
      <div className="Photo-Wrapper">
        <img className="Work-Photo" src={require("./../images/wm1.jpg")} width="100%" height="auto"/>
      </div>
    </div>);
  }

  renderNECExample() {
    return (<div className="Work-Example">
      <div className="Work-Title">
        Nelson English Centre
      </div>
      <div className="Work-Link">
        <a href="https://www.english-school.ac.nz" className="Work-Link-Text" target="_blank" rel="noopener noreferrer">english-school.ac.nz</a>
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Background:
        </span>
        &nbsp; Nelson English Centre is an english school located in Nelson who help students learn and have a great time during their stay in NZ.
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Problem:</span>
        &nbsp; Nelson English Centre created a new website in 2019, but it hadn’t been updated since then. They needed a designer to help them update their site to make sure the design and content of the site was fresh and relevant. They also needed re-designs of some of their existing outdated marketing material.
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Solution:</span>
        &nbsp; I worked closely with NEC, initially spending time with them to understand the business, seeing where there were places that needed improvement, and where I could help out the most. I took them through the full design process, from initial comprehension of the problem to be solved, to UX wireframes, and then to implementation.
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Role:</span>
        &nbsp; I designed the Marketing materials myself in figma, and designed and coded all the changes I made on their site.
      </div>

      <div className="Photo-Wrapper">
        <img className="Work-Photo" src={require("./../images/NECflyers.png")} width="100%" height="auto"/>
      </div>
      <div className="Photo-Wrapper">
        <img className="Work-Photo" src={require("./../images/NECmobile.png")} width="100%" height="auto"/>
      </div>
    </div>);
  }

  renderCenareoExample() {
    return (<div className="Work-Example">
      <div className="Work-Title">
        Cenareo
      </div>
      <div className="Work-Link">
        <a href="https://cenareo.com/" className="Work-Link-Text" target="_blank" rel="noopener noreferrer">cenareo.com</a>
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Background:
        </span>
        &nbsp; Cenareo is a Digital Signage company in Toulouse, France, that helps companies manage large amounts of screens in one place with their software.
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Problem:</span>
        &nbsp; Cenareo uses a web-application to help their clients manage their screens. However, the application was created over years by only developers and could be obtuse to use as a result. They wanted to hire a Designer to begin the process of improving the interface using design principles.
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Solution:</span>
        &nbsp; I worked with the managers and developers to start to integrate some design thinking into the application whenever we needed a UI change. I also created a Design System for them in figma.</div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Role:</span>
        &nbsp; I was the first & sole designer in the company, and as a result spent a lot of time advocating for design principles in the application. I created UX prototypes, UI, and also integrated my designs using code.

      </div>

      <div className="Photo-Wrapper">
        <img className="Work-Photo" src={require("./../images/cenareoDesktop.png")} width="100%" height="auto"/>
      </div>
      <div className="Photo-Wrapper">
        <img className="Work-Photo" src={require("./../images/cenareoDesignSystem.png")} width="100%" height="auto"/>
      </div>
    </div>);
  }
  renderElucimedExample() {
    return (<div className="Work-Example">
      <div className="Work-Title">
        Elucimed
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Background:
        </span>
        &nbsp; Elucimed is a startup that aims to bring cutting-edge tech solutions to clinical hospital environments.
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Problem:</span>
        &nbsp; Nurses in the ICU were recording patient’s vital signs using paper charts. Elucimed wanted to digitize this work to help nurses and doctor’s workloads, run better analysis on the data, and digitize vitals so that analysis could be run on them to provide improved feedback.

      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Solution:</span>
        &nbsp; I worked with Doctors and Nurses to create the application, tailoring it to their needs. Having buy-in for the app from the hospital staff was important, so we wanted to work with them every step of the way.
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Role:</span>
        &nbsp; I was the sole designer and developer in the startup, and so worked on every aspect of the application, from user research, to creating UX wireframes, UI, and developing the front-end of the application myself using React.js</div>

      <div className="Photo-Wrapper">
        <img className="Work-Photo" src={require("./../images/ensemble-c1.png")} width="100%" height="auto"/>
      </div>
      <div className="Photo-Wrapper" style={{
          paddingBottom: "50px"
        }}>
        <img className="Work-Photo" src={require("./../images/ensemble-c3.png")} width="100%" height="auto"/>
      </div>
    </div>);
  }

  renderHeader() {
    return (<div className='Work-Section-Header-Container'>
      <div className='Work-Section-Header'>
        <div className='Work-Section-Header-Text'>
          My Work
        </div>
        <div className='Work-Section-Header-Symbol'/>
      </div>
    </div>);
  }

}

export default WorkSection;
