//This Component is the Search Bar and Search Button, used on WidgetPage1
import React, {useContext} from "react";
import { SearchContext } from "./SearchContext";
import { locationData } from "./locationData";

export const SearchBar = () => {
    const {onSearch, onChange} = useContext(SearchContext)
    const {searchTerm} = useContext(SearchContext)

    return (
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

          <button onClick={() => onSearch(searchTerm)}> Suche </button>
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
                onClick={()=>onSearch(item.Name.toLowerCase())}
                className="dropdown-row"
                key={item.Name}
              >
                {item.Name}
              </div>
            ))}
        </div>
      </div>

    )
}