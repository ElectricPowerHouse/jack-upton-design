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
        <Fade duration={2500}>
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
            <Link activeClass='active' smooth={true} to='Strengths-Section-Mobile' offset={-60}  className='Header-Section-Mobile-Menu-Top'>
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
          I’m a digital designer & front-end developer, specialising in bridging aesthetics and code. Most recently I worked for a start-up in Wellington, New Zealand, where my team and I created a web-app to be used by the neonatal unit in Wellington Hospital. I have a degree in Design Innovation, and a year of full-time work experience. I’m currently living in Toulouse, France, and am looking for full-time, part-time, local, or remote work.
          </div>
        </div>
        </Fade>
      </div>
  );
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
