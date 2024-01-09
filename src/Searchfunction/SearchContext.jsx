// This Component fetches the API data on search and makes it accessible to all components using createContext
import { useState, useEffect, createContext } from "react";
import { locationData } from "../utils/locationData";
export const SearchContext = createContext();

function SearchProvider(props) {
  const [searchTerm, setSearchTerm] = useState("BERLIN-MITTE");
  const [stationId, setStationId] = useState("10389");
  const [data, setData] = useState([]);
  const API_URL = `https://dwd.api.proxy.bund.dev/v30/stationOverviewExtended?stationIds=${stationId}`;

  //const API_URL = `/api/v30/stationOverviewExtended?stationIds=${stationId}`;
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getStationId = (searchTerm) => {
    const found = locationData.find(
      (city) => city.Name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (found) {
      setStationId(found.ID);
    } else {
      setStationId("ID not found");
    }
  };

  const handleSearch = (searchTerm) => {
    getStationId(searchTerm);
  };

  useEffect(() => {
    async function getApiData() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        let receivedData = await response.json();
        setData(receivedData);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    }
    getApiData();
  }, [API_URL]);

  return (
    <SearchContext.Provider
      value={{
        data,
        stationId,
        searchTerm,
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
