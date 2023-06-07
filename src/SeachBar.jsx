//This Component contains the Search Bar and Buttons, used on WidgetPage1
import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import { locationData } from "./locationData";
import "./CSS/SearchBar.css";

export const SearchBar = () => {
  const { handleSearch, handleChange, searchTerm, setSearchTerm } =
    useContext(SearchContext);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [searchSuggestion, setsearchSuggestion] = useState([]);

  const handleClose = () => {
    setSearchTerm("");
    setsearchSuggestion([]);
    setSelectedItem(-1);
  };

  const handleKeyDown = (e) => {
    if (selectedItem < searchSuggestion.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedItem < searchSuggestion.length - 1
      ) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter") {
        if (selectedItem >= 0) {
          setSearchTerm(searchSuggestion[selectedItem].Name);
          handleSearch(searchSuggestion[selectedItem].Name);
        } else if (selectedItem === -1 && searchTerm) {
          handleSearch(searchTerm);
        }
      } else {
        setSelectedItem(-1);
      }
    }
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const newFilterData = locationData.filter((city) => {
        const search = searchTerm.toLowerCase();
        const cityName = city.Name.toLowerCase();
        return search && cityName.startsWith(search) && cityName !== search;
      });
      setsearchSuggestion(newFilterData);
    } else {
      setsearchSuggestion([]);
      setSelectedItem(-1);
    }
  }, [searchTerm]);

  return (
    <section className="search-section">
      <div className="search-input-container">
        <input
          autoComplete="none"
          placeholder="Ort eingeben..."
          className="search-box"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => handleClose()}>
          {
            <img
              className="close-btn"
              src="/close.png"
              alt="close-png"
              height="18px"
              width="18px"
            />
          }
        </button>
        <button onClick={() => handleSearch(searchTerm)}>
          <img
            className="search-btn"
            src="/search.png"
            alt="search-icon"
            height="20px"
            width="20px"
          />
        </button>
      </div>
      <div className="dropdown">
        {searchSuggestion.slice(0, 4).map((city, index) => {
          return (
            <div
              className={
                selectedItem === index ? "suggestion active" : "suggestion"
              }
              key={city.Name}
              onClick={() => setSearchTerm(city.Name)}
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
    </section>
  );
};
