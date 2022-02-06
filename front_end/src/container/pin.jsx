import React from 'react';
import Navbar from '../components/navbar'
import Search from '../components/search'

 const pin = (props) => {
  const {user}=props;
  return (
    <div>
      <Navbar user={user}/>
      <Search/>
    </div>
  )
};
export default pin;