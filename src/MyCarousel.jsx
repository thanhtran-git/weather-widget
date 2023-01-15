import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import DisplayWeatherWidget from './DisplayWeatherWidget';
import WidgetPage2 from './WidgetPage2';

import WidgetPage4 from './WidgetPage3'

function MyCarousel() {
  return (
    <Carousel interval={null}>
      <Carousel.Item >
        <DisplayWeatherWidget />
      </Carousel.Item>

      <Carousel.Item>
        <WidgetPage2 />
      </Carousel.Item>


      <Carousel.Item>
        <WidgetPage4/>
      </Carousel.Item>

      

    </Carousel>
  );
}

export default MyCarousel;