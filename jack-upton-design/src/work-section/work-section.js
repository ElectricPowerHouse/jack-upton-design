import React, {Component} from 'react';
import './work-section.css';

import Carousel, {Modal, ModalGateway} from 'react-images';


const image1 = require ('./mm.png');

const images = [
  {
    src: require ('./../images/elucimed.png')
  },
  {
    src: "https://via.placeholder.com/150"
  },
  {
    src: 'https://via.placeholder.com/350'
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

    console.log(images);
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
          <div className='Work-Section-Top'>
            <div className='Work-Section-Title'>
              1. Ensemble-C
            </div>
            <div className='Work-Section-Subtitle'>
              [Elucimed]
            </div>
          </div>
          <div className='Work-Section-Images'>
            <div className='Work-Section-Images-Left'>
              <div className='Image1-Wrapper' onClick = {() => {if(this.state.modalIsOpen === false){this.toggleModal()}}}>

                {this.renderModalGateway()}
                <Carousel views = {images} />

                {/* <div className = 'Work-Section-Image1' /> */}
              </div>
            </div>
            <div className='Work-Section-Images-Right'>
              <div className='Image2-Wrapper'>
                <div className='Work-Section-Image2'/>
              </div>
              <div className='Image3-Wrapper'>
                <div className='Work-Section-Image3'/>
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

  renderModalGateway(){

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

    let text2 = 'zeep';

    let text3 = 'zoop';

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
