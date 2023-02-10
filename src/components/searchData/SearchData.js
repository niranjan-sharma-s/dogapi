import React from "react";
import { useState, useEffect } from "react";
import FetchData from "../fetchData/FetchData";
import ShowData from "../showData/ShowData"

import "./SearchData.css"
import "../SearchData/SearchData.css"

import "test.css"

export const SearchData = () => {
  const [breed, setBreed] = useState("");

  return (
    <div className="searchBar" style={{"background-color":"red"}}>
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

//export default SearchData;
