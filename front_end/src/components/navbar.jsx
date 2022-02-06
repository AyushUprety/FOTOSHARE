import React from "react";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

export const navbar = (props) => {
  const {user}=props;
  return (
    <div className="flex flex-row w-full items-center p-3">
      <form className="flex flex-row w-full h-full pr-3">
        <IoMdSearch fontSize={21} className="ml-1 bg-white h-6" />

        <input className="w-full focus:outline-none" type="search" />
      </form>
      <img className="hidden md:block flex rounded-full h-8 px-2" src={user.image}/>

      <IoMdAdd className="w-6 h-full bg-black text-white" />
    </div>
  );
};
export default navbar;
