import React, { useState } from "react";

const SearchProduct: React.FC = () => {
  const [searchText, setSearchText] = useState<string | null>(null);
  console.log(searchText);
  return (
    <form className="w-full">
      <label className={`border px-6 py-2 rounded-full flex items-center gap-2  focus-within:border-primary-color focus-within:border-opacity-50`}>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="w-full focus:outline-none"
          placeholder="Search by name"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </form>
  );
};

export default SearchProduct;
