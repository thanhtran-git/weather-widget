import { useState, useEffect, createContext, useCallback } from "react";
export const SearchContext = createContext();

function SearchProvider(props) {
  const [stationId, setStationId] = useState("10389");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const SERVER_URL =
    process.env.NODE_ENV === "production"
      ? "/api/weather"
      : "http://localhost:3001/api/weather";

  const getApiData = useCallback(async () => {
    if (!stationId || stationId === "ID not found") {
      return;
    }

    setIsLoading(true);
    setError(null);

    const startTime = Date.now();
    const minLoadingTime = 1000;

    try {
      console.log(`Fetching data for stationId: ${stationId}`);
      const response = await fetch(`${SERVER_URL}?stationId=${stationId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
      const receivedData = await response.json();

      const elapsedTime = Date.now() - startTime;

      if (elapsedTime < minLoadingTime) {
        await new Promise((resolve) =>
          setTimeout(resolve, minLoadingTime - elapsedTime)
        );
      }

      setData(receivedData);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setError("Failed to fetch weather data");
      setData([]);
    } finally {
      setIsLoading(false);
    }
  }, [SERVER_URL, stationId]);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  const setStationToFetch = useCallback((id) => {
    setStationId(id);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        data,
        isLoading,
        error,
        stationId,
        setStationToFetch,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
