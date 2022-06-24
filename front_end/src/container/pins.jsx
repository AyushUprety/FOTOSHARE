import React from 'react';
import Feed from '../components/feed';
import Navbar from '../components/navbar'
import Search from '../components/search'
import {Routes,Route} from 'react-router-dom'

 const Pins = (props) => {
  const {user}=props;
  return (
    <div>
      {/* <Navbar user={user && user}/>
      <Search/>
      <Feed/> */}
    <Routes>
      <Route path='/category/:categoryId' element={<Feed/>}/>
    </Routes>
    </div>
  )
};
export default Pins;