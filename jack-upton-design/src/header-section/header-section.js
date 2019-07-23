import React, {Component} from 'react';
import './header-section.css';
import MePhoto from './../images/me.png';

class HeaderSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  render() {
    return (<div className='Header-Section'>
      <div className='Header-Section-Left'>
        <div className='Header-Container'>
          <div className='Header-Bar-Top'>
            <div className='Header-Bar-Top-Dot'>
              <div className='Dot-Image'/>
            </div>
            {this.renderLanguageButton()}
          </div>
          <div className='Header-Section-Wrapper'>
            <div className='Header-Text-Section'>
              <div className='Header-Text-Section-Title'>
                Jack Upton Design
              </div>
              <hr className='Header-Text-Section-Line'/>
              <div className='Header-Text-Section-Menu'>
                <div className='Header-Text-Section-Menu-MyProjects'>
                  My Projects
                </div>
                <div className='Header-Text-Section-Menu-Contacts'>
                  Contacts
                </div>
              </div>
              <div className='Header-Text-Section-AboutMe'>
                I’m a digital designer & front-end-developer who specializes in combining aesthetics & code. I have a degree in Design Innovation and experience working commercialy. Most recently I worked for a startup that created medical software in Wellington, New Zealand. I’m currently living in France and am looking for remote or local work.
              </div>
            </div>
            <div className='Header-Photo-Section'>

              <div className='Header-Photo-Me'/>
            </div>
          </div>

        </div>
      </div>
      <div className='Header-Section-Right'/>
    </div>);
  }

  renderLanguageButton() {
    return (<div className='Header-Bar-Top-Language-Wrapper'>
      <div className='Header-Bar-Top-Language'>
        <div className='Language-Text'>
          Francaise
        </div>
        <div className='Language-Symbol'/>
      </div>
    </div>);
  }
}

export default HeaderSection;
