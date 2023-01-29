import React, {useState, useContext} from "react";
import {SearchContext} from './SearchContext.js'
// import WeatherIcon from './WeatherIcon.jsx'
import './CSS/Style-Page-2.css'
import WeatherIconForecast from "./WeatherIcon-Forecast.jsx";

const WidgetPage2 = () => {
    const {data, stationId, searchTerm} = useContext(SearchContext)
    const [error] = useState(null);
    const today = new Date()
    const currentHour = today.getHours()
    const todaysDate = new Date(data[stationId]?.forecast1?.start)

    return(
     <>
        {error && (
            <h1>{`Fehler beim Laden von Daten. Error fetching data - ${error}`}</h1>
            )}

        {data && (
        <div className="widget-container-p2">
                                                    {/* BERLIN" HEADER */}
            <div className="weather-header">
                <span className="weather-location">{searchTerm}</span>
                {"  "}{WeatherIconForecast(data[stationId]?.forecast1.icon[currentHour])}
                <span className="todaysDate">{todaysDate.toLocaleDateString('de-de')}</span>
            </div>
            
                        <div className="weather-details">

                                                    {/* Forecast Next Day Container */}
                            <div className="">
                                <span className="title-data">Luftfeuchte</span>
                                {<img src="/weathericons/icon-feuchtigkeit-32.png" alt="humidityicon"/>}{' '}
                                <span className="humidity">
                                    {Math.round(data[stationId]?.forecast1?.humidity[0]/10)}%
                                </span>{' '}
                            </div>
                            
                                                    
                            <div className="">
                                <span className="title-data">Regen</span>
                                {<img src="/weathericons/icon-regen-32.png" alt="regenIcon"/>}{' '}
                                <span className="precipitation">
                                    {data[stationId]?.forecast1?.precipitationTotal[currentHour]}mm
                                </span>{' '}
                            </div>

                            <div className="">
                                <span className="title-data">Wind</span>
                                {<img src="/weathericons/icon-wind-32.png" alt="windIcon"/>}{' '}
                                <span className="precipitation">
                                    {Math.round(data[stationId]?.days[0]?.windSpeed/10)}km/h
                                </span>{' '}
                            </div>
                            
                            <div className="">
                                <span className="title-data">Sonne</span>
                                {<img src="/weathericons/sun.png" alt="windIcon"/>}{' '}
                                <span className="precipitation">
                                    {Math.round(data[stationId]?.days[0]?.sunshine/10)}min
                                </span>{' '} 
                            </div>
                        </div>
                        
            </div> )} 
    </>    
    )
}    
export default WidgetPage2;