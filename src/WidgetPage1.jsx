//This component is the main widget page displaying the location search bar, temps of today and next 2 days + weather icon
import React, { useState, useContext } from "react";
import { SearchContext } from "./SearchContext.js";
import WeatherIcon from "./WeatherIcon/WeatherIcon.jsx";
import { currentHour, weekDay, weekdayToday, todaysDate } from "./Variables";
import { SearchBar } from "./SeachBar.jsx";

const WidgetPage1 = () => {
  const { data, stationId } = useContext(SearchContext);
  const [error] = useState(null);
  // const todaysDate = new Date(data[stationId]?.forecast1?.start);
  const date1 = new Date(data[stationId]?.days[1]?.dayDate);
  const nextWeekDay = weekDay[date1.getDay()];
  const date2 = new Date(data[stationId]?.days[2]?.dayDate);
  const nextWeekDay2 = weekDay[date2.getDay()];
  const todaysDate = new Date(data[stationId]?.forecast1?.start);

  return (
    <>
      {error && (
        <h1>{`Fehler beim Laden von Daten. Error fetching data - ${error}`}</h1>
      )}
      <div className="widget-container">
        <section className="header">
          <span className="title">Wetter</span>
          <div className="searchbar">{SearchBar()}</div>
        </section>
        {/* <span className="todaysDate">{weekdayToday + " "}</span>
        {todaysDate.toLocaleDateString("de-de")} */}

        {data && (
          <section className="weather-bottom">
            {/* TempNow Container + Weather Icon*/}
            <div className="weather-now">
              {/* Weather Icon component */}
              {WeatherIcon()}
              {Math.round(
                data[stationId]?.forecast1.temperature[currentHour] / 10
              )}
              °
            </div>

            {/* Forecast Tomorrow Container */}
            <div className="next-day-forecast">
              <span className="next-weekday">{nextWeekDay}</span>
              <span className="temp-forecast temp-max">
                {Math.round(data[stationId]?.days[1].temperatureMax / 10)}°
              </span>{" "}
              /{" "}
              <span className="temp-forecast temp-min">
                {Math.round(data[stationId]?.days[1].temperatureMin / 10)}°
              </span>
            </div>

            {/* Forecast Day After Tomorrow Container */}
            <div className="next-day-forecast">
              <span className="next-weekday">{nextWeekDay2}</span>
              <span className="temp-forecast temp-max">
                {Math.round(data[stationId]?.days[2].temperatureMax / 10)}°
              </span>{" "}
              /{" "}
              <span className="temp-forecast temp-min">
                {Math.round(data[stationId]?.days[2].temperatureMin / 10)}°
              </span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};
export default WidgetPage1;
