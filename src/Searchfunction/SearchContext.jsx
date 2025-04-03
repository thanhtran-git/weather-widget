import { useState, useEffect, createContext, useCallback } from "react";
import { locationData } from "../utils/locationData";
export const SearchContext = createContext();

function SearchProvider(props) {
  const [searchTerm, setSearchTerm] = useState("BERLIN-MITTE");
  const [stationId, setStationId] = useState("10389");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const SERVER_URL =
    process.env.NODE_ENV === "production"
      ? "/api/weather"
      : "http://localhost:3001/api/weather";

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (searchTerm) => {
    getStationId(searchTerm);
  };

  function getStationId(searchTerm) {
    const found = locationData.find(
      (city) => city.Name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (found) {
      setStationId(found.ID);
    } else {
      setStationId("ID not found");
      setError("Location not found");
    }
  }

  const getApiData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    const startTime = Date.now();
    const minLoadingTime = 1000; // 1.5 seconds in milliseconds

    try {
      const response = await fetch(`${SERVER_URL}?stationId=${stationId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
      const receivedData = await response.json();
    
      const elapsedTime = Date.now() - startTime;
      
      if (elapsedTime < minLoadingTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsedTime));
      }
      
      setData(receivedData);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setError("Failed to fetch weather data");
    } finally {
      setIsLoading(false);
    }
  }, [SERVER_URL, stationId]);

  useEffect(() => {
    if (stationId !== "ID not found") {
      getApiData();
    }
  }, [stationId, getApiData]);

  return (
    <SearchContext.Provider
      value={{
        data,
        stationId,
        searchTerm,
        isLoading,
        error,
        setSearchTerm,
        handleChange,
        handleSearch,
        getStationId,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
