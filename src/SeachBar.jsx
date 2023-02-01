//This Component is the Search Bar and Search Button, used on WidgetPage1
import React, {useState, useContext} from "react";
import { SearchContext } from "./SearchContext";
import { locationData } from "./locationData";
import './CSS/SearchBar.css'

export const SearchBar = () => {
    const {onSearch, onChange, reset} = useContext(SearchContext)
    const {searchTerm, setSearchTerm} = useContext(SearchContext)


    const filterSuggestions = (value) => {
      const filteredSuggestions = locationData.filter((item) =>
        item.Name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setSearchTerm(filteredSuggestions);
    };

    return (
        <div className="search-container">
          <div className="search-inner">
            <input className="search-box" type="text" value={searchTerm} 
            onChange={(e)=> {
                setSearchTerm(e.target.value)
                filterSuggestions(e.target.value)
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                onSearch(searchTerm);
              }
            }}
            />
              <button onClick={() => reset()}>X</button>
              <button onClick={() => onSearch(searchTerm)} >
              {<img src="/search.png" alt="search-icon" width="40px" height="40px" />}
              </button>

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
            .slice(0, 4)
            .map((item) => (
              <div
                onClick={()=>onSearch(() => item.Name.toLowerCase())}
                className="dropdown-row"
                key={item.Name}
              >
                {item.Name}{ ' ' + item.Bundesland}
              </div>
            ))}
        </div>
      </div>
    )
}