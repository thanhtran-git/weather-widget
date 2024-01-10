const SearchInput = ({ value, onChange, onKeyDown, onClose, onSearch }) => (
  <div className="search-input-container">
    <input
      autoComplete="none"
      spellCheck="false"
      placeholder="Ort eingeben..."
      className="search-box"
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
    {value && (
      <>
        <button onClick={onClose}>
          <img
            className="close-btn"
            src="/close.png"
            alt="close-png"
            height="18px"
            width="18px"
          />
        </button>
        <button onClick={onSearch}>
          <img
            className="search-btn"
            src="/search.png"
            alt="search-icon"
            height="20px"
            width="20px"
          />
        </button>
      </>
    )}
  </div>
);

export default SearchInput;
