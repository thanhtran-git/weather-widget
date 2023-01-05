import React, {useState, useContext} from "react";
import {WeatherContext} from './FetchApi.jsx'
// import WeatherIcon from './WeatherIcon.jsx'
import './CSS/Style-Page-2.css'
import WeatherIcon from "./WeatherIcon.jsx";

const WidgetPage3 = () => {
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
            

                 <div className="weather-next">
                
                {WeatherIcon()}

                                       
                </div>

        
                        
                </div> )} 
    </>    
    )
}    
export default WidgetPage3;