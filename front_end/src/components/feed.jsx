/* what if I fetch the data in jsx then also it isnot working first confusion was child component cannot be
passed outside of jsx which was cleared after talking to Santosh*/

import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from './spinner'


const Feed = () => {
  const[loader,setLoader]=useState(true);
  if(loader) return <Spinner message='Items are currently being loaded'/>
};
export default Feed;
