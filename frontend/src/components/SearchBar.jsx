import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <input
          placeholder="Enter the name of the restraunt"
          className="p-4 m-4 border-solid border-2 border-gray-300 rounded-lg h-10 w-96"
          // value={searchText}
          // onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="px-4 bg-green-500 text-white rounded-lg h-10 m-4"
          onClick={() => {}}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
