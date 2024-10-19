import React, { useState, useEffect } from "react";
import "./SearchSection.style.scss";

interface SearchSectionProps {
  onSearch: (subjectCode: string) => void;
}

const subjectCodes = ["COMP", "MATH", "PHYS", "CHEM", "BIOL"];

function SearchSection({ onSearch }: SearchSectionProps) {
  const [selectedSubjectCode, setSelectedSubjectCode] = useState(subjectCodes[0]);

  const handleSearch = () => {
    onSearch(selectedSubjectCode);
  };

  return (
    <div className="SearchSection">
      <select
        value={selectedSubjectCode}
        onChange={(e) => setSelectedSubjectCode(e.target.value)}
      >
        {subjectCodes.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchSection;
