import React from 'react';

const Search = () => {
  return (
    <div className="flex items-center justify-center mx-auto max-w-md w-full">
      <img src="search.svg" alt="search icon" width={18} height={18} />
      <input
        type="text"
        placeholder="Search for your perfect pick"
        className="w-64 ml-1 p-1 rounded-sm focus:outline-none text-red-950"
      />
    </div>
  );
};

export default Search;
