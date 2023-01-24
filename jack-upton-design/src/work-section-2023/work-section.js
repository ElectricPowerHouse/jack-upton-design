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
        <div className="Work-Section-Body2">
          {this.renderWMExample()}
        </div>
      </div>
      <div className='Work-Section-Body'>
        <div className="Work-Section-Body2">

          {this.renderNECExample()}
        </div>

      </div>
      <div className='Work-Section-Body' style={{
          background: "#ebebea"
        }}>
        <div className="Work-Section-Body2">
          {this.renderCenareoExample()}
        </div>
      </div>

      <div className='Work-Section-Body'>
        <div className="Work-Section-Body2">
          {this.renderElucimedExample()}
        </div>
      </div>
    </div>);
  }
  renderWMExample() {
    return (<div className="Work-Example">
      <div className="Work-Title">
        Waste Management
      </div>
      <div className="Work-Link">
        <a href="https://www.wastemanagement.co.nz" className="Work-Link-Text" target="_blank" rel="noopener noreferrer">wastemanagement.co.nz</a>
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Background:
        </span>
        Waste Management is New Zealand's largest Waste Management provider.
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Problem:</span>
        Waste Management were creating a new and improved website to improve their brand image and create additional sales. A focus for the new site was to enable customers to place an order for a new bin and to make sure that process was as streamlined as possible.
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Solution:</span>
        Integrating the “order a bin” path primarily throughout the site. Particular focus was paid to making sure that this UX path was understandable and easy to access.
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Role:</span>
        I was working with an external team of Designers and Developers, helping with all aspects of the design of the website, including creating UI, thinking through UX, and leading usability tests.
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
        is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Problem:</span>
        is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months</div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Solution:</span>
        is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months</div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Role:</span>
        is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months</div>

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
        is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Problem:</span>
        is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months</div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Solution:</span>
        is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months</div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Role:</span>
        is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months</div>

      <div className="Photo-Wrapper">
        <img className="Work-Photo" src={require("./../images/cenareoDesignSystem.png")} width="100%" height="auto"/>
      </div>
      <div className="Photo-Wrapper">
        <img className="Work-Photo" src={require("./../images/cenareoDesktop.png")} width="100%" height="auto"/>
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
        is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Problem:</span>
        is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months</div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Solution:</span>
        is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months</div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Role:</span>
        is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months</div>

      <div className="Photo-Wrapper">
        <img className="Work-Photo" src={require("./../images/ensemble-c1.png")} width="100%" height="auto"/>
      </div>
      <div className="Photo-Wrapper">
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
