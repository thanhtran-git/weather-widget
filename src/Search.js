import { useState, useEffect, createContext } from "react";
import {locationData} from './locationData.js'

export const SearchContext = createContext()

export const SearchProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("Berlin-Tempelhof");
  const [stationId, setStationId] = useState('10384');
  const [data, setData] = useState([])
  const apiUrl = `https://dwd.api.proxy.bund.dev/v30/stationOverviewExtended?stationIds=${stationId}`;

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getStationId = (cityName) => {
    const found = locationData.find((item) => item.Name.toLowerCase() === searchTerm.toLowerCase());
    if (found) {
      setStationId(found.ID)
    } else {
      setStationId('ID not found');
    }
  };

  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch(apiUrl)
      let receivedData = await response.json();
      setData(receivedData)
    }
    getApiData()

  }, [apiUrl])

      
  const onSearch = (searchTerm) => {
    getStationId(searchTerm)
    setSearchTerm(searchTerm)
  }

  return (
    <div className="App">
      <SearchContext.Provider value={{data, stationId}}>
        {props.children}
      </SearchContext.Provider>

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={searchTerm} 
          onChange={onChange} 
          onKeyDown={e => {
            if (e.key === 'Enter') {
              onSearch(searchTerm);
            }
          }}
          />

          <button onClick={() => onSearch(searchTerm)}> Search </button>
        </div>
        <div className="dropdown">
          {locationData.filter((item) => {
              const search = searchTerm.toLowerCase();
              const cityName = item.Name.toLowerCase();

              return (
                search &&
                cityName.startsWith(searchTerm) &&
                cityName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={()=>onSearch(item.Name)}
                className="dropdown-row"
                key={item.Name}
              >
                {item.Name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}


