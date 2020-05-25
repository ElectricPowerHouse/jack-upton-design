import React, {Component} from 'react';
import './strengths-section.css';
import Fade from 'react-reveal/Fade';

class StrengthsSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  render() {

    return (<div className='Strengths-Section'>
      {this.renderHeader()}
      <div className='Strengths-Section-Body'>
        <div className='Strengths-Section-Body2'>
          {this.renderStrengths()}
          {this.renderSkills()}
        </div>
      </div>
    </div>);
  }

  renderStrengths() {
    return (<Fade duration={2500}>
      <div className='Strengths'>
        <div className='Strengths-Top'>
          <div className='Strengths-Top-Dot'/>
          <div className='Strengths-Top-Text'>
            Strengths:
          </div>
        </div>
        <div className='Strengths-Bottom'>
          <div className='Strengths-Strengths-Section'>
            <div className='Strengths-Section-Symbol-Wrapper'>
              <div className='Strengths-Section-Symbol-VisualDesign'/>
            </div>
            <div className='Strengths-Section-Text'>
              Visual Design
            </div>
          </div>
          <div className='Strengths-Strengths-Section'>
            <div className='Strengths-Section-Symbol-Wrapper'>
              <div className='Strengths-Section-Symbol-FrontEnd'/>
            </div>
            <div className='Strengths-Section-Text'>
              Front-End Integration
            </div>
          </div>
          <div className='Strengths-Strengths-Section'>
            <div className='Strengths-Section-Symbol-Wrapper'>
              <div className='Strengths-Section-Symbol-Communication'/>
            </div>
            <div className='Strengths-Section-Text'>
              Communication
            </div>
          </div>
        </div>
      </div>
    </Fade>);
  }

  renderSkills() {

    return (<Fade duration={2500}>
      <div className='Skills'>
        <div className='Skills-Left'>
          <div className='Skills-Header-Wrapper'>
            <div className='Skills-Top-Dot'/>
            <div className='Skills-Top-Text'>
              Skills:
            </div>
          </div>
        </div>
        <div className='Skills-Right'>
          <div className='Skills-Right-Row'>
            <div className='Strengths-Skills-Section'>
              <div className='Skills-Section-Symbol-Wrapper'>
                <div className='Skills-Section-Symbol-React'/>
              </div>
              <div className='Skills-Section-Text'>
                React
              </div>
            </div>
            <div className='Strengths-Skills-Section'>
              <div className='Skills-Section-Symbol-Wrapper'>
                <div className='Skills-Section-Symbol-Photoshop'/>
              </div>
              <div className='Skills-Section-Text'>
                Photoshop
              </div>
            </div>
            <div className='Strengths-Skills-Section'>
              <div className='Skills-Section-Symbol-Wrapper'>
                <div className='Skills-Section-Symbol-Javascript'/>
              </div>
              <div className='Skills-Section-Text'>
                JavaScript
              </div>
            </div>
            <div className='Strengths-Skills-Section'>
              <div className='Skills-Section-Symbol-Wrapper'>
                <div className='Skills-Section-Symbol-Java'/>
              </div>
              <div className='Skills-Section-Text'>
                Java
              </div>
            </div>

          </div>

          <div className='Skills-Right-Row'>
            <div className='Strengths-Skills-Section'>
              <div className='Skills-Section-Symbol-Wrapper'>
                <div className='Skills-Section-Symbol-Git'/>
              </div>
              <div className='Skills-Section-Text'>
                Git
              </div>
            </div>
            <div className='Strengths-Skills-Section'>
              <div className='Skills-Section-Symbol-Wrapper'>
                <div className='Skills-Section-Symbol-Node'/>
              </div>
              <div className='Skills-Section-Text'>
                <span>
                  &nbsp; &nbsp;
                </span>
                Node
                <span>
                  &nbsp; &nbsp;
                </span>
              </div>
            </div>
            <div className='Strengths-Skills-Section'>
              <div className='Skills-Section-Symbol-Wrapper'>
                <div className='Skills-Section-Symbol-Html'/>
              </div>
              <div className='Skills-Section-Text'>
                <span>
                  &nbsp; &nbsp;
                </span>
                HTML
                <span>
                  &nbsp; &nbsp;
                </span>
              </div>
            </div>
            <div className='Strengths-Skills-Section'>
              <div className='Skills-Section-Symbol-Wrapper'>
                <div className='Skills-Section-Symbol-Css'/>
              </div>
              <div className='Skills-Section-Text'>
                CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>);

  }

  renderHeader() {
    return (<div className='Strengths-Section-Header-Container'>
      <div className='Strengths-Section-Header'>
        <div className='Strengths-Section-Header-Text'>
          Skills & Strengths
        </div>
        <div className='Strengths-Section-Header-Symbol'/>
      </div>
    </div>);
  }

}

export default StrengthsSection;
