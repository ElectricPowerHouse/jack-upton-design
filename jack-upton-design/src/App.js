import React, {Component} from 'react';
import './App.css';

import HeaderSection from './header-section/header-section.js';
import StrengthsSection from './strengths-section/strengths-section.js';
import WorkSection from './work-section/work-section.js';
import ContactSection from './contact-section/contact-section.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log(' Hello! :) ')
  }

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

export default App;
