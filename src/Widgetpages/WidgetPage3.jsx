import React, { useContext } from "react";
import { SearchContext } from "../Searchfunction/SearchContext.jsx";
import { weekdayToday } from "../utils/Variables.js";
import WeatherIconSmall from "../WeatherIcon/WeatherIconSmall.jsx";

function WidgetPage3() {
  const { data, stationId, searchTerm } = useContext(SearchContext);
  const today = new Date();
  const currentHour = today.getHours();
  const todaysDate = new Date(data[stationId]?.forecast1?.start);

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
            <div className="weather-box">
              {currentHour < 23 ? currentHour + 1 + ":00" : "00:00"}
              <span className="wicon-small">
                {WeatherIconSmall(
                  data[stationId]?.forecast1?.icon[currentHour + 1]
                )}
              </span>
              {Math.round(
                data[stationId]?.forecast1.temperature[currentHour + 1] / 10
              )}
              °
            </div>

            <div className="weather-box">
              {currentHour < 23 ? currentHour + 2 + ":00" : "01:00"}
              {WeatherIconSmall(
                data[stationId]?.forecast1?.icon[currentHour + 2]
              )}
              {Math.round(
                data[stationId]?.forecast1.temperature[currentHour + 2] / 10
              )}
              °
            </div>

            <div className="weather-box">
              {currentHour < 23 ? currentHour + 3 + ":00" : "02:00"}
              {WeatherIconSmall(
                data[stationId]?.forecast1?.icon[currentHour + 3]
              )}
              {Math.round(
                data[stationId]?.forecast1.temperature[currentHour + 3] / 10
              )}
              °
            </div>

            <div className="weather-box">
              {currentHour < 23 ? currentHour + 4 + ":00" : "03:00"}
              {WeatherIconSmall(
                data[stationId]?.forecast1?.icon[currentHour + 4]
              )}
              {Math.round(
                data[stationId]?.forecast1.temperature[currentHour + 4] / 10
              )}
              °
            </div>

            <div className="weather-box">
              {currentHour < 23 ? currentHour + 5 + ":00" : "04:00"}
              {WeatherIconSmall(
                data[stationId]?.forecast1?.icon[currentHour + 5]
              )}
              {Math.round(
                data[stationId]?.forecast1.temperature[currentHour + 5] / 10
              )}
              °
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default WidgetPage3;
