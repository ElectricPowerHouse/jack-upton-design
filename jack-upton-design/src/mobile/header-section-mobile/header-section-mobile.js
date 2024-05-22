import React, { Component } from 'react';
import './header-section-mobile.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import MeImage from './../../images/me_v3.png';

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
        {/*<div className='Header-Section-Mobile-Dot-Wrapper'>
          <div className='Header-Section-Mobile-Dot'/>
        </div>*/
        }
        <div className='Header-Section-Mobile-Top'>
          <div className='Header-Section-Mobile-Top-Left'>
            <div className='Header-Section-Mobile-Title'>
              Jack Upton Design
            </div>
            <div className='Header-Section-Mobile-Line' />
          </div>
          <div className='Header-Section-Mobile-Top-Right'>
            <div className='Header-Section-Mobile-Photo-Me'>
              <img src={MeImage} className='Header-Photo-Me-Mobile' alt="Photo of me" />
            </div>
          </div>
        </div>
        <div className='Header-Section-Mobile-Bottom'>
          <div className='Header-Section-Mobile-Menu'>
            <Link activeClass='active' smooth={true} to='Strengths-Section-Mobile' offset={-60} className='Header-Section-Mobile-Menu-Top'
              href='#skills-and-strengths'>
              Skills & Strengths
            </Link>
            <Link activeClass='active' smooth={true} to='Work-Section' offset={-60} className='Header-Section-Mobile-Menu-Bottom'
              href='#my-projects'>
              My Projects
            </Link>
            <Link activeClass='active' smooth={true} to='Contact-Section-Mobile' offset={-60} className='Header-Section-Mobile-Menu-Bottom'
              href='#contact'>
              Contact
            </Link>
          </div>
          <div className='Header-Section-Mobile-AboutMe'>
            I’m a digital designer & front-end developer. I have a degree in Design Innovation with a minor in Computer Science from Victoria University in Wellington, New Zealand. Since I graduated I have been employed in various companies as a website designer, as well as working freelance and on my own projects. I enjoy working on all aspects of website development, from UX & UI design, to implementing the design via front-end code. I have 4+ years of professional work experience. I  recently released my own business / website: An online personality test utilizing the “Big Five” personality metric.           </div>
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
        <div className='Language-Symbol' />
      </div>
    </div>);
  }
}

export default HeaderSectionMobile;
