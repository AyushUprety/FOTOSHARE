import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const Sidebar = (props) => {
  const Active = "text-indigo-700 hover:text-gray-600 ";
  const notActive = "text-gray-500 hover:text-cyan-500";
  const { user } = props;
  const { setToggle } = props;
  const Categories = [
    "Cats",
    "Dogs",
    "Websites",
    "Cars",
    "Photo",
    "Nature",
    "Travel",
    "Art",
    "Quotes",
  ];
  return (
    <div className="flex flex-col p-4 h-screen">
      <h1>FotoShare</h1>
      <Link className="flex flex-row py-2 items-center" to="/">
        <RiHomeFill />
        <p className="pl-3">Home</p>
      </Link>

      <p className="pb-3">Discover Categories</p>
      <div className="flex flex-col gap-y-5">
        {Categories.map((item) => {
          return (
            <NavLink
              key={item.name}
              className={({ isActive }) => (isActive ? Active : notActive)} 
              to={`/category/${item}`}
              onClick={() => setToggle(true)}
              Navigate=""
            >
              {item}
              {console.log(item)}
            </NavLink>
          );
        })}
        <Link to={`/userProfile/${user._id}`}>
          <img className="rounded-full w-10 h-10" src={user.image} />
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
