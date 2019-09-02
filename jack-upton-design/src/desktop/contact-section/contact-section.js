import React, {Component} from 'react';
import './contact-section.css';
import Fade from 'react-reveal/Fade';

class ContactSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  render() {
    return (<div className='Contact-Section'>
      {this.renderHeader()}
      <div className='Contact-Section-Wrapper'>
        <div className='Contact-Section-Left'>
          <div className='Contact-Section-Line'/>
        </div>
        <div className='Contact-Section-Right'>
          <Fade duration={2500}>
            <div className='Contact-Section-Body'>
              <div className='Contact-Section-Row'>
                <a className='Contact-Section-Row-Wrapper' target="_blank" rel="noopener noreferrer" a="a" href='mailto: jackupton2255@gmail.com'>
                  <div className='Contact-Row-Left'>
                    <div className='Contact-Symbol-Email'/>
                  </div>
                  <div className='Contact-Row-Right'>
                    <div className='Contact-Row-Title'>
                      Gmail
                    </div>
                    <div className='Contact-Row-Link'>
                      jackupton2255@gmail.com
                    </div>
                  </div>
                </a>
              </div>
              <div className='Contact-Section-Row'>
                <a div="div" className='Contact-Section-Row-Wrapper' target="_blank" rel="noopener noreferrer" a="a" href="https://github.com/ElectricPowerHouse">
                  <div className='Contact-Row-Left'>
                    <div className='Contact-Symbol-Github'/>
                  </div>
                  <div className='Contact-Row-Right'>
                    <div className='Contact-Row-Title'>
                      Github
                    </div>
                    <div className='Contact-Row-Link'>
                      https://github.com/ElectricPowerHouse
                    </div>
                  </div>
                </a>
              </div>
              <div className='Contact-Section-Row'>
                <a className='Contact-Section-Row-Wrapper' target="_blank" rel="noopener noreferrer" a="a" href="https://www.linkedin.com/in/jackuptondesign/">
                  <div className='Contact-Row-Left'>
                    <div className='Contact-Symbol-LinkedIn'/>
                  </div>
                  <div className='Contact-Row-Right'>
                    <div className='Contact-Row-Title'>
                      LinkedIn
                    </div>
                    <div className='Contact-Row-Link'>
                      https://linkedin.com/in/jackuptondesign/
                    </div>
                  </div>
                </a>
              </div>
              <div className='Contact-Section-Row-Final'>
                <a className='Contact-Section-Row-Wrapper-Final-Left' rel="noopener noreferrer" target="_blank" a="a" href="https://dribbble.com/ElectricPowerHouse">
                  <div className='Contact-Row-Left'>
                    <div className='Contact-Symbol-Dribbble'/>
                  </div>
                  <div className='Contact-Row-Right-Final-Left'>
                    <div className='Contact-Row-Title'>
                      Dribbble
                    </div>
                    <div className='Contact-Row-Link'>
                      https://dribbble.com/ElectricPowerHouse
                    </div>
                  </div>
                </a>
                <div className='Contact-Section-Row-Wrapper-Final-Right'>
                  <div className='Contact-Row-Left-Final'>
                    <div className='Flaticon-Title'>
                      Icons Sourced From Flaticon < /div>
                      <div className='Flaticon-Link'>
                        Site design and development by Jack Upton
                      </div>
                    </div >
                    <div className='Contact-Row-Right-Final-Right'>
                      <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">
                        <div className='Contact-Symbol-Flaticon'/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>

      </div>
      ); } renderHeader() {
        return (<div className='Contact-Section-Header'>
          <div className='Contact-Section-Header-Text'>
            Contact
          </div>
          <div className='Contact-Section-Header-Symbol'/>
        </div>);
      }
      }

export default ContactSection;
