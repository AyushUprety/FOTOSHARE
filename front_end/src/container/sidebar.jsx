import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";

export const sidebar = (props) => {
  const Active = "text-indigo-700 hover:text-gray-600 ";
  const notActive = "text-gray-500 hover:text-cyan-500";
  const { user } = props;
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
    <div className="flex flex-col p-4">
      <h1>FotoShare</h1>
      <div className="flex flex-row p-2">
        <Link to="/">
          <RiHomeFill />
          <p>Home</p>
        </Link>
      </div>
      <p>Discover Categories</p>
      {Categories.map((item) => {
        return (
          <NavLink
            key={item.name}
            className={({ isActive }) => (isActive ? Active : notActive)}
            to={`/category/${item}`}
          >
            {item}
          </NavLink>
        );
      })}
    </div>
  );
};
export default sidebar;
