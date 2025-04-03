// Forecast next 5 days
import React, { useContext } from "react";
import { SearchContext } from "../Searchfunction/SearchContext.jsx";
import { weekDay } from "../utils/Variables.js";
import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx";

function WidgetPage4() {
  const { data, stationId } = useContext(SearchContext);
  
  const getWeatherBox = (dayIndex) => {
    const date = new Date(data[stationId]?.days[dayIndex]?.dayDate);
    const nextWeekDay = weekDay[date.getDay()];
    const icon = data[stationId]?.days[dayIndex].icon;
    const temperatureMax = Math.round(
      data[stationId]?.days[dayIndex].temperatureMax / 10
    );
    return (
      <div className="weather-box">
        {nextWeekDay}
        <span className="wicon-small">
          <WeatherIcon condition={icon} hours={null} size="small" />
        </span>
        {temperatureMax}°
      </div>
    );
  };

  const weatherBoxes = [1, 2, 3, 4, 5].map((dayIndex) =>
    getWeatherBox(dayIndex)
  );
  return (
    <>
      {data && (
        <div className="widget-container padding">
          <section className="header">
            <span className="weather-location">vorschau</span>
            <span className="todays-date">
              {weekDay[new Date(data[stationId]?.days[1]?.dayDate).getDay()]}
              {" - "}
              {weekDay[new Date(data[stationId]?.days[5]?.dayDate).getDay()]}
            </span>
          </section>
          {/* Forecast next 5 days container */}
          <section className="weather-box-container">{weatherBoxes}</section>
        </div>
      )}
    </>
  );
}

export default WidgetPage4;
