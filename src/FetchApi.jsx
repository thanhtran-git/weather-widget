import React, {useState, useEffect, createContext} from "react";

export const WeatherContext = createContext()

export const WeatherProvider = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const apiUrl = "https://dwd.api.proxy.bund.dev/v30/stationOverviewExtended?stationIds=433,10384"

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await fetch(apiUrl)
          if (!response.ok) {
            throw new Error(
              `HTTP error. Status: ${response.status}`
            );
          }
          let weatherData = await response.json();
          setData(weatherData)
          console.log(weatherData);
          setError(null);

        } catch(err) {
          setError(err.message);
          setData(null);
        }
      }
      getData()
    }, [])

    return (
      <>
          <WeatherContext.Provider value={[data, error]}>
              {props.children}
          </WeatherContext.Provider>
      </>
    )
}
    