import React, { useState, useEffect } from "react";
import "./SearchSection.style.scss";

interface SearchSectionProps {
  onSearch: (subjectCode: string, date: string, time: string) => void;
}

function SearchSection({ onSearch }: SearchSectionProps) {
  const [inputValue, setInputValue] = useState("");
  const [dateInp, setDateInp] = useState("");
  const [timeInp, setTimeInp] = useState("");
  const handleSearch = () => {
    onSearch(inputValue, dateInp, timeInp);
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
      <input
        type="text"
        placeholder="Enter date"
        value={dateInp}
        onChange={(e) => setDateInp(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter time"
        value={timeInp}
        onChange={(e) => setTimeInp(e.target.value)}
      />
    </div>
  );
}

export default SearchSection;
