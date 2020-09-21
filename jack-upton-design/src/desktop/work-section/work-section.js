import React, { Component } from 'react';
import './work-section.css';
import Fade from 'react-reveal/Fade';

import Carousel, { Modal, ModalGateway } from 'react-images';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
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

class WorkSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      worknum: 0,
      workmax: 2,
      modalIsOpen: false,
      currentIndex: 1,
      workShowing:true,
      callback: null
    }
  }

  toggleModal = () => {
    this.setState(state => ({
      modalIsOpen: !state.modalIsOpen
    }));
  };

  render() {


    return (<div className='Work-Section'>
      {this.renderHeader()}
      <div className='Work-Section-Body'>
        <div className='Work-Section-Left'>
          <div className='Work-Section-Left-Arrow' onClick={() => {
            this.decreaseWorkNum()
          }}>
            <div className='Work-Section-Left-Arrow-Symbol' />
          </div>
        </div>
        <Fade duration={2500}>
          <div className='Work-Section-Middle'>
            <div className='Work-Section-Middle2'>
              {this.renderTitle()}
              <Fade when={this.state.workShowing}>
              <div className='Work-Section-Carousel'>
                {this.renderPureCarousel()}
              </div>
              </Fade>
              {/*<div className='Work-Section-Images'>

                {/*<div className='Work-Section-Images-Left'>
                  <div className='Image1-Wrapper' onClick={() => {
                      if (this.state.modalIsOpen === false) {
                        this.toggleModal();
                        this.setState({currentIndex: 0})
                      }
                    }}>
                    {this.renderModalGateway()}
                    {this.renderImage1()}
                  </div>
                </div>*/}
              {/*<div className='Work-Section-Images-Right'>
                  <div className='Image2-Wrapper' onClick={() => {
                      if (this.state.modalIsOpen === false) {
                        this.toggleModal();
                        this.setState({currentIndex: 1})
                      }
                    }}>
                    {this.renderImage2()}
                  </div>
                  <div className='Image3-Wrapper' onClick={() => {
                      if (this.state.modalIsOpen === false) {
                        this.toggleModal();
                        this.setState({currentIndex: 2})
                      }
                    }}>
                    {this.renderImage3()}
                  </div>
                </div>*/}
              {/*</div>*/}
              <Fade when={this.state.workShowing}>
              {this.renderDescription()}
              </Fade>
            </div>
          </div>
        </Fade>
        <div className='Work-Section-Right'>
          <div className='Work-Section-Right-Arrow' onClick={() => {
            this.increaseWorkNum()
          }}>
            <div className='Work-Section-Right-Arrow-Symbol' />
          </div>
        </div>

      </div>

    </div>);
  }

  renderPureCarousel() {
    if (this.state.worknum == 0) {
      return (this.renderPureCarousel1())
    }
    else if (this.state.worknum == 1) {
      return (
        this.renderPureCarousel2()
      )
    }
    else {
      return (this.renderPureCarousel3())
    }
  }

  renderPureCarousel1() {
    return (<CarouselProvider
      naturalSlideWidth={800}
      naturalSlideHeight={387}
      totalSlides={3}
      isPlaying={true}
    >
      <Slider>
        <Slide index={0}> <Image
          src={require('./../../images/ensemble-c1-resized.png')}
          hasMasterSpinner={false}
        />
        </Slide>
        <Slide index={1}> <Image
          src={require('./../../images/ensemble-c2-resized.png')}
          hasMasterSpinner={false}
        />
        </Slide>
        <Slide index={2}> <Image
          src={require('./../../images/ensemble-c3-resized.png')}
          hasMasterSpinner={false}
        />
        </Slide>
      </Slider>

    </CarouselProvider>);
  }

  renderPureCarousel2() {
    return (<CarouselProvider
      naturalSlideWidth={800}
      naturalSlideHeight={387}
      totalSlides={3}
      isPlaying={true}
    >
      <Slider>
        <Slide index={0}> <Image
          src={require('./../../images/metamorphic1.png')}
          hasMasterSpinner={false}
        />
        </Slide>
        <Slide index={1}> <Image
          src={require('./../../images/metamorphic2.png')}
          hasMasterSpinner={false}
        />
        </Slide>
        <Slide index={2}> <Image
          src={require('./../../images/metamorphic3.png')}
          hasMasterSpinner={false}
        />
        </Slide>
      </Slider>

    </CarouselProvider>);
  }

  renderPureCarousel3() {
    return (<CarouselProvider
      naturalSlideWidth={800}
      naturalSlideHeight={387}
      totalSlides={3}
      isPlaying={true}
    >
      <Slider>
        <Slide index={0}> <Image
          src={require('./../../images/paperless1.png')}
          hasMasterSpinner={false}
        />
        </Slide>
        <Slide index={1}> <Image
          src={require('./../../images/paperless2.png')}
          hasMasterSpinner={false}
        />
        </Slide>
        <Slide index={2}> <Image
          src={require('./../../images/paperless3.png')}
          hasMasterSpinner={false}
        />
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

    return (<Fade when = {this.state.workShowing}><div className='Work-Section-Top'>
      <div className='Work-Section-Title'>
        {title}
      </div>
      <div className='Work-Section-Subtitle'>
        {subtitle}
      </div>
    </div></Fade>)
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

    const { modalIsOpen } = this.state;

    return (<ModalGateway>
      {
        modalIsOpen
          ? (<Modal onClose={this.toggleModal}>
            <Carousel views={images} currentIndex={this.state.currentIndex} />
          </Modal>)
          : null
      }
    </ModalGateway>);

  }

  renderImage1() {

    let i = this.state.worknum;

    if (i === 0) {
      return (<div className='Work-Section-Elucimed1' />);
    } else if (i === 1) {
      return (<div className='Work-Section-Metamorphic1' />);
    } else {
      return (<div className='Work-Section-Paperless2' />);
    }
  }

  renderImage2() {

    let i = this.state.worknum;

    if (i === 0) {
      return (<div className='Work-Section-Elucimed2' />);
    } else if (i === 1) {
      return (<div className='Work-Section-Metamorphic2' />);
    } else {
      return (<div className='Work-Section-Paperless3' />);
    }
  }

  renderImage3() {

    let i = this.state.worknum;

    if (i === 0) {
      return (<div className='Work-Section-Elucimed3' />);
    } else if (i === 1) {
      return (<div className='Work-Section-Metamorphic3' />);
    } else {
      return (<div className='Work-Section-Paperless1' />);
    }
  }

  startOpacityTransition(){
    let d = new Date();
    let setTime = d.getTime();
    let showing = false;
    this.state.callback = setInterval(this.animationTransition,1000,setTime,this);
    this.setState({ workShowing: showing})
  }

  increaseWorkNum() {
    this.startOpacityTransition();
    let w = this.state.worknum;
    w = w + 1;

    if (w > this.state.workmax) {
      w = 0;
    }
    this.setState({ worknum: w });
  }

  decreaseWorkNum() {
    this.startOpacityTransition();
    let w = this.state.worknum;
    w = w - 1;

    if (w < 0) {
      w = this.state.workmax;
    }

    this.setState({ worknum: w });
  }

  animationTransition(setTime,o){
    console.log('doing');
    let transitionTime = 2;
    let d = new Date();
    let nowTime = d.getTime();

    let passedTime = nowTime-setTime;
    console.log(passedTime);
    if(passedTime>=transitionTime){
      o.setState({workShowing:true});
      clearInterval(o.state.callback);
    }

  }

  renderDescription() {

    let text = '';

    let text1 = 'Ensemble-C is a web-app designed to make nurse and doctor’s workflows simpler. It was tailored specifically for Wellington Hospital to replace the paper charts that they were using.';

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

    return (<div className='Work-Section-Description'>
      <div className = 'Work-Section-Description-Section'>
        <span style={{ fontSize: '1.3rem' }}><b>Description:   </b></span>
        {text}
      </div>
      <div className = 'Work-Section-Description-Section'>
        <span style={{ fontSize: '1.3rem' }}><b>Problem:</b></span>
        {text}
      </div>
      <div className = 'Work-Section-Description-Section'>
        <span style={{ fontSize: '1.3rem' }}><b>Solution:</b></span>
        {text}
      </div>
    </div>)
  }

  renderHeader() {
    return (<div className='Work-Section-Header-Container'>
      <div className='Work-Section-Header'>
        <div className='Work-Section-Header-Text'>
          My Work
        </div>
        <div className='Work-Section-Header-Symbol' />
      </div>
    </div>);
  }

}

export default WorkSection;
