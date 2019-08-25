import React, {Component} from 'react';
import './header-section-mobile.css';
import {Link, animateScroll as scroll} from 'react-scroll';
import Fade from 'react-reveal/Fade';

class HeaderSectionMobile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  render(){
    return(
      <div className='Header-Section-Mobile'>
        <div className = 'Header-Section-Mobile-Dot-Wrapper'>
          <div className = 'Header-Section-Mobile-Dot' />
        </div>
        <div className='Header-Section-Mobile-Top'>
          <div className='Header-Section-Mobile-Top-Left'>
            <div className='Header-Section-Mobile-Title'>
            Jack Upton Design
            </div>
            <div className = 'Header-Section-Mobile-Line' />
          </div>
          <div className='Header-Section-Mobile-Top-Right'>
            <div className='Header-Section-Mobile-Photo-Me'/>
          </div>
        </div>
        <div className='Header-Section-Mobile-Bottom'>
          <div className='Header-Section-Mobile-Menu'>
            <div className='Header-Section-Mobile-Menu-Top'>
              Skills & Strengths
            </div>
            <div className='Header-Section-Mobile-Menu-Bottom'>
              My Projects
            </div>
            <div className='Header-Section-Mobile-Menu-Bottom'>
              Contact
            </div>
          </div>
          <div className='Header-Section-Mobile-AboutMe'>
          I’m a digital designer & front-end developer, specialising in bridging aesthetics and code. Most recently I worked for a start-up in Wellington, New Zealand, where my team and I created a web-app to be used by the neonatal unit in Wellington Hospital. I have a degree in Design Innovation, and a year of full-time work experience. I’m currently living in Toulouse, France, and am looking for full-time, part-time, local, or remote work.
          </div>
        </div>
      </div>
  );
  }

  render2() {
    return (<div className='Header-Section'>
      <Fade duration={2500}>
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
                  <Link activeClass='active' smooth={true} className='Header-Text-Section-Menu-Left' to='Strengths-Section' offset={-100}>
                    Skills & Strengths
                  </Link>
                  <Link activeClass='active' smooth={true} className='Header-Text-Section-Menu-Right' to='Work-Section' offset={-50}>
                    My Projects
                  </Link>
                  <Link activeClass='active' smooth={true} className='Header-Text-Section-Menu-Right' to='Contact-Section' offset={-100}>
                    Contact
                  </Link>
                </div>
                <div className='Header-Text-Section-AboutMe'>
                  I’m a digital designer & front-end developer, specialising in bridging aesthetics and code. Most recently I worked for a start-up in Wellington, New Zealand, where my team and I created a web-app to be used by the neonatal unit in Wellington Hospital. I have a degree in Design Innovation, and a year of full-time work experience. I’m currently living in Toulouse, France, and am looking for full-time, part-time, local, or remote work.
                </div>
              </div>
              <Fade duration={4000}>
                <div className='Header-Photo-Section'>
                  {/* <div className = 'Header-Photo-Circle'> */}
                  <div className='Header-Photo-Me'/> {/* </div> */}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
      <div className='Header-Section-Right'>
        <div className='Header-Section-Line'/>
      </div>
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

export default HeaderSectionMobile;
