import React, { useState, useContext, useEffect, useCallback } from "react";
import { SearchContext } from "./SearchContext";
import { locationData } from "../utils/locationData";
import "../CSS/SearchBar.css";
import SearchInput from "./SearchInput";
import Suggestions from "./Suggestions";

function SearchBar() {
  const { setStationToFetch } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState("BERLIN-MITTE");
  const [selectedItem, setSelectedItem] = useState(-1);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchError, setSearchError] = useState(null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchError(null);
  };

  const findStationId = useCallback((term) => {
    const found = locationData.find(
      (city) => city.Name.toLowerCase() === term.toLowerCase()
    );
    if (found) {
      setSearchError(null);
      return found.ID;
    } else {
      setSearchError("Location not found");
      return null;
    }
  }, []);

  const triggerSearch = useCallback(
    (term) => {
      const id = findStationId(term);
      if (id) {
        setStationToFetch(id);
        setSearchSuggestions([]);
        setSelectedItem(-1);
      }
    },
    [findStationId, setStationToFetch]
  );

  const handleClose = () => {
    setSearchTerm("");
    setSearchSuggestions([]);
    setSelectedItem(-1);
    setSearchError(null);
  };

  const handleSuggestionClick = (cityName) => {
    setSearchTerm(cityName);
    triggerSearch(cityName);
  };

  const handleKeyDown = (event) => {
    const isArrowUp = event.key === "ArrowUp";
    const isArrowDown = event.key === "ArrowDown";
    const isEnter = event.key === "Enter";

    if (
      searchSuggestions.length > 0 &&
      selectedItem < searchSuggestions.length
    ) {
      if (isArrowUp && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (isArrowDown && selectedItem < searchSuggestions.length - 1) {
        setSelectedItem((prev) => prev + 1);
      } else if (isEnter) {
        event.preventDefault();
        if (selectedItem >= 0) {
          handleSuggestionClick(searchSuggestions[selectedItem].Name);
        } else {
          triggerSearch(searchTerm);
        }
      } else if (event.key !== "ArrowUp" && event.key !== "ArrowDown") {
        setSelectedItem(-1);
      }
    } else if (isEnter) {
      event.preventDefault();
      triggerSearch(searchTerm);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase();
      const newFilterData = locationData.filter((city) => {
        const cityNameLower = city.Name.toLowerCase();
        return (
          cityNameLower.startsWith(searchLower) && cityNameLower !== searchLower
        );
      });
      setSearchSuggestions(newFilterData);
    } else {
      setSearchSuggestions([]);
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
      />
      {searchError && <div className="search-error-message">{searchError}</div>}

      {searchSuggestions.length > 0 && (
        <Suggestions
          searchSuggestions={searchSuggestions}
          selectedItem={selectedItem}
          onSuggestionClick={handleSuggestionClick}
        />
      )}
    </section>
  );
}

export default SearchBar;
