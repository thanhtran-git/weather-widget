import React from "react";
import Carousel from 'react-elastic-carousel'
import {WeatherProvider} from "./FetchApi.jsx";
import DisplayWeatherWidget from "./DisplayWeatherWidget.jsx";
import WidgetPage2 from "./WidgetPage2.jsx";

export default function App () {

    return (
        <WeatherProvider>
            <Carousel>                
                <DisplayWeatherWidget/>
                <WidgetPage2/>
            </Carousel>
        </WeatherProvider>

    )

}

