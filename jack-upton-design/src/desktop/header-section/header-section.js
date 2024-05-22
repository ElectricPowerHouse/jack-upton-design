import React, {Component} from 'react';
import './header-section.css';
import {Link, animateScroll as scroll} from 'react-scroll';
import Fade from 'react-reveal/Fade';

import MeImage from './../../images/me_v3.png';

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
                {/*<div className='Dot-Image'/>*/}
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
                  <Link activeClass='active' smooth={true} className='Header-Text-Section-Menu-Left' to='Strengths-Section' offset={-100}
                  href='#skills-and-strengths'>
                    Skills and Strengths
                  </Link>
                  <Link activeClass='active' smooth={true} className='Header-Text-Section-Menu-Right' to='Work-Section' offset={-50}
                  href='#my-projects'>
                    My Projects
                  </Link>
                  <Link activeClass='active' smooth={true} className='Header-Text-Section-Menu-Right' to='Contact-Section' offset={-100}
                  href='#contact'>
                    Contact
                  </Link>
                </div>
                <div className='Header-Text-Section-AboutMe'>
                I’m a digital designer & front-end developer. I have a degree in Design Innovation with a minor in Computer Science from Victoria University in Wellington, New Zealand. Since I graduated I have been employed in various companies as a website designer, as well as working freelance and on my own projects. I enjoy working on all aspects of website development, from UX & UI design, to implementing the design via front-end code. I have 4+ years of professional work experience. I  recently released my own business / website: An online personality test utilizing the “Big Five” personality metric. 
                </div>
              </div>
              <Fade duration={4000}>
                <div className='Header-Photo-Section'>
                  <img src={MeImage} className='Header-Photo-Me' alt="Photo of me" />
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
