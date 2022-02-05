import React from "react";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/logowhite.png";
import Data from "../utils/data";
import userDetail from "../utils/data";
import Client from "../sanitysetup";
import { useEffect,useRef } from "react";
import Sidebar from "../container/sidebar";
import Pin from "../container/pin";
import UserProfile from "../components/userProfile";

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
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
    <div className="hidden md:flex h-screen flex-initial">
      <Sidebar user={person && person} />
    </div>
    <div className="flex md:hidden flex-row">
      <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
        <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggle(true)} />
        <Link to="/">
          <img src={logo} alt="logo" className="w-28" />
        </Link>
        <Link to={`userProfile/${person._id}`}>
          <img src={person.image} alt="user-pic" className="w-9 h-9 rounded-full " />
        </Link>
      </div>
      {toggle && (
      <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
        <div className="absolute w-full flex justify-end items-center p-2">
          <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggle(false)} />
        </div>
        <Sidebar closeToggle={setToggle} user={person && person} />
      </div>
      )}
    </div>
    <div className="pb-2 flex-1 h-screen overflow-y-scroll" >
      <Routes>
        <Route path="/userProfile/:userId" element={<UserProfile />} />
        <Route path="/*" element={<Pin user={person && person} />} />
      </Routes>
    </div>
  </div>
);
};
export default Home;
