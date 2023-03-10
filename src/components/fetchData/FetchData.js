import { useState, useEffect } from "react";

const FetchData = (breedName) => {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    debounce()
  }, [breedName]);

  const debounce = () => {
    const sendData = setTimeout(() => {
      apiCall();
    }, 1000);

    return () => clearTimeout(sendData);
  }

  const apiCall = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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
