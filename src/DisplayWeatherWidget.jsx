import React, {useState, useContext} from "react";
import {WeatherContext} from './FetchApi.jsx'
import WeatherIcon from './WeatherIcon.jsx'
import './CSS/index.css'
import {station_ID, currentHour, weekDay} from './Variables'

const DisplayWeatherWidget = () => {
    const [data] = useContext(WeatherContext)
    const [error] = useState(null);
    const todaysDate = new Date(data[station_ID]?.forecast1?.start)
    const date1 = new Date(data[station_ID]?.days[1]?.dayDate)
    const forecastNextDay = weekDay[date1.getDay()]
    const date2 = new Date(data[station_ID]?.days[2]?.dayDate)
    const forecastNextDay2 = weekDay[date2.getDay()]

    return(
     <>
        {error && (
            <h1>{`Fehler beim Laden von Daten. Error fetching data - ${error}`}</h1>
            )}
        <div className="widget-container">

                                                    {/* "WETTER | BERLIN" HEADER */}
            <div className="weather-header">
                <span className="title">Wetter</span> <span className="weather-location">Berlin   </span>
                <span className="todaysDate">{todaysDate.toLocaleDateString('de-de')}</span>
            </div>
            {data && (
                <div className="weather-bottom">   

                                                        {/* Weather Icon + TempNow Container*/}
                    <div className="weather-now">

                                                        {/* Weather Icon component */}
                        {WeatherIcon()}
                        <span className="weather-now-temp">
                            {Math.round(data[station_ID]?.forecast1.temperature[currentHour]/10)}°                                    
                        </span>
                    </div>                       
                <div className="weather-next">
                </div>

                                            {/* Forecast Next Day Container */}
                    <div className="weather-next-item">
                        <span className="weather-next-date">{forecastNextDay}</span>

                        <span className="weather-next-temp tempMax">
                            {Math.round(data[station_ID]?.days[1].temperatureMax/10)}°
                            </span> /{' '}

                        <span className="weather-next-temp tempMin">
                            {Math.round(data[station_ID]?.days[1].temperatureMin/10)}°</span>
                    </div>
                    
                                            {/* Forecast Second Next Day Container */}
                    <div className="weather-next-item">
                        <span className="weather-next-date">{forecastNextDay2}</span>

                        <span className="weather-next-temp tempMax">
                            {Math.round(data[station_ID]?.days[2].temperatureMax/10)}°
                            </span> /{' '}
                        <span className="weather-next-temp tempMin">
                            {Math.round(data[station_ID]?.days[2].temperatureMin/10)}°</span>
                    </div>
                </div>
            )} 
        </div> 
    </>    
    )
}    
export default DisplayWeatherWidget;