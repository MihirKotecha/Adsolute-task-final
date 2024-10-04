import React, { useEffect, useState } from "react";
import InventoryCard from "../components/InventoryCard";
import SearchBar from "../components/SearchBar";

const InvetoryPage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    const authorization = "Bearer " + token;
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    };
    const response = await fetch(
      "http://localhost:3000/api/inventory",
      requestOptions
    );
    const json = await response.json();
    setData(json);
    setIsLoading(false);
    console.log(json);
  };
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <SearchBar />
      </div>
      <div className="flex justify-center items-center">
        {/* {data.map((item) => {
          <InventoryCard />;
        })} */}
        {data}
      </div>
    </div>
  );
};

export default InvetoryPage;
