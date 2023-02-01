//This component is used to slide through the widget pages on button click
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import WidgetPage1 from './WidgetPage1';
import WidgetPage2 from './WidgetPage2';

function MyCarousel() {
  return (
    <Carousel interval={null}>
      <Carousel.Item >
        <WidgetPage1 />
      </Carousel.Item>

      <Carousel.Item>
        <WidgetPage2 />
      </Carousel.Item>

    </Carousel>
  );
}

export default MyCarousel;