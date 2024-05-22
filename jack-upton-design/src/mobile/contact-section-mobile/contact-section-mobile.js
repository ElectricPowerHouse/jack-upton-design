import React, {Component} from 'react';
import './contact-section-mobile.css';
import Fade from 'react-reveal/Fade';

class ContactSectionMobile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  render() {
    return (<div className='Contact-Section-Mobile'>
      {this.renderHeader()}
      <div className='Contact-Section-Mobile-Wrapper'>
          <Fade duration={2500}>
            <div className='Contact-Section-Mobile-Body'>
              <div className='Contact-Section-Mobile-Row'>
                <a className='Contact-Section-Mobile-Row-Wrapper' target="_blank" rel="noopener noreferrer" a="a" href='mailto: jackupton2255@gmail.com'>
                  <div className='Contact-Mobile-Row-Left'>
                    <div className='Contact-Mobile-Symbol-Email'/>
                  </div>
                  <div className='Contact-Mobile-Row-Right'>
                    <div className='Contact-Mobile-Row-Title'>
                      Gmail
                    </div>
                    <div className='Contact-Mobile-Row-Link'>
                      jackupton2255@gmail.com
                    </div>
                  </div>
                </a>
              </div>
              <div className='Contact-Section-Mobile-Row'>
                <a div="div" className='Contact-Section-Mobile-Row-Wrapper' target="_blank" rel="noopener noreferrer" a="a" href="https://github.com/ElectricPowerHouse">
                  <div className='Contact-Mobile-Row-Left'>
                    <div className='Contact-Mobile-Symbol-Github'/>
                  </div>
                  <div className='Contact-Mobile-Row-Right'>
                    <div className='Contact-Mobile-Row-Title'>
                      Github
                    </div>
                    <div className='Contact-Mobile-Row-Link'>
                      github.com/ElectricPowerHouse
                    </div>
                  </div>
                </a>
              </div>
              <div className='Contact-Section-Mobile-Row'>
                <a className='Contact-Section-Mobile-Row-Wrapper' target="_blank" rel="noopener noreferrer" a="a" href="https://www.linkedin.com/in/jackuptondesign/">
                  <div className='Contact-Mobile-Row-Left'>
                    <div className='Contact-Mobile-Symbol-LinkedIn'/>
                  </div>
                  <div className='Contact-Mobile-Row-Right'>
                    <div className='Contact-Mobile-Row-Title'>
                      LinkedIn
                    </div>
                    <div className='Contact-Mobile-Row-Link'>
                      linkedin.com/in/jackuptondesign/
                    </div>
                  </div>
                </a>
              </div>
              <div className='Contact-Section-Mobile-Row'>
                <a className='Contact-Section-Mobile-Row-Wrapper' rel="noopener noreferrer" target="_blank" a="a" href="https://dribbble.com/ElectricPowerHouse">
                  <div className='Contact-Mobile-Row-Left'>
                    <div className='Contact-Mobile-Symbol-Dribbble'/>
                  </div>
                  <div className='Contact-Mobile-Row-Right'>
                    <div className='Contact-Mobile-Row-Title'>
                      Dribbble
                    </div>
                    <div className='Contact-Mobile-Row-Link'>
                      dribbble.com/ElectricPowerHouse
                    </div>
                  </div>
                </a>

              </div>
            </div>
            <div className='Contact-Section-Mobile-Row-Final'>
              <div className='Contact-Section-Mobile-Row-Wrapper-Final'>
                <div className='Flaticon-Title-Mobile'>
                  Icons Sourced From Flaticon
                </div>
                <div className='Flaticon-Link-Mobile'>
                  Site design and development by Jack Upton
                </div>
              </div >
              <div className='Contact-Mobile-Row-Right-Final'>
                <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer" alt="flaticon">
                  <div className='Contact-Mobile-Symbol-Flaticon'/>
                </a>
              </div>
            </div>
          </Fade>
      </div>
    </div>);
  }
  renderHeader() {
    return (<div className='Contact-Section-Mobile-Header'>
      <div className='Contact-Section-Mobile-Header-Text'>
        Contact
      </div>
      <div className='Contact-Section-Mobile-Header-Symbol'/>
    </div>);
  }
}

export default ContactSectionMobile;
