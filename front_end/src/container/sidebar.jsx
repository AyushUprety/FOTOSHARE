import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";

export const sidebar = (props) => {
  const{user}=props;
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
          <NavLink to="/category/categoryType">
            <div>{item}</div>
          </NavLink>
        );
      })}
    </div>
  );
};
export default sidebar;
