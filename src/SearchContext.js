// This Component fetches the API data and makes it accessible to all components using createContext
import { useState, useEffect, createContext } from "react";
import {locationData} from './locationData.js'

export const SearchContext = createContext()

export const SearchProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("Berlin-Tempelhof");
  const [stationId, setStationId] = useState('10384');
  const [data, setData] = useState([])
  const apiUrl = `https://dwd.api.proxy.bund.dev/v30/stationOverviewExtended?stationIds=${stationId}`;

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getStationId = () => {
    const found = locationData.find((item) => item.Name.toLowerCase() === searchTerm.toLowerCase());
    if (found) {
      setStationId(found.ID)
    } else {
      setStationId('ID not found');
    }
  };
        
  const onSearch = (searchTerm) => {
    getStationId(searchTerm)
    setSearchTerm(searchTerm)
  }


  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(apiUrl)
      let receivedData = await response.json();
      setData(receivedData)
    }
    getApiData()

  }, [apiUrl])


  return (
    <div className="App">
      <SearchContext.Provider value={
        {data, stationId, searchTerm, onChange, onSearch, getStationId}}>
          {props.children}
      </SearchContext.Provider>

      
    </div>
  );
}


