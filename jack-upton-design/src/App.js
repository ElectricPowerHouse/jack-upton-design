
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax' ;
import { Parallax } from 'react-scroll-parallax' ;
import { ParallaxBanner} from 'react-scroll-parallax';
import mm from './mm.png';
import HeaderSection from './header-section/header-section.js';
import StrengthsSection from './strengths-section/strengths-section.js';
import WorkSection from './work-section/work-section.js';

class App extends Component{


  constructor(props) {
    super(props);
    this.state = {

    }
    }

    componentDidMount(){
      window.scrollTo(0,500);

    }

    onClick(){

    }

    render(){



    return (
      <div className='App' onClick = {()=> {window.scrollTo(0,900)}}>
        <div className = 'Parallax-Wrapper'>

        <HeaderSection />
        <StrengthsSection />
        <WorkSection />


        <div className = 'Contact-Section'></div>

        </div>
      </div>

    );
  }
}





export default App;
