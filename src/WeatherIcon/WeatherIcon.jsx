import React, { useContext } from "react";
import { SearchContext } from "../Searchfunction/SearchContext.jsx";
import { currentHour } from "../utils/Variables.js";

function WeatherIcon() {
  const { data, stationId } = useContext(SearchContext);

  // console.log(currentHour);
  let isDay = data[stationId]?.forecast1?.isDay[currentHour];
  console.log(isDay);
  let icon = "";

  switch (data[stationId]?.forecast1?.icon[currentHour]) {
    case 1:
      isDay
        ? (icon = (
            <img
              src={`${process.env.PUBLIC_URL}/weatherIcons/sonne.png`}
              className="wicon-big"
              alt="weather_icon"
            />
          ))
        : (icon = (
            <img
              src={`${process.env.PUBLIC_URL}/weatherIcons/mond.png`}
              className="wicon-big"
              alt="weather_icon"
            />
          ));
      break;

    case 2:
      isDay
        ? (icon = (
            <img
              src={`${process.env.PUBLIC_URL}/weatherIcons/sonne_woelkchen.png`}
              className="wicon-big"
              alt="weather_icon"
            />
          ))
        : (icon = (
            <img
              src={`${process.env.PUBLIC_URL}/weatherIcons/mond_woelkchen.png`}
              className="wicon-big"
              alt="weather_icon"
            />
          ));
      break;

    case 3:
      isDay
        ? (icon = (
            <img
              src={`${process.env.PUBLIC_URL}/weatherIcons/sonne_wolke.png`}
              className="wicon-big"
              alt="weather_icon"
            />
          ))
        : (icon = (
            <img
              src={`${process.env.PUBLIC_URL}/weatherIcons/mond_wolke.png`}
              className="wicon-big"
              alt="weather_icon"
            />
          ));
      break;

    case 4:
      icon = (
        <img
          src={`${process.env.PUBLIC_URL}/weatherIcons/wolke.png`}
          className="wicon-big"
          alt="weather_icon"
        />
      );
      break;

    case 5:
    case 6:
      icon = (
        <img
          src={`${process.env.PUBLIC_URL}/weatherIcons/nebel.png`}
          className="wicon-big"
          alt="weather_icon"
        />
      );
      break;

    case 7:
      icon = (
        <img
          src={`${process.env.PUBLIC_URL}/weatherIcons/wolke_regen_leicht.png`}
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
          src={`${process.env.PUBLIC_URL}/weatherIcons/wolke_regen.png`}
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
          src={`${process.env.PUBLIC_URL}/weatherIcons/schnee.png`}
          className="wicon-big"
          alt="weather_icon"
        />
      );
      break;

    case 17:
      icon = (
        <img
          src={`${process.env.PUBLIC_URL}/weatherIcons/wolke_graupel.png`}
          className="wicon-big"
          alt="weather_icon"
        />
      );
      break;

    default:
      icon = (
        <img
          src={`${process.env.PUBLIC_URL}/weatherIcons/wolke.png`}
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
}
export default WeatherIcon;
