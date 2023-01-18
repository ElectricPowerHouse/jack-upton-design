import React, {Component} from 'react';
import './App.css';

import HeaderSection from './desktop/header-section/header-section.js';
import StrengthsSection from './desktop/strengths-section/strengths-section.js';
import WorkSection from './work-section-2023/work-section.js';
import ContactSection from './desktop/contact-section/contact-section.js';

import HeaderSectionMobile from './mobile/header-section-mobile/header-section-mobile.js';
import StrengthsSectionMobile from './mobile/strengths-section-mobile/strengths-section-mobile.js';
import WorkSectionMobile from './mobile/work-section-mobile/work-section-mobile.js';
import ContactSectionMobile from './mobile/contact-section-mobile/contact-section-mobile.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    }
  }

  componentDidMount() {
    console.log(' Hello! :) ');
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({width: window.innerWidth});
  };

  render() {

    const {width} = this.state;
    const isMobile = width <= 500;
    // the rest is the same...

    if (!isMobile) {
      return (<div className='App'>
        <div className='App-Wrapper'>
          <HeaderSection/>
          <StrengthsSection/>
          <div className='Divider'/>
          <WorkSection/>
          <ContactSection/>
        </div>
      </div>);
    } else {
      return (<div className='App'>
        <div className='App-Wrapper-Mobile'>
          <HeaderSectionMobile/>
          <StrengthsSectionMobile/>
          <div className='Divider-Mobile'/>
          <WorkSectionMobile/>
          <ContactSectionMobile/>

        </div>
      </div>);
    }

  }

}

export default App;
