import React from "react";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

export const Search = () => {
  return (
    <div>
      <form>
        <IoMdSearch fontSize={21} className="ml-1" />
        <input type="search" />
      </form>
      <IoMdAdd className="bg-black text-white" />
    </div>
  );
};
export default Search;
