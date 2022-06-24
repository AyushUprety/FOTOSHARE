/* what if I fetch the data in jsx then also it isnot working first confusion was child component cannot be
passed outside of jsx which was cleared after talking to Santosh*/

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./spinner";
import Client from "../sanitysetup";
import { feedQuery } from "../utils/data";
import { pinDetailQuery } from "../utils/data";
import Pin from './pin'

const Feed = () => {
  const [loader, setLoader] = useState(false);
  const [pin, setPin] = useState("");
  
  const categoryId = useParams();
  console.log(categoryId)

  useEffect(
    () => {
      setLoader(true);
      if(categoryId){
        const query = pinDetailQuery(categoryId);
        Client.fetch(query).then((data) => {
          setPin(data);
          setLoader(false);
        });
      }
      else{
        Client.fetch(feedQuery)
        .then(
            ()=>{
                setPin(data)
            }
        )
      }
     
    },
    [categoryId]
  );
  if (loader) return <Spinner message="Items are currently being loaded" />;

  return (
    <div>
        <Pin pin={pin}/>
    </div>
  )
};
export default Feed;
