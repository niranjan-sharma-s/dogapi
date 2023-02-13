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
  const [index, setIndex] = useState(0);
  const data = FetchData(breed.breedName);

  const filterData = (breedCondition) => {
    if (breedCondition !== "") {
      return data.filter((dog) => {
        if (dog.breed_group)
        {  return dog.breed_group
            .toLowerCase()
            .includes(breed.breedName.toLowerCase());}
            return []
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
    <div className="container" data-testid="container">
      {!data.length && <Loading />}
      {data.length ? (
        <button className="prev" onClick={() => setIndex(index - 1)} data-testid="button">
          <MdOutlineArrowBackIos />
        </button>
      ) : null}
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
       return dog})}
      {data.length ? (
        <button className="next" onClick={() => setIndex(index + 1)} data-testid="button">
          <MdOutlineArrowForwardIos />
        </button>
      ) : null}
    </div>
  );
};

export default ShowData;
