import React from "react";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/logowhite.png";
import Data from "../utils/data";
import userDetail from "../utils/data";
import Client from "../sanitysetup";
import { useEffect } from "react";

const Home = () => {
  const [person, setPerson] = useState(""); //sets the data of user who is currently logged in
  const user = localStorage.getItem("User");
  const User = user !== "undefined" ? JSON.parse(user) : localStorage.clear();
  useEffect(() => {
    const query = userDetail(User.googleId);
    Client.fetch(query).then((data) => {
      console.log(data[0]);
      setPerson(data[0]);
      console.log(person);
    });
  },[]);

  return (
    <div className="bg-red-100 flex flex-row">
      <div className="hidden md:flex flex-row">
        <img src={logo} width="130px" />
      </div>
      <div className="md:hidden w-screen h-screen flex flex-row justify-between">
        <HiMenu />
        <Link to="/">
          <img src={logo} width="130px" />
        </Link>
        <Link to={`/userProfile/:${User.googleId}`}>
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src={User.imageUrl}
            width="35px"
          />
        </Link>
      </div>
    </div>
  );
};
export default Home;
