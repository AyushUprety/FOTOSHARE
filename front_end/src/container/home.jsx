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
  const [toggle,setToggle] = useState(false);
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
        <h1>FOTOSHARE</h1>
      </div>
      <div className="md:hidden w-screen h-screen flex flex-row justify-between">
        <HiMenu onClick={setToggle(true)}/>
        <Link to="/">
          <img src={logo} width="130px" />
        </Link>
        <Link to={`/userProfile/:${person._id}`}>
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src={person.image}
            width="35px"
          />
        </Link>
        {toggle}
      </div>
    </div>
  );
};
export default Home;
