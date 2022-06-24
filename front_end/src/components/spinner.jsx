import React from "react";
import {TailSpin} from "react-loader-spinner";

const Spinner = (props) => {
  return (
    <div className="loader flex flex-col justify-center items-center w-full h-full">
            <TailSpin
                type="Circles"
                color="#dc1c2c"
                height={50}
                width={100}
                //timeout={1000} //3 secs
            />
        <p>{props.message}</p>
         
    </div>
  );
};
export default Spinner;
