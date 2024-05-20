import React, { useState } from 'react';
import './App.css';

import HeaderSection from './desktop/header-section/header-section.js';
import StrengthsSection from './desktop/strengths-section/strengths-section.js';
import WorkSection from './work-section-2023/work-section.js';
import ContactSection from './desktop/contact-section/contact-section.js';

import HeaderSectionMobile from './mobile/header-section-mobile/header-section-mobile.js';
import StrengthsSectionMobile from './mobile/strengths-section-mobile/strengths-section-mobile.js';
import ContactSectionMobile from './mobile/contact-section-mobile/contact-section-mobile.js';

function App() {


  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= 500;
  // the rest is the same...

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleWindowSizeChange);



  return (

    !isMobile ?
      <div className='App'>
        <div className='App-Wrapper'>
          <HeaderSection />
          <StrengthsSection />
          <div className='Divider' />
          <WorkSection isMobile={isMobile}/>
          <ContactSection />
        </div>
      </div>
      :
      <div className='App'>
        <div className='App-Wrapper-Mobile'>
          <HeaderSectionMobile />
          <StrengthsSectionMobile />
          <div className='Divider-Mobile' />
          <WorkSection />
          <ContactSectionMobile />

        </div>
      </div>

  );
}

export default App;
