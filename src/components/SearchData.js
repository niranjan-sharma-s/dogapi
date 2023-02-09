import React from "react";
import { useState, useEffect } from "react";
import FetchData from "./FetchData";
import ShowData from "./ShowData";


const SearchData = () => {
   const [breed, setBreed] = useState("");

  // useEffect(() => {
  //   const sendData = setTimeout(() => {}, 1000);

  //   return () => clearTimeout(sendData);
  // }, [breed]);

  return (
    <div>
       <input
        type="text"
        placeholder="Search Breed..."
        onChange={(e) => setBreed(e.target.value)}
        />
   {breed && <ShowData breedName = {breed}/>}
    </div>
  );
};

export default SearchData;
