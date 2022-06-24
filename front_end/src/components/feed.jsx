/* what if I fetch the data in jsx then also it isnot working first confusion was child component cannot be
passed outside of jsx which was cleared after talking to Santosh*/

import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from './spinner'
import Client from '../sanitysetup'
import Data from '../utils/data'
import { useParams } from "react-router-dom";
import { selectedPin } from "../utils/data";


const Feed = () => {
  const[loader,setLoader]=useState(false);
  if(loader) return <Spinner message='Items are currently being loaded'/>
  const category = useParams()

  useEffect(
    const query = 
  ,[category])

  
  return(
    <div>Feed</div>
  )
};
export default Feed;
