const SearchInput = ({ value, onChange, onKeyDown, onClose }) => (
  <div className="search-input-container">
    <input
      autoComplete="off"
      spellCheck="false"
      placeholder="Ort eingeben..."
      className="search-box"
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
    {value && (
      <button onClick={onClose} className="close-button-inside">
        <img
          className="close-btn-icon"
          src={`${process.env.PUBLIC_URL}/miniIcons/close.png`}
          alt="close-icon"
        />
      </button>
    )}
  </div>
);

export default SearchInput;
