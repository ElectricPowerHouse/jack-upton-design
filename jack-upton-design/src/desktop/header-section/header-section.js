import React, {Component} from 'react';
import './header-section.css';
import {Link, animateScroll as scroll} from 'react-scroll';
import Fade from 'react-reveal/Fade';

class HeaderSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }

  render() {
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
                  I’m a designer & front-end developer, specialising in bridging aesthetics and code. I most recently finished up my contract working with Cenareo in Toulouse, France, aiding with creating a design system for their content management system. With a degree in Design Innovation from VUW & 2 years of professional experience, I am competent in a wide variety of domains including user experience design, visual design, illustration, and front end code.
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

export default HeaderSection;
