import React from "react";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

export const navbar = () => {
  return (
    <div className="flex flex-row w-full items-center p-3">
      <form className="flex flex-row w-full h-full pr-2">
        <IoMdSearch fontSize={21} className="ml-1 bg-white h-6" />

        <input className="w-full" type="search" />
      </form>
      <IoMdAdd className="w-6 h-full bg-black text-white" />
    </div>
  );
};
export default navbar;
