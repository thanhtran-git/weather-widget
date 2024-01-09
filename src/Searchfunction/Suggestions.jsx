function Suggestions({ searchSuggestions, selectedItem, onSearch }) {
  return (
    <div className="dropdown">
      {searchSuggestions.slice(0, 4).map((city, index) => (
        <div
          className={
            selectedItem === index ? "suggestion active" : "suggestion"
          }
          key={city.Name}
          onClick={() => onSearch(city.Name)}
        >
          {city.Name}
          <span style={{ fontSize: "1rem" }}>
            {" "}
            {" (" + city.Bundesland + ")"}{" "}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
