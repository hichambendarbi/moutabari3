import React, { Component } from 'react';
import bgImg from "./Car1.jpg";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    src: '${bgImg}'
  },


];

class CarouselFacebook extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    return (
        <div style={{textAlign:"center",marginTop:"20px"}}>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{height:"200px",textAlign:"center"}}>
          <div className="carousel-inner" style={{height:"400px", textAlign:"center"}} >
            <div className="carousel-item active"   style={{textAlign:"center"}} >
              <img className="d-block w-100" src={bgImg} alt="First slide"/>
            </div>
            <div className="carousel-item" style={{textAlign:"center"}}>
              <img className="d-block w-100" src={bgImg} alt="Second slide"/>
            </div>
            <div className="carousel-item" style={{textAlign:"center"}}>
              <img className="d-block w-100" src={bgImg} alt="Third slide"/>
            </div>C
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default CarouselFacebook;
