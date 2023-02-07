//This Component is the Search Bar and Search Button, used on WidgetPage1
import React, { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { locationData } from "./locationData";
import "./CSS/SearchBar.css";

export const SearchBar = () => {
  const { onSearch, onChange, reset } = useContext(SearchContext);
  const { searchTerm } = useContext(SearchContext);

  return (
    <div className="search-container">
      <div className="search-inner">
        <input
          className="search-box"
          type="text"
          value={searchTerm}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(searchTerm);
            }
          }}
        />
        <button onClick={() => reset()}>
          {<img src="/close.png" alt="close-png" height="20px" width="20px" />}
        </button>
        <button onClick={() => onSearch(searchTerm)}>
          <img src="/search.png" alt="search-icon" height="20px" width="20px" />
        </button>
      </div>
      <div className="dropdown">
        {locationData
          .filter((item) => {
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
              onClick={() => onSearch(item.Name)}
              className="dropdown-row"
              key={item.Name}
            >
              {item.Name}
              <span style={{ fontSize: "1.1rem" }}>
                {" "}
                {" (" + item.Bundesland + ")"}{" "}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};
