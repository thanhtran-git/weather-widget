// Forecast next 5 days
import React, { useContext } from "react";
import { SearchContext } from "../Searchfunction/SearchContext.jsx";
import { weekDay } from "../utils/Variables.js";
import WeatherIconSmall from "../WeatherIcon/WeatherIconSmall.jsx";

function WidgetPage4() {
  const { data, stationId } = useContext(SearchContext);

  const date1 = new Date(data[stationId]?.days[1]?.dayDate);
  const nextWeekDay = weekDay[date1.getDay()];
  const date2 = new Date(data[stationId]?.days[2]?.dayDate);
  const nextWeekDay2 = weekDay[date2.getDay()];
  const date3 = new Date(data[stationId]?.days[3]?.dayDate);
  const nextWeekDay3 = weekDay[date3.getDay()];
  const date4 = new Date(data[stationId]?.days[4]?.dayDate);
  const nextWeekDay4 = weekDay[date4.getDay()];
  const date5 = new Date(data[stationId]?.days[5]?.dayDate);
  const nextWeekDay5 = weekDay[date5.getDay()];

  return (
    <>
      {data && (
        <div className="widget-container padding">
          <section className="header">
            <span className="weather-location">vorschau</span>
            <span className="todays-date">
              {nextWeekDay + " - " + nextWeekDay5}
            </span>
          </section>
          {/* Forecast next 5 days container */}
          <section className="weather-box-container">
            <div className="weather-box">
              {nextWeekDay}
              <span className="wicon-small">
                {WeatherIconSmall(data[stationId]?.days[1].icon, 1)}
              </span>
              {Math.round(data[stationId]?.days[1].temperatureMax / 10)}°
            </div>

            <div className="weather-box">
              {nextWeekDay2}
              {WeatherIconSmall(data[stationId]?.days[2].icon, 2)}
              {Math.round(data[stationId]?.days[2].temperatureMax / 10)}°
            </div>

            <div className="weather-box">
              {nextWeekDay3}
              {WeatherIconSmall(data[stationId]?.days[3].icon, 3)}
              {Math.round(data[stationId]?.days[3].temperatureMax / 10)}°
            </div>

            <div className="weather-box">
              {nextWeekDay4}
              {WeatherIconSmall(data[stationId]?.days[4].icon, 4)}
              {Math.round(data[stationId]?.days[4].temperatureMax / 10)}°
            </div>

            <div className="weather-box">
              {nextWeekDay5}
              {WeatherIconSmall(data[stationId]?.days[5].icon, 5)}
              {Math.round(data[stationId]?.days[5].temperatureMax / 10)}°
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default WidgetPage4;
