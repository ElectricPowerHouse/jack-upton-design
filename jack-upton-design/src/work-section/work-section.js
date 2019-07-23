import React, {Component} from 'react';
import './work-section.css';


class WorkSection extends Component{

    constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  render(){

    return (
      <div className = 'Work-Section' > {/*//needs to be the wrong way round so the header sits on the div*/}
         <div className = 'Work-Section-Body'>
            <div className = 'Work-Section-Top'>
              <div className = 'Work-Section-Title'>
              1. Ensemble-C
              </div>
              <div className = 'Work-Section-Subtitle'>
              [Elucimed]
              </div>
            </div>
            <div className = 'Work-Section-Images'>
              <div className = 'Work-Section-Images-Left'>
                <div className = 'Work-Section-Image1' />
              </div>
              <div className = 'Work-Section-Images-Right'>
                <div className = 'Work-Section-Image2' />
                <div className = 'Work-Section-Image3' />
              </div>
            </div>
            <div className = 'Work-Section-Description'>
            Ensemble-C is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months during my time employed at Elucimed. I designed and coded the front-end in React myself, frequently talking to medical professionals to get feedback and discuss their needs. This project was full of interesting challenges, often to do with how to present
            complex data in a user-friendly, and modern looking way.
            </div>

            <div className = 'Work-Section-Arrows'>
              <div className = 'Work-Section-Arrow-Left' > . previous projects </div>
              <div className = 'Work-Section-Arrow-Right' > next projects .</div>
            </div>

         </div>
         {this.renderHeader()}
       </div>

    );
  }


  renderHeader(){
    return(
      <div className = 'Work-Section-Header'>
        <div className = 'Work-Section-Header-Text'> My Work </div>
        <div className = 'Work-Section-Header-Symbol' />
       </div>
    );
  }



}

export default WorkSection;
