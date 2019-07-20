import React from 'react';
import './header-section.css';


function HeaderSection() {
  return (
    <div className = 'Header-Section'>
      <div className = 'Header-Container'>
        <div className = 'Header-Bar-Top'>
          <div className = 'Header-Bar-Top-Dot'>
            <div className = 'Dot-Image' />
            </div>
          <div className = 'Header-Bar-Top-Language'> ----- </div>
        </div>
        <div className = 'Header-Text-Section'>
          <div className = 'Header-Text-Section-Title'> Jack Upton Design </div>
          <div className = 'Header-Text-Section-Line'> </div>
          <div className = 'Header-Text-Section-Menu'>
            <div className = 'Header-Text-Section-Menu-MyProjects'> My Projects </div>
            <div className = 'Header-Text-Section-Menu-Contacts'> Contacts </div>
          </div>
          <div className = 'Header-Text-Section-AboutMe'>
          I’m a digital designer & front-end-developer who specializes in bridging aesthetics & code.
           I have a degree in Design Innovation and experience working commercialy.
            Most recently I worked for a startup that created medical software in Wellington, New Zealand.
             I’m currently living in France and am looking for remote or local work.
          </div>
        </div>
        <div className = 'Header-Photo-Section'>
        </div>

      </div>
    </div>

  );
}

export default HeaderSection;
