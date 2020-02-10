import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
    // CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import './CarouselPostCss.css'

const items = [
  {
    id: 1,
    altText: 'votre poste sera publié directement sans vérification de notre équipe MOUTABARI3 ! Soit Resonsable et Serieux.',
    caption: ' DONNEUR OU RECEVEUR ?'
  },
  // {
  //   id: 2,
  //   altText: 'Il suffit de poster sur MOUTABARI3 et de rester a ecoute des demandes.',
  //   caption: '! LA PROMESSE DE DON',
  // },
  // {
  //   id: 3,
  //   altText: 'Il suffit de poster sur MOUTABARI3 et de rester a ecoute des demandes.',
  //   caption: '! LA RESPOMSABILTE ',
  // }

];

const CarouselPost = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption className="text-danger" captionText={item.altText} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height:  90px;
              background: #D72433;
              padding: 20px ;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
      </Carousel>
    </div>
  );
}

export default CarouselPost ;