import React, {useState, useContext} from "react";
import {WeatherContext} from './FetchApi.jsx'
import WeatherIconForecast from './WeatherIcon-Forecast.jsx'
import WeatherIcon from "./WeatherIcon.jsx";
import { station_ID } from "./Variables.jsx";
import './CSS/Style-Page-2.css'

const WidgetPage2 = () => {
    const [data] = useContext(WeatherContext)
    const [error] = useState(null);
    const today = new Date()
    const currentHour = today.getHours()
    const todaysDate = new Date(data["10384"]?.forecast1?.start)

    return(
     <>
        {error && (
            <h1>{`Fehler beim Laden von Daten. Error fetching data - ${error}`}</h1>
            )}

        {data && (
        <div className="widget-container-p2">
                                                    {/* BERLIN" HEADER */}
            <div className="weather-header">
            {WeatherIconForecast(data[station_ID]?.forecast1.icon[currentHour])}


                <span className="weather-location">Die nächsten Tage</span>
                <span className="todaysDate">{todaysDate.toLocaleDateString('de-de')}</span>
            </div>
            
                        <div className="weather-bottom">   
                                                    {/* Weather Icon + TempNow Container*/}
                                                 
                        <div className="weather-next">

                                                    {/* Forecast Next Day Container */}
                            <div className="test">
                                <span className="title-data"></span>
  
                                                   
                                <span className="humidity">

                                    </span>{' '}

                                <span className="weather-next-temp tempMin">
                                </span>
                            </div>
                            
                                                    {/* Forecast Second Next Day Container */}
                            <div className="">
                                <span className="title-data"></span>

                                <span className="precipitation">

                                    </span>{' '}

                            </div>

                            <div className="">
                                <span className="title-data"></span>

                                <span className="precipitation">

                                    </span>{' '}

                            </div>
                        </div>
                        </div>
                        
            </div> )} 
    </>    
    )
}    
export default WidgetPage2;