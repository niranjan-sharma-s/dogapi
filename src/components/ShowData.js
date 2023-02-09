import React from "react";
import FetchData from "./FetchData";

const ShowData = (breed) => {
  const breedCondition = breed.breedName;
  const data = FetchData(breed.breedName);
  const { breed_group, name, id, height, life_span, image } = data;

  const filterData = (breedCondition) => {
    if (breedCondition != "") {
      return data.filter((dog) => {
        if (dog.breed_group)
          return (
            dog.breed_group.toLowerCase().includes(breed.breedName.toLowerCase())
          );
      });
    }
    return data;
  };

  return (
    <div>
      {filterData() &&
        filterData().map((dog) => {
          return (
            <div key={dog.id}>
              <img src={dog.image.url} alt="dog_img" />
              <div>Name: {dog.name}</div>
              <div>Height: {dog.height.imperial}</div>
              <div>Life span: {dog.life_span}</div>
              <div> breed : {dog.breed_group}</div>
            </div>
          );
        })}
    </div>
  );
};

export default ShowData;
