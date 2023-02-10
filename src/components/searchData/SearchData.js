import React from "react";
import { useState, useEffect } from "react";
import FetchData from "../fetchData/FetchData";
import ShowData from "../showData/ShowData"

import "./SearchData.css"




 const SearchData = () => {
  const [breed, setBreed] = useState("");

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search Breed..."
        onChange={(e) => setBreed(e.target.value)}
        className="input-field"
      />
      {breed && <ShowData breedName={breed} />}
    </div>
  );
};

export default SearchData;
