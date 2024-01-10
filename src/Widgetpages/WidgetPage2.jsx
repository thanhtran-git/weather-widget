import React, { useState, useContext } from "react";
import { SearchContext } from "../Searchfunction/SearchContext.jsx";
import { formatTime, weekdayToday, currentHour } from "../utils/Variables.js";

function WidgetPage2() {
  const { data, stationId, searchTerm } = useContext(SearchContext);
  const [error] = useState(null);

  const renderDataItem = (title, value) => (
    <div>
      <span className="title-data">{title}</span>
      <span className="data-value">{value}</span>
    </div>
  );

  const renderSunIcon = (iconSrc, value) => (
    <div>
      <img src={iconSrc} alt="sun-icon" />
      <span className="data-value">{value}</span>
    </div>
  );

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
              {new Date(data[stationId]?.forecast1?.start).toLocaleDateString(
                "de-de"
              )}
            </span>
          </section>

          {/*Top row weather data*/}
          <section className="weather-data-row">
            {renderDataItem(
              "Luftfeuchte",
              `${Math.round(data[stationId]?.forecast1?.humidity[0] / 10)}%`
            )}
            {renderDataItem(
              "Regen",
              `${data[stationId]?.forecast1?.precipitationTotal[currentHour]}mm`
            )}
            {renderDataItem(
              "Wind",
              `${Math.round(data[stationId]?.days[0]?.windSpeed / 10)}km/h`
            )}
            {renderDataItem(
              "Sonne",
              `${Math.round(data[stationId]?.days[0]?.sunshine / 10)}min`
            )}
          </section>

          {/*Bottom row weather data*/}
          <section className="weather-data-row">
            {renderDataItem(
              "Taupunkt",
              `${Math.round(data[stationId]?.forecast1?.dewPoint2m[0] / 10)}°C`
            )}
            {renderDataItem(
              "Luftdruck",
              `${data[stationId]?.forecast1?.surfacePressure[0] / 10} hPa`
            )}
            {renderSunIcon(
              "./sunrise-color-24px.png",
              formatTime(data[stationId]?.days[0]?.sunrise)
            )}
            {renderSunIcon(
              "./sunset-blue.png",
              formatTime(data[stationId]?.days[0]?.sunset)
            )}
          </section>
        </div>
      )}
    </>
  );
}

export default WidgetPage2;
