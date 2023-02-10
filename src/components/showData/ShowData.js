import React from "react";
import FetchData from "../fetchData/FetchData";
import "./ShowData.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import Loading from "../loading/Loading";
import { useState } from "react";

const ShowData = (breed) => {
  const [loading, setLoading] = useState(true);
  const breedCondition = breed.breedName;
  const data = FetchData(breed.breedName);
  const { breed_group, name, id, height, life_span, image } = data;

  const filterData = (breedCondition) => {
    if (breedCondition != "") {
      return data.filter((dog) => {
        if (dog.breed_group)
          return dog.breed_group
            .toLowerCase()
            .includes(breed.breedName.toLowerCase());
      });
    }
  };

  return (
    <div>
      {!data.length && <Loading />}
      <MdOutlineArrowBackIos />
      {filterData().map((dog) => {
        return (
          <>
            <div key={dog.id} className="dog-details">
              <img src={dog.image.url} alt="dog_img" className="image" />
              <div className="dogName">{dog.name}</div>
              <div className="dogHeight">
                {dog.height.imperial} cm at the withers
              </div>
              <div className="dogLife">
                {dog.life_span} years average life span
              </div>
            </div>
          </>
        );
      })}
      <MdOutlineArrowForwardIos />
    </div>
  );
};

export default ShowData;
