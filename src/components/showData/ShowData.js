import React from "react";
import FetchData from "../fetchData/FetchData";
import "./ShowData.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import Loading from "../loading/Loading";
import { useState, useEffect } from "react";

const ShowData = (breed) => {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const breedCondition = breed.breedName;
  const data = FetchData(breed.breedName);
  //const { breed_group, name, id, height, life_span, image } = data;

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

  const dogInfo = filterData();

  useEffect(() => {
    const lastIndex = dogInfo.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, dogInfo]);

  return (
    <div className="container">
      {!data.length && <Loading />}
      {data.length ? (
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <MdOutlineArrowBackIos />
        </button>
      ): null}
      {filterData().map((dog, dogIndex) => {
        const { id, image, name, height, life_span } = dog;

        if (index === dogIndex) {
          return (
            <>
              <div key={id} className="dog-details">
                <img src={image.url} alt="dog_img" className="image" />
                <div className="dogName">{name}</div>
                <div className="dogHeight">
                  {height.imperial} cm at the withers
                </div>
                <div className="dogLife">
                  {life_span} years average life span
                </div>
              </div>
            </>
          );
        }
      })}
      {data.length ? (
        <button className="next" onClick={() => setIndex(index + 1)}>
          <MdOutlineArrowForwardIos />
        </button> 
      ): null}
    </div>
  );
};

export default ShowData;
