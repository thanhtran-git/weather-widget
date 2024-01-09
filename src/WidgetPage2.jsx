import React, { useState, useContext } from "react";
import { SearchContext } from "./SearchContext.js";
import { formatTime } from "./Variables.jsx";
import { weekdayToday } from "./Variables.jsx";

function WidgetPage2() {
  const { data, stationId, searchTerm } = useContext(SearchContext);
  const [error] = useState(null);
  const today = new Date();
  const currentHour = today.getHours();
  const iconCurrentHour = data[stationId]?.forecast1.icon[currentHour];
  const todaysDate = new Date(data[stationId]?.forecast1?.start);
  const msSunrise = data[stationId]?.days[0]?.sunrise;
  const msSunset = data[stationId]?.days[0]?.sunset;
  const sunrise = formatTime(msSunrise);
  const sunset = formatTime(msSunset);

  return (
    <>
      {error && (
        <h1>{`Fehler beim Laden von Daten. Error fetching data - ${error}`}</h1>
      )}

      {data && (
        <div className="widget-container padding">
          {/* HEADER */}
          <section className="header">
            <span className="weather-location">{searchTerm}</span>
            <span className="Wicon-small"></span>
            <span className="todays-date">
              {weekdayToday + " "}
              {todaysDate.toLocaleDateString("de-de")}
            </span>
          </section>

          {/*Top row weather data*/}
          <section className="weather-data-row">
            <div>
              <span className="title-data">Luftfeuchte</span>
              <span className="data-value">
                {Math.round(data[stationId]?.forecast1?.humidity[0] / 10)}%
              </span>
            </div>

            <div>
              <span className="title-data">Regen</span>
              <span className="data-value">
                {data[stationId]?.forecast1?.precipitationTotal[currentHour]}mm
              </span>
            </div>

            <div>
              <span className="title-data">Wind</span>
              <span className="data-value">
                {Math.round(data[stationId]?.days[0]?.windSpeed / 10)}km/h
              </span>
            </div>

            <div>
              <span className="title-data">Sonne</span>
              <span className="data-value">
                {Math.round(data[stationId]?.days[0]?.sunshine / 10)}min
              </span>
            </div>
          </section>

          {/*Bottom row weather data*/}
          <section className="weather-data-row">
            <div>
              <span className="title-data">Taupunkt</span>
              <span className="data-value">
                {Math.round(data[stationId]?.forecast1?.dewPoint2m[0] / 10)}°C
              </span>
            </div>

            <div>
              <span className="title-data">Luftdruck</span>
              <span className="data-value">
                {data[stationId]?.forecast1?.surfacePressure[0] / 10} hPa
              </span>
            </div>

            <div>
              <img src="./sunrise-color-24px.png" alt="sunrise-icon" />
              <span className="data-value">{sunrise}</span>
            </div>

            <div>
              <img src="./sunset-blue.png" alt="sunset-icon" />
              <span className="data-value">{sunset}</span>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
export default WidgetPage2;
