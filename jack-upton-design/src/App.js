import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderSection from './header-section/header-section.js';
import StrengthsSection from './strengths-section/strengths-section.js';
import WorkSection from './work-section/work-section.js';
import ContactSection from './contact-section/contact-section.js';

import SimpleParallax from 'simple-parallax-js';

import LazyHero from 'react-lazy-hero';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  onClick() {}

  render() {

    return (<div className='App'>

      <div className='App-Wrapper'>

        <HeaderSection/>
        <StrengthsSection/>
        <div className='Divider'/>
        <WorkSection/>
        <ContactSection/>

      </div>

    </div>);
  }
}

var image = document.getElementsByClassName('Parallax-Wrapper');
new SimpleParallax(image, {scale: 1.5});

console.log(image);

export default App;
