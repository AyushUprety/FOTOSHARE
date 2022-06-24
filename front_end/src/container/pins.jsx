import React from 'react';
import Feed from '../components/feed';
import Navbar from '../components/navbar'
import Search from '../components/search'

 const Pins = (props) => {
  const {user}=props;
  return (
    <div>
      <Navbar user={user}/>
      <Search/>
      <Feed/>
    </div>
  )
};
export default Pins;