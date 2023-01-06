import React from "react";
import './CSS/Wicon-Forecast.css'

const WeatherIconForecast = (condition) => {
    const today = new Date()
    const currentHour = today.getHours()
    const checkDayNight = currentHour >=6 && currentHour <=18 /*For cases 1,2 and 3, a sun or moon icon will be displayed depending on daytime. */
    let icon = ""

    switch(condition) {
        case 1 : checkDayNight ? icon = <img src="/weatherIcons/sonne.png" className="icon-fc" alt="wIcon" />
                    : icon = <img src="/weatherIcons/mond.png" className="icon-fc"  alt="wIcon" />; break;
        case 2 : checkDayNight ? icon =  <img src="/weatherIcons/sonne_woelkchen.png" className="icon-fc" alt="wIcon" />
                    : icon = <img src="/weatherIcons/mond_woelkchen.png" className="icon-fc"  alt="wIcon" />; break;
        case 3 : checkDayNight ? icon = icon = <img src="/weatherIcons/sonne_wolke.png" className="icon-fc" alt="wIcon" />
                    : icon = <img src="/weatherIcons/mond_wolke.png" className="icon-fc"  alt="wIcon" />; break;
        case 4  : icon = <img src="/weatherIcons/wolke.png" className="icon-fc" alt="wIcon" />; break;

        case 5 : case 6: icon = <img src="/weatherIcons/nebel.png" className="icon-fc" alt="wIcon" />; break;

        case 7 : icon = <img src="/weatherIcons/wolke_regen_leicht.png" className="icon-fc" alt="wIcon" />; break; 

        case 8 : case 9 : case 10 : case 11 : icon = <img src="/weatherIcons/wolke_regen.png" className="icon-fc" alt="wIcon" />; break;
        // case icon = <img src={require("./weatherIcons/.png")} className="img" alt="wIcon" />; break;
        case 14 : case 15 : case 16 : icon = <img src="/weatherIcons/schnee.png" className="icon-fc" alt="wIcon" />; break;

        case 17 : icon = <img src="/weatherIcons/wolke_graupel.png" className="icon-fc" alt="wIcon" />; break;
        default : icon = <img src="/weatherIcons/wolke.png" className="icon-fc" alt="wIcon" />; break;
    }
    return(
        <>
            <div>
                {icon}
            </div>
        </>
    )
}
export default WeatherIconForecast;

