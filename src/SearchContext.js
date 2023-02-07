// This Component fetches the API data on search and makes it accessible to all components using createContext
import { useState, useEffect, createContext } from "react";
import { locationData } from "./locationData";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("Berlin-Mitte");
  const [stationId, setStationId] = useState("10389");
  const [data, setData] = useState([]);
  const API_URL = `https://dwd.api.proxy.bund.dev/v30/stationOverviewExtended?stationIds=${stationId}`;

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getStationId = () => {
    const found = locationData.find(
      (item) => item.Name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (found) {
      setStationId(found.ID);
    } else {
      setStationId("ID not found");
    }
  };

  const reset = () => {
    setSearchTerm("");
  };

  const onSearch = (searchTerm) => {
    getStationId(searchTerm);
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(API_URL);
      let receivedData = await response.json();
      setData(receivedData);
    };
    getApiData();
  }, [API_URL]);

  return (
    <>
      <SearchContext.Provider
        value={{
          data,
          stationId,
          searchTerm,
          setSearchTerm,
          onChange,
          onSearch,
          getStationId,
          reset,
        }}
      >
        {props.children}
      </SearchContext.Provider>
    </>
  );
};
