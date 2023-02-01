import React from "react";
import {SearchProvider} from "./SearchContext";
import WidgetPage1 from "./WidgetPage1.jsx";
import WidgetPage2 from "./WidgetPage2.jsx";
// import WidgetPage4 from "./WidgetPage3.jsx";
import MyCarousel from "./MyCarousel.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CSS/App.css'


export default function App () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchMove: false
    }

    return (
        <>
        <SearchProvider >
            <Slider {...settings} className="container-slider">

                <WidgetPage1 />
                <WidgetPage2 />   


            </Slider>
         </SearchProvider>

            {/* <MyCarousel />  */}
        </>
    )

}
