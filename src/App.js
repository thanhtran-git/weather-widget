import React from "react";
import {WeatherProvider} from "./FetchApi.jsx";
import DisplayWeatherWidget from "./DisplayWeatherWidget.jsx";
import WidgetPage2 from "./WidgetPage2.jsx";
import WidgetPage3 from "./WidgetPage3.jsx";
import WidgetPage4 from "./WidgetPage4.jsx";
import MyCarousel from "./MyCarousel.jsx";

export default function App () {

    return (
        <WeatherProvider>
             {/* <MyCarousel />  */}
             <DisplayWeatherWidget />
            <WidgetPage2 />          
            <WidgetPage4 /> 
            <WidgetPage3 />


        </WeatherProvider>

    )

}
