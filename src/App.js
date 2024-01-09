import React from "react";
import SearchProvider from "./Searchfunction/SearchContext";
import WidgetPage1 from "./Widgetpages/WidgetPage1.jsx";
import WidgetPage2 from "./Widgetpages/WidgetPage2.jsx";
import WidgetPage3 from "./Widgetpages/WidgetPage3.jsx";
import WidgetPage4 from "./Widgetpages/WidgetPage4.jsx";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CSS/App.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: false,
  };

  return (
    <>
      <SearchProvider>
        <Slider {...settings} className="container-slider">
          <WidgetPage1 />
          <WidgetPage2 />
          <WidgetPage3 />
          <WidgetPage4 />
        </Slider>
      </SearchProvider>
    </>
  );
}
export default App;
