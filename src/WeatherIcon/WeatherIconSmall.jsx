import React, { useContext } from "react";
import { SearchContext } from "../Searchfunction/SearchContext.jsx";
import "../CSS/Wicon.css";
import { currentHour } from "../utils/Variables.js";

function WeatherIconSmall(condition, hours) {
  const { data, stationId } = useContext(SearchContext);

  let isDay = data[stationId]?.forecast1?.isDay[currentHour + hours];

  let icon = "";

  switch (condition) {
    case 1:
      isDay
        ? (icon = (
            <img
              src="/weatherIcons/sonne.png"
              className="wicon-small"
              alt="sonne"
            />
          ))
        : (icon = (
            <img
              src="/weatherIcons/mond.png"
              className="wicon-small"
              alt="mond"
            />
          ));
      break;
    case 2:
      isDay
        ? (icon = (
            <img
              src="/weatherIcons/sonne_woelkchen.png"
              className="wicon-small"
              alt="sonne-woelkchen"
            />
          ))
        : (icon = (
            <img
              src="/weatherIcons/mond_woelkchen.png"
              className="wicon-small"
              alt="mond-woelkchen"
            />
          ));
      break;
    case 3:
      isDay
        ? (icon = (
            <img
              src="/weatherIcons/sonne_wolke.png"
              className="wicon-small"
              alt="sonne-wolke"
            />
          ))
        : (icon = (
            <img
              src="/weatherIcons/mond_wolke.png"
              className="wicon-small"
              alt="mond-wolke"
            />
          ));
      break;
    case 4:
      icon = (
        <img
          src="/weatherIcons/wolke.png"
          className="wicon-small"
          alt="wolke"
        />
      );
      break;

    case 5:
    case 6:
      icon = (
        <img
          src="/weatherIcons/nebel.png"
          className="wicon-small"
          alt="mebel"
        />
      );
      break;

    case 7:
      icon = (
        <img
          src="/weatherIcons/wolke_regen_leicht.png"
          className="wicon-small"
          alt="wolke-regen-leicht"
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
          className="wicon-small"
          alt="wolke-regen"
        />
      );
      break;
    // case icon = <img src={require("./weatherIcons/.png")} alt="wIcon" />; break;
    case 14:
    case 15:
    case 16:
      icon = (
        <img
          src="/weatherIcons/schnee.png"
          className="wicon-small"
          alt="schnee"
        />
      );
      break;

    case 17:
      icon = (
        <img
          src="/weatherIcons/wolke_graupel.png"
          className="wicon-small"
          alt="wolke-graupel"
        />
      );
      break;
    default:
      icon = (
        <img
          src="/weatherIcons/wolke.png"
          className="wicon-small"
          alt="default-wolke"
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
export default WeatherIconSmall;
