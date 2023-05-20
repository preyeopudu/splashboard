import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchBarProps {
  className?: string;
}
const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div className={` flex flex-row flex-2 w-full ${className}`}>
      <input
        type="text"
        className=" flex w-11/12  border-2 rounded-l-md flex-3 px-8 outline-none "
        placeholder="Search for anything"
      />
      <button
        className="w-3/12  py-3 px-3 rounder-r-md  justify-center flex flex-1"
        style={{
          backgroundColor: "rgba(57, 205, 204, 1)",
          height: "100%",
        }}
      >
        <AiOutlineSearch color="#fff" />
      </button>
    </div>
  );
};

export default SearchBar;
