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

  render() {
    return (<div className='Header-Section-Mobile'>
      <Fade duration={2500}>
        <div className='Header-Section-Mobile-Dot-Wrapper'>
          <div className='Header-Section-Mobile-Dot'/>
        </div>
        <div className='Header-Section-Mobile-Top'>
          <div className='Header-Section-Mobile-Top-Left'>
            <div className='Header-Section-Mobile-Title'>
              Jack Upton Design
            </div>
            <div className='Header-Section-Mobile-Line'/>
          </div>
          <div className='Header-Section-Mobile-Top-Right'>
            <div className='Header-Section-Mobile-Photo-Me'/>
          </div>
        </div>
        <div className='Header-Section-Mobile-Bottom'>
          <div className='Header-Section-Mobile-Menu'>
            <Link activeClass='active' smooth={true} to='Strengths-Section-Mobile' offset={-60} className='Header-Section-Mobile-Menu-Top'>
              Skills & Strengths
            </Link>
            <Link activeClass='active' smooth={true} to='Work-Section-Mobile' offset={-60} className='Header-Section-Mobile-Menu-Bottom'>
              My Projects
            </Link>
            <Link activeClass='active' smooth={true} to='Contact-Section-Mobile' offset={-60} className='Header-Section-Mobile-Menu-Bottom'>
              Contact
            </Link>
          </div>
          <div className='Header-Section-Mobile-AboutMe'>
            I’m a designer & front-end developer, specialising in bridging aesthetics and code. I most recently finished up my contract working with Cenareo in Toulouse, France, aiding with creating and updating a design system for their content management system. With 3 years of professional experience, I am competent in a wide variety of domains including user experience design, visual design, illustration, and front end code. If you have a project or task in mind, send me a message and i’ll let you know if I can help.
          </div>
        </div>
      </Fade>
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
