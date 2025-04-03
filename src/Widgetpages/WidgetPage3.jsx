import React, { useContext } from "react";
import { SearchContext } from "../Searchfunction/SearchContext.jsx";
import { weekdayToday, currentHour } from "../utils/Variables.js";
import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx";

function WidgetPage3() {
  const { data, stationId, searchTerm } = useContext(SearchContext);
  const todaysDate = new Date(data[stationId]?.forecast1?.start);

  const WeatherBox = (hour) => {
    const forecastHour = (currentHour + hour) % 24;
    
    return (
      <div className="weather-box">
        {forecastHour + ":00"}
        <span className="wicon-small">
          <WeatherIcon 
            condition={data[stationId]?.forecast1?.icon[currentHour + hour]} 
            hours={hour}
            size="small" 
          />
        </span>
        {Math.round(
          data[stationId]?.forecast1.temperature[currentHour + hour] / 10
        )}
        °
      </div>
    );
  };

  return (
    <>
      {data && (
        <div className="widget-container padding">
          <section className="header">
            <span className="weather-location">{searchTerm}</span>

            <span className="todays-date">
              {weekdayToday + " "}
              {todaysDate.toLocaleDateString("de-de")}
            </span>
          </section>

          <section className="weather-box-container">
            {WeatherBox(1)}
            {WeatherBox(2)}
            {WeatherBox(3)}
            {WeatherBox(4)}
            {WeatherBox(5)}
          </section>
        </div>
      )}
    </>
  );
}

export default WidgetPage3;
