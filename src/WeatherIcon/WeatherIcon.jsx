import React, { useContext } from "react";
import { SearchContext } from "../Searchfunction/SearchContext.jsx";
import "../CSS/Wicon.css";
import { currentHour } from "../utils/Variables.js";

function WeatherIcon({ condition, hours, size = "big" }) {
  const { data, stationId } = useContext(SearchContext);

  const isDay = hours === null
    ? true
    : hours === undefined
    ? data[stationId]?.forecast1?.isDay[currentHour]
    : data[stationId]?.forecast1?.isDay[currentHour + hours];

  const iconClass = size === "big" ? "wicon-big" : "wicon-small";

  const iconMap = {
    1: isDay ? "sonne.png" : "mond.png",
    2: isDay ? "sonne_woelkchen.png" : "mond_woelkchen.png",
    3: isDay ? "sonne_wolke.png" : "mond_wolke.png",
    4: "wolke.png",
    5: "nebel.png",
    6: "nebel.png",
    7: "wolke_regen_leicht.png",
    8: "wolke_regen.png",
    9: "wolke_regen.png",
    10: "wolke_regen.png",
    11: "wolke_regen.png",
    14: "schnee.png",
    15: "schnee.png",
    16: "schnee.png",
    17: "wolke_graupel.png",
  };

  const iconFile = iconMap[condition] || "wolke.png";
  const altText = iconFile.replace(".png", "").replace(/_/g, "-");

  return (
    <div>
      <img src={`/weatherIcons/${iconFile}`} className={iconClass} alt={altText} />
    </div>
  );
}

export default WeatherIcon;
