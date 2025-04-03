function Suggestions({ searchSuggestions, selectedItem, onSuggestionClick }) {
  return (
    <div className="dropdown">
      {searchSuggestions.slice(0, 4).map((city, index) => (
        <div
          className={
            selectedItem === index ? "suggestion active" : "suggestion"
          }
          key={city.Name}
          onClick={() => onSuggestionClick(city.Name)}
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
