//This Component is the Search Bar and Search Button, used on WidgetPage1
import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import { locationData } from "./locationData";
import "./CSS/SearchBar.css";

export const SearchBar = () => {
  const {
    handleSearch,
    handleChange,
    searchTerm,
    setSearchTerm,
    getStationId,
    stationId,
  } = useContext(SearchContext);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [searchData, setSearchData] = useState([]);

  const handleClose = () => {
    setSearchTerm("");
    setSearchData([]);
    setSelectedItem(-1);
  };

  const handleKeyDown = (e) => {
    if (selectedItem < searchData.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedItem < searchData.length - 1
      ) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        const chosenItem = searchData[selectedItem].Name;
        setSearchTerm(chosenItem);
        console.log(chosenItem);
        handleSearch(searchTerm);
      } else {
        setSelectedItem(-1);
      }
    }
  };

  const handleResultClick = (city) => {
    setSearchTerm(searchData[selectedItem].Name);
    setSearchData([]);
    setSelectedItem(-1);
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const newFilterData = locationData.filter((city) => {
        const search = searchTerm.toLowerCase();
        const cityName = city.Name.toLowerCase();
        return (
          search && cityName.startsWith(search) && cityName !== search

          // item.Name.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
          // item.Name.toLowerCase() !== searchTerm
        );
      });
      setSearchData(newFilterData);
    } else {
      setSearchData([]);
      setSelectedItem(-1);
    }
  }, [searchTerm]);

  return (
    <div className="search-container">
      <div className="search-inner">
        <input
          className="search-box"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => handleClose()}>
          {<img src="/close.png" alt="close-png" height="20px" width="20px" />}
        </button>
        <button onClick={() => handleSearch(searchTerm)}>
          <img src="/search.png" alt="search-icon" height="20px" width="20px" />
        </button>
      </div>
      <div className="dropdown">
        {searchData.slice(0, 4).map((city, index) => {
          return (
            <div
              className={
                selectedItem === index
                  ? "search_suggestion_line active"
                  : "search_suggestion_line"
              }
              key={index}
              onClick={() => handleSearch(searchData[selectedItem].Name)}
            >
              {city.Name}
              <span style={{ fontSize: "1rem" }}>
                {" "}
                {" (" + city.Bundesland + ")"}{" "}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
