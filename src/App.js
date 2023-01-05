import React from "react";
import {WeatherProvider} from "./FetchApi.jsx";
import DisplayWeatherWidget from "./DisplayWeatherWidget.jsx";
// import MyCarousel from "./MyCarousel.jsx";
import WidgetPage2 from "./WidgetPage2.jsx";
import WidgetPage3 from "./WidgetPage3.jsx";

export default function App () {

    return (
        <WeatherProvider>
              
            <DisplayWeatherWidget/>
            <WidgetPage2/>
            <WidgetPage3 />


        </WeatherProvider>

    )

}
