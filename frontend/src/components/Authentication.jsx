import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Authentication = ({ isSignUp }) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: userName, password: password }),
    };
    const response = await fetch(
      "http://localhost:3000/api/auth/register",
      requestOptions
    );
    const json = await response.json();
    localStorage.setItem("token", json.token);
    navigate("/inventory");
  };
  return (
    <div className="flex justify-center items-center flex-col ">
      {isSignUp && (
        <div className="w-full flex justify-center items-center font-extrabold text-2xl">
          isSignUp
        </div>
      )}
      <div className="Username border-2 p-2 m-4">
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="Password border-2 p-2 m-2">
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
      >
        Submit
      </button>
    </div>
  );
};

export default Authentication;
