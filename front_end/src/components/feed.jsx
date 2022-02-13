/* what if I fetch the data in jsx then also it isnot working first confusion was child component cannot be
passed outside of jsx which was cleared after talking to Santosh*/

import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { allPin } from "../utils/data";
import Client from "../sanitysetup";
import Pin from "./pin";

const Feed = () => {
  const query = allPin();
  const pinArray = [];
  Client.fetch(query)
    .then((pins) =>
      pins.map((pin) => {
        pinArray.push(pin);
      })
    )
    .catch((e) => {
      console.log("unable to fetch data");
    });
    console.log(pinArray);
  return <div>
    <Pin pinList={pinArray}/>
  </div>;
};
export default Feed;
