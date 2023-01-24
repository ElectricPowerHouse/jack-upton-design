import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

import Carousel, {Modal, ModalGateway} from 'react-images';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
      workShowing: true,
      callback: null
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
          <div className='Work-Section-Mobile-Left-Arrow' onClick={() => {
              this.decreaseWorkNum()
            }}>
            <div className='Work-Section-Mobile-Left-Arrow-Symbol'/>
          </div>
        </div>
        <Fade duration={2500}>
          <div className='Work-Section-Mobile-Middle'>
            {this.renderTitle()}
            <Fade when={this.state.workShowing}>
              <div className='Work-Section-Mobile-Carousel'>
                {this.renderPureCarousel()}
              </div>
            </Fade>
            {/*
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
            </div>*/
            }
            <Fade when={this.state.workShowing}>
              {this.renderDescription()}
            </Fade>
          </div>
        </Fade>
        <div className='Work-Section-Mobile-Right'>
          <div className='Work-Section-Mobile-Right-Arrow' onClick={() => {
              this.increaseWorkNum()
            }}>
            <div className='Work-Section-Mobile-Right-Arrow-Symbol'/>
          </div>
        </div>
      </div>
    </div>);
  }

  renderPureCarousel() {
    if (this.state.worknum == 0) {
      return (this.renderPureCarousel1())
    } else if (this.state.worknum == 1) {
      return (this.renderPureCarousel2())
    } else {
      return (this.renderPureCarousel3())
    }
  }

  renderPureCarousel1() {
    return (<CarouselProvider naturalSlideWidth={800} naturalSlideHeight={387} totalSlides={3} isPlaying={true}>
      <Slider>
        <Slide index={0}>
          <Image src={require('./../../images/ensemble-c1-resized.png')} hasMasterSpinner={true}/>
        </Slide>
        <Slide index={1}>
          <Image src={require('./../../images/ensemble-c2-resized.png')} hasMasterSpinner={true}/>
        </Slide>
        <Slide index={2}>
          <Image src={require('./../../images/ensemble-c3-resized.png')} hasMasterSpinner={true}/>
        </Slide>
      </Slider>

    </CarouselProvider>);
  }

  renderPureCarousel2() {
    return (<CarouselProvider naturalSlideWidth={1325} naturalSlideHeight={654} totalSlides={3} isPlaying={true}>
      <Slider>
        <Slide index={0}>
          <Image src={require('./../../images/metamorphic1.png')} hasMasterSpinner={true}/>
        </Slide>
        <Slide index={1}>
          <Image src={require('./../../images/metamorphic2.png')} hasMasterSpinner={true}/>
        </Slide>
        <Slide index={2}>
          <Image src={require('./../../images/metamorphic3.png')} hasMasterSpinner={true}/>
        </Slide>
      </Slider>

    </CarouselProvider>);
  }

  renderPureCarousel3() {
    return (<CarouselProvider naturalSlideWidth={2732} naturalSlideHeight={1536} totalSlides={3} isPlaying={true}>
      <Slider>
        <Slide index={0}>
          <Image src={require('./../../images/paperless1.png')} hasMasterSpinner={true}/>
        </Slide>
        <Slide index={1}>
          <Image src={require('./../../images/paperless2.png')} hasMasterSpinner={true}/>
        </Slide>
        <Slide index={2}>
          <Image src={require('./../../images/paperless3.png')} hasMasterSpinner={true}/>
        </Slide>
      </Slider>

    </CarouselProvider>);
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

    return (<Fade when={this.state.workShowing}>
      <div className='Work-Section-Mobile-Top'>
        <div className='Work-Section-Mobile-Title'>
          {title}
        </div>
        <div className='Work-Section-Mobile-Subtitle'>
          {subtitle}
        </div>
      </div>
    </Fade>)
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

  startOpacityTransition() {
    let d = new Date();
    let setTime = d.getTime();
    let showing = false;
    this.state.callback = setInterval(this.animationTransition, 1000, setTime, this);
    this.setState({workShowing: showing})
  }

  increaseWorkNum() {
    this.startOpacityTransition();
    let w = this.state.worknum;
    w = w + 1;

    if (w > this.state.workmax) {
      w = 0;
    }
    this.setState({worknum: w});
  }

  decreaseWorkNum() {
    this.startOpacityTransition();
    let w = this.state.worknum;
    w = w - 1;

    if (w < 0) {
      w = this.state.workmax;
    }

    this.setState({worknum: w});
  }

  animationTransition(setTime, o) {
    let transitionTime = 2;
    let d = new Date();
    let nowTime = d.getTime();

    let passedTime = nowTime - setTime;
    if (passedTime >= transitionTime) {
      o.setState({workShowing: true});
      clearInterval(o.state.callback);
    }

  }

  renderDescription() {

    let text = '';

    let description1 = 'Ensemble-C is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. I designed and coded the front-end in React.';

    let problem1 = ' Converting a dense medical paper document into the digital space, and retaining necessary complexity whilst adding readability & usability. ';

    let solution1 = ' Many draft prototypes, constant contact with the nurses & doctors who would be using the interface. The layout of the interface was revised many times before reaching its final ready-to-be-deployed stage. ';

    let description2 = 'The Metamorphic Studios homepage is the first point of contact when wanting to find out more about the company. I was tasked with re-designing the branding and website. ';

    let problem2 = ' Create a new visual aesthetic for the company, retaining the fun and playful image of the company whilst modernising it and updating the outdated elements.';

    let solution2 = '  I settled on a metamorphosis theme, as the company’s values focused on innovation and change. I drew the illustrations myself and intertwined them with the visual design of the new website.  ';

    let description3 = 'PaperLess is a web-app service to help streamline creating and filling out forms for large businesses. It features a simple drag & drop system of different inputs such as text fields and multi-choice questions.';

    let problem3 = ' Create & lead the direction of the UX and UI for a new online application. Communicate with developers to realize this goal and make sure the design principles are maintained.';

    let solution3 = 'Do initial user research, prototypes and testing before the interface is ready for production. Work closely with developers to verify whether UI elements will be feasible or too difficult to implement. ';

    let description = '';

    let problem = '';

    let solution = '';

    let w = this.state.worknum;

    if (w === 0) {
      description = description1;
      problem = problem1;
      solution = solution1;
    } else if (w === 1) {
      description = description2;
      problem = problem2;
      solution = solution2;
    } else {
      description = description3;
      problem = problem3;
      solution = solution3;
    }

    return (<div className='Work-Section-Mobile-Description'>
      <div className='Work-Section-Mobile-Description-Section'>
        <span style={{
            fontSize: '0.9rem'
          }}>
          <b>Description:
          </b>
        </span>
        {description}
      </div>
      <div className='Work-Section-Mobile-Description-Section'>
        <span style={{
            fontSize: '0.9rem'
          }}>
          <b>Problem:
          </b>
        </span>
        {problem}
      </div>
      <div className='Work-Section-Mobile-Description-Section'>
        <span style={{
            fontSize: '0.9rem'
          }}>
          <b>Solution:
          </b>
        </span>
        {solution}
      </div>
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
