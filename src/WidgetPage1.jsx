//This component is the main widget page displaying the location search bar, temps of today and next 2 days + weather icon
import React, {useState, useContext} from "react";
import {SearchContext} from './SearchContext.js'
import WeatherIcon from './WeatherIcon.jsx'
import './CSS/index.css'
import {currentHour, weekDay, weekdayToday} from './Variables'
import { SearchBar } from "./SeachBar.jsx";

const WidgetPage1 = () => {
    const {data, stationId, searchTerm} = useContext(SearchContext)
    const [error] = useState(null);
    const todaysDate = new Date(data[stationId]?.forecast1?.start)
    const date1 = new Date(data[stationId]?.days[1]?.dayDate)
    const forecastNextDay = weekDay[date1.getDay()]
    const date2 = new Date(data[stationId]?.days[2]?.dayDate)
    const forecastNextDay2 = weekDay[date2.getDay()]

    return (
     <>
        {error && (
            <h1>{`Fehler beim Laden von Daten. Error fetching data - ${error}`}</h1>
            )}
        <div className="widget-container">

                                                    {/* "WETTER | BERLIN" HEADER */}
            <div className="weather-header">
                { <span className="title">Wetter</span> /*<span className="weather-location">{searchTerm}   </span> */}
                <span className="todaysDate">{weekdayToday+' '}{todaysDate.toLocaleDateString('de-de')}</span>
            </div>

                                        {/* Search Bar  */}
            <div className="searchbar">
                {SearchBar()}
            </div>



            {data && (
                <div className="weather-bottom">   

                                        {/* Weather Icon + TempNow Container*/}
                    <div className="weather-now">

                                        {/* Weather Icon component */}
                        {WeatherIcon()}
                        <span className="weather-now-temp">
                            {Math.round(data[stationId]?.forecast1.temperature[currentHour]/10)}°                                    
                        </span>
                    </div>                       
                <div className="weather-next">
                </div>

                                        {/* Forecast Next Day Container */}
                    <div className="weather-next-item">
                        <span className="weather-next-date">{forecastNextDay}</span>

                        <span className="weather-next-temp tempMax">
                            {Math.round(data[stationId]?.days[1].temperatureMax/10)}°
                            </span> /{' '}

                        <span className="weather-next-temp tempMin">
                            {Math.round(data[stationId]?.days[1].temperatureMin/10)}°</span>
                    </div>
                    
                                        {/* Forecast Second Next Day Container */}
                    <div className="weather-next-item">
                        <span className="weather-next-date">{forecastNextDay2}</span>

                        <span className="weather-next-temp tempMax">
                            {Math.round(data[stationId]?.days[2].temperatureMax/10)}°
                            </span> /{' '}
                        <span className="weather-next-temp tempMin">
                            {Math.round(data[stationId]?.days[2].temperatureMin/10)}°</span>
                    </div>
                </div>
            )} 
        </div> 
    </>    
    )
}    
export default WidgetPage1;