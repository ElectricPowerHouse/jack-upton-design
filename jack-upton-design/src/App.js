import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax' ;
import { Parallax } from 'react-scroll-parallax' ;
import { ParallaxBanner} from 'react-scroll-parallax';
import mm from './mm.png';
import HeaderSection from './header-section/header-section.js'

function App() {
  return (
    <ParallaxProvider>
    <div className='App'>
      <div className = 'Parallax-Wrapper'>

      <HeaderSection />


       <div className = 'Strengths-Section' > {/*//needs to be the wrong way round so the header sits on the div*/}
          <div className = 'Strengths-Section-Body'> sdf sdf  </div>
          <div className = 'Strengths-Section-Header'> </div>
        </div>

        <div className = 'Work-Section' > {/*//needs to be the wrong way round so the header sits on the div*/}
           <div className = 'Work-Section-Body'> sdf sdf  </div>
        <div className = 'Work-Section-Header'> </div>
        </div>
      <div className = 'Contact-Section'></div>

      </div>
    </div>
    </ParallaxProvider>

  );
}





export default App;
