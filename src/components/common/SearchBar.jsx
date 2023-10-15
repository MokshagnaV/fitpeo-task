import { forwardRef } from "react";

const SearchBar = forwardRef(function SearchBar({ onChange, className }, ref) {
  return (
    <div className="relative max-md:w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 absolute top-[20%] left-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        className={`pl-8 px-4 py-2 rounded-md focus-visible:outline-none focus-visible:outline-blue-900 ${className}`}
        type="text"
        placeholder="Search"
        ref={ref}
        onChange={onChange}
      />
    </div>
  );
});

export default SearchBar;
