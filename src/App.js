import React from "react";
import {WeatherProvider} from "./FetchApi.jsx";
import DisplayWeatherWidget from "./DisplayWeatherWidget.jsx";
import WidgetPage2 from "./WidgetPage2.jsx";

export default function App () {

    return (
        <WeatherProvider>
            
                <DisplayWeatherWidget/>
                <WidgetPage2/>

        </WeatherProvider>

    )

}

