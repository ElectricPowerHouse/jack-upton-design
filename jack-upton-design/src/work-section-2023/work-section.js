import React, {Component} from 'react';
import './work-section.css';
import Fade from 'react-reveal/Fade';

class WorkSection extends Component {

  render() {
    return (<div className='Work-Section'>
      {this.renderHeader()}
      <div className='Work-Section-Body'>
        <div className="Work-Section-Body2">
          {this.renderWorkExample()}
          {this.renderWorkExample()}

        </div>

      </div>
    </div>);
  }

  renderWorkExample() {
    return (<div className="Work-Example">
      <div className="Work-Title">
        Waste Management
      </div>
      <div className="Work-Link">
        <a href="https://www.wastemanagement.co.nz" className="Work-Link-Text" target="_blank" rel="noopener noreferrer">wastemanagement.co.nz</a>
      </div>
      <div className="Work-Text-Paragraph">
        <span className="Work-Text-Title">Background:</span>
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
      {/*<div className="Photo-Wrapper">
        <div className="Work-Photo"/>
      </div>
      <div className="Work-Photo2"/>*/
      }
      <div className="Photo-Wrapper">
        <img className="Work-Photob" src={require("./../images/wm2.jpeg")} width="100%" height="auto"/>
      </div>
      <img className="Work-Photob" src={require("./../images/wm1.jpg")} width="100%" height="auto"/>
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
