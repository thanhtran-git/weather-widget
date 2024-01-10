import React, { useContext } from "react";
import { SearchContext } from "../Searchfunction/SearchContext.jsx";
import { weekdayToday } from "../utils/Variables.js";
import WeatherIconSmall from "../WeatherIcon/WeatherIconSmall.jsx";

function WidgetPage3() {
  const { data, stationId, searchTerm } = useContext(SearchContext);
  const today = new Date();
  const currentHour = today.getHours();
  const todaysDate = new Date(data[stationId]?.forecast1?.start);

  const WeatherBox = (hour) => (
    <div className="weather-box">
      {currentHour < 23 ? currentHour + hour + ":00" : hour - 23 + ":00"}
      <span className="wicon-small">
        {WeatherIconSmall(data[stationId]?.forecast1?.icon[currentHour + hour])}
      </span>
      {Math.round(
        data[stationId]?.forecast1.temperature[currentHour + hour] / 10
      )}
      °
    </div>
  );

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
