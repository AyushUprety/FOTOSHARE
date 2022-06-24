/* what if I fetch the data in jsx then also it isnot working first confusion was child component cannot be
passed outside of jsx which was cleared after talking to Santosh*/

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./spinner";
import Client from "../sanitysetup";
import Data from "../utils/data";
import { selectedPin } from "../utils/data";
import Pin from './pin'

const Feed = () => {
  const [loader, setLoader] = useState(false);
  const [pin, setPin] = useState("");
  if (loader) return <Spinner message="Items are currently being loaded" />;
  const { categoryid } = useParams();

  useEffect(
    (category) => {
      setLoader(true);
      const query = selectedPin(category);
      Client.fetch(query).then((data) => {
        setPin(data);
        setLoader(false);
      });
    },
    [category]
  );

  return (
    <div>
        <Pin pin={pin}/>
    </div>
  )
};
export default Feed;
