import React, { useContext } from "react";
import { SearchContext } from "./SearchContext.js";
import { weekdayToday } from "./Variables.jsx";
import WeatherIconSmall from "./WeatherIconSmall";
import "./CSS/StylePage3.css";

const WidgetPage3 = () => {
  const { data, stationId, searchTerm } = useContext(SearchContext);
  const today = new Date();
  const currentHour = today.getHours();
  const todaysDate = new Date(data[stationId]?.forecast1?.start);

  return (
    <>
      {data && (
        <div className="widget-container-p3">
          <div className="header">
            <span className="weather-location">{searchTerm}</span>

            <span className="todaysDate">
              {weekdayToday + " "}
              {todaysDate.toLocaleDateString("de-de")}
            </span>
          </div>

          <div className="weather-box-container">
            <div className="weather-box">
              {"9:00"}
              {WeatherIconSmall(data[stationId]?.forecast1?.icon[9])}
              {console.log(data[stationId]?.forecast1.isDay[currentHour + 1])}
              {Math.round(
                data[stationId]?.forecast1.temperature[currentHour + 1] / 10
              )}
              °
            </div>

            <div className="weather-box">
              {currentHour + 2 + ":00"}
              {WeatherIconSmall(
                data[stationId]?.forecast1?.icon[currentHour + 2]
              )}
              {Math.round(
                data[stationId]?.forecast1.temperature[currentHour + 2] / 10
              )}
              °
            </div>

            <div className="weather-box">
              {currentHour + 3 + ":00"}
              {WeatherIconSmall(
                data[stationId]?.forecast1?.icon[currentHour + 3]
              )}
              {Math.round(
                data[stationId]?.forecast1.temperature[currentHour + 3] / 10
              )}
              °
            </div>

            <div className="weather-box">
              {currentHour + 4 + ":00"}
              {WeatherIconSmall(
                data[stationId]?.forecast1?.icon[currentHour + 4]
              )}
              {Math.round(
                data[stationId]?.forecast1.temperature[currentHour + 4] / 10
              )}
              °
            </div>

            <div className="weather-box">
              {currentHour + 5 + ":00"}
              {WeatherIconSmall(
                data[stationId]?.forecast1?.icon[currentHour + 5]
              )}
              {Math.round(
                data[stationId]?.forecast1.temperature[currentHour + 5] / 10
              )}
              °
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WidgetPage3;
