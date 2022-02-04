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
import Sidebar from "../container/sidebar";

const Home = () => {
  const [person, setPerson] = useState(""); //sets the data of user who is currently logged in
  const [toggle, setToggle] = useState(false);
  const user = localStorage.getItem("User");
  const User = user !== "undefined" ? JSON.parse(user) : localStorage.clear();
  useEffect(() => {
    // Loop problem was solved using useEffect otherwise state was being called again and again which inturn lead to loading components frequently
    const query = userDetail(User.googleId);
    Client.fetch(query).then((data) => {
      console.log(data[0]);
      setPerson(data[0]);
      console.log(person);
    });
  }, []);

  return (
    <div className="bg-white-50 flex flex-row">
      <div className="hidden md:flex flex-row">
        <h1>FOTOSHARE</h1>
        <Sidebar user={person && person} closeToggle={setToggle} />
      </div>
      <div className="md:hidden w-screen flex flex-row justify-between shadow-lg shadow-indigo-300">
        <HiMenu onClick={() => setToggle(true)} />
        <Link to="/">
          <h1>FOTOSHARE</h1>
        </Link>
        <Link to={`/userProfile/:${person._id}`}>
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src={person.image}
            width="35px"
          />
        </Link>
      </div>

      {toggle && (
        <div className="fixed w-3/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
          <div className="absolute w-full flex justify-end items-center p-2">
            <AiFillCloseCircle
              fontSize={30}
              className="cursor-pointer"
              onClick={() => setToggle(false)}
            />
          </div>
          <Sidebar user={person && person} closeToggle={setToggle} />
        </div>
      )}
    </div>
  );
};
export default Home;
