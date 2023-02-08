import { useState, useEffect } from "react";

const FetchData = () => {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var formdata = new FormData();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch("https://api.thedogapi.com/v1/breeds?limit=100", requestOptions)
      .then((response) => response.json())
      .then((result) => setDogData(result))
      .catch((error) => console.log("error", error));
  };
  return dogData;
};

export default FetchData;
