import React, {Component} from 'react';
import './work-section.css';

import Carousel, {Modal, ModalGateway} from 'react-images';



const modalImages1 = [
  {
    src: require ('./../images/elucimed.png')
  },
  {
    src: require ('./../images/elucimed.png')
  },
  {
    src: require ('./../images/elucimed.png')
  }
];

const modalImages2 = [
  {
    src: require ('./../images/metamorphic1.png')
  },
  {
    src: require ('./../images/metamorphic2.png')
  },
  {
    src: require ('./../images/metamorphic3.png')
  }
];

const modalImages3 = [
  {
    src: require ('./../images/paperless1.png')
  },
  {
    src: require ('./../images/paperless2.png')
  },
  {
    src: require ('./../images/paperless3.png')
  }
];






class WorkSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      worknum: 0,
      workmax: 2,
      modalIsOpen: false
    }
  }

  toggleModal = () => {
    this.setState(state => ({
      modalIsOpen: !state.modalIsOpen
    }));
  };

  render() {

    const {modalIsOpen} = this.state;

    return (<div className='Work-Section'>
      {/* //needs to be the wrong way round so the header sits on the div */}
      <div className='Work-Section-Body'>
        <div className='Work-Section-Left'>
          <div className='Work-Section-Left-Arrow' onClick={() => {this.decreaseWorkNum()}}>
            <div className='Work-Section-Left-Arrow-Symbol'/>
          </div>
        </div>
        <div className='Work-Section-Middle'>
            {this.renderTitle()}
          <div className='Work-Section-Images'>
            <div className='Work-Section-Images-Left'>
              <div className='Image1-Wrapper' onClick = {() => {if(this.state.modalIsOpen === false){this.toggleModal()}}}>

                {this.renderModalGateway()}
               {this.renderImage1()}
              </div>
            </div>
            <div className='Work-Section-Images-Right'>
              <div className='Image2-Wrapper'>
               {this.renderImage2()}
              </div>
              <div className='Image3-Wrapper'>
               {this.renderImage3()}
              </div>
            </div>
          </div>
          {this.renderDescription()}


          {/*
            <div className = 'Work-Section-Arrows'>
              <div className = 'Work-Section-Arrow-Left' > . previous projects </div>
              <div className = 'Work-Section-Arrow-Right' > next projects .</div>
            </div>
            */
          }
        </div>

        <div className='Work-Section-Right'>
          <div className='Work-Section-Right-Arrow' onClick={() => {this.increaseWorkNum()}}>
            <div className='Work-Section-Right-Arrow-Symbol'/>
          </div>
        </div>

      </div>
      {this.renderHeader()}

    </div>);
  }

  renderTitle(){

    let title = '';
    let subtitle = '';
    let i = this.state.worknum;

    if(i===0){
      title = '1. Ensemble-C';
      subtitle = '[ Elucimed ]';
    }
    else if(i===1){
      title = '2. Metamorphic Website';
      subtitle = '[ Metamorphic Studios ]';
    }
    else{
      title = '3. Paperless';
      subtitle = '[ Metamorphic Studios ]';
    }

    return(
      <div className='Work-Section-Top'>
        <div className='Work-Section-Title'>
          {title}
        </div>
        <div className='Work-Section-Subtitle'>
          {subtitle}
        </div>
      </div>
    )
  }

  renderModalGateway(){

    let images = modalImages1;
    let i = this.state.worknum;

    if(i===0){
      images = modalImages1;
    }
    else if(i===1){
      images = modalImages2;
    }
    else{
      images = modalImages3;
    }

    const { modalIsOpen } = this.state;
    console.log(modalIsOpen);

    return (
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    );

  }

  renderImage1(){

    let i = this.state.worknum;

    if(i===0){
      return(
      <div className = 'Work-Section-Elucimed1' />
      );
    }
    else if(i===1){
      return(
      <div className = 'Work-Section-Metamorphic1' />
      );
    }
    else{
      return(
      <div className = 'Work-Section-Paperless2' />
      );
    }

  }

  renderImage2(){

    let i = this.state.worknum;

    if(i===0){
      return(
      <div className = 'Work-Section-Elucimed1' />
      );
    }
    else if(i===1){
      return(
      <div className = 'Work-Section-Metamorphic2' />
      );
    }
    else{
      return(
      <div className = 'Work-Section-Paperless3' />
      );
    }

  }

  renderImage3(){

    let i = this.state.worknum;

    if(i===0){
      return(
      <div className = 'Work-Section-Elucimed1' />
      );
    }
    else if(i===1){
      return(
      <div className = 'Work-Section-Metamorphic3' />
      );
    }
    else{
      return(
      <div className = 'Work-Section-Paperless1' />
      );
    }

  }

  increaseWorkNum() {
    let w = this.state.worknum;
    w = w + 1;

    if (w > this.state.workmax) {
      w = 0;
    }
    console.log(w);

    this.setState({worknum: w});
  }

  decreaseWorkNum() {
    let w = this.state.worknum;
    w = w - 1;

    if (w < 0) {
      w = this.state.workmax;
    }

    console.log(w);

    this.setState({worknum: w});
  }

  renderDescription() {

    let text = '';

    let text1 = 'Ensemble-C is a web-app designed to make nurse and doctor’s workflows simpler. ' + 'It was tailored specifically for Wellington Hospital to replace the paper charts that they were using. ' + 'This app would reduce human error, increase connectivity, and simplify data analysis. ' + 'I worked on Ensemble-C for 8 months during my time employed at Elucimed. ' + 'I designed and coded the front-end in React myself, frequently talking to medical professionals to ' + 'get feedback and discuss their needs. This project was full of interesting challenges, ' + 'often to do with how to present' + 'complex data in a user-friendly, and modern looking way.';

    let text2 = 'The Metamorphic Studios webpage was designed to be the homepage and first point of contact when wanting to find out more about the company. It was also an opportunity for me to re-design the branding, as the previous visual design was outdated and lacking. I decided on a few bold colors and a theme of change represented by the caterpillar transformation. The site was meant to appeal to other businesses as well as everyday users. I did all of the design for the site, working with a team of coders to get it up and running.';

    let text3 = 'PaperLess is a subscription based service for making creating and filling out web-forms simpler and streamlined. The application was designed for businesses such as construction companies to more simply create and distribute large numbers of forms for their employees to fill out. For this app I had to figure out how to efficiently lay out the UI so that the process was easily understood but complex enough to get exactly the type of form that you wanted. I also worked on a lot of the branding for the app myself. ';

    let w = this.state.worknum;

    if (w == 0) {
      text = text1;
    } else if (w == 1) {
      text = text2;
    } else {
      text = text3;
    }

    return (<div className='Work-Section-Description'>
      {text}
    </div>)
  }

  renderHeader() {
    return (<div className='Work-Section-Header'>
      <div className='Work-Section-Header-Text'>
        My Work
      </div>
      <div className='Work-Section-Header-Symbol'/>
    </div>);
  }

}

export default WorkSection;
