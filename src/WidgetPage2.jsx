import React, {useState, useContext} from "react";
import {WeatherContext} from './FetchApi.jsx'
// import WeatherIcon from './WeatherIcon.jsx'
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
        <div className="widget-container">
                                                    {/* BERLIN" HEADER */}
            <div className="weather-header">
                <span className="weather-location">Berlin aktuell</span>
                <span className="todaysDate">{todaysDate.toLocaleDateString('de-de')}</span>
            </div>
            
                        <div className="weather-bottom">   
                                                    {/* Weather Icon + TempNow Container*/}
                 
                        <div className="weather-next">

                                                    {/* Forecast Next Day Container */}
                            <div className="">
                                <span className="title-data">Luftfeuchte</span>
                                {<img src="/weathericons/icon-feuchtigkeit-32.png" alt="humidityicon"/>}{' '}
                                <span className="humidity">
                                    {Math.round(data["10384"]?.forecast1?.humidity[0]/10)}%
                                    </span>{' '}

                                <span className="weather-next-temp tempMin">
                                </span>
                            </div>
                            
                                                    {/* Forecast Second Next Day Container */}
                            <div className="">
                                <span className="title-data">Regen</span>
                                {<img src="/weathericons/icon-regen-32.png" alt="regenIcon"/>}{' '}
                                <span className="precipitation">
                                    {data["10384"]?.forecast1?.precipitationTotal[currentHour]}mm/h
                                    </span>{' '}

                            </div>

                            <div className="">
                                <span className="title-data">Wind</span>
                                {<img src="/weathericons/icon-wind-32.png" alt="windIcon"/>}{' '}
                                <span className="precipitation">
                                    {(data["10384"]?.days[0]?.windSpeed/10)}km/h
                                    </span>{' '}

                            </div>
                        </div>
                        </div>
                        
            </div> )} 
    </>    
    )
}    
export default WidgetPage2;