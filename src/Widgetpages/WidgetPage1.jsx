import React, { useState, useContext } from "react";
import { SearchContext } from "../Searchfunction/SearchContext.jsx";
import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx";
import { currentHour, weekDay } from "../utils/Variables";
import SearchBar from "../Searchfunction/SeachBar.jsx";

function WidgetPage1() {
  const { data, stationId } = useContext(SearchContext);
  const [error] = useState(null);

  const renderForecastDay = (index) => {
    const date = new Date(data[stationId]?.days[index]?.dayDate);
    const nextWeekDay = weekDay[date.getDay()];

    return (
      <div className="next-day-forecast" key={index}>
        <span className="next-weekday">{nextWeekDay}</span>
        <span className="temp-forecast temp-max">
          {Math.round(data[stationId]?.days[index].temperatureMax / 10)}°
        </span>{" "}
        /{" "}
        <span className="temp-forecast temp-min">
          {Math.round(data[stationId]?.days[index].temperatureMin / 10)}°
        </span>
      </div>
    );
  };

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
            {renderForecastDay(1)}

            {/* Forecast Day After Tomorrow Container */}
            {renderForecastDay(2)}
          </section>
        )}
      </div>
    </>
  );
}

export default WidgetPage1;
