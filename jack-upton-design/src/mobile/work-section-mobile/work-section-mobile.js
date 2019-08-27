import React, {Component} from 'react';
import './work-section-mobile.css';
import Fade from 'react-reveal/Fade';

import Carousel, {Modal, ModalGateway} from 'react-images';

const modalImages1 = [
  {
    src: require('./../../images/ensemble-c1-resized.png')
  }, {
    src: require('./../../images/ensemble-c2-resized.png')
  }, {
    src: require('./../../images/ensemble-c3-resized.png')
  }
];

const modalImages2 = [
  {
    src: require('./../../images/metamorphic1.png')
  }, {
    src: require('./../../images/metamorphic2.png')
  }, {
    src: require('./../../images/metamorphic3.png')
  }
];

const modalImages3 = [
  {
    src: require('./../../images/paperless2.png')
  }, {
    src: require('./../../images/paperless3.png')
  }, {
    src: require('./../../images/paperless1.png')
  }
];

class WorkSectionMobile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      worknum: 0,
      workmax: 2,
      modalIsOpen: false,
      currentIndex: 1,
    }
  }

  toggleModal = () => {
    this.setState(state => ({
      modalIsOpen: !state.modalIsOpen
    }));
  };

  render() {

    return (<div className='Work-Section-Mobile'>
      {this.renderHeader()}
      <div className='Work-Section-Body'>
        <div className='Work-Mobile-Section-Left'>
          <div className='Work-Section-Left-Arrow' onClick={() => {
              this.decreaseWorkNum()
            }}>
            <div className='Work-Section-Left-Arrow-Symbol'/>
          </div>
        </div>
        <Fade duration={2500} >
          <div className='Work-Section-Mobile-Middle'>
            {this.renderTitle()}
            <div className='Work-Section-Mobile-Images'>
              <div className='Work-Section-Mobile-Images-Top'>
                <div className='Image1-Wrapper-Mobile' onClick={() => {if(this.state.modalIsOpen === false){this.toggleModal(); this.setState({currentIndex:0})}}}>
                  {this.renderModalGateway()}
                  {this.renderImage1()}
                </div>
              </div>
              <div className='Work-Section-Mobile-Images-Bottom'>
                <div className='Image2-Wrapper-Mobile' onClick={() => {if(this.state.modalIsOpen === false){this.toggleModal(); this.setState({currentIndex:1})}}}>
                  {this.renderImage2()}
                </div>
                <div className='Image3-Wrapper-Mobile' onClick={() => {if(this.state.modalIsOpen === false){this.toggleModal(); this.setState({currentIndex:2})}}}>
                  {this.renderImage3()}
                </div>
              </div>
            </div>
            {this.renderDescription()}
          </div>
        </Fade>
        <div className='Work-Section-Mobile-Right'>
          <div className='Work-Section-Right-Arrow' onClick={() => {
              this.increaseWorkNum()
            }}>
            <div className='Work-Section-Right-Arrow-Symbol'/>
          </div>
        </div>
      </div>
    </div>);
  }

  renderTitle() {

    let title = '';
    let subtitle = '';
    let i = this.state.worknum;

    if (i === 0) {
      title = '1. Ensemble-C';
      subtitle = '[ Elucimed ]';
    } else if (i === 1) {
      title = '2. Metamorphic Website';
      subtitle = '[ Metamorphic Studios ]';
    } else {
      title = '3. Paperless';
      subtitle = '[ Metamorphic Studios ]';
    }

    return (<div className='Work-Section-Mobile-Top'>
      <div className='Work-Section-Mobile-Title'>
        {title}
      </div>
      <div className='Work-Section-Mobile-Subtitle'>
        {subtitle}
      </div>
    </div>)
  }

  renderModalGateway() {

    let images = modalImages1;
    let i = this.state.worknum;

    if (i === 0) {
      images = modalImages1;
    } else if (i === 1) {
      images = modalImages2;
    } else {
      images = modalImages3;
    }

    const {modalIsOpen} = this.state;

    return (<ModalGateway>
      {
        modalIsOpen
          ? (<Modal onClose={this.toggleModal}>
            <Carousel views={images} currentIndex={this.state.currentIndex}/>
          </Modal>)
          : null
      }
    </ModalGateway>);

  }

  renderImage1() {

    let i = this.state.worknum;

    if (i === 0) {
      return (<div className='Work-Section-Elucimed1'/>);
    } else if (i === 1) {
      return (<div className='Work-Section-Metamorphic1'/>);
    } else {
      return (<div className='Work-Section-Paperless2'/>);
    }
  }

  renderImage2() {

    let i = this.state.worknum;

    if (i === 0) {
      return (<div className='Work-Section-Elucimed2'/>);
    } else if (i === 1) {
      return (<div className='Work-Section-Metamorphic2'/>);
    } else {
      return (<div className='Work-Section-Paperless3'/>);
    }
  }

  renderImage3() {

    let i = this.state.worknum;

    if (i === 0) {
      return (<div className='Work-Section-Elucimed3'/>);
    } else if (i === 1) {
      return (<div className='Work-Section-Metamorphic3'/>);
    } else {
      return (<div className='Work-Section-Paperless1'/>);
    }
  }

  increaseWorkNum() {


    let w = this.state.worknum;
    w = w + 1;

    if (w > this.state.workmax) {
      w = 0;
    }

    this.setState({worknum: w});
  }

  decreaseWorkNum() {
    let w = this.state.worknum;
    w = w - 1;

    if (w < 0) {
      w = this.state.workmax;
    }

    this.setState({worknum: w});
  }

  renderDescription() {

    let text = '';

    let text1 = 'Ensemble-C is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. This app would reduce human error, increase connectivity, and simplify data analysis. I worked on Ensemble-C for 8 months during my time employed at Elucimed. I designed and coded the front-end in React myself, frequently talking to medical professionals to get feedback and discuss their needs for the interface. This project was full of interesting challenges, especially  presenting complex data in a user-friendly, and modern looking way.';

    let text2 = 'The Metamorphic Studios homepage is the first point of contact when wanting to find out more about the company. I was tasked with re-designing the branding and website, as the previous visual design was outdated and lacking. It was a chance to do something creative - and as the company’s values heavily focused on innovation and change, I settled on a metamorphosis theme. I designed the branding and webpage design myself, and worked with the developers at the company to code the page in React. ';

    let text3 = 'PaperLess is a web-app service to help streamline creating and filling out forms for large businesses. It features a simple drag & drop system of different inputs such as text fields and multi-choice questions. The goal of the application was to allow business owners and managers to create forms easily without needing to use complex PDF processes, and reducing paper waste. I completed all of the designs for the interface and worked with a team of developers to create the app in React. I had to figure out the most efficient way to lay out the UI, combining complexity with ease-of use. '

    let w = this.state.worknum;

    if (w === 0) {
      text = text1;
    } else if (w === 1) {
      text = text2;
    } else {
      text = text3;
    }

    return (<div className='Work-Section-Mobile-Description'>
      {text}
    </div>)
  }

  renderHeader() {
    return (<div className='Work-Section-Mobile-Header'>
      <div className='Work-Section-Mobile-Header-Text'>
        My Work
      </div>
      <div className='Work-Section-Mobile-Header-Symbol'/>
    </div>);
  }

}

export default WorkSectionMobile;
