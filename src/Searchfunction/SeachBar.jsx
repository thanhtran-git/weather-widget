//This Component contains the Search Bar and Buttons, used on WidgetPage1
import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import { locationData } from "../utils/locationData";
import "../CSS/SearchBar.css";
import SearchInput from "./SearchInput";
import Suggestions from "./Suggestions";

function SearchBar() {
  const { handleSearch, handleChange, searchTerm, setSearchTerm } =
    useContext(SearchContext);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [searchSuggestions, setsearchSuggestions] = useState([]);
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  const handleClose = () => {
    setSearchTerm("");
    setsearchSuggestions([]);
    setSelectedItem(-1);
  };

  const handleKeyDown = (event) => {
    const isArrowUp = event.key === "ArrowUp";
    const isArrowDown = event.key === "ArrowDown";
    const isEnter = event.key === "Enter";

    if (selectedItem < searchSuggestions.length) {
      if (isArrowUp && selectedItem > 0) {
        setSelectedItem((prevSelectedItem) => prevSelectedItem - 1);
      } else if (isArrowDown && selectedItem < searchSuggestions.length - 1) {
        setSelectedItem((prevSelectedItem) => prevSelectedItem + 1);
      } else if (isEnter) {
        event.preventDefault();
        setIsEnterPressed(true);
        if (selectedItem >= 0) {
          setSearchTerm(searchSuggestions[selectedItem].Name);
        }
      } else {
        setSelectedItem(-1);
        setIsEnterPressed(false);
      }
    }
  };

  //Trigger the search when the Enter Key is pressed
  useEffect(() => {
    if (isEnterPressed && searchTerm !== "") {
      handleSearch(searchTerm);
      setIsEnterPressed(false); // Reset the flag after triggering the search
    }
  }, [searchTerm, isEnterPressed, handleSearch]);

  useEffect(() => {
    if (searchTerm !== "") {
      const newFilterData = locationData.filter((city) => {
        const search = searchTerm.toLowerCase();
        const cityName = city.Name.toLowerCase();
        return search && cityName.startsWith(search) && cityName !== search;
      });
      setsearchSuggestions(newFilterData);
    } else {
      setsearchSuggestions([]);
      setSelectedItem(-1);
    }
  }, [searchTerm]);

  return (
    <section className="search-section">
      <SearchInput
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClose={handleClose}
        onSearch={() => handleSearch()}
      />

      <Suggestions
        searchSuggestions={searchSuggestions}
        selectedItem={selectedItem}
        onSearch={handleSearch}
      />
    </section>
  );
}

export default SearchBar;
