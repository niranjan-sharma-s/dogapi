import { useState, useEffect } from "react";
import SearchData from "../searchData/SearchData";

const FetchData = (breedName) => {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    const sendData = setTimeout(() => {
      apiCall();
    }, 1000);

    return () => clearTimeout(sendData);
  }, [breedName]);

  const apiCall = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var formdata = new FormData();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch("https://api.thedogapi.com/v1/breeds", requestOptions)
      .then((response) => response.json())
      .then((result) => setDogData(result))
      .catch((error) => console.log("error", error));
  };
  return dogData;
};

export default FetchData;
