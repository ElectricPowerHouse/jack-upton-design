import React, {Component} from 'react';
import './contact-section.css';

class ContactSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  render() {
    return (<div className='Contact-Section'>
      <div className='Contact-Section-Left'/>
      <div className='Contact-Section-Right'>
        <div className='Contact-Section-Body'>
          <div className='Contact-Section-Row'>
            <div className='Contact-Section-Row-Wrapper'>
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
            </div>
          </div>
          <div className='Contact-Section-Row'>
            <div className='Contact-Section-Row-Wrapper'>
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
            </div>
          </div>
          <div className='Contact-Section-Row'>
            <div className='Contact-Section-Row-Wrapper'>
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
            </div>
          </div>
          <div className='Contact-Section-Row-Final'>
            <div className='Contact-Section-Row-Wrapper-Final-Left'>
              <div className='Contact-Row-Left'>
                <div className='Contact-Symbol-Dribbble'/>
              </div>
              <div className='Contact-Row-Right'>
                <div className='Contact-Row-Title'>
                  Dribbble
                </div>
                <div className='Contact-Row-Link'>
                  https://dribbble.com/ElectricPowerHouse
                </div>
              </div>
            </div>
            <div className='Contact-Section-Row-Wrapper-Final-Right'>
              <div className='Contact-Row-Left-Final'>
                <div className = 'Flaticon-Title' > Icons Sourced From Flaticon < /div>
                <div className='Flaticon-Link'>
                  Site design and development by Jack Upton
                </div>
              </div >
                <div className='Contact-Row-Right-Final'>
                  <div className='Contact-Symbol-Flaticon'/>
              </div>
            </div>
          </div>
        </div>
        {this.renderHeader()}
      </div>

    </div>);
  }

  renderHeader() {
    return (<div className='Contact-Section-Header'>
      <div className='Contact-Section-Header-Text'>
        Contact
      </div>
      <div className='Contact-Section-Header-Symbol'/>
    </div>);
  }
}

export default ContactSection;
