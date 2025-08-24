import React, { useCallback } from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  const onInputChange = useCallback((e) => setSearchTerm(e.target.value), [setSearchTerm]);

  return (
    <div className="flex items-center justify-center mx-auto max-w-md w-full">
      <div className="flex items-center justify-center border border-gray-300 rounded-md px-2 py-1">
        <img src="search.svg" alt="search icon" width={18} height={18} />
        <input
          type="text"
          placeholder="Search for your perfect pick"
          className="w-64 ml-1 p-1 rounded-sm focus:outline-none text-red-950"
          value={searchTerm}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default Search;
