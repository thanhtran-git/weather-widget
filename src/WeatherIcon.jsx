import React, { useContext } from "react";
import { SearchContext } from "./SearchContext.js";
import "./CSS/Wicon.css";

const WeatherIcon = () => {
  const { data, stationId } = useContext(SearchContext);
  const today = new Date();
  const currentHour = today.getHours();
  const sunrise = new Date(data[stationId]?.days[0]?.sunrise);
  const sunset = new Date(data[stationId]?.days[0]?.sunset);
  const checkDayNight =
    currentHour > sunrise.getHours() && currentHour < sunset.getHours();
  let icon = "";

  switch (data[stationId]?.forecast1?.icon[currentHour]) {
    case 1:
      checkDayNight
        ? (icon = (
            <img
              src="/weatherIcons/sonne.png"
              className="wicon-big"
              alt="weather_icon"
            />
          ))
        : (icon = (
            <img
              src="/weatherIcons/mond.png"
              className="wicon-big"
              alt="weather_icon"
            />
          ));
      break;

    case 2:
      checkDayNight
        ? (icon = (
            <img
              src="/weatherIcons/sonne_woelkchen.png"
              className="wicon-big"
              alt="weather_icon"
            />
          ))
        : (icon = (
            <img
              src="/weatherIcons/mond_woelkchen.png"
              className="wicon-big"
              alt="weather_icon"
            />
          ));
      break;

    case 3:
      checkDayNight
        ? (icon = (
            <img
              src="/weatherIcons/sonne_wolke.png"
              className="wicon-big"
              alt="weather_icon"
            />
          ))
        : (icon = (
            <img
              src="/weatherIcons/mond_wolke.png"
              className="wicon-big"
              alt="weather_icon"
            />
          ));
      break;

    case 4:
      icon = (
        <img
          src="/weatherIcons/wolke.png"
          className="wicon-big"
          alt="weather_icon"
        />
      );
      break;

    case 5:
    case 6:
      icon = (
        <img
          src="/weatherIcons/nebel.png"
          className="wicon-big"
          alt="weather_icon"
        />
      );
      break;

    case 7:
      icon = (
        <img
          src="/weatherIcons/wolke_regen_leicht.png"
          className="wicon-big"
          alt="weather_icon"
        />
      );
      break;

    case 8:
    case 9:
    case 10:
    case 11:
      icon = (
        <img
          src="/weatherIcons/wolke_regen.png"
          className="wicon-big"
          alt="weather_icon"
        />
      );
      break;
    // case icon = <img src={require("./weatherIcons/.png")} alt="weather_icon" />; break;
    case 14:
    case 15:
    case 16:
      icon = (
        <img
          src="/weatherIcons/schnee.png"
          className="wicon-big"
          alt="weather_icon"
        />
      );
      break;

    case 17:
      icon = (
        <img
          src="/weatherIcons/wolke_graupel.png"
          className="wicon-big"
          alt="weather_icon"
        />
      );
      break;

    default:
      icon = (
        <img
          src="/weatherIcons/wolke.png"
          className="wicon-big"
          alt="weather_icon"
        />
      );
      break;
  }
  return (
    <>
      <div>{icon}</div>
    </>
  );
};
export default WeatherIcon;
