import React, {Component} from 'react';
import './strengths-section-mobile.css';
import Fade from 'react-reveal/Fade';

class StrengthsSectionMobile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  render() {

    return (<div className='Strengths-Section-Mobile'>
      {this.renderHeader()}
      <div className='Strengths-Section-Mobile-Body'>
        {this.renderStrengths()}
        {this.renderSkills()}
      </div>
    </div>);
  }

  renderStrengths() {
    return (<Fade duration={2500}>
      <div className='Strengths-Mobile'>
        <div className='Strengths-Mobile-Top'>
          <div className='Strengths-Mobile-Top-Dot'/>
          <div className='Strengths-Mobile-Top-Text'>
            Strengths:
          </div>
        </div>
        <div className='Strengths-Mobile-Bottom'>
          <div className='Strengths-Mobile-Strengths-Section'>
            <div className='Strengths-Section-Mobile-Symbol-Wrapper'>
              <div className='Strengths-Section-Mobile-Symbol-VisualDesign'/>
            </div>
            <div className='Strengths-Section-Mobile-Text'>
              Visual Design
            </div>
          </div>
          <div className='Strengths-Mobile-Strengths-Section'>
            <div className='Strengths-Section-Mobile-Symbol-Wrapper'>
              <div className='Strengths-Section-Mobile-Symbol-FrontEnd'/>
            </div>
            <div className='Strengths-Section-Mobile-Text'>
              Front-End Integration
            </div>
          </div>
          <div className='Strengths-Mobile-Strengths-Section'>
            <div className='Strengths-Section-Mobile-Symbol-Wrapper'>
              <div className='Strengths-Section-Mobile-Symbol-Communication'/>
            </div>
            <div className='Strengths-Section-Mobile-Text'>
              Communication
            </div>
          </div>
        </div>
      </div>
    </Fade>);
  }

  renderSkills() {

    return (<Fade duration={2500}>
      <div className='Skills-Mobile'>
        <div className='Skills-Mobile-Top'>
            <div className='Skills-Mobile-Top-Dot'/>
            <div className='Skills-Mobile-Top-Text'>
              Skills:
          </div>
        </div>
        <div className='Skills-Mobile-Bottom'>
          <div className='Skills-Mobile-Right-Row'>
            <div className='Strengths-Mobile-Strengths-Section'>
              <div className='Skills-Section-Mobile-Symbol-Wrapper'>
                <div className='Skills-Section-Mobile-Symbol-React'/>
              </div>
              <div className='Skills-Section-Mobile-Text'>
                React
              </div>
            </div>
            <div className='Strengths-Mobile-Strengths-Section'>
              <div className='Skills-Section-Mobile-Symbol-Wrapper'>
                <div className='Skills-Section-Mobile-Symbol-Photoshop'/>
              </div>
              <div className='Skills-Section-Mobile-Text'>
                Photoshop
              </div>
            </div>
            <div className='Strengths-Mobile-Strengths-Section'>
              <div className='Skills-Section-Mobile-Symbol-Wrapper'>
                <div className='Skills-Section-Mobile-Symbol-Javascript'/>
              </div>
              <div className='Skills-Section-Mobile-Text'>
                Javascript
              </div>
            </div>
            <div className='Strengths-Mobile-Strengths-Section'>
              <div className='Skills-Section-Mobile-Symbol-Wrapper'>
                <div className='Skills-Section-Mobile-Symbol-Java'/>
              </div>
              <div className='Skills-Section-Mobile-Text'>
                Java
              </div>
            </div>
          </div>

          <div className='Skills-Mobile-Right-Row'>
            <div className='Strengths-Mobile-Strengths-Section'>
              <div className='Skills-Section-Mobile-Symbol-Wrapper'>
                <div className='Skills-Section-Mobile-Symbol-Git'/>
              </div>
              <div className='Skills-Section-Mobile-Text'>
                Git
              </div>
            </div>
            <div className='Strengths-Mobile-Strengths-Section'>
              <div className='Skills-Section-Mobile-Symbol-Wrapper'>
                <div className='Skills-Section-Mobile-Symbol-Node'/>
              </div>
              <div className='Skills-Section-Mobile-Text'>
                <span> &nbsp;  </span> Node <span>  &nbsp; </span>
              </div>
            </div>
            <div className='Strengths-Mobile-Strengths-Section'>
              <div className='Skills-Section-Mobile-Symbol-Wrapper'>
                <div className='Skills-Section-Mobile-Symbol-Html'/>
              </div>
              <div className='Skills-Section-Mobile-Text'>
              <span> &nbsp;  </span>  HTML <span>  &nbsp; </span>
              </div>
            </div>
            <div className='Strengths-Mobile-Strengths-Section'>
              <div className='Skills-Section-Mobile-Symbol-Wrapper'>
                <div className='Skills-Section-Mobile-Symbol-Css'/>
              </div>
              <div className='Skills-Section-Mobile-Text'>
                CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>);

  }

  renderHeader() {
    return (<div className='Strengths-Section-Mobile-Header'>
      <div className='Strengths-Section-Mobile-Header-Text'>
        Skills & Strengths
      </div>
      <div className='Strengths-Section-Mobile-Header-Symbol'/>
    </div>);
  }

}

export default StrengthsSectionMobile;
