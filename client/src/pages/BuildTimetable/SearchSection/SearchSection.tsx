import React, { useState, useEffect } from "react";
import "./SearchSection.style.scss";

interface SearchSectionProps {
  onSearch: (subjectCode: string) => void;
}

function SearchSection({ onSearch }: SearchSectionProps) {
  const [inputValue, setInputValue] = useState("");
  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div className="SearchSection">
      <input
        type="text"
        placeholder="Enter subject code"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchSection;
