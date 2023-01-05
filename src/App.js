import React from "react";
import {WeatherProvider} from "./FetchApi.jsx";
import DisplayWeatherWidget from "./DisplayWeatherWidget.jsx";
import MyCarousel from "./MyCarousel.jsx";


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
