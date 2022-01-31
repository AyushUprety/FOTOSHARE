import React from "react";
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';
import logo from '../assets/logowhite.png';


const Home = ()=>{
    const user = localStorage.getItem('User');
    const User = user!=='undefined'?JSON.parse(user):localStorage.clear();
    return (
    <div className='bg-red-100 flex flex-row'>
      <div className="hidden md:flex flex-row">
        <img src={logo} width="130px"/>
      </div>
      <div className="md:hidden w-screen h-screen flex flex-row justify-between">
        <HiMenu/>
        <Link to='/'>
          <img src={logo} width="130px"/>
        </Link>
        <Link to={`/userProfile/:${User.googleId}`}>
          <img src={User.imageUrl}/>
        </Link>
      </div>
    </div>
      )
}
export default Home;