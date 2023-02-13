import React from "react";
import { useState } from "react";
import ShowData from "../showData/ShowData";

import "./SearchData.css";

const SearchData = () => {
  const [breed, setBreed] = useState("");

  return (
    <div className="searchBar" data-testid="search">
      
      <input
        type="text"
        placeholder="Search Breed..."
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        className="input-field"
        data-testid="input"
        role="input"
        aria-label="input"
      />
      
      {breed && <ShowData breedName={breed} />}
    </div>
  );
};

export default SearchData;
